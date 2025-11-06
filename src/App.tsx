import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnrollForm from './components/EnrollForm';
import Chatbot from './components/Chatbot';
import SEOHead from './components/SEOHead';
import LoadingScreen from './components/LoadingScreen';
import NetworkError from './components/NetworkError';
import Home from './pages/Home';
import About from './pages/About';
import CoursesPage from './pages/CoursesPage';
import Contact from './pages/Contact';
import Admissions from './pages/Admissions';
import SuccessStories from './pages/SuccessStories';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import RefundPolicy from './pages/RefundPolicy';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isEnrollFormOpen, setIsEnrollFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
        {isLoading && <LoadingScreen />}
        <NetworkError />
        <ScrollToTop />
        <SEOHead />
        <Navbar onEnrollClick={openEnrollForm} />
        <Routes>
          <Route path="/" element={<Home onEnrollClick={openEnrollForm} />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CoursesPage onEnrollClick={openEnrollForm} />} />
          <Route path="/admissions" element={<Admissions onEnrollClick={openEnrollForm} />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
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
