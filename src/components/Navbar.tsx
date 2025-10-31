import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Star, Award } from 'lucide-react';

interface NavbarProps {
  onEnrollClick: (course: string) => void;
}

export default function Navbar({ onEnrollClick }: NavbarProps) {
  const location = useLocation();
  const [showCourses, setShowCourses] = useState(false);

  const popularCourses = [
    { name: 'Full Stack Web Development', tag: 'Most Popular', color: 'text-orange-600' },
    { name: 'Data Science & ML', tag: 'High Demand', color: 'text-green-600' },
    { name: 'AWS Cloud Computing', tag: 'Quick Start', color: 'text-blue-600' },
    { name: 'Mobile App Development', tag: 'Trending', color: 'text-purple-600' },
    { name: 'DevOps Engineering', tag: 'Industry Ready', color: 'text-indigo-600' }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="TechSpire Academy Logo" 
                className="w-40 h-40 mr-3   transition-all duration-300"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Tech Spire Academy</h1>
              <p className="text-xs text-gray-500 -mt-1">Transform Your Career</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                location.pathname === '/' 
                  ? 'bg-blue-100 text-blue-700 shadow-sm' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            
            {/* Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowCourses(true)}
              onMouseLeave={() => setShowCourses(false)}
            >
              <Link 
                to="/courses" 
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 ${
                  location.pathname === '/courses' 
                    ? 'bg-blue-100 text-blue-700 shadow-sm' 
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                Courses
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showCourses ? 'rotate-180' : ''}`} />
              </Link>
              
              {showCourses && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-4 animate-fadeIn">
                  <div className="px-4 pb-3 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      Popular Courses
                    </h3>
                  </div>
                  {popularCourses.map((course, idx) => (
                    <Link
                      key={idx}
                      to="/courses"
                      className="block px-4 py-3 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <div className="flex flex-col space-y-1">
                        <span className="font-medium text-gray-900">{course.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full bg-gray-100 ${course.color} self-start`}>
                          {course.tag}
                        </span>
                      </div>
                    </Link>
                  ))}
                  <div className="px-4 pt-3 border-t border-gray-100">
                    <Link to="/courses" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      View All Courses →
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                location.pathname === '/about' 
                  ? 'bg-blue-100 text-blue-700 shadow-sm' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              About
            </Link>
            
            <Link 
              to="/admissions" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                location.pathname === '/admissions' 
                  ? 'bg-blue-100 text-blue-700 shadow-sm' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              Admissions
            </Link>
            
            <Link 
              to="/success-stories" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 ${
                location.pathname === '/success-stories' 
                  ? 'bg-blue-100 text-blue-700 shadow-sm' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <Award className="h-4 w-4" />
              Success Stories
            </Link>
            
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                location.pathname === '/contact' 
                  ? 'bg-blue-100 text-blue-700 shadow-sm' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <button 
              onClick={() => onEnrollClick()}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
