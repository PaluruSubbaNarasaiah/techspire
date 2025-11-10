import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Clock, Users, Award, CheckCircle, Play, Download } from 'lucide-react';

interface CoursesPageProps {
  onEnrollClick: (course: string) => void;
}

export default function CoursesPage({ onEnrollClick }: CoursesPageProps) {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All'); // IT, Non-IT, All
  
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam === 'IT') {
      setSelectedType('IT');
    } else if (categoryParam === 'Non-IT') {
      setSelectedType('Non-IT');
    }
  }, [searchParams]);

  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      category: 'Web Development',
      duration: '6 months',
      level: 'Beginner to Advanced',
      price: 49999,
      rating: 4.9,
      students: 1200,
      description: 'Master modern web development with React, Node.js, and cloud deployment',
      features: [
        'HTML5, CSS3, JavaScript ES6+',
        'React.js with Hooks & Context',
        'Node.js & Express.js Backend',
        'MongoDB & PostgreSQL Databases',
        'RESTful APIs & GraphQL',
        'AWS Cloud Deployment'
      ],
      modules: [
        'Frontend Fundamentals (4 weeks)',
        'React.js Mastery (6 weeks)',
        'Backend Development (6 weeks)',
        'Database Design (3 weeks)',
        'API Development (3 weeks)',
        'Cloud & DevOps (2 weeks)'
      ],
      projects: [
        'E-commerce Website',
        'Social Media Dashboard',
        'Task Management App',
        'Real-time Chat Application'
      ]
    },
    {
      id: 2,
      title: 'Data Science & Machine Learning',
      category: 'Data Science',
      duration: '8 months',
      level: 'Intermediate',
      price: 59999,
      rating: 4.8,
      students: 800,
      description: 'Comprehensive data science program with Python, ML algorithms, and AI',
      features: [
        'Python Programming & Libraries',
        'Data Analysis with Pandas',
        'Machine Learning Algorithms',
        'Deep Learning with TensorFlow',
        'Data Visualization',
        'Statistical Analysis'
      ],
      modules: [
        'Python for Data Science (4 weeks)',
        'Statistics & Probability (3 weeks)',
        'Data Analysis & Visualization (4 weeks)',
        'Machine Learning (6 weeks)',
        'Deep Learning (5 weeks)',
        'Big Data & MLOps (4 weeks)'
      ],
      projects: [
        'Customer Churn Prediction',
        'Stock Price Forecasting',
        'Image Classification System',
        'Recommendation Engine'
      ]
    },
    {
      id: 3,
      title: 'AWS Cloud Computing',
      category: 'Cloud Computing',
      duration: '4 months',
      level: 'Intermediate',
      price: 39999,
      rating: 4.7,
      students: 600,
      description: 'Master AWS cloud services and become a certified cloud architect',
      features: [
        'AWS Core Services (EC2, S3, RDS)',
        'Serverless with Lambda',
        'Container Services (ECS, EKS)',
        'Networking & Security',
        'Monitoring & Logging',
        'Infrastructure as Code'
      ],
      modules: [
        'AWS Fundamentals (3 weeks)',
        'Compute & Storage (4 weeks)',
        'Networking & Security (4 weeks)',
        'Serverless Architecture (3 weeks)',
        'DevOps on AWS (3 weeks)',
        'Certification Preparation (3 weeks)'
      ],
      projects: [
        'Scalable Web Application',
        'Data Pipeline with Lambda',
        'Microservices Architecture',
        'Disaster Recovery Setup'
      ]
    },
    {
      id: 4,
      title: 'Mobile App Development',
      category: 'Mobile Development',
      duration: '5 months',
      level: 'Intermediate',
      price: 44999,
      rating: 4.6,
      students: 450,
      description: 'Build native and cross-platform mobile apps with React Native and Flutter',
      features: [
        'React Native Development',
        'Flutter & Dart Programming',
        'iOS & Android Development',
        'Firebase Integration',
        'App Store Deployment',
        'Push Notifications'
      ],
      modules: [
        'Mobile Development Basics (3 weeks)',
        'React Native (6 weeks)',
        'Flutter Development (6 weeks)',
        'Backend Integration (3 weeks)',
        'App Store Publishing (2 weeks)',
        'Advanced Features (2 weeks)'
      ],
      projects: [
        'Social Media App',
        'E-commerce Mobile App',
        'Food Delivery App',
        'Fitness Tracking App'
      ]
    },
    {
      id: 5,
      title: 'DevOps Engineering',
      category: 'DevOps',
      duration: '5 months',
      level: 'Advanced',
      price: 54999,
      rating: 4.7,
      students: 350,
      description: 'Master CI/CD, containerization, and cloud infrastructure automation',
      features: [
        'Docker & Kubernetes',
        'Jenkins CI/CD Pipelines',
        'Terraform Infrastructure',
        'AWS/Azure DevOps',
        'Monitoring & Logging',
        'Security & Compliance'
      ],
      modules: [
        'DevOps Fundamentals (3 weeks)',
        'Containerization (4 weeks)',
        'CI/CD Pipelines (4 weeks)',
        'Infrastructure as Code (4 weeks)',
        'Monitoring & Security (3 weeks)',
        'Cloud DevOps (2 weeks)'
      ],
      projects: [
        'Automated Deployment Pipeline',
        'Microservices Architecture',
        'Infrastructure Automation',
        'Monitoring Dashboard'
      ]
    },
    {
      id: 6,
      title: 'UI/UX Design',
      category: 'Design',
      duration: '4 months',
      level: 'Beginner to Intermediate',
      price: 34999,
      rating: 4.5,
      students: 520,
      description: 'Create stunning user interfaces and experiences with modern design tools',
      features: [
        'Figma & Adobe XD',
        'User Research Methods',
        'Wireframing & Prototyping',
        'Design Systems',
        'Usability Testing',
        'Responsive Design'
      ],
      modules: [
        'Design Fundamentals (3 weeks)',
        'User Research (3 weeks)',
        'Wireframing & Prototyping (4 weeks)',
        'Visual Design (4 weeks)',
        'Design Systems (3 weeks)',
        'Portfolio Development (3 weeks)'
      ],
      projects: [
        'Mobile App Redesign',
        'E-commerce Website UI',
        'Dashboard Design',
        'Design System Creation'
      ]
    },
    {
      id: 7,
      title: 'Python Programming',
      category: 'Programming',
      duration: '3 months',
      level: 'Beginner',
      price: 24999,
      rating: 4.6,
      students: 680,
      description: 'Master Python from basics to advanced with real-world applications',
      features: [
        'Python Fundamentals',
        'Object-Oriented Programming',
        'Web Scraping with BeautifulSoup',
        'API Development with Flask',
        'Database Integration',
        'Automation Scripts'
      ],
      modules: [
        'Python Basics (3 weeks)',
        'Data Structures (2 weeks)',
        'OOP Concepts (3 weeks)',
        'Web Development (3 weeks)',
        'Database & APIs (2 weeks)',
        'Project Development (3 weeks)'
      ],
      projects: [
        'Web Scraper Application',
        'REST API Development',
        'Automation Tool',
        'Data Analysis Dashboard'
      ]
    },
    {
      id: 8,
      title: 'Java Full Stack',
      category: 'Programming',
      duration: '7 months',
      level: 'Intermediate',
      price: 54999,
      rating: 4.7,
      students: 420,
      description: 'Complete Java development with Spring Boot and modern frameworks',
      features: [
        'Core Java Programming',
        'Spring Boot Framework',
        'Hibernate ORM',
        'Microservices Architecture',
        'REST API Development',
        'Database Design'
      ],
      modules: [
        'Java Fundamentals (4 weeks)',
        'Advanced Java (4 weeks)',
        'Spring Framework (6 weeks)',
        'Database Integration (3 weeks)',
        'Microservices (4 weeks)',
        'Project Development (4 weeks)'
      ],
      projects: [
        'E-commerce Backend',
        'Banking System',
        'Microservices Application',
        'Enterprise Web App'
      ]
    },
    {
      id: 9,
      title: 'Digital Marketing',
      category: 'Marketing',
      duration: '4 months',
      level: 'Beginner to Intermediate',
      price: 29999,
      rating: 4.4,
      students: 750,
      description: 'Master online marketing strategies and grow businesses digitally',
      features: [
        'SEO & Search Marketing',
        'Social Media Marketing',
        'Content Marketing Strategy',
        'Email Marketing Campaigns',
        'Google Analytics',
        'PPC & Ad Campaigns'
      ],
      modules: [
        'Digital Marketing Basics (3 weeks)',
        'SEO & Content Marketing (4 weeks)',
        'Social Media Strategy (3 weeks)',
        'Paid Advertising (3 weeks)',
        'Analytics & Reporting (2 weeks)',
        'Campaign Management (3 weeks)'
      ],
      projects: [
        'SEO Website Optimization',
        'Social Media Campaign',
        'Google Ads Campaign',
        'Email Marketing Funnel'
      ]
    },
    {
      id: 10,
      title: 'Medical Coding',
      category: 'Healthcare',
      duration: '6 months',
      level: 'Beginner to Intermediate',
      price: 35999,
      rating: 4.6,
      students: 480,
      description: 'Learn medical coding and billing for healthcare industry careers',
      features: [
        'ICD-10 Diagnosis Coding',
        'CPT Procedure Coding',
        'Medical Terminology',
        'Healthcare Documentation',
        'Insurance Claims Processing',
        'HIPAA Compliance'
      ],
      modules: [
        'Medical Terminology (3 weeks)',
        'Anatomy & Physiology (4 weeks)',
        'ICD-10 Coding (6 weeks)',
        'CPT Coding (5 weeks)',
        'Medical Billing (4 weeks)',
        'Certification Prep (2 weeks)'
      ],
      projects: [
        'Medical Records Coding',
        'Insurance Claim Processing',
        'Coding Audit Project',
        'Healthcare Database Management'
      ]
    },
    {
      id: 11,
      title: 'Accounting & Finance',
      category: 'Finance',
      duration: '5 months',
      level: 'Beginner to Advanced',
      price: 32999,
      rating: 4.5,
      students: 620,
      description: 'Master accounting principles and financial management skills',
      features: [
        'Financial Accounting Principles',
        'Cost & Management Accounting',
        'Taxation & Compliance',
        'Financial Statement Analysis',
        'Excel for Financial Modeling',
        'QuickBooks & Tally'
      ],
      modules: [
        'Accounting Fundamentals (4 weeks)',
        'Financial Statements (4 weeks)',
        'Cost Accounting (3 weeks)',
        'Taxation (4 weeks)',
        'Financial Analysis (3 weeks)',
        'Software Training (3 weeks)'
      ],
      projects: [
        'Financial Statement Preparation',
        'Budget Planning & Analysis',
        'Tax Return Filing',
        'Investment Portfolio Analysis'
      ]
    },
    {
      id: 12,
      title: 'Human Resources Management',
      category: 'Human Resources',
      duration: '4 months',
      level: 'Beginner to Intermediate',
      price: 28999,
      rating: 4.3,
      students: 390,
      description: 'Comprehensive HR training covering recruitment to employee relations',
      features: [
        'Recruitment & Selection Process',
        'Employee Relations Management',
        'Performance Management Systems',
        'HR Analytics & Metrics',
        'Labor Laws & Compliance',
        'Payroll & Benefits Administration'
      ],
      modules: [
        'HR Fundamentals (3 weeks)',
        'Recruitment Strategies (4 weeks)',
        'Employee Management (4 weeks)',
        'Performance Systems (3 weeks)',
        'Legal Compliance (2 weeks)',
        'HR Technology (2 weeks)'
      ],
      projects: [
        'Recruitment Campaign Design',
        'Performance Appraisal System',
        'Employee Engagement Survey',
        'HR Policy Development'
      ]
    }
  ];

  const categories = ['All', 'Web Development', 'Data Science', 'Cloud Computing', 'Mobile Development', 'DevOps', 'Design', 'Programming', 'Marketing', 'Healthcare', 'Finance', 'Human Resources'];
  const courseTypes = ['All', 'IT', 'Non-IT'];
  
  const itCategories = ['Web Development', 'Data Science', 'Cloud Computing', 'Mobile Development', 'DevOps', 'Programming'];
  const nonItCategories = ['Design', 'Marketing', 'Healthcare', 'Finance', 'Human Resources'];

  let filteredCourses = courses;
  
  // Filter by IT/Non-IT type first
  if (selectedType === 'IT') {
    filteredCourses = courses.filter(course => itCategories.includes(course.category));
  } else if (selectedType === 'Non-IT') {
    filteredCourses = courses.filter(course => nonItCategories.includes(course.category));
  }
  
  // Then filter by specific category
  if (selectedCategory !== 'All') {
    filteredCourses = filteredCourses.filter(course => course.category === selectedCategory);
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive online courses designed to transform your career in technology
          </p>
        </div>
      </section>

      {/* Course Type Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose Course Type</h2>
            <div className="flex justify-center gap-4">
              {courseTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedType(type);
                    setSelectedCategory('All'); // Reset category when type changes
                  }}
                  className={`px-8 py-3 rounded-full transition font-semibold ${
                    selectedType === type
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type === 'All' ? 'All Courses' : `${type} Courses`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories
              .filter(category => {
                if (selectedType === 'IT') return category === 'All' || itCategories.includes(category);
                if (selectedType === 'Non-IT') return category === 'All' || nonItCategories.includes(category);
                return true;
              })
              .map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full transition ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))
            }
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-3 gap-8 p-8">
                  {/* Course Info */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {course.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        itCategories.includes(course.category) 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {itCategories.includes(course.category) ? 'IT Course' : 'Non-IT Course'}
                      </span>
                      <div className="flex items-center text-yellow-500">
                        <Award className="h-4 w-4 mr-1" />
                        <span className="text-sm font-semibold">{course.rating}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Users className="h-4 w-4 mr-1" />
                        <span className="text-sm">{course.students} students</span>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h2>
                    <p className="text-gray-600 text-lg mb-6">{course.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="text-gray-700">{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-gray-700">{course.level}</span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">What You'll Learn:</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {course.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Enrollment Card */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="text-center mb-6">
                      <p className="text-2xl font-bold text-blue-600">Premium Course</p>
                      <p className="text-gray-500">Contact for pricing details</p>
                    </div>

                    <button
                      onClick={() => onEnrollClick(course.title)}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition font-semibold mb-4"
                    >
                      Enroll Now
                    </button>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Level:</span>
                        <span className="font-semibold">{course.level}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Students:</span>
                        <span className="font-semibold">{course.students}+</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <h4 className="font-semibold text-gray-900 mb-3">Course Includes:</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <Play className="h-4 w-4 mr-2" />
                          Video Lectures
                        </li>
                        <li className="flex items-center">
                          <Download className="h-4 w-4 mr-2" />
                          Downloadable Resources
                        </li>
                        <li className="flex items-center">
                          <Award className="h-4 w-4 mr-2" />
                          Certificate of Completion
                        </li>
                        <li className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          Lifetime Support
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Course Modules */}
                <div className="border-t bg-white p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Course Modules</h3>
                      <ul className="space-y-2">
                        {course.modules.map((module, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded mr-3 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="text-gray-700">{module}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Capstone Projects</h3>
                      <ul className="space-y-2">
                        {course.projects.map((project, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}