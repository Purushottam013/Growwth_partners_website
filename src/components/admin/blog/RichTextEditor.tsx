
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
  AlignLeft,
  AlignCenter,
  AlignRight,
  Quote,
  Code,
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
  const handleHeading1 = () => insertMarkdown("# ", "", "Heading 1");
  const handleHeading2 = () => insertMarkdown("## ", "", "Heading 2");
  const handleHeading3 = () => insertMarkdown("### ", "", "Heading 3");
  const handleOrderedList = () => insertMarkdown("\n1. ", "", "List item");
  const handleUnorderedList = () => insertMarkdown("\n- ", "", "List item");
  const handleQuote = () => insertMarkdown("> ", "", "Blockquote text");
  const handleCode = () => insertMarkdown("```\n", "\n```", "code block");
  const handleInlineCode = () => insertMarkdown("`", "`", "inline code");
  const handleCenterAlign = () => insertMarkdown("<div align='center'>\n", "\n</div>", "centered text");
  const handleRightAlign = () => insertMarkdown("<div align='right'>\n", "\n</div>", "right aligned text");

  const handleLink = () => {
    const url = prompt("Enter URL:", "https://");
    if (url) {
      insertMarkdown("[", `](${url})`, "link text");
    }
  };

  // Upload image and insert as HTML img tag instead of markdown
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
        
        // Insert as direct HTML img tag with proper styling classes
        // This approach ensures the image is rendered directly as HTML
        const imgTag = `<img src="${base64String}" alt="Uploaded image" class="mx-auto rounded-lg shadow-md max-h-[500px] w-auto" />`;
        
        const textarea = document.getElementById("content") as HTMLTextAreaElement;
        if (textarea) {
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          
          const newText = textarea.value.substring(0, start) + 
                          imgTag + 
                          textarea.value.substring(end);
          
          onChange(newText);
          
          // Set focus back to textarea after update
          setTimeout(() => {
            textarea.focus();
            textarea.selectionStart = start + imgTag.length;
            textarea.selectionEnd = start + imgTag.length;
          }, 0);
        }
        
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
        {/* Text Formatting */}
        <div className="flex items-center gap-1 border-r pr-1">
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
        </div>

        {/* Headings */}
        <div className="flex items-center gap-1 border-r pr-1">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleHeading1}
            title="Heading 1"
          >
            H1
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleHeading2}
            title="Heading 2"
          >
            H2
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleHeading3}
            title="Heading 3"
          >
            H3
          </Button>
        </div>

        {/* Alignment */}
        <div className="flex items-center gap-1 border-r pr-1">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => {}}
            title="Align Left"
          >
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleCenterAlign}
            title="Align Center"
          >
            <AlignCenter className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleRightAlign}
            title="Align Right"
          >
            <AlignRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Lists and Others */}
        <div className="flex items-center gap-1 border-r pr-1">
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
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleQuote}
            title="Quote"
          >
            <Quote className="h-4 w-4" />
          </Button>
        </div>

        {/* Code */}
        <div className="flex items-center gap-1 border-r pr-1">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleCode}
            title="Code Block"
          >
            <Code className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleInlineCode}
            title="Inline Code"
          >
            <code className="text-xs">{'<>'}</code>
          </Button>
        </div>

        {/* Links and Images */}
        <div className="flex items-center gap-1">
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
        </div>
      </div>
      
      {error && (
        <div className="text-red-600 text-xs px-1">{error}</div>
      )}
      
      <Textarea
        id="content"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={15}
        className="font-mono"
      />
      
      <div className="text-xs text-muted-foreground">
        Tip: You can also directly write Markdown or use the formatting buttons above.
      </div>
    </div>
  );
};
