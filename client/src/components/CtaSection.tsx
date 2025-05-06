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
    <section className="py-16 bg-gradient-to-r from-primary to-blue-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Ready for the next step?
        </h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          Let's build your technology future together
        </p>
        <Button 
          onClick={scrollToContact}
          variant="secondary" 
          size="lg"
          className="font-medium px-8"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
}
