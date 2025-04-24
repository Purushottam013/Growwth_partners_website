import { useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Bold,
  Italic,
  Underline,
  ListOrdered,
  Link,
  Image as ImageIcon,
  Heading1,
  Heading2,
  Heading3,
  Upload,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Quote,
  Code,
  Eye,
  Edit,
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const RichTextEditor = ({ value, onChange }: RichTextEditorProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  // Insert markdown at cursor
  const insertMarkdown = (prefix: string, suffix: string, defaultText: string) => {
    const textarea = textareaRef.current;
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

  const handleBold = () => insertMarkdown("<strong>", "</strong>", "bold text");
  const handleItalic = () => insertMarkdown("<em>", "</em>", "italic text");
  const handleUnderline = () => insertMarkdown("<u>", "</u>", "underlined text");
  const handleHeading1 = () => insertMarkdown("<h1>", "</h1>", "Heading 1");
  const handleHeading2 = () => insertMarkdown("<h2>", "</h2>", "Heading 2");
  const handleHeading3 = () => insertMarkdown("<h3>", "</h3>", "Heading 3");
  const handleOrderedList = () => insertMarkdown("<ol><li>", "</li></ol>", "List item");
  const handleUnorderedList = () => insertMarkdown("<ul><li>", "</li></ul>", "List item");
  const handleQuote = () => insertMarkdown("<blockquote>", "</blockquote>", "Blockquote text");
  const handleCode = () => insertMarkdown("<pre><code>", "</code></pre>", "code block");
  const handleInlineCode = () => insertMarkdown("<code>", "</code>", "inline code");
  const handleCenterAlign = () => insertMarkdown("<div style='text-align: center;'>", "</div>", "centered text");
  const handleRightAlign = () => insertMarkdown("<div style='text-align: right;'>", "</div>", "right aligned text");
  const handleLeftAlign = () => insertMarkdown("<div style='text-align: left;'>", "</div>", "left aligned text");

  const handleLink = () => {
    const url = prompt("Enter URL:", "https://");
    if (url) {
      insertMarkdown("<a href='" + url + "'>", "</a>", "link text");
    }
  };

  // Clean HTML content from unwanted styles and attributes
  const cleanHtml = (html: string): string => {
    try {
      // Create a new document to parse the HTML safely
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Remove <meta>, <script>, and <style> tags
      const unwantedTags = doc.querySelectorAll('meta, script, style');
      unwantedTags.forEach(tag => tag.remove());
      
      // Function to clean an element's attributes and inline styles
      const cleanElement = (el: Element) => {
        // List of attributes to keep - add or remove as needed
        const allowedAttrs = ['href', 'src', 'alt'];
        
        // Remove all attributes except allowed ones
        Array.from(el.attributes).forEach(attr => {
          if (!allowedAttrs.includes(attr.name) && attr.name !== 'style') {
            el.removeAttribute(attr.name);
          }
        });
        
        // Keep only basic inline styles if present, remove box-sizing and other complex styles
        if (el.hasAttribute('style')) {
          // Get only essential styling properties
          const styleAttr = el.getAttribute('style') || '';
          const essentialStyles: string[] = [];
          
          // Only keep these few style properties
          if (styleAttr.includes('text-align')) {
            const textAlign = styleAttr.match(/text-align:\s*(left|center|right|justify)/i);
            if (textAlign && textAlign[1]) {
              essentialStyles.push(`text-align: ${textAlign[1]}`);
            }
          }
          
          if (styleAttr.includes('font-weight')) {
            const fontWeight = styleAttr.match(/font-weight:\s*(\d+|bold|normal)/i);
            if (fontWeight && fontWeight[1]) {
              essentialStyles.push(`font-weight: ${fontWeight[1]}`);
            }
          }
          
          if (essentialStyles.length > 0) {
            el.setAttribute('style', essentialStyles.join('; '));
          } else {
            el.removeAttribute('style');
          }
        }
      };
      
      // Clean all elements
      const allElements = doc.body.querySelectorAll('*');
      allElements.forEach(cleanElement);
      
      // Remove empty paragraphs and divs
      const emptyElements = doc.body.querySelectorAll('p:empty, div:empty');
      emptyElements.forEach(el => el.remove());
      
      // Get the cleaned HTML content
      return doc.body.innerHTML.trim();
    } catch (e) {
      console.error("Error cleaning HTML:", e);
      // If something goes wrong, return plain text as fallback
      return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    }
  };

  // Process HTML content for pasting
  const handlePaste = useCallback((e: React.ClipboardEvent) => {
    e.preventDefault();
    
    // Get clipboard content
    const clipboard = e.clipboardData;
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    let insertContent = '';
    
    // Check for HTML content and clean it
    if (clipboard.types.includes('text/html')) {
      const htmlContent = clipboard.getData('text/html');
      insertContent = cleanHtml(htmlContent);
    }
    // If there's no HTML or cleaning failed, fall back to plain text
    else if (clipboard.types.includes('text/plain')) {
      insertContent = clipboard.getData('text/plain');
    }
    
    // Handle image files in clipboard
    if (clipboard.files && clipboard.files.length > 0) {
      Array.from(clipboard.files).forEach(file => {
        if (file.type.startsWith('image/')) {
          handleImageFile(file);
          return;
        }
      });
      return;
    }
    
    // Insert the content at cursor position
    if (insertContent) {
      const newText = 
        textarea.value.substring(0, start) +
        insertContent +
        textarea.value.substring(end);
      
      onChange(newText);
      
      // Set focus back to textarea and update cursor position
      setTimeout(() => {
        textarea.focus();
        const newPosition = start + insertContent.length;
        textarea.selectionStart = newPosition;
        textarea.selectionEnd = newPosition;
      }, 0);
    }
  }, [onChange]);

  // Process image file and convert to base64
  const handleImageFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError("Please select a valid image file.");
      return;
    }
    
    setUploading(true);
    setError(null);
    
    // Convert image to base64
    const reader = new FileReader();
    
    reader.onloadend = () => {
      const base64String = reader.result as string;
      
      // Insert as direct HTML img tag with proper styling classes
      const imgTag = `<img src="${base64String}" alt="Uploaded image" class="mx-auto rounded-lg shadow-md max-h-[500px] w-auto" />`;
      
      const textarea = textareaRef.current;
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
      setError("Image processing failed. Please try again.");
    };
    
    reader.readAsDataURL(file);
  };

  // Upload image and insert as HTML img tag
  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageFile(file);
    }
  };

  // Toggle between edit and preview mode
  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-1.5 p-1 border rounded-md bg-gray-50">
        {/* Text Formatting */}
        <div className="flex flex-wrap items-center gap-1">
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
              <Heading1 className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleHeading2}
              title="Heading 2"
            >
              <Heading2 className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleHeading3}
              title="Heading 3"
            >
              <Heading3 className="h-4 w-4" />
            </Button>
          </div>

          {/* Alignment */}
          <div className="flex items-center gap-1 border-r pr-1">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleLeftAlign}
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
        
        {/* Preview Toggle */}
        <div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={togglePreviewMode}
            className="ml-auto"
          >
            {isPreviewMode ? (
              <>
                <Edit className="h-4 w-4 mr-1" /> Edit
              </>
            ) : (
              <>
                <Eye className="h-4 w-4 mr-1" /> Preview
              </>
            )}
          </Button>
        </div>
      </div>
      
      {error && (
        <div className="text-red-600 text-xs px-1">{error}</div>
      )}
      
      {isPreviewMode ? (
        <div 
          className="border p-4 rounded-md min-h-[200px] prose prose-sm max-w-none overflow-auto bg-white"
          dangerouslySetInnerHTML={{ __html: value }}
        />
      ) : (
        <Textarea
          id="content"
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onPaste={handlePaste}
          rows={15}
          className="font-mono"
        />
      )}
      
      <div className="text-xs text-muted-foreground">
        Tip: You can directly paste formatted content, images or write HTML.
      </div>
    </div>
  );
};
