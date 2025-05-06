import { Button } from "@/components/ui/button";

export default function CtaSection() {
  // Function to handle smooth scrolling to the contact section
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section className="py-16 relative overflow-hidden">
      {/* Gradient background with transparency */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 backdrop-blur-md"></div>
      
      {/* Decorative circles */}
      <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/10 rounded-full"></div>
      <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-white/10 rounded-full"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Ready for the next step?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 backdrop-blur-sm bg-white/10 p-3 rounded-lg inline-block">
          Let's build your technology future together
        </p>
        <Button 
          onClick={scrollToContact}
          variant="secondary" 
          size="lg"
          className="font-medium px-8 bg-white/90 backdrop-blur-sm hover:bg-white/100 text-primary"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
}
