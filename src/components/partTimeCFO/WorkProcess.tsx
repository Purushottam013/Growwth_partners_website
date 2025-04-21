import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart, Calculator, BarChart3, PieChart, Users, BadgePercent } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Step {
  label: string;
  title: string;
  description: string;
}

export const WorkProcess: React.FC = () => {
  const services: Service[] = [
    { icon: <LineChart className="h-10 w-10 text-brand-orange mb-4" />, title: 'Cash Flow Management', description: 'Cash flow forecasting and working capital management' },
    { icon: <Calculator className="h-10 w-10 text-brand-orange mb-4" />, title: 'Budgeting & Planning', description: 'Budgeting, hiring plans, and resource allocation' },
    { icon: <BarChart3 className="h-10 w-10 text-brand-orange mb-4" />, title: 'Financial Analysis', description: 'Revenue analysis and cost optimisation' },
    { icon: <PieChart className="h-10 w-10 text-brand-orange mb-4" />, title: 'Performance Tracking', description: 'KPI dashboards and financial performance tracking' },
    { icon: <Users className="h-10 w-10 text-brand-orange mb-4" />, title: 'Investor Relations', description: 'Investor reporting and board presentation support' },
    { icon: <BadgePercent className="h-10 w-10 text-brand-orange mb-4" />, title: 'Strategic Planning', description: 'Strategic financial planning and risk assessment' },
  ];

  const steps: Step[] = [
    { label: '1', title: 'Discovery Call', description: 'Understand your business, goals, and current financial systems.' },
    { label: '2', title: 'Onboarding & Health Check', description: 'Review financial data, processes, tools, and pain points to build a custom roadmap.' },
    { label: '3', title: 'Ongoing CFO Support', description: 'Regular meetings, reports, and insights on a part-time or fractional basis.' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
      <div className="container-custom">
        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          id="virtual-cfo-services"
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold mb-4 text-gray-900">What Our Virtual CFOs Help With</h3>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We support your finance function with tailored, high-impact services such as:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group"
            >
              <Card className="p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform group-hover:-translate-y-2 border-t-4 border-brand-orange bg-white">
                <div className="flex flex-col items-center text-center">
                  {svc.icon}
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">{svc.title}</h4>
                  <p className="text-gray-600 text-lg">{svc.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h4 className="text-4xl font-bold mb-4 text-gray-900">How Our Part-Time CFO Services Work</h4>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We simplify your finance operations in three clear steps:
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Connector line */}
          <div className="hidden md:block absolute inset-x-0 top-1/2 h-1 bg-gray-200 -translate-y-1/2"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-brand-orange rounded-full text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-6">
                {step.label}
              </div>
              <Card className="w-full p-6 text-center shadow-md hover:shadow-lg transition duration-300 border-none">
                <CardContent className="pt-4">
                  <h5 className="text-xl font-semibold mb-4 text-gray-800">{step.title}</h5>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
