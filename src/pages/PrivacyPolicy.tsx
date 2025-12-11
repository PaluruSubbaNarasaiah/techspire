export default function PrivacyPolicy() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you create an account, enroll in courses, 
              contact us, or participate in our services. This includes your name, email address, phone number, 
              payment information, and course preferences.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Provide and maintain our educational services</li>
              <li>Process enrollments and payments</li>
              <li>Send course updates and educational content</li>
              <li>Provide customer support</li>
              <li>Improve our services and user experience</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information 
              with trusted service providers who assist us in operating our platform, conducting business, or serving you.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy, please contact us at info@techspireacademy.in 
              or call +91 88865 56393.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}