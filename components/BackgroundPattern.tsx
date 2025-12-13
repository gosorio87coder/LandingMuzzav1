import React from 'react';

export const BackgroundPattern = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03]">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="muzza-waves" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
          {/* Organic wavy lines mimicking the brand texture */}
          <path d="M0 100 C 50 50, 150 150, 200 100 S 350 50, 400 100" fill="none" stroke="#222" strokeWidth="2" />
          <path d="M0 200 C 50 150, 150 250, 200 200 S 350 150, 400 200" fill="none" stroke="#222" strokeWidth="2" />
          <path d="M0 300 C 50 250, 150 350, 200 300 S 350 250, 400 300" fill="none" stroke="#222" strokeWidth="2" />
          
          {/* Vertical intersecting waves */}
          <path d="M100 0 C 150 50, 50 150, 100 200 S 150 350, 100 400" fill="none" stroke="#222" strokeWidth="2" />
          <path d="M300 0 C 350 50, 250 150, 300 200 S 350 350, 300 400" fill="none" stroke="#222" strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#muzza-waves)" />
    </svg>
  </div>
);