import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, CircleDollarSign, PieChart, ArrowUpRight } from 'lucide-react';

export const FinancialInsights: React.FC = () => {
  const insights = [
    {
      accent: 'bg-brand-orange',
      iconBg: 'bg-brand-orange/10',
      icon: <TrendingUp className="h-7 w-7 text-brand-orange" />,        
      title: 'Cost-Effective Financial Expertise',
      text: 'Are you a startup or SME in Singapore looking for expert financial leadership—without the cost of a full-time CFO or in-house finance team?',
      linkText: 'Scale with confidence',
      linkColor: 'text-brand-orange'
    },
    {
      accent: 'bg-green-500',
      iconBg: 'bg-green-500/10',
      icon: <CircleDollarSign className="h-7 w-7 text-green-500" />,      
      title: 'Cash Flow Optimization',
      text: 'Our fractional CFO, part-time CFO, and virtual CFO services in Singapore help you scale confidently, optimise cash flow, and make data-backed decisions.',
      linkText: 'On-demand financial clarity',
      linkColor: 'text-green-500'
    },
    {
      accent: 'bg-blue-500',
      iconBg: 'bg-blue-500/10',
      icon: <PieChart className="h-7 w-7 text-blue-500" />,        
      title: 'Refining Your Business Strategy?',
      text: "Whether you're preparing for fundraising, managing rapid growth, or refining your strategy, we offer the financial clarity and direction you need—on demand.",
      linkText: 'Fundraising readiness',
      linkColor: 'text-blue-500'
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-100/40 to-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className={`${item.accent} h-3 w-full`}></div>
              <Card className="rounded-xl overflow-hidden shadow-lg h-full">
                <CardContent className="pt-6">
                  <div className={`${item.iconBg} w-14 h-14 mb-4 rounded-full flex items-center justify-center`}>  
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.text}</p>
                  <div className={`flex items-center font-medium ${item.linkColor}`}>
                    <span>{item.linkText}</span>
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialInsights;