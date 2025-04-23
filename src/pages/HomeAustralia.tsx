
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";

const HomeAustralia = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <div className="min-h-[70vh] flex items-center justify-center flex-col text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-orange">Welcome to Growwth Australia</h1>
          <p className="text-lg text-gray-600 mb-4">
            Expert accounting and financial services for Australian businesses.
          </p>
          <p className="text-gray-500">This is the Australia homepage. Replace this with content for your Australian audience.</p>
        </div>
      </motion.div>
    </Layout>
  );
};

export default HomeAustralia;
