
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { SeoOptimizer } from "@/components/SeoOptimizer";

const HomeUAE = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <SeoOptimizer
        title="Growwth Partners UAE | Expert Accounting & Financial Advisors"
        description="Our UAE headquarters provides exclusive support for startup and established businesses entering or growing in the Emirates. Access local VAT, incorporation, and advisory expertise from a trusted UAE-based team."
        canonical={`${window.location.origin}/uae`}
        keywords={["uae accounting", "dubai financial services", "emirates business solutions", "vat compliance uae", "company incorporation dubai"]}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <div className="min-h-[70vh] flex items-center justify-center flex-col text-center px-4">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-block px-4 py-1 bg-orange-100 text-brand-orange rounded-full text-sm font-semibold"
            >
              UAE Services
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-orange">
              Growwth UAE: Tailored Finance for Emirati Businesses
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We bring deep local UAE accounting experience, from VAT to company incorporations, for scaling local companies and foreign investors alike. <strong>Your trusted financial base for business growth in Dubai, Abu Dhabi, and beyond.</strong>
            </p>
            
            <div className="relative py-10 px-8 rounded-xl border-2 border-dashed border-orange-300 bg-orange-50/50 mb-10">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-4">
                <span className="text-brand-orange font-semibold">Coming Soon</span>
              </div>
              <p className="text-gray-600">
                Our UAE-exclusive services launch shortly! Register your interest to get early access and be the first to benefit from local UAE financial innovation.
              </p>
            </div>
            
            <Button 
              onClick={() => navigate("/contact")}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium px-6 py-3"
            >
              Contact UAE Advisors
            </Button>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default HomeUAE;
