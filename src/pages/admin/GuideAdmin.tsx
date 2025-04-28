
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGuides, Guide } from "@/hooks/useGuides";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define the form schema
const guideFormSchema = z.object({
  Title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  Image: z.string().optional(),
  Category: z.string().optional(),
  Excerpt: z.string().optional(),
  Content: z.string().optional(),
});

type GuideFormValues = z.infer<typeof guideFormSchema>;

const GuideAdminPage = () => {
  const navigate = useNavigate();
  const { guides, loading } = useGuides();
  const { toast } = useToast();
  const [editingGuide, setEditingGuide] = useState<Guide | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const form = useForm<GuideFormValues>({
    defaultValues: {
      Title: "",
      slug: "",
      Image: "",
      Category: "",
      Excerpt: "",
      Content: "",
    },
  });

  const editForm = useForm<GuideFormValues>();

  const handleDelete = async (id: number) => {
    const { error } = await supabase
      .from("Guide_post")
      .delete()
      .eq("id", id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete guide",
      });
    } else {
      toast({
        title: "Success",
        description: "Guide deleted successfully",
      });
      // Refresh the page to update the list
      window.location.reload();
    }
  };

  const onSubmitAdd = async (values: GuideFormValues) => {
    // Ensure the Title field is always present and required
    if (!values.Title) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Title is required",
      });
      return;
    }

    const { error } = await supabase
      .from("Guide_post")
      .insert([values]);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to add guide: " + error.message,
      });
    } else {
      toast({
        title: "Success",
        description: "Guide added successfully",
      });
      setIsAddDialogOpen(false);
      form.reset();
      window.location.reload();
    }
  };

  const onSubmitEdit = async (values: GuideFormValues) => {
    if (!editingGuide) return;

    // Ensure the Title field is always present and required
    if (!values.Title) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Title is required",
      });
      return;
    }

    const { error } = await supabase
      .from("Guide_post")
      .update(values)
      .eq("id", editingGuide.id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update guide: " + error.message,
      });
    } else {
      toast({
        title: "Success",
        description: "Guide updated successfully",
      });
      setEditingGuide(null);
      window.location.reload();
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Guide Management</h1>
          <Button onClick={() => setIsAddDialogOpen(true)}>
            <Plus className="mr-2" />
            Add New Guide
          </Button>
        </div>

        <Tabs defaultValue="guides">
          <TabsList>
            <TabsTrigger value="guides">All Guides</TabsTrigger>
          </TabsList>
          
          <TabsContent value="guides">
            {loading ? (
              <div className="text-center py-8">Loading guides...</div>
            ) : guides.length > 0 ? (
              <div className="grid gap-4">
                {guides.map((guide) => (
                  <div
                    key={guide.id}
                    className="p-4 border rounded-lg flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-semibold">{guide.Title}</h3>
                      <p className="text-sm text-gray-500">{guide.Category}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setEditingGuide(guide);
                          editForm.reset(guide);
                        }}
                      >
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(guide.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                No guides found. Add a new guide to get started.
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Add Guide Dialog */}
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Guide</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmitAdd)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="Title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Guide title" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input placeholder="guide-slug" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com/image.jpg" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Input placeholder="Category" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Excerpt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Excerpt</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Brief description" {...field} rows={3} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Full content" {...field} rows={8} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="flex justify-end gap-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsAddDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Save Guide</Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

        {/* Edit Guide Dialog */}
        {editingGuide && (
          <Dialog
            open={!!editingGuide}
            onOpenChange={(open) => {
              if (!open) setEditingGuide(null);
            }}
          >
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Edit Guide</DialogTitle>
              </DialogHeader>
              <Form {...editForm}>
                <form onSubmit={editForm.handleSubmit(onSubmitEdit)} className="space-y-4">
                  <FormField
                    control={editForm.control}
                    name="Title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Guide title" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={editForm.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Slug</FormLabel>
                        <FormControl>
                          <Input placeholder="guide-slug" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={editForm.control}
                    name="Image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://example.com/image.jpg" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={editForm.control}
                    name="Category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Input placeholder="Category" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={editForm.control}
                    name="Excerpt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Excerpt</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Brief description" {...field} rows={3} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={editForm.control}
                    name="Content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Full content" {...field} rows={8} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end gap-2">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setEditingGuide(null)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Update Guide</Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </Layout>
  );
};

export default GuideAdminPage;
