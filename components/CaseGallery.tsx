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
    <div className="w-full min-h-screen bg-muzza-pale pb-24 animate-in slide-in-from-right duration-300">
      
      {/* Header Sticky */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-muzza-light/50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="p-2 -ml-2 rounded-full hover:bg-muzza-pale text-muzza-med transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <h2 className="font-serif text-2xl text-muzza-dark font-bold hidden md:block">Galería de Casos Reales</h2>
            <h2 className="font-serif text-xl text-muzza-dark font-bold md:hidden">Casos Reales</h2>
          </div>
          
          {/* Desktop Filter (Inline) */}
          <div className="hidden md:flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-muzza-med text-white shadow-md shadow-muzza-med/20' 
                    : 'bg-white text-muzza-clay border border-muzza-light hover:border-muzza-med'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Filter (Scrollable) */}
        <div className="md:hidden border-t border-muzza-light/30 bg-muzza-pale/50 backdrop-blur-sm py-3 px-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-3 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 shadow-sm ${
                  activeCategory === cat 
                    ? 'bg-muzza-med text-white shadow-muzza-med/30' 
                    : 'bg-white text-muzza-clay border border-muzza-light hover:border-muzza-med'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((item) => (
            <div key={item.id} className="bg-white rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-muzza-med/10 transition-all duration-300 border border-muzza-light/50 overflow-hidden flex flex-col h-full group">
              {/* Header Card */}
              <div className="px-5 py-3 border-b border-muzza-light/20 flex justify-between items-center bg-white">
                <span className="text-[10px] font-bold tracking-widest text-muzza-clay uppercase border border-muzza-light rounded-md px-2 py-1">
                  {item.category}
                </span>
              </div>

              {/* Before / After Images Container */}
              <div className="grid grid-cols-2 gap-0.5 bg-white relative">
                {/* Before Label */}
                <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full font-medium">
                  Antes
                </div>
                {/* After Label */}
                <div className="absolute top-3 right-3 bg-muzza-med/90 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full font-medium shadow-lg">
                  Después
                </div>

                {/* Placeholder Images */}
                <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-gray-50 transition-colors">
                  <span className="text-xs font-serif italic">Foto Antes</span>
                </div>
                <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-gray-100 transition-colors">
                  <span className="text-xs font-serif italic">Foto Después</span>
                </div>
              </div>

              {/* Content & Action */}
              <div className="p-6 flex flex-col flex-grow relative bg-white">
                <h3 className="font-serif font-bold text-xl text-muzza-med mb-3">{item.title}</h3>
                
                {/* Technical Specs Box */}
                <div className="bg-muzza-pale rounded-xl p-4 mb-4 border border-muzza-light/50 flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] font-bold text-muzza-clay uppercase tracking-wider min-w-[60px] pt-0.5">Caso:</span>
                    <span className="text-xs text-muzza-dark font-medium leading-tight">{item.specs.brows}</span>
                  </div>
                  <div className="w-full h-px bg-muzza-light/30"></div>
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] font-bold text-muzza-clay uppercase tracking-wider min-w-[60px] pt-0.5">Piel:</span>
                    <span className="text-xs text-muzza-dark font-medium leading-tight">{item.specs.skin}</span>
                  </div>
                </div>

                <p className="text-sm text-muzza-dark/70 mb-8 leading-relaxed font-medium flex-grow">{item.desc}</p>
                
                {/* CTA */}
                <div className="group/btn relative mt-auto">
                  <TimelineTooltip className="w-72 left-1/2 -translate-x-1/2" />
                  <button 
                    onClick={onCtaClick}
                    className="w-full py-3.5 rounded-xl border-2 border-muzza-med text-muzza-med text-sm font-bold hover:bg-muzza-med hover:text-white flex items-center justify-center gap-2 transition-all active:scale-95 duration-200"
                  >
                    <Sparkles size={18} />
                    Quiero este resultado
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Spacer */}
      <div className="h-16 text-center text-xs text-muzza-clay/50 italic font-serif">
        Resultados reales de clientas Muzza
      </div>
    </div>
  );
};