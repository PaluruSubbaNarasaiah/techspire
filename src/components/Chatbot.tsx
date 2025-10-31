import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm here to help with your queries about Tech Spire Academy. How can I assist you?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const quickReplies = [
    "Course Information",
    "Admission Process", 
    "Fees & Payment",
    "Placement Support",
    "Contact Details"
  ];

  const botResponses: { [key: string]: string } = {
    "course information": "We offer Full Stack Web Development (₹49,999), Data Science & ML (₹59,999), and AWS Cloud Computing (₹39,999). All courses include hands-on projects and placement support.",
    "admission process": "Simple 4-step process: 1) Choose course 2) Submit application 3) Assessment & interview 4) Enrollment & payment. You can start by clicking 'Enroll Now' on any course.",
    "fees & payment": "We offer flexible payment options: One-time payment (10% off), 3-month EMI (0% interest), and 6-month EMI (low interest). All courses include lifetime access.",
    "placement support": "We provide 100% placement assistance with resume building, interview preparation, and connections to 500+ hiring partners. 95% of our students get placed within 6 months.",
    "contact details": "📞 +91 9876543210 | 📧 info@techspireacademy.com | 📍 Koramangala, Bangalore. Office hours: Mon-Fri 9AM-7PM, Sat 10AM-5PM."
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    
    const response = botResponses[input.toLowerCase()] || 
      "I'd be happy to help! For detailed information, please contact our team at +91 9876543210 or use our contact form.";
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);
    
    setInput('');
  };

  const handleQuickReply = (reply: string) => {
    setMessages(prev => [...prev, { text: reply, isBot: false }]);
    
    const response = botResponses[reply.toLowerCase()] || 
      "Let me connect you with our team for detailed information. Please call +91 9876543210.";
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-40"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Tech Spire Support</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-xs p-3 rounded-lg text-sm ${
                  msg.isBot ? 'bg-gray-100 text-gray-800' : 'bg-blue-600 text-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="p-2 border-t">
            <div className="flex flex-wrap gap-1 mb-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}