
import { Guide } from "@/data/guides";

interface GuideHeroProps {
  guide: Guide;
}

export const GuideHero = ({ guide }: GuideHeroProps) => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-16 mb-12 rounded-lg relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5 bg-grid-pattern"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">{guide.Title}</h1>
            {guide.Excerpt && (
              <p className="text-lg text-gray-600 mb-8">{guide.Excerpt}</p>
            )}
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                {guide.Category}
              </span>
              {guide.publishedAt && (
                <time className="text-gray-500 text-sm">
                  Published on {new Date(guide.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
