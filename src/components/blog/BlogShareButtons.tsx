
import { Share, Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { BlogPost } from "@/hooks/useBlogPosts";

interface BlogShareButtonsProps {
  post: BlogPost;
}

export const BlogShareButtons = ({ post }: BlogShareButtonsProps) => {
  const shareData = {
    title: post.title,
    text: post.excerpt || "Check out this article",
    url: window.location.href
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(window.location.href)}`
    }
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2"
          onClick={navigator.share ? handleShare : undefined}
        >
          <Share className="h-4 w-4" />
          <span>Share</span>
        </Button>
      </PopoverTrigger>
      
      {!navigator.share && (
        <PopoverContent className="w-56 p-2" align="end">
          <div className="grid gap-1">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="sm"
                className="flex items-center justify-start gap-2"
                asChild
              >
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </PopoverContent>
      )}
    </Popover>
  );
};
