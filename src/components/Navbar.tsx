import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onEnrollClick: (course: string) => void;
}

export default function Navbar({ onEnrollClick }: NavbarProps) {
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
                className="w-59 h-40 mr-5"
              />
            <h1 className="text-2xl mr-2 font-bold text-blue-600">Tech Spire Academy</h1>
          </Link>

          <div className="flex items-center space-x-8">
            <Link to="/" className={`transition ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Home</Link>
            <Link to="/courses" className={`transition ${location.pathname === '/courses' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Courses</Link>
            <Link to="/about" className={`transition ${location.pathname === '/about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>About</Link>
            <Link to="/admissions" className={`transition ${location.pathname === '/admissions' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Admissions</Link>
            <Link to="/contact" className={`transition ${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Contact</Link>
          </div>

          <div className="flex items-center">
            <button 
              onClick={() => onEnrollClick()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>


    </nav>
  );
}
