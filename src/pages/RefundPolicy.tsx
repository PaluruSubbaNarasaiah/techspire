export default function RefundPolicy() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Refund Policy</h1>
          <p className="text-xl text-gray-600">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7-Day Money Back Guarantee</h2>
            <p className="text-gray-600 mb-6">
              We offer a 7-day money-back guarantee from the date of enrollment. If you're not satisfied with 
              the course within the first 7 days, you can request a full refund.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Eligibility</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Refund request must be made within 7 days of enrollment</li>
              <li>Student must not have completed more than 20% of the course content</li>
              <li>No refund for courses completed beyond 7 days</li>
              <li>Refund requests must include valid reason</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h2>
            <ol className="list-decimal pl-6 text-gray-600 mb-6">
              <li>Submit refund request via email to refunds@techspireacademy.in</li>
              <li>Include enrollment details and reason for refund</li>
              <li>Our team will review the request within 2-3 business days</li>
              <li>Approved refunds will be processed within 7-10 business days</li>
              <li>Refund will be credited to the original payment method</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Refundable Items</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Course completion certificates</li>
              <li>Downloaded course materials</li>
              <li>One-on-one mentoring sessions already conducted</li>
              <li>Third-party certification exam fees</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Circumstances</h2>
            <p className="text-gray-600 mb-6">
              In case of medical emergencies or other exceptional circumstances, refund requests beyond 7 days 
              may be considered on a case-by-case basis. Documentation may be required.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact for Refunds</h2>
            <p className="text-gray-600">
              For refund requests or questions, email us at refunds@techspireacademy.in or call +91 88865 56393.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}