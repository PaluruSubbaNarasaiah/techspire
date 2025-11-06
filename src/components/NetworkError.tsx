import { useState, useEffect } from 'react';
import { WifiOff, RefreshCw } from 'lucide-react';

export default function NetworkError() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowError(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowError(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!showError) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center animate-fadeInUp">
        <div className="mb-6">
          <div className="relative mx-auto w-24 h-24 mb-4">
            <WifiOff className="w-24 h-24 text-red-500 animate-pulse" />
            <div className="absolute inset-0 border-4 border-red-200 rounded-full animate-ping"></div>
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">No Internet Connection</h3>
        <p className="text-gray-600 mb-6">
          Oops! Something went wrong. Please check your internet connection and try again.
        </p>
        
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center mx-auto group"
        >
          <RefreshCw className="w-5 h-5 mr-2 group-hover:animate-spin" />
          Try Again
        </button>
      </div>
    </div>
  );
}