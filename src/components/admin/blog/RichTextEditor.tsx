
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Bold,
  Italic,
  Underline,
  ListOrdered,
  Link,
  Image as ImageIcon,
  Heading,
  Upload,
  List,
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const RichTextEditor = ({ value, onChange }: RichTextEditorProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Insert markdown at cursor
  const insertMarkdown = (prefix: string, suffix: string, defaultText: string) => {
    const textarea = document.getElementById("content") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const replacement = selectedText.length > 0 ? selectedText : defaultText;

    const newText =
      textarea.value.substring(0, start) +
      prefix +
      replacement +
      suffix +
      textarea.value.substring(end);

    onChange(newText);

    // Set focus back to textarea after state update
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        start + prefix.length + replacement.length
      );
    }, 0);
  };

  const handleBold = () => insertMarkdown("**", "**", "bold text");
  const handleItalic = () => insertMarkdown("*", "*", "italic text");
  const handleUnderline = () => insertMarkdown("<u>", "</u>", "underlined text");
  const handleHeading = () => insertMarkdown("## ", "", "Heading");
  const handleOrderedList = () => insertMarkdown("\n1. ", "", "List item");
  const handleUnorderedList = () => insertMarkdown("\n- ", "", "List item");

  const handleLink = () => {
    const url = prompt("Enter URL:", "https://");
    if (url) {
      insertMarkdown("[", `](${url})`, "link text");
    }
  };

  // Upload image and insert as markdown into the editor
  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);

    const file = e.target.files?.[0];
    if (!file) return;
    
    setUploading(true);
    
    try {
      // Convert image to base64
      const reader = new FileReader();
      
      reader.onloadend = () => {
        const base64String = reader.result as string;
        
        // Insert the image with proper markdown syntax
        // For uploaded images we need to ensure the syntax is correct
        insertMarkdown("![Image](", ")", base64String);
        
        setUploading(false);
        
        // Reset the input so the same file can be selected again
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      };
      
      reader.onerror = () => {
        setUploading(false);
        setError("Image upload failed. Please try again.");
      };
      
      reader.readAsDataURL(file);
    } catch (err) {
      console.error("Image upload error:", err);
      setUploading(false);
      setError("Image upload failed. Please try again.");
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-1.5 p-1 border rounded-md bg-gray-50">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleBold}
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleItalic}
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleUnderline}
          title="Underline"
        >
          <Underline className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleHeading}
          title="Heading"
        >
          <Heading className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleLink}
          title="Link"
        >
          <Link className="h-4 w-4" />
        </Button>
        
        {/* Image upload button */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleUploadImage}
          aria-label="Upload Image"
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => fileInputRef.current?.click()}
          title="Upload Image"
          disabled={uploading}
        >
          {uploading ? (
            <span className="flex items-center gap-1 text-xs text-gray-600">
              <Upload className="animate-spin mr-1 h-4 w-4" />
              Uploading...
            </span>
          ) : (
            <>
              <ImageIcon className="h-4 w-4" />
              <span className="sr-only">Upload Image</span>
            </>
          )}
        </Button>
        
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleOrderedList}
          title="Ordered List"
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleUnorderedList}
          title="Unordered List"
        >
          <List className="h-4 w-4" />
        </Button>
      </div>
      
      {error && (
        <div className="text-red-600 text-xs px-1">{error}</div>
      )}
      
      <Textarea
        id="content"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={10}
        className="font-mono"
      />
      
      <div className="text-xs text-muted-foreground">
        Tip: Use the toolbar buttons to format your content and insert images.
      </div>
    </div>
  );
};
