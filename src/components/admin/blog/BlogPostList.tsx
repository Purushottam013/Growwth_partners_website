
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BlogPost, useBlogPosts } from "@/hooks/useBlogPosts";
import { EditBlogDialog } from "./EditBlogDialog";
import { Pencil } from "lucide-react";

export const BlogPostList = () => {
  const { toast } = useToast();
  const { posts, deletePost, dynamicPosts } = useBlogPosts();
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  
  const handleDelete = async (id: number) => {
    try {
      await deletePost(id);
      toast({
        description: "Post deleted successfully",
      });
    } catch (error: any) {
      console.error("Failed to delete post:", error?.message || error);
      toast({
        variant: "destructive",
        description: error?.message || "Failed to delete post",
      });
    }
  };

  if (dynamicPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No blog posts yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {dynamicPosts.map((post) => (
        <div
          key={post.id}
          className="flex items-center justify-between p-4 border rounded-lg"
        >
          <div>
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm text-muted-foreground">
              By {post.author} • {post.publishDate}
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setEditingPost(post)}
            >
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}

      <EditBlogDialog 
        post={editingPost}
        open={!!editingPost}
        onOpenChange={(open) => !open && setEditingPost(null)}
      />
    </div>
  );
};
