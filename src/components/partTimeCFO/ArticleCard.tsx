
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { AnimatedElement } from '@/components/ui/animated-element';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  url: string;
  index?: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt, image, url, index = 0 }) => {
  const fallbackImage =
    'https://as2.ftcdn.net/v2/jpg/10/28/35/13/1000_F_1028351361_FZ2vwpQEZZjEDQxp70ICUoC7Qmb9nuZi.jpg';

  return (
    <AnimatedElement
      animation="fade-in"
      delay={0.1 + (index * 0.1)} // Staggered animation
      className="article-card h-full flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <OptimizedImage
          src={image}
          alt={title}
          fallbackSrc={fallbackImage}
          className="w-full h-full object-cover"
          width={400}
          height={200}
          lazyBoundary="300px"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        <a
          href={url}
          className="inline-flex items-center font-medium text-brand-orange hover:text-brand-orange/90 transition-colors group"
        >
          <span>Read More</span>
          <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </AnimatedElement>
  );
};
