
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const BlogPostList = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("blog-posts") || "[]");
    setPosts(storedPosts);
  }, []);

  const handleDelete = (id: number) => {
    try {
      const updatedPosts = posts.filter(post => post.id !== id);
      localStorage.setItem("blog-posts", JSON.stringify(updatedPosts));
      setPosts(updatedPosts);
      toast({
        description: "Post deleted successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Failed to delete post",
      });
    }
  };

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No blog posts yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
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
