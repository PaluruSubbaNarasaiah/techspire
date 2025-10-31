import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  onEnrollClick: (course: string) => void;
}

export default function Navbar({ onEnrollClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const courses = [
    { name: 'Java Full Stack', path: '#courses' },
    { name: 'Python Full Stack', path: '#courses' },
    { name: 'Data Science', path: '#courses' },
    { name: 'AWS Cloud', path: '#courses' },
    { name: 'DevOps', path: '#courses' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
             <img 
                src="/logo.png" 
                alt="TechSpire Academy Logo" 
                className="w-12 h-12 mr-3"
              />
            <h1 className="text-2xl font-bold text-blue-600">Tech Spire Academy</h1>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Home</Link>
            <Link to="/courses" className={`transition ${location.pathname === '/courses' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Courses</Link>
            <Link to="/about" className={`transition ${location.pathname === '/about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>About</Link>
            <Link to="/admissions" className={`transition ${location.pathname === '/admissions' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Admissions</Link>
            <Link to="/contact" className={`transition ${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-1" />
              <span>+91 9876543210</span>
            </div>
            <button 
              onClick={() => onEnrollClick()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Enroll Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/courses" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Courses</Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/admissions" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Admissions</Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
            <div className="flex items-center py-2 text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91 9876543210</span>
            </div>
            <button 
              onClick={() => onEnrollClick()}
              className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
