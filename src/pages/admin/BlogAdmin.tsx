
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { BlogPostForm } from "@/components/admin/blog/BlogPostForm";
import { BlogPostList } from "@/components/admin/blog/BlogPostList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BlogAdminPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if the user is authenticated
    const isAuthenticated = sessionStorage.getItem("blogAdminAuthenticated");
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Blog Management</h1>
        
        <Tabs defaultValue="posts" className="w-full">
          <TabsList>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="create">Create New Post</TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts">
            <BlogPostList />
          </TabsContent>
          
          <TabsContent value="create">
            <BlogPostForm />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default BlogAdminPage;
