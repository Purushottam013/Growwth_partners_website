
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useBlogPosts } from "@/hooks/useBlogPosts";

export const BlogPostList = () => {
  const { toast } = useToast();
  const { posts, deletePost, dynamicPosts } = useBlogPosts();
  
  // Only display posts that can be deleted (dynamic posts)
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
          <Button
            variant="destructive"
            onClick={() => handleDelete(post.id)}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};
