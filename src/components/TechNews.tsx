import { useState } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

export default function TechNews() {
  const [selectedNews, setSelectedNews] = useState<number | null>(null);

  const techNews = [
    {
      id: 1,
      title: "AI Revolution in Software Development",
      summary: "GitHub Copilot and ChatGPT are transforming how developers write code...",
      content: "Artificial Intelligence is revolutionizing software development with tools like GitHub Copilot, ChatGPT, and other AI-powered coding assistants. These tools are helping developers write code faster, debug more efficiently, and learn new programming languages. The integration of AI in development workflows is expected to increase productivity by 40% in the next two years.",
      date: "2024-01-15",
      category: "AI & Development",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Cloud Computing Market Reaches $500B",
      summary: "AWS, Azure, and Google Cloud continue to dominate the market...",
      content: "The global cloud computing market has reached a milestone of $500 billion, with major players like AWS, Microsoft Azure, and Google Cloud Platform leading the charge. This growth is driven by increased digital transformation initiatives, remote work adoption, and the need for scalable infrastructure solutions.",
      date: "2024-01-12",
      category: "Cloud Technology",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Cybersecurity Threats on the Rise",
      summary: "New ransomware attacks target major corporations worldwide...",
      content: "Cybersecurity experts report a 300% increase in ransomware attacks targeting major corporations. Companies are investing heavily in cybersecurity training and advanced threat detection systems. The demand for cybersecurity professionals has never been higher, with salaries reaching new peaks.",
      date: "2024-01-10",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=200&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "React 19 Beta Released",
      summary: "New features include Server Components and improved performance...",
      content: "React 19 Beta introduces groundbreaking features including Server Components, improved concurrent rendering, and better performance optimizations. The new version promises to reduce bundle sizes and improve user experience across web applications.",
      date: "2024-01-08",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Data Science Jobs Surge 45%",
      summary: "Machine learning and analytics roles in high demand...",
      content: "The job market for data scientists and machine learning engineers has surged by 45% this year. Companies across industries are seeking professionals who can extract insights from big data and implement AI solutions to drive business growth.",
      date: "2024-01-05",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Latest Tech News & Trends
        </h3>
        
        {/* Scrolling News */}
        <div className="relative overflow-hidden mb-12">
          <div className="flex animate-scroll-news space-x-8">
            {[...techNews, ...techNews].map((news, index) => (
              <div
                key={`${news.id}-${index}`}
                onClick={() => setSelectedNews(selectedNews === news.id ? null : news.id)}
                className="flex-shrink-0 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden min-w-[350px] cursor-pointer group"
              >
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {news.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {news.date}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {news.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expanded News */}
        {selectedNews && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-fadeInUp">
            {(() => {
              const news = techNews.find(n => n.id === selectedNews);
              return news ? (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
                      {news.category}
                    </span>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-5 w-5 mr-2" />
                      {news.date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{news.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{news.content}</p>
                  <button
                    onClick={() => setSelectedNews(null)}
                    className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition"
                  >
                    Close
                  </button>
                </>
              ) : null;
            })()}
          </div>
        )}

        {/* Read More Options */}
        <div className="text-center">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a href="https://techcrunch.com" target="_blank" rel="noopener noreferrer" 
               className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=160&fit=crop&crop=center" 
                alt="TechCrunch News"
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <ExternalLink className="h-6 w-6 text-blue-600 mr-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-900">TechCrunch</h4>
                </div>
                <p className="text-gray-600 text-sm">Latest startup and technology news</p>
              </div>
            </a>
            <a href="https://www.wired.com" target="_blank" rel="noopener noreferrer"
               className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=160&fit=crop&crop=center" 
                alt="Wired Magazine"
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <ExternalLink className="h-6 w-6 text-blue-600 mr-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-900">Wired</h4>
                </div>
                <p className="text-gray-600 text-sm">Technology, science, and culture</p>
              </div>
            </a>
            <a href="https://stackoverflow.blog" target="_blank" rel="noopener noreferrer"
               className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=160&fit=crop&crop=center" 
                alt="Stack Overflow Developer Community"
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <ExternalLink className="h-6 w-6 text-blue-600 mr-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-900">Stack Overflow</h4>
                </div>
                <p className="text-gray-600 text-sm">Developer insights and trends</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}