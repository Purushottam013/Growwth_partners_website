
import { Layout } from "@/components/Layout";
import { BookOpen } from "lucide-react";

const GuidePage = () => {
  return (
    <Layout>
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
            alt="Guide Hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Guides
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive resources and expert insights to help you navigate your business journey
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <BookOpen className="w-16 h-16 text-brand-orange mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
            <p className="text-gray-600 text-lg mb-8">
              We're working on creating comprehensive business guides to help you navigate your business journey. 
              Check back soon for expert insights, strategies, and practical advice.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GuidePage;
