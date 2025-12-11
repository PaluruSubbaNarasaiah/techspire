import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageData = {
  '/': {
    title: 'Tech Spire Academy - Best Online Tech Courses | Web Development, Data Science, Cloud Computing',
    description: 'Transform your career with Tech Spire Academy\'s industry-focused online courses. Learn Web Development, Data Science, AWS Cloud Computing with 100% placement support.',
    keywords: 'online tech courses, web development course, data science training, AWS cloud computing, coding bootcamp'
  },
  '/about': {
    title: 'About Tech Spire Academy - Leading Online Tech Education Platform',
    description: 'Learn about Tech Spire Academy\'s mission to bridge the gap between academic learning and industry requirements. 5000+ students trained with 95% success rate.',
    keywords: 'tech education, online learning platform, coding academy, tech career transformation'
  },
  '/courses': {
    title: 'Online Tech Courses - Web Development, Data Science, Cloud Computing | Tech Spire Academy',
    description: 'Explore comprehensive online tech courses: Full Stack Web Development (₹49,999), Data Science & ML (₹59,999), AWS Cloud Computing (₹39,999). Industry-expert instructors.',
    keywords: 'web development course, data science course, AWS cloud course, online programming courses'
  },
  '/admissions': {
    title: 'Admissions - Join Tech Spire Academy | Simple 4-Step Process',
    description: 'Simple admission process to join Tech Spire Academy. Flexible payment options, weekend & weekday batches. Start your tech career transformation today.',
    keywords: 'tech course admission, coding bootcamp enrollment, online course registration'
  },
  '/contact': {
    title: 'Contact Tech Spire Academy - Get in Touch for Course Inquiries',
    description: 'Contact Tech Spire Academy for course inquiries, admissions, and career guidance. Located in Bangalore with online support. Call +91 88865 56393.',
    keywords: 'tech academy contact, course inquiry, admission help, career guidance'
  },
  '/success-stories': {
    title: 'Success Stories - Tech Spire Academy Alumni Achievements | 95% Placement Rate',
    description: 'Read inspiring success stories of Tech Spire Academy graduates. 5000+ students placed at top companies like Google, Microsoft, Amazon with average ₹16.2 LPA package.',
    keywords: 'tech academy success stories, student placements, career transformation, coding bootcamp alumni'
  },
  '/faq': {
    title: 'FAQ - Frequently Asked Questions | Tech Spire Academy',
    description: 'Get answers to common questions about Tech Spire Academy courses, admission process, placement assistance, payment options, and certification.',
    keywords: 'tech academy FAQ, course questions, admission help, placement assistance, coding bootcamp queries'
  }
};

export default function SEOHead() {
  const location = useLocation();

  useEffect(() => {
    const currentPage = pageData[location.pathname as keyof typeof pageData] || pageData['/'];
    
    document.title = currentPage.title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentPage.description);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', currentPage.keywords);
    }
  }, [location.pathname]);

  return null;
}