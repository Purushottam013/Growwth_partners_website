
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Wallet, TrendingUp, BarChart3, LineChart, FileText, Target } from 'lucide-react';

interface Insight {
  icon: React.ReactNode;
  accent: string;
  iconBg: string;
  title: string;
  text: string;
}

export const ServiceOverview: React.FC = () => {
  const insights: Insight[] = [
    {
      icon: <Wallet className="h-8 w-8 text-brand-orange" />,           accent: 'bg-brand-orange', iconBg: 'bg-brand-orange/10',
      title: '50–70% cost savings',
      text: 'Save significantly compared to hiring a full-time CFO while getting expert financial guidance.',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-orange" />,      accent: 'bg-brand-orange', iconBg: 'bg-brand-orange/10',
      title: 'On-demand strategic leadership',
      text: 'Access seasoned financial expertise exactly when you need it, without the overhead.',
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-brand-orange" />,       accent: 'bg-brand-orange', iconBg: 'bg-brand-orange/10',
      title: 'Fundraising & growth expertise',
      text: 'Benefit from deep experience in fundraising, financial modeling, and growth planning.',
    },
    {
      icon: <LineChart className="h-8 w-8 text-brand-orange" />,       accent: 'bg-brand-orange', iconBg: 'bg-brand-orange/10',
      title: 'Scalable support',
      text: "Our services grow with your business, adapting to your evolving financial needs.",
    },
    {
      icon: <FileText className="h-8 w-8 text-brand-orange" />,        accent: 'bg-brand-orange', iconBg: 'bg-brand-orange/10',
      title: 'Singapore expertise',
      text: "Work with professionals who understand Singapore's startup and regulatory landscape.",
    },
    {
      icon: <Target className="h-8 w-8 text-brand-orange" />,          accent: 'bg-brand-orange', iconBg: 'bg-brand-orange/10',
      title: 'Focus on growth',
      text: 'Stay focused on building your business while a seasoned expert handles the numbers.',
    },
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-blue-50/50 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose a Fractional CFO in Singapore?
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hiring a full-time CFO is often out of reach for early-stage companies. With our outsourced CFO services, you gain:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {insights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative group h-full"
            >
              <div className={`${item.accent} h-3 w-full rounded-t-lg`}></div>
              <Card className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className={`absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-[100px] -mr-12 -mt-12 group-hover:bg-blue-200 transition-colors duration-300`}></div>
                <CardHeader className="px-0 pt-0">
                  <div className={`${item.iconBg} w-16 h-16 mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:rotate-6`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.title}</h3>
                </CardHeader>
                <CardContent className="px-0 pb-0 flex-grow flex flex-col justify-between">
                  <p className="text-lg text-gray-700">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
