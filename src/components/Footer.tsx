
import { Link } from "react-router-dom";
import { useCountry } from "@/contexts/CountryContext";
import { 
  ChevronDown, 
  ChevronUp,
  Globe, 
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Youtube
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

// Import the company logo 
import companyLogo from "/lovable-uploads/5f2bc1cf-2bab-424d-8245-eb52af504603.png";

export const Footer = () => {
  const { country, setCountry, getCountryUrl } = useCountry();

  // Format country name for display
  const formatCountryName = (countryCode: string) => {
    return countryCode.charAt(0).toUpperCase() + countryCode.slice(1);
  };

  // Get icon color based on country
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

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={companyLogo} alt="Growwth Partners" className="h-12 bg-white p-1 rounded" />
              <span className="ml-3 text-xl font-semibold">Growwth Partners</span>
            </div>
            <p className="text-gray-300">
              Get started swiftly & easily with us to manage and grow your business efficiently through our CFO, Finance & Accounting and Growth Solutions.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://www.youtube.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                <Youtube size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/" 
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

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-700">Contact</h3>
            <ul className="space-y-3 text-gray-300">
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
                <Button variant="outline" className="w-full justify-between border-gray-700 hover:bg-gray-800 text-white">
                  <div className="flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    <span>{formatCountryName(country)}</span>
                  </div>
                  <div className="flex">
                    <ChevronUp className="h-4 w-4" />
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-gray-800 border-gray-700">
                <DropdownMenuItem 
                  className={country === 'singapore' ? 'bg-gray-700 text-white' : 'text-white'}
                  onClick={() => setCountry('singapore')}
                >
                  Singapore
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={country === 'uae' ? 'bg-gray-700 text-white' : 'text-white'}
                  onClick={() => setCountry('uae')}
                >
                  UAE
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={country === 'australia' ? 'bg-gray-700 text-white' : 'text-white'}
                  onClick={() => setCountry('australia')}
                >
                  Australia
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-700">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to={getCountryUrl("")} className="hover:text-brand-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to={getCountryUrl("about")} className="hover:text-brand-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={getCountryUrl("contact")} className="hover:text-brand-orange transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to={getCountryUrl("blog")} className="hover:text-brand-orange transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to={getCountryUrl("privacy-policy")} className="hover:text-brand-orange transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={getCountryUrl("terms")} className="hover:text-brand-orange transition-colors">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-700">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to={getCountryUrl("fractional-cfo")} className="hover:text-brand-orange transition-colors">
                  Part Time CFO
                </Link>
              </li>
              <li>
                <Link to={getCountryUrl("accounting")} className="hover:text-brand-orange transition-colors">
                  Accounting
                </Link>
              </li>
              <li>
                <Link to={getCountryUrl("bookkeeping")} className="hover:text-brand-orange transition-colors">
                  Bookkeeping
                </Link>
              </li>
              <li>
                <Link to={getCountryUrl("payroll")} className="hover:text-brand-orange transition-colors">
                  Payroll
                </Link>
              </li>
              <li>
                <Link to={getCountryUrl("corporate-secretary")} className="hover:text-brand-orange transition-colors">
                  Corporate Secretary
                </Link>
              </li>
              <li>
                <Link to={getCountryUrl("company-incorporation")} className="hover:text-brand-orange transition-colors">
                  Company Incorporation
                </Link>
              </li>
              <li>
                <Link to={getCountryUrl("cash-flow")} className="hover:text-brand-orange transition-colors">
                  Cash Flow Modelling
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="bg-black bg-opacity-30 py-4">
        <div className="container-custom text-center text-gray-400">
          <p>Copyright © {new Date().getFullYear()} Growwth Partners. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
