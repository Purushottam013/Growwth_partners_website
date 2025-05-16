import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CountryProvider } from "./contexts/CountryContext";

// Pages
import Home from "./pages/Home";
import HomeUAE from "./pages/HomeUAE";
import HomeAustralia from "./pages/HomeAustralia";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Accounting from "./pages/Accounting";
import Bookkeeping from "./pages/Bookkeeping";
import CashFlow from "./pages/CashFlow";
import CompanyIncorporation from "./pages/CompanyIncorporation";
import CorporateSecretary from "./pages/CorporateSecretary";
import FractionalCFO from "./pages/FractionalCFO";
import Payroll from "./pages/Payroll";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import SuccessStories from "./pages/SuccessStories";
import Taxation from "./pages/Taxation";
import Achievements from "./pages/Achievements";
import Guide from "./pages/Guide";
import GuideSingle from "./pages/GuideSingle";
import FinancialReportingGuide from "./pages/FinancialReportingGuide";
import News from "./pages/News";
import BlogAdminPage from "./pages/admin/BlogAdmin";
import BlogAdminLogin from "./pages/admin/BlogAdminLogin";

// CSS
import "./App.css";
import { Toaster } from "@/components/ui/toaster";
import HealthcareCaseStudy from "./pages/case-studies/HealthcareCaseStudy";
import EcommerceCaseStudy from "./pages/case-studies/EcommerceCaseStudy";
import FoodTechCaseStudy from "./pages/case-studies/FoodTechCaseStudy";
import OnlineConsumerGoodsCaseStudy from "./pages/case-studies/OnlineConsumerGoodsCaseStudy";
import DataDrivenSuccessCaseStudy from "./pages/case-studies/DataDrivenSuccessCaseStudy";
import GamingIndustryCaseStudy from "./pages/case-studies/GamingIndustryCaseStudy";
import { CanonicalUpdater } from "@/components/CanonicalUpdater";

function App() {
  try {
    return (
      <Router>
        <CountryProvider>
          <CanonicalUpdater />
          <Routes>
            {/* Singapore Routes (Default) */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />

            {/* New SEO-friendly URLs */}
            <Route path="/accounting-services-in-singapore" element={<Accounting />} />
            <Route path="/bookkeeping-services-in-singapore" element={<Bookkeeping />} />
            <Route path="/payroll-services-in-singapore" element={<Payroll />} />
            <Route path="/cash-flow-services-in-singapore" element={<CashFlow />} />
            <Route path="/company-incorporation-services-in-singapore" element={<CompanyIncorporation />} />
            <Route path="/corporate-secretary-services-in-singapore" element={<CorporateSecretary />} />

            {/* Redirect old URLs to new SEO-friendly URLs (Singapore) */}
            <Route path="/accounting" element={<Navigate to="/accounting-services-in-singapore" replace />} />
            <Route path="/bookkeeping" element={<Navigate to="/bookkeeping-services-in-singapore" replace />} />
            <Route path="/payroll" element={<Navigate to="/payroll-services-in-singapore" replace />} />
            <Route path="/cash-flow" element={<Navigate to="/cash-flow-services-in-singapore" replace />} />
            <Route path="/company-incorporation" element={<Navigate to="/company-incorporation-services-in-singapore" replace />} />
            <Route path="/corporate-secretary" element={<Navigate to="/corporate-secretary-services-in-singapore" replace />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/taxation" element={<Taxation />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/guide/:slug" element={<GuideSingle />} />
            {/* Add specific route for the financial reporting guide */}
            <Route path="/guide/financial-reporting-standards-singapore" element={<FinancialReportingGuide />} />
            <Route path="/news" element={<News />} />
            {/* Resources route redirects to Achievements */}
            <Route path="/resources" element={<Navigate to="/achievements" replace />} />

            {/* Admin Routes */}
            <Route path="/admin/blog" element={<BlogAdminPage />} />
            <Route path="/admin/login" element={<BlogAdminLogin />} />

            {/* UAE Routes */}
            <Route path="/uae" element={<HomeUAE />} />
            <Route path="/uae/about" element={<About />} />
            <Route path="/uae/blog" element={<Blog />} />
            <Route path="/uae/blog/:slug" element={<BlogPost />} />
            <Route path="/uae/contact" element={<Contact />} />

            {/* New SEO-friendly URLs (UAE) */}
            <Route path="/uae/accounting-services-in-singapore" element={<Accounting />} />
            <Route path="/uae/bookkeeping-services-in-singapore" element={<Bookkeeping />} />
            <Route path="/uae/payroll-services-in-singapore" element={<Payroll />} />
            <Route path="/uae/cash-flow-services-in-singapore" element={<CashFlow />} />
            <Route path="/uae/company-incorporation-services-in-singapore" element={<CompanyIncorporation />} />
            <Route path="/uae/corporate-secretary-services-in-singapore" element={<CorporateSecretary />} />

            {/* Redirect old URLs to new SEO-friendly URLs (UAE) */}
            <Route path="/uae/accounting" element={<Navigate to="/uae/accounting-services-in-singapore" replace />} />
            <Route path="/uae/bookkeeping" element={<Navigate to="/uae/bookkeeping-services-in-singapore" replace />} />
            <Route path="/uae/payroll" element={<Navigate to="/uae/payroll-services-in-singapore" replace />} />
            <Route path="/uae/cash-flow" element={<Navigate to="/uae/cash-flow-services-in-singapore" replace />} />
            <Route path="/uae/company-incorporation" element={<Navigate to="/uae/company-incorporation-services-in-singapore" replace />} />
            <Route path="/uae/corporate-secretary" element={<Navigate to="/uae/corporate-secretary-services-in-singapore" replace />} />

            <Route path="/uae/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/uae/terms" element={<Terms />} />
            <Route path="/uae/success-stories" element={<SuccessStories />} />
            <Route path="/uae/taxation" element={<Taxation />} />
            <Route path="/uae/achievements" element={<Achievements />} />
            <Route path="/uae/guide" element={<Guide />} />
            <Route path="/uae/guide/:slug" element={<GuideSingle />} />
            <Route path="/uae/guide/financial-reporting-standards-singapore" element={<FinancialReportingGuide />} />
            <Route path="/uae/news" element={<News />} />
            <Route path="/uae/resources" element={<Navigate to="/uae/achievements" replace />} />

            {/* Australia Routes */}
            <Route path="/australia" element={<HomeAustralia />} />
            <Route path="/australia/about" element={<About />} />
            <Route path="/australia/blog" element={<Blog />} />
            <Route path="/australia/blog/:slug" element={<BlogPost />} />
            <Route path="/australia/contact" element={<Contact />} />

            {/* New SEO-friendly URLs (Australia) */}
            <Route path="/australia/accounting-services-in-singapore" element={<Accounting />} />
            <Route path="/australia/bookkeeping-services-in-singapore" element={<Bookkeeping />} />
            <Route path="/australia/payroll-services-in-singapore" element={<Payroll />} />
            <Route path="/australia/cash-flow-services-in-singapore" element={<CashFlow />} />
            <Route path="/australia/company-incorporation-services-in-singapore" element={<CompanyIncorporation />} />
            <Route path="/australia/corporate-secretary-services-in-singapore" element={<CorporateSecretary />} />

            {/* Redirect old URLs to new SEO-friendly URLs (Australia) */}
            <Route path="/australia/accounting" element={<Navigate to="/australia/accounting-services-in-singapore" replace />} />
            <Route path="/australia/bookkeeping" element={<Navigate to="/australia/bookkeeping-services-in-singapore" replace />} />
            <Route path="/australia/payroll" element={<Navigate to="/australia/payroll-services-in-singapore" replace />} />
            <Route path="/australia/cash-flow" element={<Navigate to="/australia/cash-flow-services-in-singapore" replace />} />
            <Route path="/australia/company-incorporation" element={<Navigate to="/australia/company-incorporation-services-in-singapore" replace />} />
            <Route path="/australia/corporate-secretary" element={<Navigate to="/australia/corporate-secretary-services-in-singapore" replace />} />

            <Route path="/australia/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/australia/terms" element={<Terms />} />
            <Route path="/australia/success-stories" element={<SuccessStories />} />
            <Route path="/australia/taxation" element={<Taxation />} />
            <Route path="/australia/achievements" element={<Achievements />} />
            <Route path="/australia/guide" element={<Guide />} />
            <Route path="/australia/guide/:slug" element={<GuideSingle />} />
            <Route path="/australia/guide/financial-reporting-standards-singapore" element={<FinancialReportingGuide />} />
            <Route path="/australia/news" element={<News />} />
            <Route path="/australia/resources" element={<Navigate to="/australia/achievements" replace />} />

            {/* Case Study Routes */}
            <Route path="/case-studies/healthcare" element={<HealthcareCaseStudy />} />
            <Route path="/case-studies/ecommerce" element={<EcommerceCaseStudy />} />
            <Route path="/case-studies/food-tech" element={<FoodTechCaseStudy />} />
            <Route path="/case-studies/online-consumer-goods" element={<OnlineConsumerGoodsCaseStudy />} />
            <Route path="/case-studies/data-driven-success" element={<DataDrivenSuccessCaseStudy />} />
            <Route path="/case-studies/gaming-industry" element={<GamingIndustryCaseStudy />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </CountryProvider>
      </Router>
    );
  } catch (error) {
    console.error("Error in App component:", error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Something went wrong</h1>
          <p className="text-lg text-gray-700 mb-6">We're having trouble loading the application.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Refresh the page
          </button>
        </div>
      </div>
    );
  }
}

export default App;
