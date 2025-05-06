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
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Transforming</span> Businesses <br />Through Technology
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Streamlined IT solutions that enhance efficiency, security, and growth for forward-thinking companies.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button 
            onClick={() => scrollToSection('services')}
            className="px-8 py-6 text-lg"
            size="lg"
          >
            Our Services
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="px-8 py-6 text-lg"
            size="lg"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
