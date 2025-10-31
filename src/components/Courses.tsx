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
      is_popular: true
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
      is_popular: false
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
      is_popular: false
    }
  ];

  const categories = ['All', 'Full Stack', 'Data Science', 'Cloud', 'DevOps', 'Web Development'];

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
              {course.is_popular && (
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 font-semibold">
                  Most Popular
                </div>
              )}
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
