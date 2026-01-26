
import React, { useState } from 'react';
import { MapPin, DollarSign, PenTool, HelpCircle, Clock, ShieldAlert, Images, Sparkles, PlayCircle, ArrowRight, CheckCircle2, Navigation, Compass, Zap, Star, Eye, Droplets, Search, Heart, Ruler, Sparkle, ClipboardCheck, CalendarCheck } from 'lucide-react';
import { Accordion } from './components/Accordion';
import { StickyButton } from './components/StickyButton';
import { QualificationModal } from './components/QualificationModal';
import { CaseGallery } from './components/CaseGallery';
import { MuzzaLogo } from './components/MuzzaLogo';
import { BackgroundPattern } from './components/BackgroundPattern';
import { FAQItem } from './types';
import { TimelineTooltip } from './components/TimelineTooltip';

// Component to handle the internal tabs of the Process FAQ
const ProcessTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'steps' | 'pain'>('steps');
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = "https://res.cloudinary.com/dx1d1hdos/video/upload/v1769464883/C%C3%B3mo_Es_El_Proceso_v2_t4qzoc.mp4";
  const posterUrl = "https://res.cloudinary.com/dx1d1hdos/video/upload/c_limit,w_720,q_auto,f_auto,so_0/v1769464883/C%C3%B3mo_Es_El_Proceso_v2_t4qzoc.jpg";

  const steps = [
    {
      title: 'Evaluación',
      desc: 'Analizamos tu tipo de piel y el estado de tus cejas.',
      icon: Search,
    },
    {
      title: 'Confort',
      desc: 'Aplicamos anestesia tópica para que no sientas molestias.',
      icon: Heart,
    },
    {
      title: 'Visagismo',
      desc: 'Creamos un diseño único para tu rostro. Tú lo apruebas antes de iniciar.',
      icon: Ruler,
    },
    {
      title: 'Procedimiento',
      desc: 'Realizamos la micropigmentación con la técnica elegida.',
      icon: Sparkle,
    },
    {
      title: 'Cuidados',
      desc: 'Te entregamos tu kit y guía de cuidados posteriores.',
      icon: ClipboardCheck,
    },
    {
      title: 'Retoque',
      desc: 'A los 30 días perfeccionamos el color y la forma.',
      icon: CalendarCheck,
    }
  ];

  return (
    <div className="font-sans">
      {/* High Contrast Tabs */}
      <div className="flex p-1 bg-muzza-dark/5 rounded-2xl mb-6 border border-muzza-dark/10">
        <button
          onClick={(e) => { e.stopPropagation(); setActiveTab('steps'); }}
          className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${
            activeTab === 'steps' 
              ? 'bg-white text-muzza-med shadow-lg scale-[1.02] z-10' 
              : 'text-muzza-clay/50 hover:text-muzza-clay'
          }`}
        >
          El Paso a Paso
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); setActiveTab('pain'); }}
          className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${
            activeTab === 'pain' 
              ? 'bg-white text-muzza-med shadow-lg scale-[1.02] z-10' 
              : 'text-muzza-clay/50 hover:text-muzza-clay'
          }`}
        >
          ¿Duele?
        </button>
      </div>

      <div className="animate-fade-in min-h-[120px]">
        {activeTab === 'steps' ? (
          <div className="space-y-8">
            {/* Visual Stepper */}
            <div className="relative pl-8 space-y-8 before:content-[''] before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-0.5 before:bg-muzza-light/40">
              {steps.map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-white border border-muzza-light/60 flex items-center justify-center z-10 shadow-sm group-hover:border-muzza-med transition-colors">
                    <step.icon size={14} className="text-muzza-med" />
                  </div>
                  <div>
                    <h5 className="font-bold text-muzza-dark text-sm leading-none mb-1">{step.title}</h5>
                    <p className="text-xs text-muzza-dark/60 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Video Section */}
            <div className="pt-2">
              <p className="text-[10px] font-bold text-muzza-clay uppercase tracking-widest mb-3 text-center">Video: El proceso en 60 segundos</p>
              <div className="relative group/video rounded-2xl overflow-hidden bg-muzza-dark aspect-video shadow-xl border border-muzza-light/20">
                {!isPlaying ? (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/20 group-hover/video:bg-black/30 transition-all cursor-pointer" onClick={() => setIsPlaying(true)}>
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover/video:scale-110 transition-transform shadow-2xl">
                      <PlayCircle size={40} fill="currentColor" className="opacity-90" />
                    </div>
                  </div>
                ) : null}
                
                {isPlaying ? (
                  <video 
                    src={videoUrl}
                    poster={posterUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                    onEnded={() => setIsPlaying(false)}
                  />
                ) : (
                  <img 
                    src={posterUrl} 
                    alt="Poster Video Proceso" 
                    className="w-full h-full object-cover opacity-80"
                  />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4 animate-fade-in">
             <div className="bg-muzza-pale p-5 rounded-2xl border border-muzza-light/50 space-y-3">
               <div className="flex items-center gap-3 text-muzza-med">
                 <div className="bg-white p-2 rounded-lg shadow-sm"><ShieldAlert size={20} /></div>
                 <h4 className="font-bold text-sm">Cero preocupaciones</h4>
               </div>
               <p className="text-sm text-muzza-dark/80 leading-relaxed">
                La comodidad es nuestra prioridad. Por esta razón, aplicamos una <strong>anestesia tópica (Epinefrina y Lidocaina)</strong> antes y durante el procedimiento para reducir las molestias.
              </p>
              <div className="text-xs text-muzza-clay font-medium italic border-l-2 border-muzza-med/30 pl-3">
                "La mayoría de nuestras clientas describe la sensación como una depilación con pinzas. Muchas incluso se quedan dormidas durante la sesión."
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-muzza-light/30 flex items-center gap-3">
              <CheckCircle2 size={18} className="text-green-500 shrink-0" />
              <p className="text-[11px] text-muzza-dark/70 font-bold uppercase tracking-tight">Anestesia aprobada y segura</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Component to handle the internal tabs for Techniques
const TechniqueTabs: React.FC<{onJumpToPrices: (tab: 'brows' | 'lashes') => void}> = ({onJumpToPrices}) => {
  const [activeTab, setActiveTab] = useState<'brows' | 'lashes'>('brows');

  return (
    <div className="font-sans">
      {/* High Contrast Tabs updated to match other sections */}
      <div className="flex p-1 bg-muzza-dark/5 rounded-2xl mb-6 border border-muzza-dark/10">
        <button
          onClick={(e) => { e.stopPropagation(); setActiveTab('brows'); }}
          className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${
            activeTab === 'brows' 
              ? 'bg-white text-muzza-med shadow-lg scale-[1.02] z-10' 
              : 'text-muzza-clay/50 hover:text-muzza-clay'
          }`}
        >
          Cejas (Permanente)
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); setActiveTab('lashes'); }}
          className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${
            activeTab === 'lashes' 
              ? 'bg-white text-muzza-med shadow-lg scale-[1.02] z-10' 
              : 'text-muzza-clay/50 hover:text-muzza-clay'
          }`}
        >
          Pestañas y Otros
        </button>
      </div>

      <div className="animate-fade-in space-y-4">
        {activeTab === 'brows' ? (
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-muzza-light/50 shadow-sm">
              <span className="block text-base font-bold text-muzza-med mb-2 font-serif">Microblading</span>
              <p className="text-sm text-muzza-dark/80 leading-relaxed mb-3">Esta técnica nos ayuda a recrear pelo por pelo cada vello de tus cejas para rellenar los espacios vacíos con un acabado súper natural.</p>
              <div className="bg-muzza-pale p-3 rounded-xl border border-muzza-light/30 space-y-2">
                <p className="text-xs text-muzza-clay leading-snug"><strong>Recomendado:</strong> Pieles secas a mixtas y con una población media de vellos en cejas. NO apto para piel grasa o con trabajo previo.</p>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-muzza-med uppercase tracking-tight">
                  <Clock size={12}/> Duración: 8 a 12 meses
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-muzza-light/50 shadow-sm">
              <span className="block text-base font-bold text-muzza-med mb-2 font-serif">Microshading</span>
              <p className="text-sm text-muzza-dark/80 leading-relaxed mb-3">Técnica híbrida que combina el efecto pelo a pelo en los inicios de la ceja, con un leve sombreado en la colita para darle mayor definición.</p>
              <div className="bg-muzza-pale p-3 rounded-xl border border-muzza-light/30 space-y-2">
                <p className="text-xs text-muzza-clay leading-snug"><strong>Recomendado:</strong> Pieles mixtas, con población media de vellos y SIN trabajo previo.</p>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-muzza-med uppercase tracking-tight">
                  <Clock size={12}/> Duración: 12 a 18 meses
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-muzza-light/50 shadow-sm">
              <span className="block text-base font-bold text-muzza-med mb-2 font-serif">Powder Brows</span>
              <p className="text-sm text-muzza-dark/80 leading-relaxed mb-3">Efecto polvo sutil, tipo maquillaje profesional con un degradado de color: Es más tenue en los inicios y el color se va acentuando a medida que llegamos a la colita.</p>
              <div className="bg-muzza-pale p-3 rounded-xl border border-muzza-light/30 space-y-2">
                <p className="text-xs text-muzza-clay leading-snug"><strong>Recomendado:</strong> Todo tipo de piel, incluso aquellas que tengan trabajos previos o poca población de vellos.</p>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-muzza-med uppercase tracking-tight">
                  <Clock size={12}/> Duración: 12 a 18 meses
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-muzza-light/50 shadow-sm">
              <span className="block text-base font-bold text-muzza-med mb-2 font-serif">Lifting de Pestañas</span>
              <p className="text-sm text-muzza-dark/80 leading-relaxed mb-3">Alternativa segura para potenciar forma, volumen y curvatura natural sin necesidad de maquillaje adicional.</p>
              <div className="bg-muzza-pale p-3 rounded-xl border border-muzza-light/30 space-y-2">
                <p className="text-xs text-muzza-clay leading-snug">Incluye elevación, dirección, 2 cadenas de hidratación y tinturado especial.</p>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-muzza-med uppercase tracking-tight">
                   <Zap size={12}/> Duración: 6 a 8 semanas
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-muzza-light/50 shadow-sm">
              <span className="block text-base font-bold text-muzza-med mb-2 font-serif">Henna para Cejas</span>
              <p className="text-sm text-muzza-dark/80 leading-relaxed mb-3">Tintura temporal de piel y vellos para un efecto de cejas completas y perfectas. Ideal para probar antes de un PMU.</p>
              <div className="bg-muzza-pale p-3 rounded-xl border border-muzza-light/30 space-y-2">
                <p className="text-xs text-muzza-clay leading-snug">Incluye visagismo y depilación personalizada según la forma de tu rostro.</p>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-muzza-med uppercase tracking-tight">
                   <Zap size={12}/> Duración: 7 a 10 días
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-muzza-light/50 shadow-sm">
              <span className="block text-base font-bold text-muzza-med mb-2 font-serif">Laminado de Cejas</span>
              <p className="text-sm text-muzza-dark/80 leading-relaxed mb-3">Alisamos, peinamos y damos forma a tus cejas rebeldes para mantenerlas impecables y en su lugar.</p>
              <div className="bg-muzza-pale p-3 rounded-xl border border-muzza-light/30 space-y-2">
                <p className="text-xs text-muzza-clay leading-snug">Diseño personalizado para dar volumen y forma según tu look deseado.</p>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-muzza-med uppercase tracking-tight">
                   <Zap size={12}/> Duración: 6 a 8 semanas
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="text-center pt-4">
           <button onClick={() => onJumpToPrices(activeTab)} className="inline-flex items-center gap-1 text-sm font-bold text-muzza-med hover:text-muzza-dark border-b border-muzza-med/30 pb-0.5 transition-colors">
            Ver precios de {activeTab === 'brows' ? 'Cejas' : 'Pestañas'} <ArrowRight size={14} />
           </button>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'gallery'>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePriceTab, setActivePriceTab] = useState<'brows' | 'lashes'>('brows');
  const [modalKey, setModalKey] = useState(0);
  const [accordionOpenId, setAccordionOpenId] = useState<string | null>(null);

  const handleOpenModal = () => {
    setModalKey(prev => prev + 1);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAccordionToggle = (id: string) => {
    setAccordionOpenId(prev => prev === id ? null : id);
  };

  const handleJumpToPrices = (tab: 'brows' | 'lashes') => {
    setAccordionOpenId('prices');
    setActivePriceTab(tab);
  };

  const gmapsUrl = "https://www.google.com/maps/place/Muzza/@-12.0772792,-77.039173,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c990e0d551af:0x8f1907082b996ea1!8m2!3d-12.0772845!4d-77.0365981!16s%2Fg%2F11sx0stz06";
  const wazeUrl = "https://waze.com/ul?ll=-12.0772845,-77.0365981&navigate=yes";

  const faqItems: FAQItem[] = [
    {
      id: 'location',
      title: 'Ubicación',
      icon: MapPin,
      content: (
        <div className="space-y-5 font-sans">
          <div className="relative overflow-hidden bg-muzza-pale border border-muzza-light/50 rounded-3xl p-6 shadow-inner">
            <div className="absolute top-0 right-0 w-32 h-32 bg-muzza-med/5 rounded-full -translate-y-8 translate-x-8 blur-2xl"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-muzza-med shadow-md mb-4 border border-muzza-light/20">
                <MapPin size={24} />
              </div>
              <div className="mb-6 text-center space-y-1">
                <h4 className="text-xl font-bold text-muzza-dark leading-tight">Av. Arenales 1245</h4>
                <h4 className="text-xl font-bold text-muzza-med leading-tight">Jesús María, Of. 408</h4>
                <div className="pt-1"><span className="text-base font-bold text-muzza-clay tracking-wide">Lima, Perú</span></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                <a href={gmapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-muzza-med text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-muzza-med/10 hover:bg-[#a682b0] transition-all active:scale-95" onClick={(e) => e.stopPropagation()}><Navigation size={18} />Google Maps</a>
                <a href={wazeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white text-muzza-clay border border-muzza-light font-bold py-3.5 rounded-2xl shadow-sm hover:border-muzza-med transition-all active:scale-95" onClick={(e) => e.stopPropagation()}><Compass size={18} />Ir con Waze</a>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-muzza-clay/70 italic text-center px-4 leading-tight">* Contamos con estacionamiento vigilado a media cuadra del local.</p>
        </div>
      ),
    },
    {
      id: 'prices',
      title: 'Precios y Servicios',
      icon: DollarSign,
      content: (
        <div className="space-y-5 font-sans">
          <div className="flex p-1 bg-muzza-dark/5 rounded-2xl border border-muzza-dark/10">
             <button onClick={() => setActivePriceTab('brows')} className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${activePriceTab === 'brows' ? 'bg-white text-muzza-med shadow-lg scale-[1.02]' : 'text-muzza-clay/50 hover:text-muzza-dark'}`}>Micropigmentación</button>
             <button onClick={() => setActivePriceTab('lashes')} className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${activePriceTab === 'lashes' ? 'bg-white text-muzza-med shadow-lg scale-[1.02]' : 'text-muzza-clay/50 hover:text-muzza-dark'}`}>Pestañas y Otros de cejas</button>
          </div>
          
          {activePriceTab === 'brows' ? (
            <div className="animate-fade-in">
              <div className="bg-muzza-med text-white text-xs font-bold px-3 py-2 rounded-lg text-center shadow-sm tracking-wider uppercase mb-3">✨ Precios 1ra Sesión (-25% OFF)</div>
              <p className="text-xs text-center text-muzza-clay font-medium italic mb-2">*El retoque debe realizarse 30 días luego de la primera sesión.</p>
              <table className="w-full text-sm text-left">
                <tbody className="divide-y divide-muzza-light/50">
                  <tr>
                    <td className="px-2 py-4 text-muzza-dark align-top"><span className="font-bold block text-base">Microblading</span><span className="text-xs text-muzza-clay">Pelo a pelo natural</span></td>
                    <td className="px-2 py-4 text-right align-top"><div className="flex flex-col items-end"><div className="flex items-center gap-2 mb-1"><span className="text-[10px] text-gray-400 line-through">S/ 400</span><span className="font-bold text-muzza-med text-lg">S/ 299</span></div><div className="text-[10px] text-muzza-dark/70 font-medium bg-muzza-pale px-2 py-0.5 rounded-md border border-muzza-light/30 whitespace-nowrap">+ S/ 150 retoque (30d)</div></div></td>
                  </tr>
                  <tr>
                    <td className="px-2 py-4 text-muzza-dark align-top"><span className="font-bold block text-base">Microshading</span><span className="text-xs text-muzza-clay">Técnica Híbrida</span></td>
                    <td className="px-2 py-4 text-right align-top"><div className="flex flex-col items-end"><div className="flex items-center gap-2 mb-1"><span className="text-[10px] text-gray-400 line-through">S/ 465</span><span className="font-bold text-muzza-med text-lg">S/ 349</span></div><div className="text-[10px] text-muzza-dark/70 font-medium bg-muzza-pale px-2 py-0.5 rounded-md border border-muzza-light/30 whitespace-nowrap">+ S/ 150 retoque (30d)</div></div></td>
                  </tr>
                  <tr>
                    <td className="px-2 py-4 text-muzza-dark align-top"><span className="font-bold block text-base">Powder Brows</span><span className="text-xs text-muzza-clay">Efecto Polvo</span></td>
                    <td className="px-2 py-4 text-right align-top"><div className="flex flex-col items-end"><div className="flex items-center gap-2 mb-1"><span className="text-[10px] text-gray-400 line-through">S/ 400</span><span className="font-bold text-muzza-med text-lg">S/ 299</span></div><div className="text-[10px] text-muzza-dark/70 font-medium bg-muzza-pale px-2 py-0.5 rounded-md border border-muzza-light/30 whitespace-nowrap">+ S/ 150 retoque (30d)</div></div></td>
                  </tr>
                  <tr>
                    <td className="px-2 py-4 text-muzza-dark align-top"><span className="font-bold block text-base">Remoción Láser</span><span className="text-xs text-muzza-med font-bold leading-tight block mt-1">¿Ya no te sientes cómoda con tu trabajo anterior?</span></td>
                    <td className="px-2 py-4 text-right align-top"><div className="flex flex-col items-end"><span className="text-[10px] text-gray-400 line-through">S/ 265</span><span className="font-bold text-muzza-med text-lg">S/ 199</span><span className="text-[10px] text-muzza-clay mt-1">Por sesión</span></div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="animate-fade-in space-y-4">
              {/* LIFTING CARD */}
              <div className="bg-white rounded-2xl border border-muzza-light/50 p-5 shadow-sm space-y-3">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-muzza-dark font-serif">Lifting de Pestañas</h4>
                    <p className="text-xs text-muzza-med font-bold uppercase tracking-wider">Curvatura, volumen y alargamiento</p>
                  </div>
                  <span className="text-xl font-bold text-muzza-med">S/ 99</span>
                </div>
                <p className="text-sm text-muzza-dark/70 leading-relaxed">Elevamos tus pestañas desde la raíz dándoles una curvatura natural. Incluye doble hidratación (vitaminas) y tinturado especial para resaltar el color.</p>
                <div className="flex gap-4 pt-1 border-t border-muzza-light/20">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-muzza-clay"><Clock size={14}/> 1 hora</div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-muzza-clay"><Zap size={14}/> 6 a 8 semanas</div>
                </div>
              </div>

              {/* HENNA CARD */}
              <div className="bg-white rounded-2xl border border-muzza-light/50 p-5 shadow-sm space-y-3">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-muzza-dark font-serif">Henna para Cejas</h4>
                    <p className="text-xs text-muzza-med font-bold uppercase tracking-wider">Efecto cejas perfectas</p>
                  </div>
                  <span className="text-xl font-bold text-muzza-med">S/ 79</span>
                </div>
                <p className="text-sm text-muzza-dark/70 leading-relaxed">Tintura temporal de piel y vello. Incluye visagismo (diseño personalizado) y depilación. Ideal para ocasiones especiales o probar antes del PMU.</p>
                <div className="flex gap-4 pt-1 border-t border-muzza-light/20">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-muzza-clay"><Clock size={14}/> 1 hora</div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-muzza-clay"><Zap size={14}/> 7 a 10 días</div>
                </div>
              </div>

              {/* LAMINADO CARD */}
              <div className="bg-white rounded-2xl border border-muzza-light/50 p-5 shadow-sm space-y-3">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-muzza-dark font-serif">Laminado de Cejas</h4>
                    <p className="text-xs text-muzza-med font-bold uppercase tracking-wider">Orden y forma impecable</p>
                  </div>
                  <span className="text-xl font-bold text-muzza-med">S/ 99</span>
                </div>
                <p className="text-sm text-muzza-dark/70 leading-relaxed">Alisamos y peinamos tus cejas rebeldes para mantenerlas en su lugar. Diseño personalizado según tu rostro y el look que quieras lucir.</p>
                <div className="flex gap-4 pt-1 border-t border-muzza-light/20">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-muzza-clay"><Clock size={14}/> 1 hora</div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-muzza-clay"><Zap size={14}/> 6 a 8 semanas</div>
                </div>
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      id: 'technique',
      title: '¿Qué técnica usan?',
      icon: PenTool,
      content: <TechniqueTabs onJumpToPrices={handleJumpToPrices} />,
    },
    {
      id: 'process',
      title: '¿Cómo es el proceso?',
      icon: HelpCircle,
      content: <ProcessTabs />,
    },
    {
      id: 'duration',
      title: 'Duración',
      icon: Clock,
      content: (
        <div className="space-y-6">
           <div className="flex gap-5 items-start">
              <div className="bg-muzza-pale border border-muzza-light p-3 rounded-full shrink-0 text-muzza-clay"><Clock size={20} /></div>
              <div>
                <span className="block text-lg font-bold text-muzza-dark font-serif">El Procedimiento</span>
                <span className="block text-sm font-bold text-muzza-med mb-1 uppercase tracking-wider">De 1 a 2 horas</span>
                <p className="text-sm text-muzza-dark/70 leading-relaxed">Varía según el servicio elegido. Micropigmentación requiere evaluación y anestesia (2h), servicios express (1h).</p>
              </div>
           </div>
           <div className="w-full h-px bg-muzza-light/30" />
           <div className="flex gap-5 items-start">
              <div className="bg-muzza-pale border border-muzza-light p-3 rounded-full shrink-0 text-muzza-clay"><Images size={20} /></div>
               <div>
                <span className="block text-lg font-bold text-muzza-dark font-serif">Tus Resultados</span>
                <span className="block text-sm font-bold text-muzza-clay mb-1 uppercase tracking-wider">HASTA 18 MESES</span>
                <p className="text-sm text-muzza-dark/70 leading-relaxed">La duración del PMU depende de tu tipo de piel. Servicios temporales duran de 1 a 8 semanas.</p>
              </div>
           </div>
        </div>
      ),
    },
    {
      id: 'contraindications',
      title: 'Contraindicaciones',
      icon: ShieldAlert,
      content: (
        <div className="space-y-4">
          <p className="text-sm font-bold text-muzza-dark mb-2">Por tu seguridad, no realizamos procedimientos de PMU en:</p>
          <ul className="grid grid-cols-1 gap-2.5 text-sm text-muzza-dark font-medium">
            <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-muzza-light/50 shadow-sm"><span className="w-1.5 h-1.5 rounded-full bg-muzza-med shrink-0"></span>Embarazadas o Lactantes (6 meses)</li>
            <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-muzza-light/50 shadow-sm"><span className="w-1.5 h-1.5 rounded-full bg-muzza-med shrink-0"></span>Diabetes no controlada</li>
            <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-muzza-light/50 shadow-sm"><span className="w-1.5 h-1.5 rounded-full bg-muzza-med shrink-0"></span>Cicatrización Queloide o Rosácea</li>
          </ul>
        </div>
      ),
    },
  ];

  if (currentView === 'gallery') {
    return (
      <>
        <CaseGallery onBack={() => setCurrentView('home')} onCtaClick={handleOpenModal} />
        <QualificationModal key={modalKey} isOpen={isModalOpen} onClose={handleCloseModal} />
      </>
    );
  }

  return (
    <div className="relative w-full shadow-2xl min-h-screen bg-muzza-pale font-sans text-muzza-dark overflow-x-hidden">
      <BackgroundPattern />
      <div className="max-w-7xl mx-auto px-0 md:px-8 lg:px-8 lg:py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 xl:col-span-4 w-full lg:sticky lg:top-20 z-20">
            <header className="relative px-8 pt-6 pb-5 lg:pt-14 lg:pb-10 text-left bg-white md:bg-transparent lg:bg-transparent rounded-b-[2rem] md:rounded-3xl lg:rounded-none shadow-sm md:shadow-none lg:shadow-none mb-4 lg:mb-0 border-b border-muzza-light/20 md:border-none transition-all duration-300">
              <div className="mb-3 lg:mb-8"><MuzzaLogo className="h-9 lg:h-14 text-muzza-med w-auto" color="#ba94c4" /></div>
              <h1 className="text-muzza-dark/90 font-medium text-base lg:text-xl tracking-wide leading-tight mb-3 lg:mb-8">Especialistas en <br className="hidden lg:block"/><span className="font-script text-3xl lg:text-6xl text-muzza-med inline lg:block ml-1 lg:ml-0 mt-0 lg:mt-2">micropigmentación de cejas</span></h1>
              <p className="hidden lg:block text-muzza-dark/70 text-base leading-relaxed mb-8 max-w-sm">Logramos miradas auténticas potenciando tu belleza natural. <br/>Diseños 100% personalizados y sin plantillas.</p>
              <div className="flex flex-nowrap items-center justify-start gap-1.5 md:gap-2 text-[9px] sm:text-[10px] lg:text-xs font-bold tracking-widest uppercase text-muzza-clay lg:mb-12">
                <span className="bg-muzza-pale px-2.5 lg:px-4 py-1.5 lg:py-2 rounded-full border border-muzza-light/50 whitespace-nowrap">+7.2K clientes</span>
                <span className="bg-muzza-pale px-2.5 lg:px-4 py-1.5 lg:py-2 rounded-full border border-muzza-light/50 whitespace-nowrap">4.9 Estrellas</span>
                <span className="bg-muzza-pale px-2.5 lg:px-4 py-1.5 lg:py-2 rounded-full border border-muzza-light/50 whitespace-nowrap">100% Natural</span>
              </div>
              <div className="hidden lg:block relative group mt-8">
                <TimelineTooltip />
                <button onClick={handleOpenModal} className="w-full bg-muzza-med text-white rounded-2xl py-5 px-8 shadow-xl shadow-muzza-med/20 flex items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hover:bg-[#a682b0]"><span className="text-xl font-bold tracking-wide font-sans">Estoy lista para evaluar mis cejas</span><Sparkles size={24} className="text-white/80" /></button>
                <div className="mt-5 flex justify-center"><div className="inline-flex items-center gap-2 px-4 py-2 bg-muzza-dark rounded-full shadow-lg border border-muzza-dark transform hover:-translate-y-0.5 transition-all duration-300"><CheckCircle2 size={14} className="text-muzza-med" /><p className="text-[10px] lg:text-[11px] text-white font-bold tracking-tight uppercase">Evaluación gratuita hecha por Juli y especialistas</p></div></div>
              </div>
            </header>
          </div>
          <main className="lg:col-span-7 xl:col-span-8 w-full relative z-10 px-6 md:px-0 space-y-4 lg:space-y-16 pb-32 lg:pb-0">
            <section><button onClick={() => setCurrentView('gallery')} className="w-full bg-white p-3 lg:p-3 rounded-[1.2rem] lg:rounded-[2.5rem] shadow-lg shadow-muzza-med/5 border border-muzza-light flex items-center justify-between group active:scale-[0.98] transition-all duration-300 overflow-hidden relative"><div className="absolute top-0 right-0 w-32 lg:w-64 h-32 lg:h-64 bg-muzza-pale rounded-full translate-x-10 -translate-y-10 lg:translate-x-20 lg:-translate-y-20 z-0"></div><div className="flex items-center gap-4 lg:gap-8 p-1 lg:p-8 relative z-10"><div className="w-12 h-12 lg:w-20 lg:h-20 rounded-xl lg:rounded-3xl bg-muzza-med flex items-center justify-center text-white shadow-md group-hover:bg-muzza-clay transition-colors duration-300"><Images size={20} className="lg:w-8 lg:h-8" strokeWidth={1.5} /></div><div className="text-left"><span className="block font-serif text-lg lg:text-3xl font-bold text-muzza-dark group-hover:text-muzza-med transition-colors">Ver Casos Reales</span><span className="text-xs lg:text-sm text-muzza-clay font-bold tracking-wider uppercase block mt-0.5 lg:mt-1">Antes y después</span></div></div><div className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-muzza-pale flex items-center justify-center text-muzza-med group-hover:translate-x-1 transition-transform mr-1 lg:mr-4 relative z-10 border border-muzza-light/50"><span className="text-lg lg:text-xl">→</span></div></button></section>
            <section><div className="flex items-center justify-start gap-4 mb-4 lg:mb-12"><h2 className="font-serif text-xl lg:text-4xl text-muzza-dark italic">Información Importante</h2><div className="h-px bg-muzza-light w-16 lg:w-24 flex-grow lg:flex-none"></div></div><Accordion items={faqItems} openId={accordionOpenId} onToggle={handleAccordionToggle} /></section>
          </main>
        </div>
      </div>
      <div className="lg:hidden"><StickyButton onClick={handleOpenModal} /></div>
      <QualificationModal key={modalKey} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;