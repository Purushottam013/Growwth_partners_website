
import { Card, CardContent } from "@/components/ui/card";
import { Guide } from "@/hooks/useGuides";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface GuideCardProps {
  guide: Guide;
}

export const GuideCard = ({ guide }: GuideCardProps) => {
  return (
    <Link 
      to={`/guide/${guide.slug}`}
      className="block group"
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <img
            src={guide.Image}
            alt={guide.Title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <div className="mb-4">
            <span className="px-3 py-1 text-sm font-medium text-brand-orange bg-brand-orange/10 rounded-full">
              {guide.Category}
            </span>
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-brand-orange transition-colors">
            {guide.Title}
          </h3>
          <p className="mb-4 text-gray-600 line-clamp-2">
            {guide.Excerpt}
          </p>
          <div className="flex items-center text-brand-orange font-medium">
            <span>Read more</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
