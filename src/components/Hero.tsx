import { GraduationCap, Award, Users, TrendingUp, Zap } from 'lucide-react';

interface HeroProps {
  onEnrollClick: (course: string) => void;
}

export default function Hero({ onEnrollClick }: HeroProps) {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <div className="flex items-center gap-4 mb-6">
                           <div>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Transform Your Career with
                  <span className="text-blue-600"> Tech Spire Academy</span>
                </h1>
              </div>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Master in-demand tech skills with industry experts. 100% placement assistance and hands-on training with real-world projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => onEnrollClick()}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold shadow-lg"
              >
                Explore Courses
              </button>
              <button 
                onClick={() => onEnrollClick()}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition text-lg font-semibold border-2 border-blue-600"
              >
                Book Free Demo
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">5000+</p>
                <p className="text-sm text-gray-600">Students Trained</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-600">Placement Support</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-600">Expert Trainers</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="h-8 w-8 text-red-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">95%</p>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
          <div className="relative animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students learning"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-6 max-w-xs">
                <p className="text-sm font-semibold text-gray-900 mb-2">Next Batch Starting</p>
                <p className="text-2xl font-bold text-blue-600">December 2025</p>
                <p className="text-sm text-gray-600 mt-1">Limited Seats Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
