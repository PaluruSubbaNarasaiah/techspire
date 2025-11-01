import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center z-50 animate-fadeOut">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto">
            <img src="/logo.png" alt="TechSpire Academy" className="w-full h-full object-contain animate-pulse" />
          </div>
          <div className="absolute inset-0 w-24 h-24 mx-auto border-4 border-white/20 rounded-full animate-ping"></div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2 animate-fadeInUp">
          Tech<span className="text-blue-400">Spire</span>
        </h1>
        <p className="text-blue-200 animate-fadeInUp animation-delay-300">
          Loading Excellence...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;