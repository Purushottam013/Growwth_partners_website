
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { uploadToSupabaseStorage } from "@/utils/imageUpload";
import { useToast } from "@/hooks/use-toast";

interface ImageUploadProps {
  imageUrl: string;
  onImageChange: (url: string) => void;
}

export const ImageUpload = ({ imageUrl, onImageChange }: ImageUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(imageUrl || null);
  const { toast } = useToast();
  
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onImageChange(e.target.value);
    setPreview(e.target.value);
  };
  
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setIsUploading(true);
    
    try {
      // Upload to Supabase Storage
      const publicUrl = await uploadToSupabaseStorage(file, "hero-images");
      
      // Update state with URL
      onImageChange(publicUrl);
      setPreview(publicUrl);
      
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        variant: "destructive",
        title: "Upload Failed",
        description: "Failed to upload image. Please try again.",
      });
    } finally {
      setIsUploading(false);
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Input
          type="url"
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={handleUrlChange}
        />
        <span className="text-muted-foreground">or</span>
        <div className="relative">
          <Input
            type="file"
            accept="image/*"
            className="hidden"
            id="image-upload"
            onChange={handleFileUpload}
          />
          <Button
            type="button"
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => document.getElementById("image-upload")?.click()}
            disabled={isUploading}
          >
            <Upload size={16} />
            Upload
          </Button>
        </div>
      </div>
      
      {preview && (
        <div className="mt-4 border rounded-md overflow-hidden">
          <OptimizedImage
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
