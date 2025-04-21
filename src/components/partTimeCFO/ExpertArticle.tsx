import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ChevronRight, BarChart, LineChart, PieChart } from 'lucide-react';

export const ExpertArticles: React.FC = () => {
  const cards = [
    {
      icon: <BarChart className="w-6 h-6 text-brand-blue" />,        
      headerBg: 'bg-blue-100 group-hover:bg-blue-200',
      accent: 'bg-blue-500 group-hover:w-3',
      title: 'Essential CFO Services',
      items: [
        'Cash flow optimisation',
        'Financial dashboards and metrics',
        'Scheduled strategic review meetings',
      ],
    },
    {
      icon: <LineChart className="w-6 h-6 text-brand-orange" />,      
      headerBg: 'bg-brand-orange/10 group-hover:bg-brand-orange/20',
      accent: 'bg-brand-orange group-hover:w-3',
      title: 'Custom CFO Support',
      items: [
        'On-demand financial leadership',
        'Deep-dive reporting and advisory',
        'Strategic input for critical business decisions',
      ],
    },
    {
      icon: <PieChart className="w-6 h-6 text-purple-600" />,        
      headerBg: 'bg-purple-100 group-hover:bg-purple-200',
      accent: 'bg-purple-500 group-hover:w-3',
      title: 'Comprehensive Services',
      items: [
        'Financial planning and analysis',
        'Cash flow modelling and forecasting',
        'Hiring, expansion, and risk strategy',
      ],
    },
  ];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold mb-4 text-gray-900">
            Case Study – Achieving Remarkable Growth
          </h3>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 mb-2">A Data-Driven Success Story</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A fast-growing experiential learning company partnered with our CFO team to gain deeper control over their financial strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <div className={`absolute left-0 top-0 w-1 h-full ${card.accent} transition-all duration-300`}></div>
              <Card className="border-none shadow-lg h-full">
                <CardHeader className="pb-2">
                  <div className={`${card.headerBg} w-12 h-12 mb-4 rounded-lg flex items-center justify-center transition-colors`}>  
                    {card.icon}
                  </div>
                  <h4 className="text-2xl font-semibold text-gray-900">
                    {card.title}
                  </h4>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {card.items.map((text, i) => (
                      <li key={i} className="flex items-center text-gray-700 text-lg">
                        <ChevronRight className="mr-2 h-5 w-5 text-current flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertArticles;
