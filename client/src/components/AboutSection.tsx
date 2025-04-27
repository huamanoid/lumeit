export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="text-primary">TechCore</span>
          </h2>
          <p className="section-subtitle">
            We deliver innovative IT solutions that transform businesses and drive sustainable growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
              alt="Team of IT professionals collaborating" 
              className="w-full h-auto rounded-xl shadow-lg" 
              width="700" 
              height="467"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-700 mb-6">
              Founded in 2010, TechCore has grown from a small IT consultancy to a comprehensive technology solutions provider trusted by businesses worldwide. Our mission is to empower organizations through technology, helping them navigate the digital landscape and achieve their business objectives.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-primary">
                    <i className="fas fa-award"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Expertise & Experience</h4>
                  <p className="mt-1 text-gray-600">Our team of certified IT professionals brings decades of combined experience across various industries.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-primary">
                    <i className="fas fa-users"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Client-Centric Approach</h4>
                  <p className="mt-1 text-gray-600">We prioritize understanding your unique needs to deliver customized solutions that drive results.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-primary">
                    <i className="fas fa-rocket"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Innovation Focus</h4>
                  <p className="mt-1 text-gray-600">We stay at the forefront of technology trends to bring you cutting-edge solutions that give you a competitive edge.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
