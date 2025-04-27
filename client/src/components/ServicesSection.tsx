type Service = {
  icon: string;
  title: string;
  description: string;
  features: string[];
};

export default function ServicesSection() {
  const services: Service[] = [
    {
      icon: "fas fa-code",
      title: "Software Development",
      description: "Custom software solutions designed to streamline operations, enhance user experiences, and solve complex business challenges.",
      features: [
        "Custom application development",
        "Web and mobile applications",
        "API integration services"
      ]
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure that optimizes performance, reduces costs, and enhances business agility.",
      features: [
        "Cloud migration services",
        "Infrastructure as a Service (IaaS)",
        "Cloud-native application development"
      ]
    },
    {
      icon: "fas fa-shield-alt",
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your data, systems, and reputation from evolving cyber threats.",
      features: [
        "Security assessments and audits",
        "Endpoint protection solutions",
        "Security monitoring and incident response"
      ]
    },
    {
      icon: "fas fa-lightbulb",
      title: "IT Consulting",
      description: "Strategic guidance to help you leverage technology for business growth, innovation, and competitive advantage.",
      features: [
        "Digital transformation strategy",
        "Technology roadmap development",
        "Process optimization consulting"
      ]
    },
    {
      icon: "fas fa-headset",
      title: "IT Support",
      description: "Reliable technical support services to ensure your systems run smoothly and issues are resolved promptly.",
      features: [
        "24/7 help desk support",
        "Network monitoring and management",
        "System maintenance and updates"
      ]
    },
    {
      icon: "fas fa-chart-bar",
      title: "Data Analytics",
      description: "Turn your data into actionable insights to drive informed decision-making and business growth.",
      features: [
        "Business intelligence solutions",
        "Data visualization and reporting",
        "Predictive analytics implementation"
      ]
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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-md hover-up h-full flex flex-col">
              <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center text-primary mb-6">
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {service.description}
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <i className="fas fa-check text-secondary-500 mr-2"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={scrollToContact}
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center mt-auto"
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
