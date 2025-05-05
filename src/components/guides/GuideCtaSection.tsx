
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface GuideCtaSectionProps {
  onContactClick: () => void;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const GuideCtaSection = ({
  onContactClick,
  title = "Book a free call with our expert to discuss your bookkeeping needs and save time and effort.",
  subtitle = "We are here to help you!",
  buttonText = "Book a Free Call"
}: GuideCtaSectionProps) => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white mb-12 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">{title}</h3>
          <p className="text-xl mb-8">{subtitle}</p>
          <Button
            onClick={onContactClick}
            size="lg"
            className="bg-white text-blue-700 hover:bg-gray-100 font-semibold text-lg px-8 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            {buttonText}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
