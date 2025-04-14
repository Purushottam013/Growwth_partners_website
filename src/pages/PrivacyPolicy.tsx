
import { Layout } from "@/components/Layout";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <div className="py-16 container-custom">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: April 14, 2025</p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to Growwth Partners. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">2. Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Identity Data: includes first name, last name, title</li>
            <li>Contact Data: includes email address, telephone number, address</li>
            <li>Technical Data: includes internet protocol (IP) address, browser type and version</li>
            <li>Usage Data: includes information about how you use our website</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-8 mb-4">3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>To provide you with services you have requested</li>
            <li>To improve our website and services</li>
            <li>To communicate with you about our services</li>
            <li>To comply with legal obligations</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-8 mb-4">4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">5. Your Legal Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Right to withdraw consent</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-8 mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <p>
            Email: jatin@growwthpartners.com<br />
            Phone: +65 8893 0720
          </p>
          
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
