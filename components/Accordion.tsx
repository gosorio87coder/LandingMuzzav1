import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

interface AccordionProps {
  items: FAQItem[];
  openId: string | null;
  onToggle: (id: string) => void;
}

export const Accordion: React.FC<AccordionProps> = ({ items, openId, onToggle }) => {
  return (
    <div className="space-y-3 lg:space-y-4 w-full">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div 
            key={item.id} 
            className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white ${
              isOpen 
                ? 'border-muzza-med/30 shadow-md ring-1 ring-muzza-med/10' 
                : 'border-white shadow-sm hover:border-muzza-light'
            }`}
          >
            <button
              onClick={() => onToggle(item.id)}
              className="w-full flex items-center justify-between p-3 lg:p-5 text-left bg-white transition-colors group"
            >
              <div className="flex items-center gap-3 lg:gap-5">
                {/* Icon Container: Colorful in both states */}
                <div className={`p-2 lg:p-2.5 rounded-xl transition-colors duration-300 flex items-center justify-center shadow-sm ${
                  isOpen 
                    ? 'bg-muzza-med text-white' 
                    : 'bg-muzza-med/10 text-muzza-med border border-muzza-med/20 group-hover:bg-muzza-med/20'
                }`}>
                  <item.icon size={20} className="lg:w-6 lg:h-6" strokeWidth={2} />
                </div>
                
                {/* Title: Font changed to Sans (Quicksand) to match 'Especialistas logrando' */}
                <span className={`font-sans text-lg lg:text-xl transition-colors duration-200 ${
                  isOpen ? 'text-muzza-med font-bold' : 'text-muzza-dark font-bold'
                }`}>
                  {item.title}
                </span>
              </div>
              
              <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                <ChevronDown 
                  className={isOpen ? "text-muzza-med" : "text-muzza-light"} 
                  size={20} 
                  strokeWidth={2.5}
                />
              </div>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden bg-white ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-4 pb-6 pt-1 lg:px-6 text-muzza-dark/80 text-sm leading-relaxed border-t border-transparent ml-[3.25rem] lg:ml-[4.5rem]">
                <div className="pt-2">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};