import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  // Handle scroll event for transparent/solid header transition
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

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
    <header className={`fixed w-full transition-all duration-300 z-50 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className={`${scrolled ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent' : 'text-white'} text-3xl font-bold`}>Lume<span className="font-extrabold">IT</span></span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className={`${scrolled ? 'text-gray-600' : 'text-white'} hover:text-primary px-3 py-2 text-sm font-medium transition-colors`}
              onClick={(e) => scrollToSection(e, 'home')}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`${scrolled ? 'text-gray-600' : 'text-white'} hover:text-primary px-3 py-2 text-sm font-medium transition-colors`}
              onClick={(e) => scrollToSection(e, 'about')}
            >
              About
            </a>
            <a 
              href="#services" 
              className={`${scrolled ? 'text-gray-600' : 'text-white'} hover:text-primary px-3 py-2 text-sm font-medium transition-colors`}
              onClick={(e) => scrollToSection(e, 'services')}
            >
              Services
            </a>

            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              <Button 
                variant={scrolled ? "default" : "secondary"} 
                size="sm"
                className={!scrolled ? "bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20" : ""}
              >
                Contact Us
              </Button>
            </a>
          </nav>
          
          <div className="flex md:hidden items-center">
            <button 
              onClick={toggleMobileMenu} 
              className={`${scrolled ? 'text-gray-500 hover:text-gray-800' : 'text-white hover:text-white/80'} focus:outline-none`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 animate-in fade-in ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
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
            className="block px-3 py-2 text-base font-medium bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 rounded-md mt-3"
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
