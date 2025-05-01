import React from "react";
import { motion } from "framer-motion";
import { FileCheck, TrendingUp, FileText, ChartLine, ArrowsUpFromLine, Handshake } from "lucide-react";
export const ServicesSection = () => {
  const services = [{
    icon: <FileCheck className="h-8 w-8 text-brand-green" />,
    title: "Accurate Financial Record Keeping",
    description: "Our expert team ensures your financial records are meticulously maintained, eliminating the stress of bookkeeping."
  }, {
    icon: <TrendingUp className="h-8 w-8 text-brand-orange" />,
    title: "Expense Tracking",
    description: "We help you keep a close eye on your expenses, providing valuable insights into cost control and budget optimisation."
  }, {
    icon: <FileText className="h-8 w-8 text-brand-blue" />,
    title: "Timely and Error-Free Reporting",
    description: "Say goodbye to late financial reports and costly errors. We deliver precise reports on schedule."
  }, {
    icon: <FileCheck className="h-8 w-8 text-brand-yellow" />,
    title: "Bookkeeping, Tax Preparation, and Compliance",
    description: "Growwth ensures your taxes are prepared accurately and that you're fully compliant with tax regulations."
  }, {
    icon: <ChartLine className="h-8 w-8 text-brand-green" />,
    title: "Customised Financial Analysis",
    description: "Gain a competitive edge with our in-depth financial analysis, tailored to your business goals."
  }, {
    icon: <ArrowsUpFromLine className="h-8 w-8 text-brand-orange" />,
    title: "Scalability",
    description: "Whether you're a startup, SME, or multinational corporation, our services adapt to your business's evolving needs."
  }];
  return <section className="bg-white py-[60px]">
      <div className="container-custom">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#E5DEFF] text-brand-blue rounded-full text-sm font-semibold mb-4">Our Services</span>
          <h3 className="heading-md mb-4">What Do We Get Done?</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Your Premier Bookkeeping Services in Singapore
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.4,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300 h-full">
              <div className="p-3 bg-white rounded-lg shadow-sm inline-block mb-4">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};