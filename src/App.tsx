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
import News from "./pages/News";
import BlogAdminPage from "./pages/admin/BlogAdmin";
import BlogAdminLogin from "./pages/admin/BlogAdminLogin";

// CSS
import "./App.css";
import { Toaster } from "@/components/ui/toaster";
import HealthcareCaseStudy from "./pages/case-studies/HealthcareCaseStudy";
import EcommerceCaseStudy from "./pages/case-studies/EcommerceCaseStudy";
import FoodTechCaseStudy from "./pages/case-studies/FoodTechCaseStudy";

function App() {
  return (
    <Router>
      <CountryProvider>
        <Routes>
          {/* Singapore Routes (Default) */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/bookkeeping" element={<Bookkeeping />} />
          <Route path="/cash-flow" element={<CashFlow />} />
          <Route path="/company-incorporation" element={<CompanyIncorporation />} />
          <Route path="/corporate-secretary" element={<CorporateSecretary />} />
          <Route path="/fractional-cfo" element={<FractionalCFO />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/taxation" element={<Taxation />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/guide/:slug" element={<GuideSingle />} />
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
          <Route path="/uae/accounting" element={<Accounting />} />
          <Route path="/uae/bookkeeping" element={<Bookkeeping />} />
          <Route path="/uae/cash-flow" element={<CashFlow />} />
          <Route path="/uae/company-incorporation" element={<CompanyIncorporation />} />
          <Route path="/uae/corporate-secretary" element={<CorporateSecretary />} />
          <Route path="/uae/fractional-cfo" element={<FractionalCFO />} />
          <Route path="/uae/payroll" element={<Payroll />} />
          <Route path="/uae/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/uae/terms" element={<Terms />} />
          <Route path="/uae/success-stories" element={<SuccessStories />} />
          <Route path="/uae/taxation" element={<Taxation />} />
          <Route path="/uae/achievements" element={<Achievements />} />
          <Route path="/uae/guide" element={<Guide />} />
          <Route path="/uae/news" element={<News />} />
          <Route path="/uae/resources" element={<Navigate to="/uae/achievements" replace />} />

          {/* Australia Routes */}
          <Route path="/australia" element={<HomeAustralia />} />
          <Route path="/australia/about" element={<About />} />
          <Route path="/australia/blog" element={<Blog />} />
          <Route path="/australia/blog/:slug" element={<BlogPost />} />
          <Route path="/australia/contact" element={<Contact />} />
          <Route path="/australia/accounting" element={<Accounting />} />
          <Route path="/australia/bookkeeping" element={<Bookkeeping />} />
          <Route path="/australia/cash-flow" element={<CashFlow />} />
          <Route path="/australia/company-incorporation" element={<CompanyIncorporation />} />
          <Route path="/australia/corporate-secretary" element={<CorporateSecretary />} />
          <Route path="/australia/fractional-cfo" element={<FractionalCFO />} />
          <Route path="/australia/payroll" element={<Payroll />} />
          <Route path="/australia/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/australia/terms" element={<Terms />} />
          <Route path="/australia/success-stories" element={<SuccessStories />} />
          <Route path="/australia/taxation" element={<Taxation />} />
          <Route path="/australia/achievements" element={<Achievements />} />
          <Route path="/australia/guide" element={<Guide />} />
          <Route path="/australia/news" element={<News />} />
          <Route path="/australia/resources" element={<Navigate to="/australia/achievements" replace />} />

          {/* Case Study Routes */}
          <Route path="/case-studies/healthcare" element={<HealthcareCaseStudy />} />
          <Route path="/case-studies/ecommerce" element={<EcommerceCaseStudy />} />
          <Route path="/case-studies/food-tech" element={<FoodTechCaseStudy />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </CountryProvider>
    </Router>
  );
}

export default App;
