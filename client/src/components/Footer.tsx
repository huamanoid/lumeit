import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <span className="text-white text-2xl font-bold">Tech<span className="text-primary-400">Core</span></span>
            </Link>
            <p className="text-gray-300 mb-6">
              Empowering businesses through innovative technology solutions that drive growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Software Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">IT Consulting</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">IT Support</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Data Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest industry insights and company news.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary flex-grow text-white"
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} TechCore Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
