import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // For smooth scrolling to sections
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    closeMobileMenu();
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-3xl font-bold">Lume<span className="font-extrabold">IT</span></span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              onClick={(e) => scrollToSection(e, 'home')}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              onClick={(e) => scrollToSection(e, 'about')}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              onClick={(e) => scrollToSection(e, 'services')}
            >
              Services
            </a>

            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              <Button variant="default" size="sm">Contact Us</Button>
            </a>
          </nav>
          
          <div className="flex md:hidden items-center">
            <button 
              onClick={toggleMobileMenu} 
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white border-t border-gray-100 animate-in fade-in ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            href="#home" 
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary"
            onClick={(e) => scrollToSection(e, 'home')}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary"
            onClick={(e) => scrollToSection(e, 'about')}
          >
            About
          </a>
          <a 
            href="#services" 
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary"
            onClick={(e) => scrollToSection(e, 'services')}
          >
            Services
          </a>

          <a 
            href="#contact" 
            className="block px-3 py-2 text-base font-medium bg-primary text-white hover:bg-primary/90 rounded-md mt-3"
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
