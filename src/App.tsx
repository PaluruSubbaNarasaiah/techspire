import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnrollForm from './components/EnrollForm';
import Chatbot from './components/Chatbot';
import SEOHead from './components/SEOHead';
import Home from './pages/Home';
import About from './pages/About';
import CoursesPage from './pages/CoursesPage';
import Contact from './pages/Contact';
import Admissions from './pages/Admissions';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  const [isEnrollFormOpen, setIsEnrollFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const openEnrollForm = (course = '') => {
    setSelectedCourse(course);
    setIsEnrollFormOpen(true);
  };

  const closeEnrollForm = () => {
    setIsEnrollFormOpen(false);
    setSelectedCourse('');
  };

  return (
    <Router>
      <div className="min-h-screen">
        <ScrollToTop />
        <SEOHead />
        <Navbar onEnrollClick={openEnrollForm} />
        <Routes>
          <Route path="/" element={<Home onEnrollClick={openEnrollForm} />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CoursesPage onEnrollClick={openEnrollForm} />} />
          <Route path="/admissions" element={<Admissions onEnrollClick={openEnrollForm} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <EnrollForm 
          isOpen={isEnrollFormOpen} 
          onClose={closeEnrollForm} 
          selectedCourse={selectedCourse} 
        />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
