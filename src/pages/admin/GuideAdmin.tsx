import React, { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGuides, Guide } from "@/hooks/useGuides";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { RichTextEditor } from "@/components/admin/blog/RichTextEditor";
import { ImageUploadField } from "@/components/admin/guide/ImageUploadField";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { slugify } from "@/utils/slugify";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

const GUIDE_CATEGORIES = [
  "Accounting",
  "Bookkeeping",
  "Taxation",
  "Business Setup",
  "Corporate Services",
  "Financial Planning"
];

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
  const { guides, loading, error } = useGuides();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("guides");
  const [editingGuide, setEditingGuide] = useState<Guide | null>(null);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  
  const [refreshCounter, setRefreshCounter] = useState(0);
  const refreshGuides = () => setRefreshCounter(prevCounter => prevCounter + 1);

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("guideAdminAuthenticated");
    if (!isAuthenticated) {
      navigate("/admin/guide-login");
    }
  }, [navigate]);

  const form = useForm<GuideFormValues>({
    resolver: zodResolver(guideFormSchema),
    defaultValues: {
      Title: "",
      slug: "",
      Image: "",
      Category: "",
      Excerpt: "",
      Content: "",
    },
  });

  const watchTitle = form.watch("Title");
  
  React.useEffect(() => {
    const slug = slugify(watchTitle);
    form.setValue("slug", slug);
  }, [watchTitle, form]);

  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase
        .from("guide_post")
        .delete()
        .eq("id", id);

      if (error) {
        setErrorMessage("Failed to delete guide: " + error.message);
        setShowErrorDialog(true);
        console.error("Error deleting guide:", error);
      } else {
        toast({
          title: "Success",
          description: "Guide deleted successfully",
        });
        refreshGuides();
      }
    } catch (error: any) {
      console.error("Error deleting guide:", error);
      setErrorMessage("An unexpected error occurred: " + error.message);
      setShowErrorDialog(true);
    }
  };

  const onSubmitAdd = async (values: GuideFormValues) => {
    try {
      const { error } = await supabase
        .from("guide_post")
        .insert([{
          Title: values.Title,
          slug: values.slug,
          Image: values.Image,
          Category: values.Category,
          Excerpt: values.Excerpt,
          Content: values.Content,
        }]);

      if (error) {
        setErrorMessage("Failed to add guide: " + error.message);
        setShowErrorDialog(true);
        console.error("Error adding guide:", error);
      } else {
        toast({
          title: "Success",
          description: "Guide added successfully",
        });
        form.reset({
          Title: "",
          slug: "",
          Image: "",
          Category: "",
          Excerpt: "",
          Content: "",
        });
        setActiveTab("guides");
        refreshGuides();
      }
    } catch (error: any) {
      console.error("Error adding guide:", error);
      setErrorMessage("An unexpected error occurred: " + error.message);
      setShowErrorDialog(true);
    }
  };

  const onSubmitEdit = async (values: GuideFormValues) => {
    if (!editingGuide) return;

    try {
      const { error } = await supabase
        .from("guide_post")
        .update({
          Title: values.Title,
          slug: values.slug,
          Image: values.Image,
          Category: values.Category,
          Excerpt: values.Excerpt,
          Content: values.Content,
        })
        .eq("id", editingGuide.id);

      if (error) {
        setErrorMessage("Failed to update guide: " + error.message);
        setShowErrorDialog(true);
        console.error("Error updating guide:", error);
      } else {
        toast({
          title: "Success",
          description: "Guide updated successfully",
        });
        setEditingGuide(null);
        setActiveTab("guides");
        refreshGuides();
      }
    } catch (error: any) {
      console.error("Error updating guide:", error);
      setErrorMessage("An unexpected error occurred: " + error.message);
      setShowErrorDialog(true);
    }
  };

  const handleGuideView = (slug: string) => {
    navigate(`/guide/${slug}`);
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Guide Management</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="guides">All Guides</TabsTrigger>
            <TabsTrigger value="add">Add New Guide</TabsTrigger>
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
                    <div className="flex-1">
                      <h3 className="font-semibold">{guide.Title}</h3>
                      <p className="text-sm text-gray-500">{guide.Category}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleGuideView(guide.slug || "")}
                      >
                        View
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setEditingGuide(guide);
                          setActiveTab("edit");
                          form.reset(guide);
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

          <TabsContent value="add">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmitAdd)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="Title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title<span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Guide title" 
                          {...field} 
                          required 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug<span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="guide-slug" 
                          {...field} 
                          required 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hero Image</FormLabel>
                      <FormControl>
                        <ImageUploadField
                          value={field.value || ""}
                          onChange={field.onChange}
                        />
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
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {GUIDE_CATEGORIES.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
                        <Input placeholder="Brief description" {...field} />
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
                        <RichTextEditor
                          value={field.value || ""}
                          onChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="flex justify-end gap-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setActiveTab("guides")}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Save Guide</Button>
                </div>
              </form>
            </Form>
          </TabsContent>

          <TabsContent value="edit">
            {editingGuide && (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmitEdit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="Title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title<span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Guide title" 
                            {...field} 
                            required 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Slug<span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="guide-slug" 
                            {...field} 
                            required 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="Image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hero Image</FormLabel>
                        <FormControl>
                          <ImageUploadField
                            value={field.value || ""}
                            onChange={field.onChange}
                          />
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
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {GUIDE_CATEGORIES.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
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
                          <Input placeholder="Brief description" {...field} />
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
                          <RichTextEditor
                            value={field.value || ""}
                            onChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end gap-2">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => {
                        setEditingGuide(null);
                        setActiveTab("guides");
                      }}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Update Guide</Button>
                  </div>
                </form>
              </Form>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-red-500">Error</DialogTitle>
            <DialogDescription>
              {errorMessage}
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  This error is likely due to row-level security policies on the guide_post table.
                  Please make sure you are authenticated with the correct permissions to perform this action.
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default GuideAdminPage;
