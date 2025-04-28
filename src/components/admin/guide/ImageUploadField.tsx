
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon } from "lucide-react";

interface ImageUploadFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export const ImageUploadField = ({ value, onChange }: ImageUploadFieldProps) => {
  const [preview, setPreview] = useState<string | null>(value || null);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setPreview(e.target.value);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      onChange(result);
      setPreview(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Input
          type="url"
          placeholder="Enter image URL"
          value={value}
          onChange={handleUrlChange}
        />
        <span className="text-muted-foreground">or</span>
        <div className="relative">
          <Input
            type="file"
            accept="image/*"
            className="hidden"
            id="hero-image-upload"
            onChange={handleFileUpload}
          />
          <Button
            type="button"
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => document.getElementById("hero-image-upload")?.click()}
          >
            <Upload size={16} />
            Upload
          </Button>
        </div>
      </div>

      {preview && (
        <div className="mt-4 border rounded-md overflow-hidden">
          <img
            src={preview}
            alt="Preview"
            className="w-full max-h-64 object-contain"
          />
        </div>
      )}

      {!preview && (
        <div className="h-32 border rounded-md flex items-center justify-center text-muted-foreground bg-gray-50">
          <div className="flex flex-col items-center gap-2">
            <ImageIcon size={24} />
            <span>No image selected</span>
          </div>
        </div>
      )}
    </div>
  );
};
