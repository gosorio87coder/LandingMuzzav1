import React, { useState } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { TimelineTooltip } from './TimelineTooltip';

interface CaseGalleryProps {
  onBack: () => void;
  onCtaClick: () => void;
}

type Category = 'Todos' | 'Microblading' | 'Microshading' | 'Powder Brows';

const categories: Category[] = ['Todos', 'Microblading', 'Microshading', 'Powder Brows'];

interface Case {
  id: number;
  category: Category;
  title: string;
  desc: string;
  specs: {
    brows: string;
    skin: string;
  };
}

const cases: Case[] = [
  {
    id: 1,
    category: 'Microblading',
    title: 'Definición Natural',
    desc: 'Corrección de asimetría leve con trazos pelo a pelo para un look indetectable.',
    specs: {
      brows: 'Población irregular o asimétrica',
      skin: 'Piel Normal a Seca'
    }
  },
  {
    id: 2,
    category: 'Microshading',
    title: 'Densidad y Estilo',
    desc: 'Combinación de trazos y sombra. Ideal para quienes se maquillan las cejas a diario.',
    specs: {
      brows: 'Cejas con claros o sin cola',
      skin: 'Piel Mixta o con poros visibles'
    }
  },
  {
    id: 3,
    category: 'Powder Brows',
    title: 'Efecto Maquillaje',
    desc: 'Un look definido y perfecto con degradado suave. La mejor opción para pieles grasas.',
    specs: {
      brows: 'Cualquier cantidad de vello',
      skin: 'Piel Grasa o sensible'
    }
  },
  {
    id: 4,
    category: 'Microblading',
    title: 'Reconstrucción Total',
    desc: 'Diseño completo creando una estructura desde cero con máxima naturalidad.',
    specs: {
      brows: 'Alopecia o cejas muy finas',
      skin: 'Piel Seca y joven'
    }
  },
  {
    id: 5,
    category: 'Microshading',
    title: 'Cobertura 3D',
    desc: 'Logra volumen visual y definición duradera sin perder la esencia natural.',
    specs: {
      brows: 'Vello disperso sin forma definida',
      skin: 'Todo tipo de piel (Universal)'
    }
  }
];

export const CaseGallery: React.FC<CaseGalleryProps> = ({ onBack, onCtaClick }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');

  const filteredCases = activeCategory === 'Todos' 
    ? cases 
    : cases.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-stone-50 pb-24 animate-in slide-in-from-right duration-300">
      {/* Header Sticky */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-stone-100 px-4 py-4 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="font-serif text-lg text-stone-900 font-semibold">Casos Reales</h2>
        <div className="w-10" /> {/* Spacer for centering */}
      </header>

      {/* Category Filter */}
      <div className="sticky top-[73px] z-20 bg-stone-50 py-4 px-4 overflow-x-auto no-scrollbar border-b border-stone-200/50">
        <div className="flex gap-2 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === cat 
                  ? 'bg-stone-900 text-white shadow-md transform scale-105' 
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="p-4 space-y-6">
        {filteredCases.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-stone-100">
            {/* Header Card */}
            <div className="px-4 py-3 border-b border-stone-50 flex justify-between items-center">
              <span className="text-[10px] font-bold tracking-wider text-rose-950 bg-rose-50 px-2 py-1 rounded uppercase">
                {item.category}
              </span>
            </div>

            {/* Before / After Images Container */}
            <div className="grid grid-cols-2 gap-0.5 bg-stone-100 relative overflow-hidden">
              {/* Before Label */}
              <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded">
                Antes
              </div>
              {/* After Label */}
              <div className="absolute top-2 right-2 bg-rose-900/80 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded">
                Después
              </div>

              {/* Placeholder Images - In production replace with real <img> tags */}
              <div className="aspect-[3/4] bg-stone-200 flex items-center justify-center text-stone-400">
                <span className="text-xs">Foto Antes</span>
              </div>
              <div className="aspect-[3/4] bg-stone-300 flex items-center justify-center text-stone-500">
                <span className="text-xs">Foto Después</span>
              </div>
            </div>

            {/* Content & Action */}
            <div className="p-4 relative z-10">
              <h3 className="font-serif font-semibold text-stone-900 mb-2">{item.title}</h3>
              
              {/* Technical Specs Box */}
              <div className="bg-stone-50 rounded-lg p-3 mb-3 border border-stone-100 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider min-w-[60px] pt-0.5">Caso:</span>
                  <span className="text-xs text-stone-700 font-medium leading-tight">{item.specs.brows}</span>
                </div>
                <div className="w-full h-px bg-stone-200/50"></div>
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider min-w-[60px] pt-0.5">Piel:</span>
                  <span className="text-xs text-stone-700 font-medium leading-tight">{item.specs.skin}</span>
                </div>
              </div>

              <p className="text-xs text-stone-500 mb-4 leading-relaxed">{item.desc}</p>
              
              {/* Wrapper div for tooltip relative positioning */}
              <div className="group relative">
                <TimelineTooltip className="w-72" />
                <button 
                  onClick={onCtaClick}
                  className="w-full py-3 rounded-xl border border-stone-200 text-stone-800 text-sm font-medium hover:bg-stone-50 flex items-center justify-center gap-2 transition-colors active:scale-95 duration-200"
                >
                  <Sparkles size={16} className="text-gold-400" />
                  Quiero este resultado
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Spacer */}
      <div className="h-12 text-center text-xs text-stone-300 italic">
        Resultados reales de clientas Muzza
      </div>
    </div>
  );
};