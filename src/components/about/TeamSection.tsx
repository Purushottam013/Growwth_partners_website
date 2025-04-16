
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const teamMembers = [
  {
    name: "Bijal Shah",
    role: "Senior Manager, CFO Advisory Services",
    image: "/lovable-uploads/18de98ba-27fa-40d2-bd48-fb2431a40bc6.png",
    description: "A Chartered Accountant with 15+ years of experience, specializes in corporate finance, strategic financial management, and operational excellence. She excels in optimizing financial structures, driving profitability, and ensuring regulatory compliance. She is also proficient in ERP systems like SAP and Oracle."
  },
  {
    name: "Preeti",
    role: "Head of Finance",
    image: "/lovable-uploads/b3f5b032-60d2-4732-bc8f-d45a373b18f1.png",
    description: "A Chartered Accountant with over 20 years of experience in finance and tax. Formerly the Chief Editor at ClearTax, she has a deep understanding of economic and tax policy. She has also worked with PwC and American Express, bringing extensive expertise to Growth Partners."
  },
  {
    name: "Hemavathy",
    role: "Financial Services Expert",
    image: "/lovable-uploads/60a22a67-08dc-4496-a008-cb945442b8e3.png",
    description: "With 13 years of experience in financial services, internal and statutory audits, taxation, and regulatory compliance across sectors like banks, corporates, and trusts. She brings expertise in data analytics, risk analysis, and Indian Accounting Standards."
  },
  {
    name: "Pooja Agarwal",
    role: "Financial Consultant",
    image: "/lovable-uploads/c2037031-500d-4bae-8f4a-c11499b5343d.png",
    description: "A Chartered Accountant with over 10 years of experience in commercial lending analysis, audits, corporate finance, legal compliance, bookkeeping, treasury, risk consulting, taxation, and budgeting. Her versatile job profile spans various industries."
  }
];

export const TeamSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Team Growwth</h2>
          <p className="text-xl text-gray-600">
            Meet our dedicated team of financial experts. Each member brings a wealth of experience and a commitment to personalized service, ensuring our clients receive the best possible advice and support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-center">{member.name}</CardTitle>
                  <CardDescription className="text-center">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

