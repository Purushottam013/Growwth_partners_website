
import { Layout } from "@/components/Layout";
import { PlaceholderContent } from "@/components/PlaceholderContent";

const TaxationPage = () => {
  return (
    <Layout>
      <PlaceholderContent 
        title="Taxation & Compliance" 
        description="Navigate Singapore's tax landscape confidently with our comprehensive taxation services, ensuring compliance while optimizing your tax position through strategic planning and expert guidance."
        imageBg="bg-gradient-to-r from-red-500 to-red-700"
        features={[
          {
            title: "Tax Planning & Strategy",
            description: "Expert guidance on tax incentives, exemptions, and strategic planning to optimize your business's tax position while ensuring full compliance with Singapore's tax regulations"
          },
          {
            title: "Corporate Tax Filing",
            description: "Comprehensive assistance with corporate tax returns, GST registration and filing, and management of tax correspondence with IRAS"
          },
          {
            title: "International Tax Advisory",
            description: "Specialized support for cross-border transactions, transfer pricing, and double tax treaties to help your business operate efficiently across multiple jurisdictions"
          }
        ]}
      />
    </Layout>
  );
};

export default TaxationPage;
