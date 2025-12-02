import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

interface AccordionProps {
  items: FAQItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3 w-full max-w-md mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div 
            key={item.id} 
            className={`border border-stone-200 rounded-xl overflow-hidden transition-all duration-300 bg-white shadow-sm ${isOpen ? 'ring-1 ring-stone-300 shadow-md' : ''}`}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-4 text-left bg-white active:bg-stone-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${isOpen ? 'bg-rose-50 text-stone-800' : 'bg-stone-100 text-stone-500'}`}>
                  <item.icon size={20} />
                </div>
                <span className="font-medium text-stone-800 text-base">{item.title}</span>
              </div>
              {isOpen ? (
                <ChevronUp className="text-stone-400" size={18} />
              ) : (
                <ChevronDown className="text-stone-400" size={18} />
              )}
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-4 pt-0 text-stone-600 text-sm leading-relaxed border-t border-transparent">
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