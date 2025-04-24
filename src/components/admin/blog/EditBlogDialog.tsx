
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BlogPost } from "@/hooks/useBlogPosts";
import { BlogPostForm } from "./BlogPostForm";

interface EditBlogDialogProps {
  post: BlogPost | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EditBlogDialog = ({ post, open, onOpenChange }: EditBlogDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Blog Post</DialogTitle>
        </DialogHeader>
        <BlogPostForm initialData={post} mode="edit" onSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};
