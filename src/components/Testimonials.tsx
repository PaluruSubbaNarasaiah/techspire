import { Quote, Star } from 'lucide-react';
import CompanyLogos from './CompanyLogos';



export default function Testimonials() {
  const testimonials = [
    {
      id: '1',
      student_name: 'Priya Sharma',
      course: 'Full Stack Web Development',
      rating: 5,
      review: 'Tech Spire Academy transformed my career completely. The hands-on projects and expert mentorship helped me land my dream job at a top tech company.',
      company: 'Google',
      salary_package: '₹18 LPA'
    },
    {
      id: '2',
      student_name: 'Rahul Kumar',
      course: 'Data Science & Machine Learning',
      rating: 5,
      review: 'The curriculum is industry-focused and the placement support is exceptional. I got placed within 3 months of course completion.',
      company: 'Microsoft',
      salary_package: '₹22 LPA'
    },
    {
      id: '3',
      student_name: 'Anita Patel',
      course: 'AWS Cloud Computing',
      rating: 5,
      review: 'Best investment I made for my career. The instructors are industry experts and the learning experience is outstanding.',
      company: 'Amazon',
      salary_package: '₹16 LPA'
    },
    {
      id: '4',
      student_name: 'Vikash Singh',
      course: 'Full Stack Web Development',
      rating: 5,
      review: 'From zero coding knowledge to getting placed at a unicorn startup. Tech Spire Academy made it possible with their structured approach.',
      company: 'Flipkart',
      salary_package: '₹15 LPA'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students who transformed their careers and achieved their dreams
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <div className="flex items-start justify-between mb-4">
                <Quote className="h-10 w-10 text-blue-200" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "{testimonial.review}"
              </p>

              <div className="border-t pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.student_name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.course}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-blue-600 text-lg">{testimonial.salary_package}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Our Success Community</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Be the next success story. Start your journey with Tech Spire Academy today and unlock your potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/success-stories'}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold shadow-lg"
              >
                View All Success Stories
              </button>
              <button 
                onClick={() => {
                  import('jspdf').then(({ jsPDF }) => {
                    const doc = new jsPDF();
                    doc.setFillColor(37, 99, 235);
                    doc.rect(0, 0, 210, 40, 'F');
                    doc.setTextColor(255, 255, 255);
                    doc.setFontSize(24);
                    doc.text('TECH SPIRE ACADEMY', 105, 20, { align: 'center' });
                    doc.setFontSize(16);
                    doc.text('PLACEMENT REPORT 2024', 105, 30, { align: 'center' });
                    doc.setTextColor(0, 0, 0);
                    doc.setFontSize(18);
                    doc.setTextColor(37, 99, 235);
                    doc.text('📊 OVERALL STATISTICS', 20, 60);
                    doc.setFontSize(12);
                    doc.setTextColor(0, 0, 0);
                    doc.text('• Total Students Trained: 5,000+', 20, 75);
                    doc.text('• Overall Placement Rate: 95%', 20, 85);
                    doc.text('• Average Salary Package: ₹16.2 LPA', 20, 95);
                    doc.text('• Highest Package: ₹22 LPA', 20, 105);
                    doc.setFillColor(37, 99, 235);
                    doc.rect(0, 290, 210, 7, 'F');
                    doc.setTextColor(255, 255, 255);
                    doc.setFontSize(10);
                    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 105, 294, { align: 'center' });
                    doc.save('TechSpire_Placement_Report_2024.pdf');
                  });
                }}
                className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-200 transition text-lg font-semibold"
              >
                Download Placement Report
              </button>
            </div>
          </div>
        </div>
        <CompanyLogos />
      </div>
    </section>
  );
}
