import React from 'react';
import { FileText, Camera, MessageCircle } from 'lucide-react';

interface TimelineTooltipProps {
  className?: string;
}

export const TimelineTooltip: React.FC<TimelineTooltipProps> = ({ className = '' }) => {
  return (
    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 md:w-80 z-30 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none ${className}`}>
      <div className="bg-white rounded-xl shadow-xl border border-stone-200 p-3 relative">
        {/* Arrow */}
        <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-stone-200 rotate-45"></div>

        <p className="text-[10px] font-bold text-center text-stone-800 mb-3 leading-tight px-1">
          Llenas datos, envías foto, recibes diagnóstico y ppto estimado
        </p>

        <div className="flex justify-between items-start relative z-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center w-1/3 relative">
            <div className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 mb-1 shadow-sm ring-2 ring-white">
              <FileText size={12} />
            </div>
            <p className="text-[8px] leading-tight text-stone-500 font-medium">Llenas datos</p>
          </div>

          {/* Connector 1 */}
          <div className="absolute top-[0.9rem] left-[18%] w-[30%] h-px bg-stone-200 -z-10"></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center w-1/3 relative">
            <div className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 mb-1 shadow-sm ring-2 ring-white">
              <Camera size={12} />
            </div>
            <p className="text-[8px] leading-tight text-stone-500 font-medium">Envías foto</p>
          </div>

          {/* Connector 2 */}
          <div className="absolute top-[0.9rem] right-[18%] w-[30%] h-px bg-stone-200 -z-10"></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center w-1/3 relative">
            <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mb-1 shadow-sm ring-2 ring-white">
              <MessageCircle size={12} />
            </div>
            <p className="text-[8px] leading-tight text-stone-500 font-medium">Diagnóstico</p>
          </div>
        </div>
      </div>
    </div>
  );
};