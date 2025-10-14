
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { BlogPostForm } from "@/components/admin/blog/BlogPostForm";
import { BlogPostList } from "@/components/admin/blog/BlogPostList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {triggerNetlifyBuild} from "../../components/netlify/NetlifyBulid"
import { useToast } from "@/hooks/use-toast";

const BlogAdminPage = () => {
  const navigate = useNavigate();
  const [deploymentLoading, setdeploymentLoading] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if the user is authenticated
    const isAuthenticated = sessionStorage.getItem("blogAdminAuthenticated");
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [navigate]);

   const handleDeploy = async () =>{
     setdeploymentLoading(true);
    try {
      await triggerNetlifyBuild();
      toast({
          title: "Success",
          description: "We're deploying the latest changes! They'll be visible shortly - please give it atleast 2-3 minutes.",
        })
    } catch (err: any) {
      console.error(err);
      toast({
          title: "Success",
          description: "Failed to trigger site deployment. please contact your developer.",
        })
    } finally {
      setdeploymentLoading(false);
    }
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-6">Blog Management</h1>
        <button onClick={handleDeploy} className="bg-green-700 rounded-xl px-4 py-0 text-white font-bold">
          {deploymentLoading ? "Deploying ......" : "Deploy latest changes"}
        </button>
        </div>
        
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
