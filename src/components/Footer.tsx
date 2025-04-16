import { Link, useNavigate } from "react-router-dom";
import { useCountry } from "@/contexts/CountryContext";
import { 
  Globe, 
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Youtube,
  ChevronUp,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import companyLogo from "/lovable-uploads/5f2bc1cf-2bab-424d-8245-eb52af504603.png";
import countryDropdownImage from "/lovable-uploads/7cf2ab2c-86de-4623-9488-a190961c93cd.png";

export const Footer = () => {
  const { country, setCountry, getCountryUrl } = useCountry();
  const navigate = useNavigate();

  const formatCountryName = (countryCode: string) => {
    return countryCode.charAt(0).toUpperCase() + countryCode.slice(1);
  };

  const getIconColor = () => {
    switch(country) {
      case 'australia':
        return '#06C0A9';
      case 'uae':
        return '#FFBE00';
      default:
        return '#F97316'; // brand-orange for Singapore
    }
  };

  const iconColor = getIconColor();

  const handleCountryChange = (newCountry: 'singapore' | 'uae' | 'australia') => {
    setCountry(newCountry);
  };

  const handleNavigation = (path: string) => {
    const url = getCountryUrl(path);
    console.log("Footer navigating to:", url);
    navigate(url);
  };

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={companyLogo} alt="Growwth Partners" className="h-12 bg-white p-1 rounded" />
              <span className="ml-3 text-xl font-semibold">Growwth Partners</span>
            </div>
            <p className="text-gray-300">
              Get started swiftly & easily with us to manage and grow your business efficiently through our CFO, Finance & Accounting and Growth Solutions.
            </p>
            <div className="flex space-x-12">
              <a 
                href="https://www.youtube.com/@GrowwthPartners" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                <Youtube size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/company/growwth-partners/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <Button 
              className="bg-brand-orange hover:bg-brand-orange/90 w-full sm:w-auto"
              onClick={() => window.location.href = "tel:+6588930720"}
            >
              <Phone className="mr-2 h-4 w-4" /> CALL US TODAY
            </Button>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-700">Contact</h3>
            <ul className="space-y-3 text-gray-300 mt-5">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" style={{color: iconColor}} />
                <a href="tel:+6588930720" className="hover:text-brand-orange transition-colors">+65 8893 0720</a>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 mr-2 mt-1" style={{color: iconColor}} />
                <a href="mailto:jatin@growwthpartners.com" className="hover:text-brand-orange transition-colors">jatin@growwthpartners.com</a>
              </li>
            </ul>
            
            <h3 className="text-xl font-bold mt-8 mb-4 pb-2 border-b border-gray-700 flex items-center">
              <MapPin className="h-4 w-4 mr-2" style={{color: iconColor}} />
              Our Locations
            </h3>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="w-full mt-5 flex items-center justify-between bg-gray-800 text-white p-3 rounded-full border border-gray-700 focus:outline-none hover:bg-gray-700"
                >
                  <div className="flex items-center">
                    <Globe className="mr-3 h-5 w-5 text-white" />
                    <span className="text-white text-base">{formatCountryName(country)}</span>
                  </div>
                  <div className="flex flex-col">
                    <ChevronUp className="h-4 w-4 text-white" />
                    <ChevronDown className="h-4 w-4 text-white mt-[-4px]" />
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-gray-800 border-gray-700 w-[200px]">
                <DropdownMenuItem 
                  className={country === 'singapore' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'text-white hover:bg-gray-700'}
                  onClick={() => handleCountryChange('singapore')}
                >
                  <span className="mr-2">🇸🇬</span> Singapore
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={country === 'uae' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'text-white hover:bg-gray-700'}
                  onClick={() => handleCountryChange('uae')}
                >
                  <span className="mr-2">🇦🇪</span> UAE
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={country === 'australia' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'text-white hover:bg-gray-700'}
                  onClick={() => handleCountryChange('australia')}
                >
                  <span className="mr-2">🇦🇺</span> Australia
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-700">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 mt-5">
              <li>
                <span 
                  onClick={() => handleNavigation("")} 
                  className="hover:text-brand-orange transition-colors cursor-pointer"
                >
                  Home
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleNavigation("about")} 
                  className="hover:text-brand-orange transition-colors cursor-pointer"
                >
                  About Us
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleNavigation("contact")} 
                  className="hover:text-brand-orange transition-colors cursor-pointer"
                >
                  Contact Us
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleNavigation("blog")} 
                  className="hover:text-brand-orange transition-colors cursor-pointer"
                >
                  Blog
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleNavigation("privacy-policy")} 
                  className="hover:text-brand-orange transition-colors cursor-pointer"
                >
                  Privacy Policy
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleNavigation("terms")} 
                  className="hover:text-brand-orange transition-colors cursor-pointer"
                >
                  Terms and Conditions
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-700">Services</h3>
            <ul className="space-y-2 text-gray-300 mt-5">
              <li>
                <span 
                  onClick={() => handleNavigation("fractional-cfo")} 
                  className="hover:text-brand-orange transition-colors cursor-pointer"
                >
                  Part Time CFO
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleNavigation("accounting")} 
                  className="hover:text-brand-orange transition-colors cursor-pointer"
                >
                  Accounting
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleNavigation("bookkeeping")} 
                  className="hover:text-brand-orange transition-colors cursor-pointer"
                >
                  Bookkeeping
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleNavigation("payroll")} 
                  className="hover:text-brand-orange transition-colors cursor-pointer"
                >
                  Payroll
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleNavigation("corporate-secretary")} 
                  className="hover:text-brand-orange transition-colors cursor-pointer"
                >
                  Corporate Secretary
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleNavigation("company-incorporation")} 
                  className="hover:text-brand-orange transition-colors cursor-pointer"
                >
                  Company Incorporation
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleNavigation("cash-flow")} 
                  className="hover:text-brand-orange transition-colors cursor-pointer"
                >
                  Cash Flow Modelling
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-black bg-opacity-30 py-4">
        <div className="container-custom text-center text-gray-400">
          <p>Copyright © {new Date().getFullYear()} Growwth Partners. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
