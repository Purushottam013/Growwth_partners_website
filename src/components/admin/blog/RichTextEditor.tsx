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
} from "lucide-react";

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

  // ===== custom block formatter for headings =====
  const formatBlock = (tag: keyof HTMLElementTagNameMap) => {
    const sel = window.getSelection();
    if (!sel || !sel.anchorNode) return;
    // find the block ancestor
    const block = (sel.anchorNode as Element).nodeType === 3
      ? (sel.anchorNode as Element).parentElement
      : (sel.anchorNode as Element);
    if (!block) return;
    // only operate if it's inside our editor
    const editor = editorRef.current!;
    const ancestor = block.closest(
      "p, div, li, blockquote, h1,h2,h3,h4,h5,h6"
    );
    if (!ancestor || !editor.contains(ancestor)) return;
    // create new heading and swap
    const h = document.createElement(tag);
    h.innerHTML = ancestor.innerHTML;
    ancestor.parentNode!.replaceChild(h, ancestor);
    // move caret into end of new heading
    const range = document.createRange();
    range.selectNodeContents(h);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
    onChange(editor.innerHTML);
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

  const handleLink = () => {
    const url = prompt("Enter URL", "https://");
    if (url) {
      insertMarkdown(
        `<a href="${url}" target="_blank" rel="noopener">`,
        "</a>",
        "link"
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
        if (!["href", "src", "alt", "style"].includes(a.name)) {
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

  const togglePreview = () => setIsPreviewMode((p) => !p);

  return (
    <div className="space-y-2">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border rounded bg-gray-50">
        <Button
          type="button"
          onClick={handleBold}
          size="sm"
          variant="ghost"
        >
          <Bold />
        </Button>
        <Button
          type="button"
          onClick={handleItalic}
          size="sm"
          variant="ghost"
        >
          <Italic />
        </Button>
        <Button
          type="button"
          onClick={handleUnderline}
          size="sm"
          variant="ghost"
        >
          <Underline />
        </Button>

        <Button
          type="button"
          onClick={handleHeading1}
          size="sm"
          variant="ghost"
        >
          <Heading1 />
        </Button>
        <Button
          type="button"
          onClick={handleHeading2}
          size="sm"
          variant="ghost"
        >
          <Heading2 />
        </Button>
        <Button
          type="button"
          onClick={handleHeading3}
          size="sm"
          variant="ghost"
        >
          <Heading3 />
        </Button>

        <Button
          type="button"
          onClick={handleLeftAlign}
          size="sm"
          variant="ghost"
        >
          <AlignLeft />
        </Button>
        <Button
          type="button"
          onClick={handleCenterAlign}
          size="sm"
          variant="ghost"
        >
          <AlignCenter />
        </Button>
        <Button
          type="button"
          onClick={handleRightAlign}
          size="sm"
          variant="ghost"
        >
          <AlignRight />
        </Button>

        <Button
          type="button"
          onClick={handleOrderedList}
          size="sm"
          variant="ghost"
        >
          <ListOrdered />
        </Button>
        <Button
          type="button"
          onClick={handleUnorderedList}
          size="sm"
          variant="ghost"
        >
          <List />
        </Button>
        <Button
          type="button"
          onClick={handleQuote}
          size="sm"
          variant="ghost"
        >
          <Quote />
        </Button>
        <Button
          type="button"
          onClick={handleCodeBlock}
          size="sm"
          variant="ghost"
        >
          <Code />
        </Button>
        <Button
          type="button"
          onClick={handleInlineCode}
          size="sm"
          variant="ghost"
        >
          <code className="text-xs">{`<>`}</code>
        </Button>

        <Button
          type="button"
          onClick={handleLink}
          size="sm"
          variant="ghost"
        >
          <LinkIcon />
        </Button>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleUploadImage}
        />
        <Button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          size="sm"
          variant="ghost"
          disabled={uploading}
        >
          {uploading ? <Upload className="animate-spin" /> : <ImageIcon />}
        </Button>

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
        Tip: Paste text/images or use the toolbar.
      </div>
    </div>
  );
};
