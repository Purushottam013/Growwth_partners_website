
// components/RichTextEditor.tsx
import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  ClipboardEvent,
} from "react";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  Underline,
  Heading1,
  Heading2,
  Heading3,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ListOrdered,
  List,
  Quote,
  Code,
  Eye,
  Edit,
  Link as LinkIcon,
  Image as ImageIcon,
  Upload,
  Palette,
  ExternalLink,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ImageUploadDialog } from "./ImageUploadDialog";

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
}

export const RichTextEditor = ({ value, onChange }: RichTextEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [imageDialogOpen, setImageDialogOpen] = useState(false);

  // Only reset innerHTML when switching back into edit
  useEffect(() => {
    if (!isPreviewMode && editorRef.current) {
      editorRef.current.innerHTML = value;
    }
  }, [isPreviewMode]);

  // Re-render upstream on any input
  const handleInput = () => {
    onChange(editorRef.current!.innerHTML);
  };

  // Inline wrappers: bold, italic, etc.
  const insertHTMLAtCursor = (html: string) => {
    document.execCommand("insertHTML", false, html);
    onChange(editorRef.current!.innerHTML);
  };
  const insertMarkdown = (
    pre: string,
    post: string,
    placeholder: string
  ) => {
    const sel = window.getSelection();
    if (!sel || !sel.rangeCount) return;
    const range = sel.getRangeAt(0);
    const text = range.toString() || placeholder;
    insertHTMLAtCursor(pre + text + post);
  };

  // ===== custom block formatter for headings - FIXED =====
  const formatBlock = (tag: keyof HTMLElementTagNameMap) => {
    try {
      // Get current selection
      const sel = window.getSelection();
      if (!sel || !sel.anchorNode) return;
      
      // Get the editor element
      const editor = editorRef.current!;
      if (!editor) return;
      
      // Check if selection is inside editor
      if (!editor.contains(sel.anchorNode)) return;
      
      // Find the closest block-level ancestor of the current selection
      let node = sel.anchorNode;
      
      // If it's a text node, get its parent
      if (node.nodeType === 3) { // Text node
        node = node.parentNode;
      }
      
      let blockElement: Node | null = node;
      
      // Find block-level ancestor
      while (blockElement && 
             blockElement !== editor && 
             !(blockElement instanceof Element && 
               ['P', 'DIV', 'LI', 'BLOCKQUOTE', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(blockElement.nodeName))) {
        blockElement = blockElement.parentNode;
      }
      
      // If we didn't find a block element or we're at the editor itself, create a new paragraph
      if (!blockElement || blockElement === editor) {
        document.execCommand('formatBlock', false, '<p>');
        blockElement = sel.anchorNode;
        while (blockElement && 
               blockElement !== editor && 
               !(blockElement instanceof Element && 
                 ['P', 'DIV', 'LI', 'BLOCKQUOTE', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(blockElement.nodeName))) {
          blockElement = blockElement.parentNode;
        }
        if (!blockElement || blockElement === editor) return;
      }
      
      // Create the new heading element
      const newElement = document.createElement(tag);
      
      // We need to assert that blockElement is an HTMLElement to access innerHTML
      if (blockElement instanceof HTMLElement) {
        newElement.innerHTML = blockElement.innerHTML;
      } else {
        // Fallback in case it's not an HTMLElement
        newElement.textContent = blockElement.textContent || '';
      }
      
      // Replace the old block with the new heading
      blockElement.parentNode!.replaceChild(newElement, blockElement);
      
      // Ensure the cursor remains visible in the editor
      setTimeout(() => {
        // Move focus back to editor
        editor.focus();
        
        // Create a new selection at the end of the new heading
        const range = document.createRange();
        range.selectNodeContents(newElement);
        range.collapse(false); // collapse to end
        
        sel.removeAllRanges();
        sel.addRange(range);
        
        // Update the content
        onChange(editor.innerHTML);
      }, 0);
    } catch (err) {
      console.error("Error in formatBlock:", err);
    }
  };

  const handleBold = () =>
    insertMarkdown("<strong>", "</strong>", "bold");
  const handleItalic = () =>
    insertMarkdown("<em>", "</em>", "italic");
  const handleUnderline = () =>
    insertMarkdown("<u>", "</u>", "underline");

  const handleHeading1 = () => formatBlock("h1");
  const handleHeading2 = () => formatBlock("h2");
  const handleHeading3 = () => formatBlock("h3");

  const handleOrderedList = () =>
    insertMarkdown("<ol><li>", "</li></ol>", "Item");
  const handleUnorderedList = () =>
    insertMarkdown("<ul><li>", "</li></ul>", "Item");
  const handleQuote = () =>
    insertMarkdown("<blockquote>", "</blockquote>", "Quote");
  const handleCodeBlock = () =>
    insertMarkdown("<pre><code>", "</code></pre>", "code block");
  const handleInlineCode = () =>
    insertMarkdown("<code>", "</code>", "code");

  const handleLeftAlign = () =>
    insertMarkdown(
      `<div style="text-align:left">`,
      "</div>",
      "left text"
    );
  const handleCenterAlign = () =>
    insertMarkdown(
      `<div style="text-align:center">`,
      "</div>",
      "center text"
    );
  const handleRightAlign = () =>
    insertMarkdown(
      `<div style="text-align:right">`,
      "</div>",
      "right text"
    );

  const handleCenterContent = () =>
    insertMarkdown(
      `<div style="display: flex; justify-content: center;">`,
      "</div>",
      "centered content"
    );

  // New functions for text coloring
  const handleTextColor = (color: string) => {
    insertMarkdown(`<span style="color:${color}">`, "</span>", "colored text");
  };

  // Enhanced link handler for both external and internal links
  const handleLink = (isInternal: boolean = false) => {
    const sel = window.getSelection();
    if (!sel || !sel.rangeCount) return;
    
    const text = sel.toString() || "link text";
    let url = "";
    let path = "";
    
    if (isInternal) {
      // For internal page links
      path = prompt("Enter page path (e.g., /blog, /accounting)", "/");
      if (!path) return;
      
      // Ensure path starts with /
      if (!path.startsWith('/')) {
        path = '/' + path;
      }
      
      // Updated to make internal page link text bold
      insertHTMLAtCursor(
        `<a href="#" data-internal-link="${path}" class="text-brand-orange hover:underline cursor-pointer"><strong>${text}</strong></a>`
      );
    } else {
      // For external links
      url = prompt("Enter URL", "https://");
      if (!url) return;
      
      insertHTMLAtCursor(
        `<a href="${url}" target="_blank" rel="noopener">${text}</a>`
      );
    }
  };

  // sanitize pasted HTML & strip <br>
  const cleanHtml = (html: string): string => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    tmp.querySelectorAll("meta,script,style").forEach((el) => el.remove());
    const walker = document.createTreeWalker(tmp, NodeFilter.SHOW_COMMENT, null);
    let c: Node | null;
    while ((c = walker.nextNode())) c.parentNode!.removeChild(c);
    tmp.querySelectorAll("*").forEach((el) => {
      Array.from(el.attributes).forEach((a) => {
        if (!["href", "src", "alt", "style", "data-internal-link", "class", "target", "rel"].includes(a.name)) {
          el.removeAttribute(a.name);
        }
      });
    });
    tmp.querySelectorAll("br").forEach((br) => br.remove());
    return tmp.innerHTML;
  };

  const handlePaste = useCallback((e: ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const cb = e.clipboardData;
    // images?
    if (cb.files.length) {
      Array.from(cb.files).forEach((f) => {
        if (f.type.startsWith("image/")) handleImageFile(f);
      });
      return;
    }
    let data = "";
    if (cb.types.includes("text/html")) {
      data = cleanHtml(cb.getData("text/html"));
    } else {
      data = cb.getData("text/plain");
    }
    insertHTMLAtCursor(data);
  }, []);

  // read image and preserve natural size
  const handleImageFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please select an image");
      return;
    }
    setUploading(true);
    const reader = new FileReader();
    reader.onload = () => {
      const src = reader.result as string;
      const img = new Image();
      img.onload = () => {
        // explicit width/height
        const tag = `<img src="${src}" width="${img.width}" height="${img.height}" alt="img">`;
        insertHTMLAtCursor(tag);
        setUploading(false);
      };
      img.src = src;
    };
    reader.onerror = () => {
      setError("Image load failed");
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleUploadImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const f = e.target.files?.[0];
    if (f) handleImageFile(f);
  };

  const handleInsertImage = (imageData: {
    file: File;
    width?: number;
    height?: number;
    alt: string;
    isClickable: boolean;
    linkUrl?: string;
  }) => {
    const reader = new FileReader();
    setUploading(true);
    
    reader.onload = () => {
      const src = reader.result as string;
      const img = new Image();
      
      img.onload = () => {
        // Use provided dimensions or fall back to natural dimensions
        const finalWidth = imageData.width || img.width;
        const finalHeight = imageData.height || img.height;
        
        // Build image tag with alt text and dimensions
        const imgTag = `<img src="${src}" width="${finalWidth}" height="${finalHeight}" alt="${imageData.alt}" />`;
        
        // Wrap in link if clickable
        const finalHtml = imageData.isClickable && imageData.linkUrl
          ? `<a href="${imageData.linkUrl}" target="_blank" rel="noopener noreferrer">${imgTag}</a>`
          : imgTag;
        
        insertHTMLAtCursor(finalHtml);
        setUploading(false);
      };
      
      img.onerror = () => {
        setError("Failed to load image");
        setUploading(false);
      };
      
      img.src = src;
    };
    
    reader.onerror = () => {
      setError("Failed to read image file");
      setUploading(false);
    };
    
    reader.readAsDataURL(imageData.file);
  };

  const togglePreview = () => setIsPreviewMode((p) => !p);

  // Color options array
  const colorOptions = [
    { name: "Brand Orange", value: "#f97316" },
    { name: "Indigo", value: "#6366f1" },
    { name: "Red", value: "#ef4444" },
    { name: "Green", value: "#22c55e" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Purple", value: "#8b5cf6" },
    { name: "Pink", value: "#ec4899" },
    { name: "Yellow", value: "#eab308" },
    { name: "Gray", value: "#6b7280" },
  ];

  return (
    <div className="space-y-2">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border rounded bg-gray-50">
        <Button
          type="button"
          onClick={handleBold}
          size="sm"
          variant="ghost"
          title="Bold"
        >
          <Bold />
        </Button>
        <Button
          type="button"
          onClick={handleItalic}
          size="sm"
          variant="ghost"
          title="Italic"
        >
          <Italic />
        </Button>
        <Button
          type="button"
          onClick={handleUnderline}
          size="sm"
          variant="ghost"
          title="Underline"
        >
          <Underline />
        </Button>

        <Button
          type="button"
          onClick={handleHeading1}
          size="sm"
          variant="ghost"
          title="Heading 1"
        >
          <Heading1 />
        </Button>
        <Button
          type="button"
          onClick={handleHeading2}
          size="sm"
          variant="ghost"
          title="Heading 2"
        >
          <Heading2 />
        </Button>
        <Button
          type="button"
          onClick={handleHeading3}
          size="sm"
          variant="ghost"
          title="Heading 3"
        >
          <Heading3 />
        </Button>

        <Button
          type="button"
          onClick={handleLeftAlign}
          size="sm"
          variant="ghost"
          title="Align Left"
        >
          <AlignLeft />
        </Button>
        <Button
          type="button"
          onClick={handleCenterAlign}
          size="sm"
          variant="ghost"
          title="Align Center"
        >
          <AlignCenter />
        </Button>
        <Button
          type="button"
          onClick={handleRightAlign}
          size="sm"
          variant="ghost"
          title="Align Right"
        >
          <AlignRight />
        </Button>

        <Button
          type="button"
          onClick={handleCenterContent}
          size="sm"
          variant="ghost"
          title="Center Content"
          className="border border-primary/20"
        >
          <AlignCenter className="h-4 w-4" />
          <span className="ml-1 text-xs">C</span>
        </Button>

        <Button
          type="button"
          onClick={handleOrderedList}
          size="sm"
          variant="ghost"
          title="Ordered List"
        >
          <ListOrdered />
        </Button>
        <Button
          type="button"
          onClick={handleUnorderedList}
          size="sm"
          variant="ghost"
          title="Unordered List"
        >
          <List />
        </Button>
        <Button
          type="button"
          onClick={handleQuote}
          size="sm"
          variant="ghost"
          title="Quote"
        >
          <Quote />
        </Button>
        <Button
          type="button"
          onClick={handleCodeBlock}
          size="sm"
          variant="ghost"
          title="Code Block"
        >
          <Code />
        </Button>
        <Button
          type="button"
          onClick={handleInlineCode}
          size="sm"
          variant="ghost"
          title="Inline Code"
        >
          <code className="text-xs">{`<>`}</code>
        </Button>

        {/* External Link Button */}
        <Button
          type="button"
          onClick={() => handleLink()}
          size="sm"
          variant="ghost"
          title="External Link"
        >
          <LinkIcon />
        </Button>
        
        {/* Internal Page Link Button */}
        <Button
          type="button"
          onClick={() => handleLink(true)}
          size="sm"
          variant="ghost"
          title="Page Link"
        >
          <ExternalLink />
        </Button>

        {/* Color Picker Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              type="button"
              size="sm"
              variant="ghost"
              title="Text Color"
            >
              <Palette />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-2">
            <div className="grid grid-cols-3 gap-2">
              {colorOptions.map((color) => (
                <Button 
                  key={color.value} 
                  className="h-8 w-full"
                  style={{ backgroundColor: color.value }}
                  onClick={() => handleTextColor(color.value)}
                  title={color.name}
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleUploadImage}
        />
        <Button
          type="button"
          onClick={() => setImageDialogOpen(true)}
          size="sm"
          variant="ghost"
          disabled={uploading}
          title="Insert Image"
        >
          {uploading ? <Upload className="animate-spin" /> : <ImageIcon />}
        </Button>

        <ImageUploadDialog
          open={imageDialogOpen}
          onOpenChange={setImageDialogOpen}
          onInsert={handleInsertImage}
        />

        <div className="ml-auto">
          <Button
            type="button"
            onClick={togglePreview}
            size="sm"
            variant="outline"
          >
            {isPreviewMode ? <Edit /> : <Eye />}
            <span className="ml-1">
              {isPreviewMode ? "Edit" : "Preview"}
            </span>
          </Button>
        </div>
      </div>

      {error && (
        <div className="text-red-600 text-xs px-1">{error}</div>
      )}

      {/* Editor / Preview */}
      <div
        ref={editorRef}
        contentEditable={!isPreviewMode}
        suppressContentEditableWarning
        onInput={handleInput}
        onPaste={handlePaste}
        className={`
          border p-4 rounded min-h-[200px]
          whitespace-normal break-words
          [&>*]:mt-0 [&>*]:mb-0
          ${isPreviewMode ? "bg-gray-50 pointer-events-none" : ""}
        `}
      />

      <div className="text-xs text-gray-500">
        Tip: Paste text/images or use the toolbar. New: Add colored text and page links.
      </div>
    </div>
  );
};

