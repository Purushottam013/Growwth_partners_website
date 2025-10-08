import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface ImageUploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onInsert: (imageData: {
    file: File;
    width?: number;
    height?: number;
    alt: string;
    isClickable: boolean;
    linkUrl?: string;
  }) => void;
}

export const ImageUploadDialog = ({
  open,
  onOpenChange,
  onInsert,
}: ImageUploadDialogProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [alt, setAlt] = useState<string>("");
  const [isClickable, setIsClickable] = useState<boolean>(false);
  const [linkUrl, setLinkUrl] = useState<string>("");
  const [errors, setErrors] = useState<{
    file?: string;
    alt?: string;
    linkUrl?: string;
    width?: string;
    height?: string;
  }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrors({ ...errors, file: "Please select an image file" });
      return;
    }

    setSelectedFile(file);
    setErrors({ ...errors, file: undefined });

    const reader = new FileReader();
    reader.onload = (evt) => {
      setPreview(evt.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!selectedFile) {
      newErrors.file = "Please select an image";
    }

    if (!alt.trim()) {
      newErrors.alt = "Alt text is required";
    }

    if (isClickable) {
      if (!linkUrl.trim()) {
        newErrors.linkUrl = "Link URL is required when image is clickable";
      } else {
        try {
          new URL(linkUrl);
        } catch {
          newErrors.linkUrl = "Please enter a valid URL (e.g., https://example.com)";
        }
      }
    }

    if (width && (isNaN(Number(width)) || Number(width) <= 0)) {
      newErrors.width = "Width must be a positive number";
    }

    if (height && (isNaN(Number(height)) || Number(height) <= 0)) {
      newErrors.height = "Height must be a positive number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInsert = () => {
    if (!validateForm() || !selectedFile) return;

    onInsert({
      file: selectedFile,
      width: width ? Number(width) : undefined,
      height: height ? Number(height) : undefined,
      alt: alt.trim(),
      isClickable,
      linkUrl: isClickable ? linkUrl.trim() : undefined,
    });

    handleClose();
  };

  const handleClose = () => {
    setSelectedFile(null);
    setPreview("");
    setWidth("");
    setHeight("");
    setAlt("");
    setIsClickable(false);
    setLinkUrl("");
    setErrors({});
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Insert Image</DialogTitle>
          <DialogDescription>
            Upload an image and configure its properties
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* File Upload */}
          <div className="space-y-2">
            <Label htmlFor="image-upload">Image File *</Label>
            <Input
              id="image-upload"
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            {errors.file && (
              <p className="text-sm text-destructive">{errors.file}</p>
            )}
          </div>

          {/* Image Preview */}
          {preview && (
            <div className="space-y-2">
              <Label>Preview</Label>
              <div className="border rounded p-2 bg-muted">
                <img
                  src={preview}
                  alt="Preview"
                  className="max-w-full h-auto max-h-[200px] mx-auto"
                />
              </div>
            </div>
          )}

          {/* Width */}
          <div className="space-y-2">
            <Label htmlFor="width">Width (pixels)</Label>
            <Input
              id="width"
              type="number"
              placeholder="Leave empty for original size"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
            {errors.width && (
              <p className="text-sm text-destructive">{errors.width}</p>
            )}
          </div>

          {/* Height */}
          <div className="space-y-2">
            <Label htmlFor="height">Height (pixels)</Label>
            <Input
              id="height"
              type="number"
              placeholder="Leave empty for original size"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            {errors.height && (
              <p className="text-sm text-destructive">{errors.height}</p>
            )}
          </div>

          {/* Alt Text */}
          <div className="space-y-2">
            <Label htmlFor="alt">Alt Text *</Label>
            <Input
              id="alt"
              type="text"
              placeholder="Describe the image for accessibility"
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
            />
            {errors.alt && (
              <p className="text-sm text-destructive">{errors.alt}</p>
            )}
          </div>

          {/* Make Image Clickable */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="clickable"
              checked={isClickable}
              onCheckedChange={(checked) => setIsClickable(checked === true)}
            />
            <Label
              htmlFor="clickable"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Make Image Clickable (Optional)
            </Label>
          </div>

          {/* Link URL - Conditional */}
          {isClickable && (
            <div className="space-y-2 pl-6">
              <Label htmlFor="linkUrl">Link URL *</Label>
              <Input
                id="linkUrl"
                type="url"
                placeholder="https://example.com"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
              />
              {errors.linkUrl && (
                <p className="text-sm text-destructive">{errors.linkUrl}</p>
              )}
            </div>
          )}
        </div>

        <DialogFooter>
          <Button type="button" variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="button" onClick={handleInsert}>
            Insert Image
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
