
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Copyright } from 'lucide-react';
import EssnadLogo from './EssnadLogo';

const Footer = () => {
  return (
    <footer className="bg-essnad-gray text-white relative overflow-hidden">
      {/* Brand element overlays */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-essnad-orange opacity-5 transform -skew-x-12"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-essnad-orange opacity-5 transform skew-x-12"></div>
      
      <div className="container py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <EssnadLogo variant="white" className="mb-6" />
            <p className="mb-4 text-sm">
              Essnad is an Oman-based consulting firm specializing in digital transformation, governance, risk management, and security with over 20 years of expertise.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-essnad-orange transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-essnad-orange transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-essnad-orange transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-essnad-orange transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative">
              <span className="inline-block bg-essnad-orange w-8 h-1 absolute -top-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-essnad-orange transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-essnad-orange transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-essnad-orange transition-colors">Services</Link></li>
              <li><Link to="/our-impact" className="hover:text-essnad-orange transition-colors">Our Impact</Link></li>
              <li><Link to="/careers" className="hover:text-essnad-orange transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative">
              <span className="inline-block bg-essnad-orange w-8 h-1 absolute -top-3"></span>
              Resources
            </h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="hover:text-essnad-orange transition-colors">Blog & Insights</Link></li>
              <li><Link to="/resources" className="hover:text-essnad-orange transition-colors">Whitepapers</Link></li>
              <li><Link to="/resources" className="hover:text-essnad-orange transition-colors">Guides</Link></li>
              <li><Link to="/resources" className="hover:text-essnad-orange transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative">
              <span className="inline-block bg-essnad-orange w-8 h-1 absolute -top-3"></span>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-essnad-orange shrink-0 mt-0.5" />
                <span>Muscat, Oman</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-essnad-orange shrink-0" />
                <span>+968 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-essnad-orange shrink-0" />
                <span>info@essnad.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="flex items-center text-sm">
            <Copyright size={16} className="mr-1" />
            <span>2025 Essnad. All rights reserved.</span>
          </p>
          <div className="mt-4 md:mt-0 text-sm">
            <a href="#" className="mr-4 hover:text-essnad-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-essnad-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
