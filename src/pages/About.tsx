import { Award, Users, Target, BookOpen, Globe, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Tech Spire Academy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering careers through cutting-edge technology education and industry-focused training programs
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-xl">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                To bridge the gap between academic learning and industry requirements by providing 
                comprehensive, hands-on technology training that prepares students for successful careers 
                in the digital age.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <Globe className="h-12 w-12 text-green-600 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg">
                To become the leading online technology education platform, recognized globally for 
                excellence in training, innovation in curriculum design, and success in student 
                career transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Tech Spire Academy?</h2>
            <p className="text-xl text-gray-600">Comprehensive online learning experience designed for success</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry-Relevant Curriculum</h3>
              <p className="text-gray-600">
                Our courses are designed by industry experts and updated regularly to match current 
                market demands and emerging technologies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from experienced professionals with 10+ years in the industry, working at 
                top tech companies and startups.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Clock className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Learning</h3>
              <p className="text-gray-600">
                Study at your own pace with 24/7 access to course materials, recorded sessions, 
                and personalized learning paths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-6">
                Founded in 2020, Tech Spire Academy emerged from a vision to democratize quality 
                technology education. Our founders, experienced software engineers and educators, 
                recognized the growing gap between traditional education and industry needs.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Starting with just 50 students, we've grown to train over 5,000 professionals 
                across 25+ countries. Our success is measured not just in numbers, but in the 
                career transformations of our students.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">5000+</p>
                  <p className="text-gray-600">Students Trained</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">95%</p>
                  <p className="text-gray-600">Placement Rate</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-xl text-white">
              <Award className="h-16 w-16 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Recognition & Awards</h3>
              <ul className="space-y-3">
                <li>• Best Online Education Platform 2023</li>
                <li>• Excellence in Technology Training Award</li>
                <li>• Top Rated Bootcamp by Students</li>
                <li>• Industry Partnership Excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}