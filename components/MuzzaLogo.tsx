import React from 'react';

export const MuzzaLogo = ({ className = "h-12 w-auto", color = "currentColor" }: { className?: string; color?: string }) => (
  <div className="flex flex-col items-start gap-1">
    <svg viewBox="0 0 320 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* M - Custom Lash Curve */}
      <path d="M10 50 V10" stroke={color} strokeWidth="5" strokeLinecap="square" />
      <path d="M10 10 C 35 35, 45 35, 70 10" stroke={color} strokeWidth="5" strokeLinecap="round" />
      <path d="M70 10 V50" stroke={color} strokeWidth="5" strokeLinecap="square" />
      
      {/* U */}
      <path d="M95 10 V35 A 15 15 0 0 0 125 35 V10" stroke={color} strokeWidth="5" strokeLinecap="square" />
      
      {/* Z */}
      <path d="M150 10 H180 L150 50 H180" stroke={color} strokeWidth="5" strokeLinejoin="round" strokeLinecap="square" />
      
      {/* Z */}
      <path d="M205 10 H235 L205 50 H235" stroke={color} strokeWidth="5" strokeLinejoin="round" strokeLinecap="square" />
      
      {/* A - No crossbar */}
      <path d="M260 50 L275 10 L290 50" stroke={color} strokeWidth="5" strokeLinejoin="round" strokeLinecap="square" />
    </svg>
    <span className={`text-[0.65rem] tracking-[0.3em] font-sans font-bold pl-1.5 ${color === 'white' ? 'text-white/80' : 'text-muzza-clay'}`}>
      BROWS - LASH STUDIO
    </span>
  </div>
);