
import { BadgeCheck, Award, Star, TrendingUp } from "lucide-react";

const achievements = [
  {
    icon: TrendingUp,
    title: "15+ Years",
    description: "Of Excellence in Financial Services",
    color: "bg-brand-orange/10 text-brand-orange"
  },
  {
    icon: BadgeCheck,
    title: "5,000+",
    description: "Satisfied Clients Across The Globe",
    color: "bg-brand-green/10 text-brand-green"
  },
  {
    icon: Award,
    title: "25+",
    description: "Industry Awards & Recognitions",
    color: "bg-brand-blue/10 text-brand-blue"
  },
  {
    icon: Star,
    title: "99%",
    description: "Client Retention Rate Year Over Year",
    color: "bg-brand-yellow/10 text-brand-yellow"
  }
];

export const AchievementsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-lg text-gray-300">
            Our track record speaks for itself - we've helped thousands of businesses achieve financial excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-4`}>
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 px-4 py-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Ready to Transform Your Business Finances?</h3>
            <p className="text-gray-300 mt-2">Talk to one of our financial experts today!</p>
          </div>
          <button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-3 rounded-md transition-colors">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
