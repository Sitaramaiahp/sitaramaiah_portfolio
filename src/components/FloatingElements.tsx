
import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 floating blur-xl" 
           style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-purple-500/10 floating blur-xl" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-24 h-24 rounded-full bg-cyan-500/10 floating blur-xl" 
           style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-20 right-10 w-12 h-12 rounded-full bg-green-400/10 floating blur-xl" 
           style={{ animationDelay: '1s' }} />
      
      {/* Tech shapes */}
      <div className="absolute top-1/4 left-1/4 opacity-5">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-primary floating">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
      
      <div className="absolute top-1/3 right-1/4 opacity-5">
        <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor" className="text-purple-400 floating" style={{ animationDelay: '3s' }}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
    </div>
  );
};

export default FloatingElements;
