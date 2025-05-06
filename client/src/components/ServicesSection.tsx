type Service = {
  icon: string;
  title: string;
  description: string;
};

export default function ServicesSection() {
  const services: Service[] = [
    {
      icon: "fas fa-code",
      title: "Software Development",
      description: "Custom applications that streamline operations and enhance user experiences"
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Solutions",
      description: "Scalable infrastructure that optimizes performance and reduces costs"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Cybersecurity",
      description: "Comprehensive protection for your data, systems, and digital assets"
    },
    {
      icon: "fas fa-lightbulb",
      title: "IT Consulting",
      description: "Strategic guidance to leverage technology for competitive advantage"
    }
  ];

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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Focused services that drive digital transformation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover-up h-full flex flex-col border border-gray-100">
              <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center text-primary mb-6">
                <i className={`${service.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <button 
                onClick={scrollToContact}
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center mt-auto self-start"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
