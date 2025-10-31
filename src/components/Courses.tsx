import { useState } from 'react';
import { Clock, BarChart, CheckCircle, Star } from 'lucide-react';



interface CoursesProps {
  onEnrollClick: (course: string) => void;
}

export default function Courses({ onEnrollClick }: CoursesProps) {
  const [filter, setFilter] = useState('All');

  const courses = [
    {
      id: '1',
      title: 'Full Stack Web Development',
      description: 'Master modern web development with React, Node.js, and cloud deployment',
      duration: '6 months',
      level: 'Beginner to Advanced',
      category: 'Web Development',
      price: 49999,
      features: ['HTML5, CSS3, JavaScript ES6+', 'React.js with Hooks', 'Node.js & Express.js', 'MongoDB & PostgreSQL', 'RESTful APIs', 'AWS Cloud Deployment'],
      is_popular: true,
      tag: 'Most Popular',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop'
    },
    {
      id: '2',
      title: 'Data Science & Machine Learning',
      description: 'Comprehensive data science program with Python, ML algorithms, and AI',
      duration: '8 months',
      level: 'Intermediate',
      category: 'Data Science',
      price: 59999,
      features: ['Python Programming', 'Data Analysis with Pandas', 'Machine Learning Algorithms', 'Deep Learning with TensorFlow', 'Data Visualization', 'Statistical Analysis'],
      is_popular: false,
      tag: 'High Demand',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
    },
    {
      id: '3',
      title: 'AWS Cloud Computing',
      description: 'Master AWS cloud services and become a certified cloud architect',
      duration: '4 months',
      level: 'Intermediate',
      category: 'Cloud Computing',
      price: 39999,
      features: ['AWS Core Services', 'Serverless with Lambda', 'Container Services', 'Networking & Security', 'Monitoring & Logging', 'Infrastructure as Code'],
      is_popular: false,
      tag: 'Quick Start',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop'
    },
    {
      id: '4',
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile apps with React Native and Flutter',
      duration: '5 months',
      level: 'Intermediate',
      category: 'Mobile Development',
      price: 44999,
      features: ['React Native', 'Flutter & Dart', 'iOS & Android Development', 'Firebase Integration', 'App Store Deployment', 'Push Notifications'],
      is_popular: false,
      tag: 'Trending',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop'
    },
    {
      id: '5',
      title: 'DevOps Engineering',
      description: 'Master CI/CD, containerization, and cloud infrastructure automation',
      duration: '5 months',
      level: 'Advanced',
      category: 'DevOps',
      price: 54999,
      features: ['Docker & Kubernetes', 'Jenkins CI/CD', 'Terraform', 'AWS/Azure DevOps', 'Monitoring & Logging', 'Infrastructure as Code'],
      is_popular: false,
      tag: 'Industry Ready',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop'
    },
    {
      id: '6',
      title: 'Cybersecurity Specialist',
      description: 'Comprehensive cybersecurity training with ethical hacking and security analysis',
      duration: '6 months',
      level: 'Intermediate',
      category: 'Cybersecurity',
      price: 52999,
      features: ['Ethical Hacking', 'Network Security', 'Penetration Testing', 'Security Analysis', 'Incident Response', 'Compliance & Governance'],
      is_popular: false,
      tag: 'High Salary',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop'
    },
    {
      id: '7',
      title: 'UI/UX Design',
      description: 'Create stunning user interfaces and experiences with modern design tools',
      duration: '4 months',
      level: 'Beginner to Intermediate',
      category: 'Design',
      price: 34999,
      features: ['Figma & Adobe XD', 'User Research', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing', 'Responsive Design'],
      is_popular: false,
      tag: 'Creative',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop'
    },
    {
      id: '8',
      title: 'Artificial Intelligence',
      description: 'Deep dive into AI, neural networks, and advanced machine learning techniques',
      duration: '10 months',
      level: 'Advanced',
      category: 'Artificial Intelligence',
      price: 69999,
      features: ['Neural Networks', 'Deep Learning', 'Computer Vision', 'Natural Language Processing', 'AI Ethics', 'Model Deployment'],
      is_popular: false,
      tag: 'Future Tech',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop'
    },
    {
      id: '9',
      title: 'Blockchain Development',
      description: 'Build decentralized applications and smart contracts on various blockchain platforms',
      duration: '6 months',
      level: 'Advanced',
      category: 'Blockchain',
      price: 57999,
      features: ['Solidity Programming', 'Smart Contracts', 'Web3.js', 'DeFi Development', 'NFT Creation', 'Blockchain Security'],
      is_popular: false,
      tag: 'Emerging Tech',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop'
    },
    {
      id: '10',
      title: 'Python Programming',
      description: 'Master Python from basics to advanced with real-world applications',
      duration: '3 months',
      level: 'Beginner',
      category: 'Programming',
      price: 24999,
      features: ['Python Fundamentals', 'Object-Oriented Programming', 'Web Scraping', 'API Development', 'Database Integration', 'Automation Scripts'],
      is_popular: false,
      tag: 'Beginner Friendly',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop'
    },
    {
      id: '11',
      title: 'Java Full Stack',
      description: 'Complete Java development with Spring Boot and modern frameworks',
      duration: '7 months',
      level: 'Intermediate',
      category: 'Programming',
      price: 54999,
      features: ['Core Java', 'Spring Boot', 'Hibernate', 'Microservices', 'REST APIs', 'Database Design'],
      is_popular: false,
      tag: 'Enterprise Ready',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop'
    },
    {
      id: '12',
      title: 'Digital Marketing',
      description: 'Master online marketing strategies and grow businesses digitally',
      duration: '4 months',
      level: 'Beginner to Intermediate',
      category: 'Marketing',
      price: 29999,
      features: ['SEO & SEM', 'Social Media Marketing', 'Content Marketing', 'Email Marketing', 'Analytics', 'PPC Campaigns'],
      is_popular: false,
      tag: 'Business Growth',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop'
    }
  ];

  const categories = ['All', 'Web Development', 'Data Science', 'Cloud Computing', 'Mobile Development', 'DevOps', 'Cybersecurity', 'Design', 'Artificial Intelligence', 'Blockchain', 'Programming', 'Marketing'];

  const filteredCourses = filter === 'All'
    ? courses
    : courses.filter(course => course.category === filter);



  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Career-Oriented Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-relevant curriculum designed by experts. Learn from real-world projects and get job-ready skills.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, idx) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 hover-lift animate-fadeInUp"
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                {course.tag && (
                  <div className={`absolute top-0 left-0 text-white px-3 py-1 font-semibold text-sm rounded-br-lg ${
                    course.tag === 'Most Popular' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                    course.tag === 'High Demand' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                    course.tag === 'Quick Start' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                    course.tag === 'Trending' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                    course.tag === 'Industry Ready' ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
                    course.tag === 'High Salary' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                    course.tag === 'Creative' ? 'bg-gradient-to-r from-pink-500 to-pink-600' :
                    course.tag === 'Future Tech' ? 'bg-gradient-to-r from-cyan-500 to-cyan-600' :
                    course.tag === 'Emerging Tech' ? 'bg-gradient-to-r from-teal-500 to-teal-600' :
                    course.tag === 'Beginner Friendly' ? 'bg-gradient-to-r from-lime-500 to-lime-600' :
                    course.tag === 'Enterprise Ready' ? 'bg-gradient-to-r from-slate-500 to-slate-600' :
                    'bg-gradient-to-r from-rose-500 to-rose-600'
                  }`}>
                    {course.tag}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-semibold">4.8</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart className="h-4 w-4 mr-1" />
                    <span>{course.level}</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">What you'll learn:</p>
                  <ul className="space-y-1">
                    {course.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900">₹{course.price.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">One-time payment</p>
                  </div>
                  <button 
                    onClick={() => onEnrollClick(course.title)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
