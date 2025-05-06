
import { Guide } from "@/data/guides";

interface KeyTakeawaysSectionProps {
  guide: Guide;
  isSpecialGuide: boolean;
}

export const KeyTakeawaysSection = ({ guide, isSpecialGuide }: KeyTakeawaysSectionProps) => {
  if (!guide.keyTakeaways || guide.keyTakeaways.length === 0) {
    return null;
  }

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Key Takeaways</h2>
      {isSpecialGuide ? (
        <div className="space-y-6">
          {/* First row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guide.keyTakeaways.slice(0, 3).map((takeaway, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-4">
                  <img
                    src={guide.keyTakeawayImages?.[index] || "/placeholder.svg"}
                    alt={takeaway.title}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{takeaway.title}</h3>
                <p className="text-sm text-gray-600">{takeaway.description}</p>
              </div>
            ))}
          </div>

          {/* Second row - 2 items */}
          {guide.keyTakeaways.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-2/3 mx-auto">
              {guide.keyTakeaways.slice(3, 5).map((takeaway, index) => (
                <div key={index + 3} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 mb-4">
                    <img
                      src={guide.keyTakeawayImages?.[index + 3] || "/placeholder.svg"}
                      alt={takeaway.title}
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{takeaway.title}</h3>
                  <p className="text-sm text-gray-600">{takeaway.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {guide.keyTakeaways.map((takeaway, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4">
                <img
                  src={guide.keyTakeawayImages?.[index] || "/placeholder.svg"}
                  alt={takeaway.title}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{takeaway.title}</h3>
              <p className="text-sm text-gray-600">{takeaway.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
