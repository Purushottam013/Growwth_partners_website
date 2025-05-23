import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Seo from "@/components/Seo";

const HomeAustralia = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Seo
        title="Growwth Partners Australia | Accounting & Financial Experts"
        description="Expert accounting and financial services for Australian SMEs from Growwth Partners. Learn more and register your interest in our local offerings."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <div className="min-h-[70vh] flex items-center justify-center flex-col text-center px-4">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-block px-4 py-1 bg-blue-100 text-brand-blue rounded-full text-sm font-semibold"
            >
              Australia Services
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-orange">Welcome to Growwth Australia</h1>
            <p className="text-lg text-gray-600 mb-8">
              Expert accounting and financial services for Australian businesses.
            </p>
            
            <div className="relative py-10 px-8 rounded-xl border-2 border-dashed border-blue-300 bg-blue-50/50 mb-10">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-4">
                <span className="text-brand-blue font-semibold">Coming Soon</span>
              </div>
              <p className="text-gray-600">We're currently building our Australian service offerings. Stay tuned for comprehensive financial solutions tailored specifically for the Australian market.</p>
            </div>
            
            <Button 
              onClick={() => navigate("/contact")}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium px-6 py-3"
            >
              Register Interest
            </Button>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default HomeAustralia;
