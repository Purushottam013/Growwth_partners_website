import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CountryProvider } from "./contexts/CountryContext";
import { HelmetProvider } from "react-helmet-async";

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
      <HelmetProvider>
        <Router>
          <CountryProvider>
            <CanonicalUpdater />
            <Routes>
              {/* Singapore Routes (Default) */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact-us" element={<Contact />} />
              {/* New SEO-friendly URLs */}
              <Route path="/accounting-services-in-singapore" element={<Accounting />} />
              <Route path="/bookkeeping-services-in-singapore" element={<Bookkeeping />} />
              <Route path="/payroll-services-in-singapore" element={<Payroll />} />
              <Route path="/cash-flow-services-in-singapore" element={<CashFlow />} />
              <Route path="/company-incorporation-services-in-singapore" element={<CompanyIncorporation />} />
              <Route path="/corporate-secretary-services-in-singapore" element={<CorporateSecretary />} />
              <Route path="/part-time-cfo" element={<FractionalCFO />} />
              {/* Redirects */}
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
              <Route path="/guide/financial-reporting-standards-singapore" element={<FinancialReportingGuide />} />
              <Route path="/news" element={<News />} />
              <Route path="/resources" element={<Navigate to="/achievements" replace />} />

              {/* Admin Routes */}
              <Route path="/admin/blog" element={<BlogAdminPage />} />
              <Route path="/admin/login" element={<BlogAdminLogin />} />

              {/* UAE Routes      NOTE: No /uae/ prefix for service pages, only in the page slug */}
              <Route path="/uae" element={<HomeUAE />} />
              <Route path="/uae/about" element={<About />} />
              <Route path="/uae/blog" element={<Blog />} />
              <Route path="/uae/blog/:slug" element={<BlogPost />} />
              <Route path="/uae/contact-us" element={<Contact />} />

              <Route path="/accounting-services-in-uae" element={<Accounting />} />
              <Route path="/bookkeeping-services-in-uae" element={<Bookkeeping />} />
              <Route path="/payroll-services-in-uae" element={<Payroll />} />
              <Route path="/cash-flow-services-in-uae" element={<CashFlow />} />
              <Route path="/company-incorporation-services-in-uae" element={<CompanyIncorporation />} />
              <Route path="/corporate-secretary-services-in-uae" element={<CorporateSecretary />} />
              <Route path="/part-time-cfo-uae" element={<FractionalCFO />} />

              {/* UAE Redirects (old routes -> new) */}
              <Route path="/uae/accounting-services-in-singapore" element={<Navigate to="/accounting-services-in-uae" replace />} />
              <Route path="/uae/bookkeeping-services-in-singapore" element={<Navigate to="/bookkeeping-services-in-uae" replace />} />
              <Route path="/uae/payroll-services-in-singapore" element={<Navigate to="/payroll-services-in-uae" replace />} />
              <Route path="/uae/cash-flow-services-in-singapore" element={<Navigate to="/cash-flow-services-in-uae" replace />} />
              <Route path="/uae/company-incorporation-services-in-singapore" element={<Navigate to="/company-incorporation-services-in-uae" replace />} />
              <Route path="/uae/corporate-secretary-services-in-singapore" element={<Navigate to="/corporate-secretary-services-in-uae" replace />} />
              <Route path="/uae/part-time-cfo" element={<Navigate to="/part-time-cfo-uae" replace />} />

              {/* Australia Routes      NOTE: No /australia/ prefix for service pages, only in the page slug */}
              <Route path="/australia" element={<HomeAustralia />} />
              <Route path="/australia/about" element={<About />} />
              <Route path="/australia/blog" element={<Blog />} />
              <Route path="/australia/blog/:slug" element={<BlogPost />} />
              <Route path="/australia/contact-us" element={<Contact />} />

              <Route path="/accounting-services-in-australia" element={<Accounting />} />
              <Route path="/bookkeeping-services-in-australia" element={<Bookkeeping />} />
              <Route path="/payroll-services-in-australia" element={<Payroll />} />
              <Route path="/cash-flow-services-in-australia" element={<CashFlow />} />
              <Route path="/company-incorporation-services-in-australia" element={<CompanyIncorporation />} />
              <Route path="/corporate-secretary-services-in-australia" element={<CorporateSecretary />} />
              <Route path="/part-time-cfo-australia" element={<FractionalCFO />} />

              {/* Australia Redirects (old routes -> new) */}
              <Route path="/australia/accounting-services-in-singapore" element={<Navigate to="/accounting-services-in-australia" replace />} />
              <Route path="/australia/bookkeeping-services-in-singapore" element={<Navigate to="/bookkeeping-services-in-australia" replace />} />
              <Route path="/australia/payroll-services-in-singapore" element={<Navigate to="/payroll-services-in-australia" replace />} />
              <Route path="/australia/cash-flow-services-in-singapore" element={<Navigate to="/cash-flow-services-in-australia" replace />} />
              <Route path="/australia/company-incorporation-services-in-singapore" element={<Navigate to="/company-incorporation-services-in-australia" replace />} />
              <Route path="/australia/corporate-secretary-services-in-singapore" element={<Navigate to="/corporate-secretary-services-in-australia" replace />} />
              <Route path="/australia/part-time-cfo" element={<Navigate to="/part-time-cfo-australia" replace />} />

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
      </HelmetProvider>
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
