import React from 'react';
import { Sparkles } from 'lucide-react';
import { TimelineTooltip } from './TimelineTooltip';

interface StickyButtonProps {
  onClick: () => void;
}

export const StickyButton: React.FC<StickyButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none flex flex-col items-center justify-end">
      {/* Background Gradient fade for button area */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-stone-50 via-stone-50/95 to-transparent pointer-events-none" />

      {/* Container for Button and Tooltip */}
      <div className="relative w-full max-w-md mx-auto px-6 pb-8 pt-12 pointer-events-auto group">
        
        {/* Reusable Timeline Tooltip */}
        <TimelineTooltip />

        <button
          onClick={onClick}
          className="w-full bg-stone-900 text-white rounded-full py-4 px-6 shadow-xl flex items-center justify-center gap-2 transform active:scale-95 transition-all duration-200 hover:bg-stone-800 relative z-20"
        >
          <span className="text-lg font-medium tracking-wide">Estoy lista para evaluar mis cejas</span>
          <Sparkles size={18} className="text-yellow-200" />
        </button>
      </div>
    </div>
  );
};