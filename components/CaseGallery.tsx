
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles, Loader2, ImageOff, X, Maximize2 } from 'lucide-react';
import { TimelineTooltip } from './TimelineTooltip';

interface CaseGalleryProps {
  onBack: () => void;
  onCtaClick: () => void;
}

type Category = 'Todos' | 'Microblading' | 'Microshading' | 'Powder Brows';

const categories: Category[] = ['Todos', 'Microblading', 'Microshading', 'Powder Brows'];

/** 
 * COMPONENTE DE IMAGEN OPTIMIZADO
 */
const OptimizedImage: React.FC<{ 
  src: string; 
  alt: string; 
  className?: string;
  onClick?: () => void;
}> = ({ src, alt, className = "", onClick }) => {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <div 
      className={`relative overflow-hidden bg-muzza-pale border-r border-white/10 group/img cursor-zoom-in ${className}`}
      onClick={onClick}
    >
      {status === 'loading' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muzza-pale">
          <Loader2 className="animate-spin text-muzza-med opacity-40" size={24} />
        </div>
      )}
      
      {status === 'error' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gray-100">
          <ImageOff className="text-gray-300" size={24} />
        </div>
      )}

      <div className="absolute inset-0 bg-muzza-dark/0 group-hover/img:bg-muzza-dark/10 transition-colors duration-300 z-10 flex items-center justify-center">
        <Maximize2 className="text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 drop-shadow-md" size={32} />
      </div>

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          status === 'loaded' ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        } group-hover/img:scale-105`}
      />
    </div>
  );
};

/**
 * LIGHTBOX PREMIUM (MODAL DE ZOOM)
 */
const ImageLightbox: React.FC<{ 
  caseItem: Case; 
  initialType: 'before' | 'after'; 
  onClose: () => void;
}> = ({ caseItem, initialType, onClose }) => {
  const [viewType, setViewType] = useState(initialType);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-muzza-dark/95 backdrop-blur-md" onClick={onClose} />
      
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20"
      >
        <X size={24} />
      </button>

      <div className="relative w-full max-w-4xl max-h-[85vh] flex flex-col items-center z-[105]">
        <div className="w-full relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-black flex items-center justify-center">
          <img 
            src={viewType === 'before' ? caseItem.imgBefore : caseItem.imgAfter} 
            alt={viewType}
            className="max-w-full max-h-[75vh] object-contain animate-in zoom-in-95 duration-500"
          />
          
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex bg-black/40 backdrop-blur-xl p-1 rounded-full border border-white/20 shadow-2xl">
            <button 
              onClick={() => setViewType('before')}
              className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                viewType === 'before' ? 'bg-white text-muzza-dark shadow-lg' : 'text-white/60 hover:text-white'
              }`}
            >
              Antes
            </button>
            <button 
              onClick={() => setViewType('after')}
              className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                viewType === 'after' ? 'bg-muzza-med text-white shadow-lg' : 'text-white/60 hover:text-white'
              }`}
            >
              Después
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-white space-y-2">
          <h4 className="font-serif text-xl md:text-2xl font-bold">{caseItem.title}</h4>
          <p className="text-sm text-white/60 font-medium tracking-wide uppercase">{caseItem.category}</p>
        </div>
      </div>
    </div>
  );
};

interface Case {
  id: number;
  category: Category;
  title: string;
  desc: string;
  imgBefore: string;
  imgAfter: string;
  specs: {
    brows: string;
    skin: string;
  };
}

const cases: Case[] = [
  {
    id: 9,
    category: 'Powder Brows',
    title: 'Perfección Powder',
    desc: 'Técnica de sombreado efecto píxel que aporta una definición impecable y un color saturado pero elegante, ideal para quienes buscan cejas con look de maquillaje profesional 24/7.',
    imgBefore: 'https://res.cloudinary.com/dx1d1hdos/image/upload/v1769465875/powder_juli3_antes_n4hmg8.jpg',
    imgAfter: 'https://res.cloudinary.com/dx1d1hdos/image/upload/v1769465887/powder_juli3_despues_suqdia.jpg',
    specs: {
      brows: 'Base muy clara con falta de estructura',
      skin: 'Piel Grasa / Poros visibles'
    }
  },
  {
    id: 3,
    category: 'Powder Brows',
    title: 'Efecto Maquillaje',
    desc: 'Un look definido y perfecto con degradado suave. La mejor opción para pieles grasas.',
    imgBefore: 'https://res.cloudinary.com/dx1d1hdos/image/upload/v1769466497/M1-A_Buena_foto_1_1_vbbnmc.jpg',
    imgAfter: 'https://res.cloudinary.com/dx1d1hdos/image/upload/v1769466512/M1-D_Buena_foto_1_1_n9nrst.jpg',
    specs: {
      brows: 'Cualquier cantidad de vello',
      skin: 'Piel Grasa o sensible'
    }
  },
  {
    id: 2,
    category: 'Microshading',
    title: 'Densidad y Estilo',
    desc: 'Combinación de trazos y sombra. Ideal para quienes se maquillan las cejas a diario.',
    imgBefore: 'https://res.cloudinary.com/dx1d1hdos/image/upload/v1769466776/microshading1_antes_mazz6u.jpg',
    imgAfter: 'https://res.cloudinary.com/dx1d1hdos/image/upload/v1769466786/microshading1_despues_d1bc4r.jpg',
    specs: {
      brows: 'Cejas con claros o sin cola',
      skin: 'Piel Mixta o con poros visibles'
    }
  },
  {
    id: 1,
    category: 'Microblading',
    title: 'Definición Realista',
    desc: 'Transformación lograda con microblading pelo a pelo, respetando el crecimiento natural y recuperando la forma perdida.',
    imgBefore: 'https://res.cloudinary.com/dx1d1hdos/image/upload/v1769438065/Microblading_antes1_xjzkos.jpg',
    imgAfter: 'https://res.cloudinary.com/dx1d1hdos/image/upload/v1769438111/Microblading_despu%C3%A9s_xsew5m.jpg',
    specs: {
      brows: 'Población irregular con calvas',
      skin: 'Piel Normal / Seca'
    }
  },
  {
    id: 4,
    category: 'Microblading',
    title: 'Recuperación de Arco',
    desc: 'Diseño integral enfocado en elevar la mirada mediante la reconstrucción estratégica del arco y la cola de la ceja con trazos ultra finos.',
    imgBefore: 'https://res.cloudinary.com/dx1d1hdos/image/upload/v1769439160/microblading_antes_jxsuti.jpg',
    imgAfter: 'https://res.cloudinary.com/dx1d1hdos/image/upload/v1769439237/microblading_despues_fcbxgi.jpg',
    specs: {
      brows: 'Falta de definición en arco y cola',
      skin: 'Piel Normal / Joven'
    }
  },
  {
    id: 5,
    category: 'Microshading',
    title: 'Sombreado e Intensidad',
    desc: 'Efecto sombreado degradado combinado con trazos naturales para una mirada con mayor profundidad y definición permanente.',
    imgBefore: 'https://res.cloudinary.com/dx1d1hdos/image/upload/v1769440297/microshading6_antes_bv0lrl.jpg',
    imgAfter: 'https://res.cloudinary.com/dx1d1hdos/image/upload/v1769440313/microshading6_despues_fidll6.jpg',
    specs: {
      brows: 'Cejas con vello muy claro o escaso',
      skin: 'Piel Grasa / Mixta'
    }
  },
  {
    id: 6,
    category: 'Microshading',
    title: 'Redefinición y Color',
    desc: 'Diseño enfocado en corregir asimetrías y aportar un color vibrante y natural que armoniza con las facciones.',
    imgBefore: 'https://res.cloudinary.com/dx1d1hdos/image/upload/v1769440399/M21-A_qqjxgs.jpg',
    imgAfter: 'https://res.cloudinary.com/dx1d1hdos/image/upload/v1769440425/M21-D_lweq5r.jpg',
    specs: {
      brows: 'Poca densidad y asimetría marcada',
      skin: 'Piel Mixta / Normal'
    }
  },
  {
    id: 7,
    category: 'Microshading',
    title: 'Perfilado y Relleno 3D',
    desc: 'Corrección de volumen y diseño mediante Microshading, logrando un acabado suave pero definido que elimina la necesidad de maquillaje diario.',
    imgBefore: 'https://res.cloudinary.com/dx1d1hdos/image/upload/v1769440530/M29-A_Buena_foto_3_pl3azc.jpg',
    imgAfter: 'https://res.cloudinary.com/dx1d1hdos/image/upload/v1769440538/M29-D_Buena_foto_3_fy0n0v.jpg',
    specs: {
      brows: 'Falta de vello en el cuerpo de la ceja',
      skin: 'Piel Normal / Sensible'
    }
  },
  {
    id: 8,
    category: 'Powder Brows',
    title: 'Elegancia Powder',
    desc: 'Sombreado degradado ultra suave que aporta definición y color de larga duración, ideal para sustituir el uso de lápiz o sombras diarias.',
    imgBefore: 'https://res.cloudinary.com/dx1d1hdos/image/upload/v1769440869/powder_juli_antes_qfntxl.jpg',
    imgAfter: 'https://res.cloudinary.com/dx1d1hdos/image/upload/v1769440948/powder_juli_despues_a0urgd.jpg',
    specs: {
      brows: 'Buscaba definición y relleno uniforme',
      skin: 'Piel Grasa / Poros dilatados'
    }
  }
];

export const CaseGallery: React.FC<CaseGalleryProps> = ({ onBack, onCtaClick }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');
  const [selectedCase, setSelectedCase] = useState<{item: Case, type: 'before' | 'after'} | null>(null);

  const filteredCases = activeCategory === 'Todos' 
    ? cases 
    : cases.filter(c => c.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-muzza-pale pb-24 animate-in slide-in-from-right duration-300">
      
      {/* Lightbox Trigger */}
      {selectedCase && (
        <ImageLightbox 
          caseItem={selectedCase.item}
          initialType={selectedCase.type}
          onClose={() => setSelectedCase(null)}
        />
      )}

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

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((item) => (
            <div key={item.id} className="bg-white rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-muzza-med/10 transition-all duration-300 border border-muzza-light/50 overflow-hidden flex flex-col h-full group">
              <div className="px-5 py-3 border-b border-muzza-light/20 flex justify-between items-center bg-white">
                <span className="text-[10px] font-bold tracking-widest text-muzza-clay uppercase border border-muzza-light rounded-md px-2 py-1">
                  {item.category}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-px bg-muzza-light/20 relative">
                <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md text-white text-[9px] px-2.5 py-1 rounded-full font-bold z-10 tracking-wider uppercase pointer-events-none">
                  Antes
                </div>
                <div className="absolute top-3 right-3 bg-muzza-med/90 backdrop-blur-md text-white text-[9px] px-2.5 py-1 rounded-full font-bold shadow-lg z-10 tracking-wider uppercase pointer-events-none">
                  Después
                </div>

                <OptimizedImage 
                  src={item.imgBefore} 
                  alt={`Antes - ${item.title}`} 
                  className="aspect-[3/4]"
                  onClick={() => setSelectedCase({item, type: 'before'})}
                />
                <OptimizedImage 
                  src={item.imgAfter} 
                  alt={`Después - ${item.title}`} 
                  className="aspect-[3/4]"
                  onClick={() => setSelectedCase({item, type: 'after'})}
                />
              </div>

              <div className="p-6 flex flex-col flex-grow relative bg-white">
                <h3 className="font-serif font-bold text-xl text-muzza-med mb-3">{item.title}</h3>
                
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
                
                <div className="group/btn relative mt-auto">
                  <TimelineTooltip className="w-72 left-1/2 -translate-x-1/2" />
                  <button 
                    onClick={onCtaClick}
                    className="w-full py-4 rounded-xl border-2 border-muzza-med text-muzza-med text-sm font-bold hover:bg-muzza-med hover:text-white flex items-center justify-center gap-2 transition-all active:scale-95 duration-200 shadow-sm"
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
      
      <div className="h-16 text-center text-[10px] text-muzza-clay/50 italic font-sans uppercase tracking-[0.2em] mb-12">
        Resultados reales de clientas Muzza Jesús María
      </div>
    </div>
  );
};
