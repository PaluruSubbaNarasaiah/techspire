export default function CompanyLogos() {
  // Easy to edit company list - add/remove companies here
  const companies = [
    { name: 'Google', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    { name: 'Microsoft', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { name: 'Amazon', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'Meta', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg' },
    { name: 'Apple', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
    { name: 'Netflix', logo: 'https://images.ctfassets.net/y2ske4h9cfii/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg' },
    { name: 'Uber', logo: 'https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/logo-uber.svg' },
    { name: 'Spotify', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spotify/spotify-original.svg' },
    { name: 'Adobe', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
    { name: 'IBM', logo: 'https://1000logos.net/wp-content/uploads/2017/02/IBM-Logo.png' },
    { name: 'Oracle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
    { name: 'Salesforce', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Salesforce-Logo.png' }
  ];

  // Animation settings - easy to modify
  const animationDuration = '30s'; // Change scroll speed here
  const cardWidth = 'min-w-[180px]'; // Change card size here

  return (
    <div className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Our Students Work At
        </h3>
        <div className="relative">
          <div 
            className="flex animate-scroll space-x-12"
            style={{ animationDuration }}
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className={`flex-shrink-0 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 ${cardWidth} flex flex-col items-center justify-center group`}
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className="h-12 w-auto mb-2 group-hover:scale-110 transition-transform duration-300 will-change-transform"
                  onError={(e) => {
                    // Fallback to text if logo fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.style.display = 'block';
                  }}
                />
                <span 
                  className="text-sm font-semibold text-gray-600 hidden"
                  style={{ display: 'none' }}
                >
                  {company.name}
                </span>
                <span className="text-xs text-gray-500 font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}