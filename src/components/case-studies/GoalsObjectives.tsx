
import { motion } from "framer-motion";

export const GoalsObjectives = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="heading-md text-brand-dark">Primary Goals and Objectives</h3>
            <ul className="space-y-4">
              {[
                "Accounting: Implementing efficient accounting practices for accurate financial reporting.",
                "Fractional CFO support: Closely partnered with CEO and the founding team on advising on various strategic projects including fund raise, debt raise, sale of business.",
                "M&A activities, pivoting the business for a stronger financial performance Forecasting and Budgeting: Developing a clear financial plan and path to profitability.",
                "Cash Management: Managing working capital, optimising cash flow, and ensuring timely payments.",
                "Compliances: Ensuring compliance with corporate tax, GST, and other regulatory requirements.",
                "Audit Support: Providing support during audits for seamless compliance.",
                "Accounts Receivables Management: Faster collection of accounts receivable to maintain healthy cash flow.",
                "Due Diligence Support: Assisting in due diligence processes for potential partnerships or investments."
              ].map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange text-white flex items-center justify-center mt-1">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-brand-orange/10 rounded-full filter blur-3xl"></div>
            <img
              src="/lovable-uploads/53363ea3-e5ab-42d7-8871-5ef86ed8aed6.png"
              alt="Strategic Financial Planning"
              className="rounded-2xl shadow-xl relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
