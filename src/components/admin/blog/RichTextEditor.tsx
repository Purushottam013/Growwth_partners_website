
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bold, Italic, Underline, ListOrdered, ListUnordered, Link, Image, Heading } from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const RichTextEditor = ({ value, onChange }: RichTextEditorProps) => {
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const saveSelection = (textarea: HTMLTextAreaElement) => {
    setSelectionStart(textarea.selectionStart);
    setSelectionEnd(textarea.selectionEnd);
  };

  const insertMarkdown = (
    prefix: string,
    suffix: string,
    defaultText: string
  ) => {
    const textarea = document.getElementById("content") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const replacement = selectedText.length > 0 ? selectedText : defaultText;
    
    const newText = 
      textarea.value.substring(0, start) + 
      prefix + replacement + suffix + 
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
      const textarea = document.getElementById("content") as HTMLTextAreaElement;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = textarea.value.substring(start, end);
      const linkText = selectedText.length > 0 ? selectedText : "link text";
      
      insertMarkdown("[" + linkText + "](", ")", url);
    }
  };
  
  const handleImage = () => {
    const url = prompt("Enter image URL:", "https://");
    if (url) {
      insertMarkdown("![", "]("+url+")", "image description");
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1 p-1 border rounded-md bg-gray-50">
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
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleImage}
          title="Image"
        >
          <Image className="h-4 w-4" />
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
          <ListUnordered className="h-4 w-4" />
        </Button>
      </div>
      
      <Textarea
        id="content"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onSelect={(e) => saveSelection(e.target as HTMLTextAreaElement)}
        rows={10}
        className="font-mono"
      />
    </div>
  );
};
