import { useState } from 'react';
import { Star, MapPin, Calendar, TrendingUp, Download } from 'lucide-react';

export default function SuccessStories() {
  const [filter, setFilter] = useState('All');

  const successStories = [
    {
      id: '1',
      name: 'Priya Sharma',
      course: 'Full Stack Web Development',
      rating: 5,
      review: 'Tech Spire Academy transformed my career completely. The hands-on projects and expert mentorship helped me land my dream job at a top tech company. The curriculum was industry-focused and the placement support was exceptional.',
      company: 'Google',
      salary: '₹18 LPA',
      location: 'Bangalore',
      duration: '6 months',
      previousRole: 'Marketing Executive',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '2',
      name: 'Rahul Kumar',
      course: 'Data Science & Machine Learning',
      rating: 5,
      review: 'The curriculum is industry-focused and the placement support is exceptional. I got placed within 3 months of course completion. The instructors were amazing and always available for doubt clearing.',
      company: 'Microsoft',
      salary: '₹22 LPA',
      location: 'Hyderabad',
      duration: '8 months',
      previousRole: 'Business Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '3',
      name: 'Anita Patel',
      course: 'AWS Cloud Computing',
      rating: 5,
      review: 'Best investment I made for my career. The instructors are industry experts and the learning experience is outstanding. Got hands-on experience with real AWS projects.',
      company: 'Amazon',
      salary: '₹16 LPA',
      location: 'Mumbai',
      duration: '4 months',
      previousRole: 'System Administrator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '4',
      name: 'Vikash Singh',
      course: 'Full Stack Web Development',
      rating: 5,
      review: 'From zero coding knowledge to getting placed at a unicorn startup. Tech Spire Academy made it possible with their structured approach and continuous support.',
      company: 'Flipkart',
      salary: '₹15 LPA',
      location: 'Bangalore',
      duration: '6 months',
      previousRole: 'Sales Executive',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '5',
      name: 'Sneha Reddy',
      course: 'Data Science & Machine Learning',
      rating: 5,
      review: 'The practical approach to learning data science was incredible. Real-world projects and industry mentorship helped me transition from finance to tech seamlessly.',
      company: 'Swiggy',
      salary: '₹14 LPA',
      location: 'Bangalore',
      duration: '8 months',
      previousRole: 'Financial Analyst',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '6',
      name: 'Arjun Mehta',
      course: 'AWS Cloud Computing',
      rating: 5,
      review: 'Excellent course structure and amazing support from instructors. The AWS certification preparation was thorough and I cleared all exams in first attempt.',
      company: 'Accenture',
      salary: '₹12 LPA',
      location: 'Pune',
      duration: '4 months',
      previousRole: 'Network Engineer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const courses = ['All', 'Full Stack Web Development', 'Data Science & Machine Learning', 'AWS Cloud Computing'];
  const filteredStories = filter === 'All' ? successStories : successStories.filter(story => story.course === filter);

  const downloadPlacementReport = () => {
    const reportContent = `
TECH SPIRE ACADEMY - PLACEMENT REPORT 2024

📊 OVERALL STATISTICS:
• Total Students Trained: 5,000+
• Overall Placement Rate: 95%
• Average Salary Package: ₹16.2 LPA
• Highest Package: ₹22 LPA
• Companies Partnered: 500+

📈 COURSE-WISE BREAKDOWN:

Full Stack Web Development:
• Students Placed: 2,100+
• Placement Rate: 96%
• Average Package: ₹15.8 LPA
• Top Companies: Google, Flipkart, Zomato, PayTM

Data Science & Machine Learning:
• Students Placed: 1,800+
• Placement Rate: 94%
• Average Package: ₹17.5 LPA
• Top Companies: Microsoft, Swiggy, Ola, Myntra

AWS Cloud Computing:
• Students Placed: 1,100+
• Placement Rate: 93%
• Average Package: ₹14.2 LPA
• Top Companies: Amazon, Accenture, TCS, Infosys

🏢 TOP HIRING PARTNERS:
• Google • Microsoft • Amazon • Flipkart
• Swiggy • Zomato • PayTM • Ola • Myntra
• Accenture • TCS • Infosys • Wipro

📍 PLACEMENT LOCATIONS:
• Bangalore: 45%
• Hyderabad: 20%
• Mumbai: 15%
• Pune: 10%
• Chennai: 5%
• Others: 5%

Generated on: ${new Date().toLocaleDateString()}
    `;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'TechSpire_Placement_Report_2024.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Meet our successful graduates who transformed their careers and achieved their dreams
          </p>
          <button
            onClick={downloadPlacementReport}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-semibold flex items-center gap-2 mx-auto"
          >
            <Download className="h-5 w-5" />
            Download Placement Report 2024
          </button>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {courses.map((course) => (
              <button
                key={course}
                onClick={() => setFilter(course)}
                className={`px-6 py-3 rounded-full transition ${
                  filter === course
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {course}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                      <p className="text-blue-600 font-semibold">{story.company}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {story.course}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4 italic">"{story.review}"</p>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
                      <span className="font-semibold text-green-600">{story.salary}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{story.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                      <span>Course Duration: {story.duration}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold">Career Transition:</span> {story.previousRole} → Software Professional
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl opacity-90">Real results from real students</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">5000+</p>
              <p className="text-lg opacity-90">Students Trained</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">95%</p>
              <p className="text-lg opacity-90">Placement Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">₹16.2L</p>
              <p className="text-lg opacity-90">Average Package</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-lg opacity-90">Hiring Partners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}