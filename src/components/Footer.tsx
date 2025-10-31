import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Tech Spire Academy</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering students with industry-ready skills. Join us to transform your career with expert-led training and guaranteed placement support.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/techspireacademy" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/techspireacademy" target="_blank" rel="noopener noreferrer" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/techspireacademy" target="_blank" rel="noopener noreferrer" className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/techspireacademy" target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@techspireacademy" target="_blank" rel="noopener noreferrer" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Courses</h4>
            <ul className="space-y-3">
              <li><Link to="/courses" className="text-gray-400 hover:text-blue-400 transition">Java Full Stack</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-blue-400 transition">Python Full Stack</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-blue-400 transition">Data Science</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-blue-400 transition">AWS Cloud</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-blue-400 transition">DevOps Engineering</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-blue-400 transition">All Courses</Link></li>
              <li><Link to="/admissions" className="text-gray-400 hover:text-blue-400 transition">Admissions</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Tech Tower, 3rd Floor<br />
                  Koramangala, Bangalore - 560095<br />
                  Karnataka, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-blue-400 transition">
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <a href="mailto:info@techspireacademy.com" className="text-gray-400 hover:text-blue-400 transition">
                  info@techspireacademy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Tech Spire Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition">Terms of Service</Link>
              <Link to="/refund-policy" className="text-gray-400 hover:text-blue-400 transition">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
