import { CheckCircle, Clock, Users, Award, FileText, CreditCard } from 'lucide-react';

interface AdmissionsProps {
  onEnrollClick: (course: string) => void;
}

export default function Admissions({ onEnrollClick }: AdmissionsProps) {
  const admissionSteps = [
    {
      step: 1,
      title: 'Choose Your Course',
      description: 'Browse our comprehensive course catalog and select the program that aligns with your career goals.',
      icon: <FileText className="h-8 w-8" />
    },
    {
      step: 2,
      title: 'Submit Application',
      description: 'Fill out our simple online application form with your personal and educational details.',
      icon: <Users className="h-8 w-8" />
    },
    {
      step: 3,
      title: 'Assessment & Interview',
      description: 'Complete a brief technical assessment and participate in a counseling session with our experts.',
      icon: <Award className="h-8 w-8" />
    },
    {
      step: 4,
      title: 'Enrollment & Payment',
      description: 'Secure your seat with flexible payment options and receive access to course materials.',
      icon: <CreditCard className="h-8 w-8" />
    }
  ];

  const requirements = [
    'Basic computer literacy and internet access',
    'High school diploma or equivalent',
    'Passion for learning technology',
    'Commitment to complete the course duration',
    'English proficiency (basic level)'
  ];

  const benefits = [
    'Industry-recognized certification',
    '100% placement assistance',
    'Lifetime access to course materials',
    'Personal mentor assignment',
    'Real-world project portfolio',
    'Alumni network access',
    'Career counseling sessions',
    'Technical interview preparation'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Admissions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start your journey to a successful tech career. Our streamlined admission process 
            makes it easy to begin your transformation.
          </p>
          <button
            onClick={() => onEnrollClick()}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Admission Process</h2>
            <p className="text-xl text-gray-600">Get started in just 4 easy steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{step.icon}</div>
                </div>
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Requirements */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
              <p className="text-gray-600 mb-6">
                Our courses are designed to be accessible to motivated learners from all backgrounds. 
                Here's what you need to get started:
              </p>
              <ul className="space-y-4">
                {requirements.map((requirement, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-blue-600 text-white p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">What You Get</h2>
              <p className="mb-6 opacity-90">
                When you join Tech Spire Academy, you're not just enrolling in a course - 
                you're investing in your future with comprehensive support.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Batch Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Batches</h2>
            <p className="text-xl text-gray-600">Choose the batch that fits your schedule</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-blue-200 rounded-xl p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Weekday Batch</h3>
              <p className="text-gray-600 mb-4">Monday to Friday</p>
              <p className="text-lg font-semibold text-blue-600 mb-4">10:00 AM - 1:00 PM</p>
              <p className="text-sm text-gray-500 mb-6">Next batch starts: January 15, 2025</p>
              <button
                onClick={() => onEnrollClick('Weekday Batch')}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Apply for Weekday
              </button>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-xl p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Weekend Batch</h3>
              <p className="text-gray-600 mb-4">Saturday & Sunday</p>
              <p className="text-lg font-semibold text-green-600 mb-4">9:00 AM - 5:00 PM</p>
              <p className="text-sm text-gray-500 mb-6">Next batch starts: January 18, 2025</p>
              <button
                onClick={() => onEnrollClick('Weekend Batch')}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
              >
                Apply for Weekend
              </button>
            </div>

            <div className="bg-white border-2 border-orange-200 rounded-xl p-8 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Evening Batch</h3>
              <p className="text-gray-600 mb-4">Monday to Friday</p>
              <p className="text-lg font-semibold text-orange-600 mb-4">7:00 PM - 10:00 PM</p>
              <p className="text-sm text-gray-500 mb-6">Next batch starts: January 20, 2025</p>
              <button
                onClick={() => onEnrollClick('Evening Batch')}
                className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition"
              >
                Apply for Evening
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Payment Options</h2>
            <p className="text-xl text-gray-600">Choose a payment plan that works for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">One-Time Payment</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">10% OFF</p>
              <p className="text-gray-600 mb-6">Pay the full course fee upfront and save 10% on total cost</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Maximum savings</li>
                <li>• Immediate full access</li>
                <li>• No processing fees</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3-Month EMI</h3>
              <p className="text-4xl font-bold text-green-600 mb-4">0% Interest</p>
              <p className="text-gray-600 mb-6">Split your payment into 3 equal installments with no additional cost</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• No interest charges</li>
                <li>• Easy monthly payments</li>
                <li>• Full course access</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">6-Month EMI</h3>
              <p className="text-4xl font-bold text-orange-600 mb-4">Low Interest</p>
              <p className="text-gray-600 mb-6">Extended payment plan with minimal interest for maximum affordability</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Lowest monthly payment</li>
                <li>• Minimal interest rate</li>
                <li>• Budget-friendly option</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful graduates who started their tech journey with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onEnrollClick()}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Start Application
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition text-lg font-semibold">
              Schedule Counseling
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}