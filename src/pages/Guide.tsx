import { Layout } from "@/components/Layout";
import { BookOpen } from "lucide-react";
const GuidePage = () => {
  return <Layout>
      <section className="relative w-full flex justify-center">
        <img src="/lovable-uploads/e724df8b-078f-4892-9a47-ab21bdd069b1.png" alt="Guides" className="w-4/6 h-auto py-8" />
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
    </Layout>;
};
export default GuidePage;