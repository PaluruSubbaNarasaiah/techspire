import { Briefcase, Users, Award, BookOpen, Clock, HeadphonesIcon } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Briefcase,
      title: '100% Placement Support',
      description: 'Guaranteed placement assistance with tie-ups with 200+ companies. Mock interviews and resume building included.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Expert Trainers',
      description: 'Learn from industry professionals with 10+ years of experience. Real-world insights and mentorship.',
      color: 'green'
    },
    {
      icon: Award,
      title: 'Industry Certification',
      description: 'Get certified upon course completion. Recognized certificates that add value to your resume.',
      color: 'orange'
    },
    {
      icon: BookOpen,
      title: 'Hands-on Projects',
      description: 'Work on 5+ real-world projects and build a portfolio. Practical learning with industry use cases.',
      color: 'red'
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Weekend and weekday batches available. Online and classroom options to suit your schedule.',
      color: 'yellow'
    },
    {
      icon: HeadphonesIcon,
      title: 'Lifetime Support',
      description: '24/7 doubt clearing sessions. Access to learning materials and community even after course completion.',
      color: 'pink'
    }
  ];

  const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
    orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200' },
    red: { bg: 'bg-red-50', icon: 'text-red-600', border: 'border-red-200' },
    yellow: { bg: 'bg-yellow-50', icon: 'text-yellow-600', border: 'border-yellow-200' },
    pink: { bg: 'bg-pink-50', icon: 'text-pink-600', border: 'border-pink-200' }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Tech Spire Academy?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive training with a focus on practical skills and career development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorClasses[feature.color];
            return (
              <div
                key={index}
                className={`p-8 rounded-xl border-2 ${colors.border} ${colors.bg} hover:shadow-xl transition transform hover:-translate-y-1`}
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mb-4 border-2 ${colors.border}`}>
                  <Icon className={`h-8 w-8 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-blue-100 mb-6">
                Join thousands of successful students who transformed their careers with Tech Spire Academy.
                Get personalized guidance and achieve your career goals.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold">
                Book Free Consultation
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-700 rounded-lg p-6 text-center">
                <p className="text-4xl font-bold mb-2">5000+</p>
                <p className="text-blue-200">Students Placed</p>
              </div>
              <div className="bg-blue-700 rounded-lg p-6 text-center">
                <p className="text-4xl font-bold mb-2">200+</p>
                <p className="text-blue-200">Hiring Partners</p>
              </div>
              <div className="bg-blue-700 rounded-lg p-6 text-center">
                <p className="text-4xl font-bold mb-2">15+</p>
                <p className="text-blue-200">Years Experience</p>
              </div>
              <div className="bg-blue-700 rounded-lg p-6 text-center">
                <p className="text-4xl font-bold mb-2">4.9/5</p>
                <p className="text-blue-200">Student Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
