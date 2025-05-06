export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why <span className="text-primary">TechCore</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg hover-up text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-primary mx-auto mb-4">
              <i className="fas fa-award text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Expertise</h3>
            <p className="text-gray-600">
              Our team brings decades of specialized experience across all technology domains.
            </p>
          </div>
              
          <div className="p-6 bg-gray-50 rounded-lg hover-up text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-primary mx-auto mb-4">
              <i className="fas fa-users text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Client-Focused</h3>
            <p className="text-gray-600">
              We prioritize your unique needs to deliver tailored solutions that drive measurable results.
            </p>
          </div>
              
          <div className="p-6 bg-gray-50 rounded-lg hover-up text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-primary mx-auto mb-4">
              <i className="fas fa-rocket text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600">
              We harness cutting-edge technologies to give your business a competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
