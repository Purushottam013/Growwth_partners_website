
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Seo } from "@/components/Seo";

const PrivacyPolicyPage = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Growwth Partners",
    "description": "Growwth Partners' privacy policy outlining how we collect, use, and protect your personal information",
    "publisher": {
      "@type": "Organization",
      "name": "Growwth Partners"
    }
  };

  return (
    <Layout>
      <Seo
        title="Privacy Policy | Data Protection & Security | Growwth Partners Singapore"
        description="Read Growwth Partners' comprehensive privacy policy. Learn how we protect your personal and business data with industry-leading security measures and compliance standards."
        schema={organizationSchema}
      />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Your privacy and data security are our top priorities. Learn how we protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: January 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email, phone number, business address)</li>
                <li>Business details (company name, industry, size)</li>
                <li>Financial information necessary for our services</li>
                <li>Communication preferences and service requirements</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 mt-6">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Website usage data and analytics</li>
                <li>IP address and browser information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accounting, CFO, and financial advisory services</li>
                <li>Communicate about our services and respond to inquiries</li>
                <li>Process payments and manage client relationships</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and website functionality</li>
                <li>Send relevant business insights and updates (with your consent)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Data Security & Protection</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h3 className="text-lg font-semibold mb-3">Security Measures</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Industry-standard encryption for data transmission and storage</li>
                <li>Multi-factor authentication for sensitive systems</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Restricted access to personal information on a need-to-know basis</li>
                <li>Secure cloud infrastructure with backup and disaster recovery</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 mt-6">Compliance Standards</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Singapore Personal Data Protection Act (PDPA) compliance</li>
                <li>International data protection best practices</li>
                <li>Regular staff training on data privacy and security</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="mb-4">We do not sell, trade, or rent your personal information. We may share information only in these limited circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With trusted service providers who assist in delivering our services</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, property, or safety</li>
                <li>With your explicit consent</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="mb-4">Under Singapore's PDPA and international standards, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information we hold</li>
                <li>Request correction of inaccurate information</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>File a complaint with relevant authorities</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>For privacy-related questions or to exercise your rights, contact us:</p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> privacy@growwthpartners.com</p>
                <p><strong>Phone:</strong> +65 6123 4567</p>
                <p><strong>Address:</strong> Singapore Business Hub, 123 Finance Street, Singapore 123456</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
