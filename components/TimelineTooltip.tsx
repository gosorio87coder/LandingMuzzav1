import React from 'react';
import { FileText, Camera, MessageCircle } from 'lucide-react';

interface TimelineTooltipProps {
  className?: string;
}

export const TimelineTooltip: React.FC<TimelineTooltipProps> = ({ className = '' }) => {
  return (
    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 md:w-80 z-30 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none ${className}`}>
      <div className="bg-white rounded-2xl shadow-xl shadow-muzza-med/10 border border-muzza-light p-4 relative">
        {/* Arrow */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-muzza-light rotate-45"></div>

        <p className="text-xs font-bold text-center text-muzza-dark mb-4 leading-tight px-1 font-sans">
          Llenas datos, envías foto, recibes diagnóstico y ppto estimado
        </p>

        <div className="flex justify-between items-start relative z-10 px-2">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center w-1/3 relative">
            <div className="w-8 h-8 rounded-full bg-muzza-pale flex items-center justify-center text-muzza-clay mb-1.5 shadow-sm border border-muzza-light">
              <FileText size={14} />
            </div>
            <p className="text-[9px] leading-tight text-muzza-clay font-bold uppercase tracking-wide">Datos</p>
          </div>

          {/* Connector 1 */}
          <div className="absolute top-[1rem] left-[18%] w-[30%] h-0.5 bg-muzza-light/50 -z-10"></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center w-1/3 relative">
            <div className="w-8 h-8 rounded-full bg-muzza-pale flex items-center justify-center text-muzza-clay mb-1.5 shadow-sm border border-muzza-light">
              <Camera size={14} />
            </div>
            <p className="text-[9px] leading-tight text-muzza-clay font-bold uppercase tracking-wide">Foto</p>
          </div>

          {/* Connector 2 */}
          <div className="absolute top-[1rem] right-[18%] w-[30%] h-0.5 bg-muzza-light/50 -z-10"></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center w-1/3 relative">
            <div className="w-8 h-8 rounded-full bg-muzza-med flex items-center justify-center text-white mb-1.5 shadow-md ring-2 ring-white">
              <MessageCircle size={14} />
            </div>
            <p className="text-[9px] leading-tight text-muzza-med font-bold uppercase tracking-wide">Info</p>
          </div>
        </div>
      </div>
    </div>
  );
};