
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCountry } from "@/contexts/CountryContext";
import { ArrowRight, BarChart3, Book, Calculator, CreditCard, FileSpreadsheet, Users } from "lucide-react";

const services = [
  {
    title: "Fractional CFO",
    description: "Get strategic financial guidance from experienced CFOs without the full-time cost.",
    icon: BarChart3,
    color: "bg-brand-orange text-white",
    link: "fractional-cfo"
  },
  {
    title: "Accounting Services",
    description: "Keep your financial records accurate and compliant with our expert accounting services.",
    icon: Book,
    color: "bg-brand-green text-white",
    link: "accounting"
  },
  {
    title: "Bookkeeping",
    description: "Maintain organized financial records with our thorough bookkeeping services.",
    icon: FileSpreadsheet,
    color: "bg-brand-blue text-white",
    link: "bookkeeping"
  },
  {
    title: "Payroll Management",
    description: "Ensure your employees get paid accurately and on time, while staying compliant with regulations.",
    icon: CreditCard,
    color: "bg-brand-yellow text-gray-800",
    link: "payroll"
  },
  {
    title: "Cash Flow Modelling",
    description: "Predict and optimize your business cash flow with our advanced modeling services.",
    icon: Calculator,
    color: "bg-purple-600 text-white",
    link: "cash-flow"
  },
  {
    title: "Tax & Compliance",
    description: "Stay compliant with all tax regulations and optimize your tax position.",
    icon: Users,
    color: "bg-red-600 text-white",
    link: "taxation"
  }
];

export const ServicesSection = () => {
  const { getCountryUrl } = useCountry();
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-orange/5 rounded-full"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-blue/5 rounded-full"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Financial Services</h2>
          <p className="text-lg text-gray-600">
            Comprehensive financial solutions designed to help your business thrive in today's competitive market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 overflow-hidden group hover:shadow-lg transition-all duration-300 card-hover">
              <CardHeader className={`${service.color} transition-all duration-300`}>
                <div className="flex justify-between items-center">
                  <service.icon className="h-8 w-8" />
                  <span className="text-xs font-medium uppercase tracking-wider opacity-70">Finance</span>
                </div>
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button 
                  asChild
                  variant="ghost" 
                  className="p-0 hover:bg-transparent hover:text-brand-orange transition-colors"
                >
                  <a href={getCountryUrl(service.link)}>
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
