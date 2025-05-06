export default function ClientsSection() {
  const clients = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png" },
  ];

  return (
    <section className="py-12 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 font-medium mb-8">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
          {clients.map((client, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 hover:-translate-y-1">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-8 w-auto" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
