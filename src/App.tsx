
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CountryProvider } from "./contexts/CountryContext";

// Pages
import Home from "./pages/Home";
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
import News from "./pages/News";
import BlogAdminPage from "./pages/admin/BlogAdmin";
import BlogAdminLogin from "./pages/admin/BlogAdminLogin";

// CSS
import "./App.css";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <CountryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/bookkeeping" element={<Bookkeeping />} />
          <Route path="/cash-flow-management" element={<CashFlow />} />
          <Route path="/company-incorporation" element={<CompanyIncorporation />} />
          <Route path="/corporate-secretary" element={<CorporateSecretary />} />
          <Route path="/part-time-cfo" element={<FractionalCFO />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/taxation" element={<Taxation />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/news" element={<News />} />
          <Route path="/admin/blog" element={<BlogAdminPage />} />
          <Route path="/admin/login" element={<BlogAdminLogin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </CountryProvider>
  );
}

export default App;
