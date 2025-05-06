import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-md text-gray-800 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-2xl font-bold">Lume<span className="font-extrabold">IT</span></span>
            </Link>
            <p className="text-gray-600 mb-6">
              Empowering businesses through innovative technology solutions that drive growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-600 hover:text-primary transition-colors">Software Development</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-primary transition-colors">Cloud Solutions</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-primary transition-colors">Cybersecurity</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-primary transition-colors">IT Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-600 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-6">Newsletter</h4>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest industry insights and company news.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-white border border-gray-200 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary flex-grow text-gray-800"
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
        
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} LumeIT Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
