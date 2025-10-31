export default function TermsOfService() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using Tech Spire Academy's services, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Enrollment</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Students must complete enrollment process and payment to access courses</li>
              <li>Course access is granted upon successful payment verification</li>
              <li>Students are responsible for maintaining login credentials</li>
              <li>Course materials are for personal use only and cannot be shared</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <p className="text-gray-600 mb-6">
              All course fees must be paid as per the selected payment plan. We offer one-time payment, 
              3-month EMI, and 6-month EMI options. Late payment may result in course access suspension.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All course content, materials, and resources are the intellectual property of Tech Spire Academy. 
              Unauthorized reproduction, distribution, or sharing is strictly prohibited.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Conduct</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Maintain respectful behavior in all interactions</li>
              <li>No harassment, discrimination, or inappropriate conduct</li>
              <li>Violation may result in course termination without refund</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600">
              For questions regarding these terms, contact us at info@techspireacademy.com or +91 9876543210.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}