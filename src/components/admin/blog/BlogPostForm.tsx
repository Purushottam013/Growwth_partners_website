
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { blogData } from "@/data/blog";
import { useBlogPosts, BlogPost } from "@/hooks/useBlogPosts";
import { RichTextEditor } from "./RichTextEditor";
import { ImageUpload } from "./ImageUpload";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  hero_image: z.string().min(1, "Image is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  author: z.string().min(1, "Author is required"),
  categories: z.array(z.string()).min(1, "Select at least one category"),
});

type FormValues = z.infer<typeof formSchema>;

export const BlogPostForm = () => {
  const { toast } = useToast();
  const { addPost } = useBlogPosts();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      hero_image: "",
      excerpt: "",
      content: "",
      author: "",
      categories: [],
    },
  });

  const onSubmit = (data: FormValues) => {
    try {
      // Create a new post object with all required fields
      const newPost: Omit<BlogPost, "id"> = {
        title: data.title,
        slug: data.slug,
        hero_image: data.hero_image,
        excerpt: data.excerpt,
        content: data.content,
        author: data.author,
        categories: data.categories,
        publish_date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        status: 'published'
      };
      
      addPost(newPost);
      
      form.reset();
      toast({
        title: "Success",
        description: "Blog post created successfully!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save blog post.",
      });
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    form.setValue("slug", generateSlug(e.target.value));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="hero_image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hero Image</FormLabel>
              <FormControl>
                <ImageUpload 
                  imageUrl={field.value} 
                  onImageChange={field.onChange} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categories</FormLabel>
              <div className="flex flex-wrap gap-2">
                {blogData.categories.map((category) => (
                  <Button
                    key={category}
                    type="button"
                    variant={field.value.includes(category) ? "default" : "outline"}
                    onClick={() => {
                      const newValue = field.value.includes(category)
                        ? field.value.filter((c) => c !== category)
                        : [...field.value, category];
                      field.onChange(newValue);
                    }}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="excerpt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Excerpt</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content (Rich Text)</FormLabel>
              <FormControl>
                <RichTextEditor 
                  value={field.value} 
                  onChange={field.onChange} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Create Post</Button>
      </form>
    </Form>
  );
};
