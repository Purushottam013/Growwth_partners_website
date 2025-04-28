
import { motion } from "framer-motion";

export const GoalsObjectives = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h3 className="heading-md text-brand-dark text-center">Primary Goals and Objectives</h3>
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
      </div>
    </section>
  );
};
