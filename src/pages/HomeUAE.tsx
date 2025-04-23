
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";

const HomeUAE = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <div className="min-h-[70vh] flex items-center justify-center flex-col text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-orange">Welcome to Growwth UAE</h1>
          <p className="text-lg text-gray-600 mb-4">
            Experience specialized accounting and financial services tailored for businesses in the United Arab Emirates.
          </p>
          <p className="text-gray-500">This is the UAE homepage. Update this section with unique content for your UAE customers.</p>
        </div>
      </motion.div>
    </Layout>
  );
};

export default HomeUAE;
