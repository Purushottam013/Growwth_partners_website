
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/payroll/HeroSection";
import { IntroSection } from "@/components/payroll/IntroSection";
import { ServicesSection } from "@/components/payroll/ServicesSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { CtaSection } from "@/components/accounting/CtaSection";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { FaqSection } from "@/components/accounting/FaqSection";
import { CaseStudySection } from "@/components/bookkeeping/CaseStudySection";
import { ExpertBlogSection } from "@/components/accounting/ExpertBlogSection";
import { motion } from "framer-motion";

const PayrollPage = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <TrustedSection />
        <CtaSection />
        <AboutTestimonials />
        <FaqSection 
          faqs={[
            {
              value: "services-included",
              trigger: "What services are included in your payroll solutions?",
              content: "Our services include accurate salary calculations, tax deductions and filings, compliance assurance, custom payroll solutions, employee self-service portals, and dedicated support."
            },
            {
              value: "compliance-assurance",
              trigger: "How does Growwth Partners ensure compliance with local regulations?",
              content: "We stay up-to-date with ever-changing regulations and handle all compliance requirements, including tax deductions, filings, and statutory obligations, ensuring your business remains fully compliant."
            },
            {
              value: "customization",
              trigger: "Can your payroll management services be customized to fit my business needs?",
              content: "Yes, we offer tailored payroll solutions that can be customized to match the unique requirements of your business, providing flexibility and efficiency."
            },
            {
              value: "business-types",
              trigger: "What type of businesses can benefit from your payroll services?",
              content: "Our payroll services are scalable and can be adapted to suit startups, SMEs, and multinational corporations, ensuring that businesses of all sizes benefit from our expertise."
            },
            {
              value: "data-security",
              trigger: "How secure is my payroll data with Growwth Partners?",
              content: "We prioritize data security and use encrypted systems to ensure that all payroll information is collected, processed, and stored securely, protecting your sensitive data."
            },
            {
              value: "employee-support",
              trigger: "What kind of support do you offer to employees?",
              content: "We provide secure employee self-service portals for easy access to payroll information and offer quick assistance through our dedicated support team to address any payroll-related queries."
            },
            {
              value: "getting-started",
              trigger: "How can I get started with your payroll services?",
              content: "You can get started by booking a free call with one of our payroll experts to discuss your business needs. We will guide you through the entire process, from consultation and planning to implementation and continuous support."
            },
            {
              value: "additional-services",
              trigger: "Do you offer additional financial services apart from payroll management?",
              content: "Yes, in addition to payroll management, we offer bookkeeping, tax preparation, financial analysis, part-time CFO services, and company incorporation services to support your business's financial health and growth."
            }
          ]}
        />
        <CaseStudySection />
        <ExpertBlogSection />
      </motion.div>
    </Layout>
  );
};

export default PayrollPage;

