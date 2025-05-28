
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Seo } from "@/components/Seo";

const TermsPage = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions - Growwth Partners",
    "description": "Terms and conditions for Growwth Partners' financial and accounting services in Singapore",
    "publisher": {
      "@type": "Organization",
      "name": "Growwth Partners"
    }
  };

  return (
    <Layout>
      <Seo
        title="Terms & Conditions | Service Agreement | Growwth Partners Singapore"
        description="Read Growwth Partners' terms and conditions for our accounting, CFO, and financial advisory services. Clear guidelines for our professional service engagement."
        schema={organizationSchema}
      />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-600">
            Professional service terms for our accounting, CFO, and financial advisory services.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: January 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Service Agreement</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="mb-4">
                These terms govern the provision of financial, accounting, and advisory services by Growwth Partners to our clients.
              </p>
              <h3 className="text-lg font-semibold mb-3">Our Services Include:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accounting and bookkeeping services</li>
                <li>Part-time and fractional CFO services</li>
                <li>Financial advisory and consulting</li>
                <li>Tax compliance and planning</li>
                <li>Company incorporation and secretarial services</li>
                <li>Payroll processing and management</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Client Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h3 className="text-lg font-semibold mb-3">Information Provision</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete financial information</li>
                <li>Submit documents and data in a timely manner</li>
                <li>Maintain proper business records and documentation</li>
                <li>Notify us promptly of any changes affecting your business</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 mt-6">Compliance</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comply with all applicable laws and regulations</li>
                <li>Review and approve financial statements and reports</li>
                <li>Implement recommended financial controls and procedures</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h3 className="text-lg font-semibold mb-3">Billing and Payment</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Monthly billing for ongoing services</li>
                <li>Project-based billing for specific engagements</li>
                <li>Payment due within 30 days of invoice date</li>
                <li>Late payment charges may apply for overdue accounts</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 mt-6">Service Fees</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fees are based on service complexity and scope</li>
                <li>Additional charges for urgent or rush services</li>
                <li>Travel expenses and third-party costs billed separately</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Professional Standards</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h3 className="text-lg font-semibold mb-3">Quality Assurance</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Services performed in accordance with professional standards</li>
                <li>Regular quality reviews and controls</li>
                <li>Continuous professional development of our team</li>
                <li>Adherence to ethical guidelines and best practices</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 mt-6">Confidentiality</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Strict confidentiality of all client information</li>
                <li>Secure handling and storage of business data</li>
                <li>Professional privilege protection where applicable</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="mb-4">
                Our liability is limited to the scope of services provided and professional standards applicable in Singapore.
              </p>
              <h3 className="text-lg font-semibold mb-3">Professional Indemnity</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comprehensive professional indemnity insurance coverage</li>
                <li>Protection for clients against professional negligence</li>
                <li>Coverage limits disclosed upon request</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Termination</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h3 className="text-lg font-semibold mb-3">Service Termination</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Either party may terminate with 30 days written notice</li>
                <li>Immediate termination for breach of contract</li>
                <li>Final billing and handover of records upon termination</li>
                <li>Confidentiality obligations continue post-termination</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>For questions about these terms or our services:</p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> legal@growwthpartners.com</p>
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

export default TermsPage;
