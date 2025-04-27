import { Button } from "@/components/ui/button";

export default function HeroSection() {
  // Function to handle smooth scrolling to sections
  const scrollToSection = (id: string) => {
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
  };

  return (
    <section id="home" className="pt-28 pb-24 md:pt-36 md:pb-32 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Innovative <span className="text-primary">IT Solutions</span> for Modern Businesses
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-gray-600 max-w-xl">
            Empower your business with cutting-edge technology solutions tailored to meet your unique challenges and drive growth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={() => scrollToSection('services')}
              className="px-6 py-6"
              size="lg"
            >
              Explore Services
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="px-6 py-6"
              size="lg"
            >
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
            alt="IT professionals working on technology solutions" 
            className="w-full h-auto rounded-xl shadow-lg" 
            width="700" 
            height="500"
          />
        </div>
      </div>
    </section>
  );
}
