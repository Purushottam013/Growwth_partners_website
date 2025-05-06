
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/optimized-image';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  url: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt, image, url }) => {
  const fallbackImage =
    'https://as2.ftcdn.net/v2/jpg/10/28/35/13/1000_F_1028351361_FZ2vwpQEZZjEDQxp70ICUoC7Qmb9nuZi.jpg';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="article-card h-full flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <OptimizedImage
          src={image}
          alt={title}
          fallbackSrc={fallbackImage}
          className="w-full h-full object-cover"
          width={400}
          height={200}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        <a
          href={url}
          className="inline-flex items-center font-medium text-brand-orange hover:text-brand-orange/90 transition-colors"
        >
          <span>Read More</span>
          <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
};
