import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCountry } from "@/contexts/CountryContext";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";

// Import the company logo
import companyLogo from "/lovable-uploads/5f2bc1cf-2bab-424d-8245-eb52af504603.png";

// Navigation dropdown data
const navItems = [
  {
    title: "Home",
    path: "/",
    dropdown: false
  },
  {
    title: "About Us",
    path: "/about",
    dropdown: false
  },
  {
    title: "Accounting",
    path: "/accounting-services-in-singapore",
    dropdown: true,
    items: [
      { title: "Accounting Services", path: "/accounting-services-in-singapore" },
      { title: "Bookkeeping", path: "/bookkeeping-services-in-singapore" },
      { title: "Payroll", path: "/payroll-services-in-singapore" },
      { title: "Taxation & Compliance", path: "/taxation" }
    ]
  },
  {
    title: "Part Time CFO",
    path: "/part-time-cfo",
    dropdown: true,
    items: [
      { title: "Part Time CFO", path: "/part-time-cfo" },
      { title: "Cash Flow Modelling", path: "/cash-flow-services-in-singapore" }
    ]
  },
  {
    title: "Contact Us",
    path: "/contact",
    dropdown: false
  },
  {
    title: "Resources",
    path: "/achievements",
    dropdown: true,
    items: [
      { title: "Blog", path: "/blog" },
      { title: "Success Stories", path: "/success-stories" },
      { title: "Guide", path: "/guide" },
      { title: "Achievements & Awards", path: "/achievements" },
      { title: "In The News", path: "/news" }
    ]
  }
];

export const Navbar = () => {
  const { getCountryUrl } = useCountry();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = (title: string) => {
    if (openDropdown === title) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(title);
    }
  };

  // Handle navigation with consistent absolute paths
  const handleNavigation = (path: string) => {
    console.log("Navigation requested to:", path);
    
    // Always navigate using absolute paths with country prefix
    const url = getCountryUrl(path);
    console.log("Navigating to absolute URL:", url);
    
    // Navigate to the URL
    navigate(url, { replace: false });
    
    // Close the mobile menu after navigation
    setMobileMenuOpen(false);
    
    // Scroll to top after navigation
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Handle logo click to go home
  const handleLogoClick = () => {
    console.log("Logo clicked, navigating to home");
    // const homeUrl = getCountryUrl("");
    // console.log("Navigating to home URL:", homeUrl);
    
    // Navigate to home
    navigate("/");
    
    // Close the mobile menu
    setMobileMenuOpen(false);
    
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          {/* Logo - with navigation */}
          <div className="flex items-center">
            <div 
              onClick={handleLogoClick} 
              className="flex items-center ml-8 cursor-pointer"
              role="button"
              aria-label="Go to home page"
            >
              <img src={companyLogo} alt="Growwth Partners" className="h-11" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.dropdown ? (
                  <div className="flex flex-col">
                    <div
                      onClick={() => handleNavigation(item.path)}
                      className="px-3 py-2 text-gray-700 hover:text-brand-orange font-medium flex items-center cursor-pointer"
                    >
                      {item.title}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </div>
                    <div className="absolute left-0 mt-10 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white rounded-md shadow-lg py-2">
                        {item.items?.map((subItem) => (
                          <div
                            key={subItem.title}
                            onClick={() => handleNavigation(subItem.path)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-orange cursor-pointer"
                          >
                            {subItem.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => handleNavigation(item.path)}
                    className="px-3 py-2 text-gray-700 hover:text-brand-orange font-medium cursor-pointer"
                  >
                    {item.title}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <Button 
            onClick={() => setContactModalOpen(true)} 
            className="hidden lg:flex bg-brand-orange hover:bg-brand-orange/90 mr-4"
          >
            Speak To An Expert
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 border-t pt-4">
            {navItems.map((item) => (
              <div key={item.title} className="py-1">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="flex justify-between items-center w-full py-2 text-gray-700"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.title && (
                      <div className="pl-4 mt-1 border-l-2 border-gray-200">
                        {item.items?.map((subItem) => (
                          <div
                            key={subItem.title}
                            onClick={() => handleNavigation(subItem.path)}
                            className="block py-2 text-gray-600 hover:text-brand-orange cursor-pointer"
                          >
                            {subItem.title}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    onClick={() => handleNavigation(item.path)}
                    className="block py-2 text-gray-700 hover:text-brand-orange cursor-pointer"
                  >
                    {item.title}
                  </div>
                )}
              </div>
            ))}
            <Button 
              onClick={() => {
                setContactModalOpen(true);
                setMobileMenuOpen(false);
              }} 
              className="w-full mt-4 bg-brand-orange hover:bg-brand-orange/90"
            >
              Speak To An Expert
            </Button>
          </nav>
        )}
      </div>

      {/* Contact Dialog */}
      <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Speak To An Expert</DialogTitle>
            <DialogDescription className="text-center">
              Every Business Is Unique. Let Us Tailor A Plan For You! Fill In Your Details And An Expert Will Touch Base With You
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setContactModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </header>
  );
};
