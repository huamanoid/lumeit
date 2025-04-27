type CaseStudy = {
  image: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  client: string;
};

type Testimonial = {
  content: string;
  avatar: string;
  name: string;
  position: string;
  company: string;
};

export default function CaseStudiesSection() {
  const caseStudies: CaseStudy[] = [
    {
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      category: "Digital Transformation",
      categoryColor: "bg-blue-100 text-blue-800",
      title: "Retail Chain Modernization",
      description: "Helped a national retail chain modernize their operations with an integrated e-commerce platform and inventory management system.",
      client: "RetailCo Inc."
    },
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      category: "Cybersecurity",
      categoryColor: "bg-green-100 text-green-800",
      title: "Healthcare Data Protection",
      description: "Implemented a comprehensive security framework for a healthcare provider to protect sensitive patient data and ensure HIPAA compliance.",
      client: "MedCare Group"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      category: "Cloud Solutions",
      categoryColor: "bg-blue-100 text-blue-800",
      title: "Manufacturing Cloud Migration",
      description: "Facilitated the migration of legacy systems to a cloud infrastructure for a manufacturing company, resulting in 40% cost reduction.",
      client: "IndusTech Manufacturing"
    }
  ];

  const testimonials: Testimonial[] = [
    {
      content: "TechCore transformed our outdated IT infrastructure into a modern, scalable solution that has significantly improved our operational efficiency. Their team was professional, knowledgeable, and responsive throughout the entire process.",
      avatar: "https://randomuser.me/api/portraits/women/42.jpg",
      name: "Sarah Johnson",
      position: "CTO",
      company: "RetailCo Inc."
    },
    {
      content: "The cybersecurity solutions implemented by TechCore have given us peace of mind knowing our sensitive data is protected. Their ongoing support ensures we stay ahead of emerging threats in an ever-changing security landscape.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Michael Chen",
      position: "IT Director",
      company: "MedCare Group"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Case <span className="text-primary">Studies</span>
          </h2>
          <p className="section-subtitle">
            Real-world examples of how our solutions have helped businesses overcome challenges and achieve their goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover-up">
              <img 
                src={caseStudy.image} 
                alt={`${caseStudy.title} case study`} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <div className={`inline-block px-3 py-1 text-xs font-medium ${caseStudy.categoryColor} rounded-full mb-4`}>
                  {caseStudy.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-4">
                  {caseStudy.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">Client: {caseStudy.client}</span>
                  <a href="#" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                    Read case study
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <div className="text-primary">
                    <i className="fas fa-quote-left text-3xl"></i>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full" 
                  />
                  <div className="ml-4">
                    <h4 className="text-gray-900 font-medium">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
