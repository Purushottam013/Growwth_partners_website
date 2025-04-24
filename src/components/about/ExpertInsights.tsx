import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
const articles = [{
  title: "Why Singapore is the ideal location for startups",
  description: "Singapore has a reputation for ease in starting a business owing to startup grants and efficient tax administration. It is known as the \"Silicon Valley of Asia.\"",
  url: "https://preview--growwth-digital-hub.lovable.app/blog/why-singapore-is-the-ideal-location-for-startups/"
}, {
  title: "Various funding options available for startups",
  description: "Everything a company requires, including financing programmes, tax breaks, cash grants, everything must be available in the economy.",
  url: "https://preview--growwth-digital-hub.lovable.app/blog/various-funding-options-available-for-startups/"
}, {
  title: "Grants for Singapore Startups",
  description: "Singapore is known as Asia's \"Silicon Valley\" because it is the most desirable location for business startups. In addition to its low tax rates",
  url: "https://preview--growwth-digital-hub.lovable.app/blog/grants-for-singapore-startups/"
}];
export const ExpertInsights = () => {
  return <section className="bg-white py-[40px]">
      <div className="container-custom">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-3xl md:text-4xl font-bold text-center mb-16">
          From our experts! Read now
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1,
          duration: 0.6
        }}>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="group-hover:text-brand-orange transition-colors mb-5">
                      {article.title}
                      <ArrowRight className="inline-block ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                    </CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            </motion.div>)}
        </div>
      </div>
    </section>;
};