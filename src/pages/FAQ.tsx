import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are the course prerequisites?",
      answer: "Most courses require basic computer literacy. Specific prerequisites vary by course - Full Stack requires basic programming knowledge, while UI/UX and some beginner courses have no prerequisites."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we provide 100% placement assistance including resume building, interview preparation, mock interviews, and direct connections with 500+ hiring partners."
    },
    {
      question: "What is the refund policy?",
      answer: "We offer a 7-day money-back guarantee. If you're not satisfied within the first week, you can get a full refund. After that, refunds are considered on a case-by-case basis."
    },
    {
      question: "Are the courses live or recorded?",
      answer: "Our courses include both live interactive sessions and recorded content. Live sessions are conducted 3-4 times per week, and all sessions are recorded for later review."
    },
    {
      question: "What payment options are available?",
      answer: "We offer flexible payment options: one-time payment (10% discount), 3-month EMI (0% interest), and 6-month EMI (low interest rates)."
    },
    {
      question: "Do I get a certificate after completion?",
      answer: "Yes, you receive an industry-recognized certificate upon successful completion of the course and final project submission."
    },
    {
      question: "What is the batch size?",
      answer: "We maintain small batch sizes of 15-20 students to ensure personalized attention and better learning outcomes."
    },
    {
      question: "Can I switch between batches?",
      answer: "Yes, you can switch between weekday, weekend, and evening batches based on availability and your schedule requirements."
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our courses, admission process, and career support
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-600" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}