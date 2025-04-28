
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { BlogPostForm } from "@/components/admin/blog/BlogPostForm";
import { Button } from "@/components/ui/button";
import { useGuides, Guide } from "@/hooks/useGuides";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Trash2 } from "lucide-react";

const GuideAdminPage = () => {
  const navigate = useNavigate();
  const { guides, loading } = useGuides();
  const { toast } = useToast();
  const [editingGuide, setEditingGuide] = useState<Guide | null>(null);

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

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Guide Management</h1>

        <div className="space-y-8">
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
                    onClick={() => setEditingGuide(guide)}
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

          {editingGuide ? (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg p-6 w-full max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">Edit Guide</h2>
                <BlogPostForm
                  initialData={{
                    id: editingGuide.id,
                    title: editingGuide.Title, // Map Title to title
                    slug: editingGuide.slug,
                    heroImage: editingGuide.Image,
                    excerpt: editingGuide.Excerpt,
                    content: editingGuide.Content,
                    categories: editingGuide.Category ? [editingGuide.Category] : [],
                  }}
                  mode="edit"
                  onSuccess={() => {
                    setEditingGuide(null);
                    window.location.reload();
                  }}
                />
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setEditingGuide(null)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export default GuideAdminPage;
