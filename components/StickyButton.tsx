import React from 'react';
import { Sparkles } from 'lucide-react';
import { TimelineTooltip } from './TimelineTooltip';

interface StickyButtonProps {
  onClick: () => void;
}

export const StickyButton: React.FC<StickyButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-md z-40 pointer-events-none flex flex-col items-center justify-end">
      {/* Background Gradient fade for button area */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-muzza-pale via-muzza-pale/95 to-transparent pointer-events-none" />

      {/* Container for Button and Tooltip */}
      <div className="relative w-full px-6 pb-8 pt-12 pointer-events-auto group">
        
        {/* Reusable Timeline Tooltip */}
        <TimelineTooltip />

        <button
          onClick={onClick}
          className="w-full bg-muzza-med text-white rounded-full py-4 px-6 shadow-xl shadow-muzza-med/20 flex items-center justify-center gap-2 transform active:scale-95 transition-all duration-200 hover:bg-[#a682b0] relative z-20"
        >
          <span className="text-lg font-bold tracking-wide font-sans whitespace-nowrap">Lista para evaluar mis cejas</span>
          <Sparkles size={20} className="text-white/80 shrink-0" />
        </button>
      </div>
    </div>
  );
};