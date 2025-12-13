import React, { useState } from 'react';
import { MapPin, DollarSign, PenTool, HelpCircle, Clock, ShieldAlert, Images, Sparkles, PlayCircle, ArrowRight } from 'lucide-react';
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

  return (
    <div className="font-sans">
      {/* Internal Tabs Navigation */}
      <div className="flex gap-6 mb-5 border-b border-muzza-light/30">
        <button
          onClick={(e) => { e.stopPropagation(); setActiveTab('steps'); }}
          className={`pb-2 text-sm font-bold transition-all relative ${
            activeTab === 'steps' ? 'text-muzza-med' : 'text-muzza-clay/70 hover:text-muzza-clay'
          }`}
        >
          Pasos y Video
          {activeTab === 'steps' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-muzza-med rounded-full"></span>
          )}
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); setActiveTab('pain'); }}
          className={`pb-2 text-sm font-bold transition-all relative ${
            activeTab === 'pain' ? 'text-muzza-med' : 'text-muzza-clay/70 hover:text-muzza-clay'
          }`}
        >
          ¿Duele?
          {activeTab === 'pain' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-muzza-med rounded-full"></span>
          )}
        </button>
      </div>

      {/* Content Area */}
      <div className="animate-fade-in min-h-[120px]">
        {activeTab === 'steps' ? (
          <div className="space-y-5">
            <p className="text-sm text-muzza-dark/80 leading-relaxed">
              Trabajamos con un protocolo estricto: primero realizamos el <strong>Diseño Personalizado (Visagismo)</strong> basado en tu estructura ósea. <br/>
              <span className="italic text-muzza-clay block mt-1 text-xs">Solo cuando estás 100% feliz con el diseño previo, procedemos al tratamiento.</span>
            </p>
            
            <button 
              className="w-full bg-white border border-muzza-light rounded-xl p-3 shadow-sm flex items-center gap-4 group hover:border-muzza-med hover:shadow-md transition-all text-left"
              onClick={(e) => e.stopPropagation()} // Prevent accordion toggle
            >
              <div className="w-10 h-10 rounded-full bg-muzza-med/10 flex items-center justify-center text-muzza-med group-hover:bg-muzza-med group-hover:text-white transition-colors shrink-0">
                <PlayCircle size={20} fill="currentColor" className="opacity-90" />
              </div>
              <div>
                <span className="block text-sm font-bold text-muzza-dark group-hover:text-muzza-med transition-colors">Ver video explicativo</span>
                <span className="text-[10px] text-muzza-clay font-medium uppercase tracking-wider">Paso a paso en 1 min</span>
              </div>
            </button>
          </div>
        ) : (
          <div className="space-y-3">
             <p className="text-sm text-muzza-dark/80 leading-relaxed">
              La comodidad es nuestra prioridad. Utilizamos una <strong className="text-muzza-med">anestesia tópica de grado médico</strong>.
            </p>
            <div className="bg-muzza-pale p-3 rounded-lg border border-muzza-light/50 text-xs text-muzza-dark/70 italic">
              Se deja actuar por 20 minutos previos y se reaplica durante la sesión. La mayoría describe la sensación como una depilación con pinza.
            </div>
          </div>
        )}
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

  const handleJumpToPrices = () => {
    setAccordionOpenId('prices');
    // Optional: logic to scroll to the element could be added here if needed
  };

  // FAQ Content Definition
  const faqItems: FAQItem[] = [
    {
      id: 'location',
      title: 'Ubicación',
      icon: MapPin,
      content: (
        <div className="space-y-4">
          <p className="font-sans">Nos encontramos en el corazón de la ciudad, un espacio diseñado para tu relajación.</p>
          <div className="bg-muzza-pale border border-muzza-light p-5 rounded-2xl text-sm text-muzza-dark font-medium text-center shadow-sm">
            Av Arenales 1245 - Jesús María<br/>
            <span className="text-muzza-clay font-bold mt-1 block">Lima, Perú</span>
          </div>
          <div className="aspect-video bg-muzza-light/20 rounded-2xl flex items-center justify-center text-muzza-clay/50 text-xs border border-white">
            <span className="font-serif italic">[Mapa Interactivo Placeholder]</span>
          </div>
        </div>
      ),
    },
    {
      id: 'prices',
      title: 'Precios y Servicios',
      icon: DollarSign,
      content: (
        <div className="space-y-4 font-sans">
          {/* Price Tabs */}
          <div className="flex p-1.5 bg-muzza-pale rounded-xl border border-muzza-light/50">
             <button
               onClick={() => setActivePriceTab('brows')}
               className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all duration-200 ${
                 activePriceTab === 'brows' 
                   ? 'bg-white text-muzza-med shadow-sm border border-muzza-light/20' 
                   : 'text-muzza-clay hover:text-muzza-dark'
               }`}
             >
               Cejas (PMU)
             </button>
             <button
               onClick={() => setActivePriceTab('lashes')}
               className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all duration-200 ${
                 activePriceTab === 'lashes' 
                   ? 'bg-white text-muzza-med shadow-sm border border-muzza-light/20' 
                   : 'text-muzza-clay hover:text-muzza-dark'
               }`}
             >
               Pestañas y Henna
             </button>
          </div>

          {activePriceTab === 'brows' ? (
            <div className="animate-fade-in">
              <div className="bg-muzza-med text-white text-xs font-bold px-3 py-2 rounded-lg text-center shadow-sm tracking-wider uppercase mb-3">
                 ✨ Precios 1ra Sesión (-25% OFF)
              </div>
              <p className="text-xs text-center text-muzza-clay font-medium italic mb-2">
                *El retoque debe realizarse 30 días luego de la primera sesión.
              </p>
              <table className="w-full text-sm text-left">
                <tbody className="divide-y divide-muzza-light/50">
                  {/* Microblading */}
                  <tr>
                    <td className="px-2 py-4 text-muzza-dark align-top">
                      <span className="font-bold block text-base">Microblading</span>
                      <span className="text-xs text-muzza-clay">Pelo a pelo</span>
                    </td>
                    <td className="px-2 py-4 text-right align-top">
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] text-gray-400 line-through">S/ 400</span>
                          <span className="font-bold text-muzza-med text-lg">S/ 299</span>
                        </div>
                        <div className="text-[10px] text-muzza-dark/70 font-medium bg-muzza-pale px-2 py-0.5 rounded-md border border-muzza-light/30 whitespace-nowrap">
                          + S/ 150 retoque (30d)
                        </div>
                      </div>
                    </td>
                  </tr>
                  {/* Microshading */}
                  <tr>
                    <td className="px-2 py-4 text-muzza-dark align-top">
                      <span className="font-bold block text-base">Microshading</span>
                      <span className="text-xs text-muzza-clay">Híbrida (Pelo + Sombra)</span>
                    </td>
                    <td className="px-2 py-4 text-right align-top">
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] text-gray-400 line-through">S/ 465</span>
                          <span className="font-bold text-muzza-med text-lg">S/ 349</span>
                        </div>
                        <div className="text-[10px] text-muzza-dark/70 font-medium bg-muzza-pale px-2 py-0.5 rounded-md border border-muzza-light/30 whitespace-nowrap">
                          + S/ 150 retoque (30d)
                        </div>
                      </div>
                    </td>
                  </tr>
                  {/* Powder Brows */}
                  <tr>
                    <td className="px-2 py-4 text-muzza-dark align-top">
                      <span className="font-bold block text-base">Powder Brows</span>
                      <span className="text-xs text-muzza-clay">Efecto Polvo</span>
                    </td>
                    <td className="px-2 py-4 text-right align-top">
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] text-gray-400 line-through">S/ 400</span>
                          <span className="font-bold text-muzza-med text-lg">S/ 299</span>
                        </div>
                        <div className="text-[10px] text-muzza-dark/70 font-medium bg-muzza-pale px-2 py-0.5 rounded-md border border-muzza-light/30 whitespace-nowrap">
                          + S/ 150 retoque (30d)
                        </div>
                      </div>
                    </td>
                  </tr>
                  {/* Laser */}
                  <tr>
                    <td className="px-2 py-4 text-muzza-dark align-top">
                      <span className="font-bold block text-base">Remoción Láser</span>
                      <span className="text-xs text-muzza-clay leading-tight block mt-0.5">
                        Necesario si hay trabajo previo
                      </span>
                    </td>
                    <td className="px-2 py-4 text-right align-top">
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] text-gray-400 line-through">S/ 265</span>
                        <span className="font-bold text-muzza-med text-lg">S/ 199</span>
                        <span className="text-[10px] text-muzza-clay mt-1">Por sesión</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="bg-muzza-light/20 text-muzza-med text-xs font-bold px-3 py-2 rounded-lg text-center shadow-sm tracking-wider uppercase mb-3 border border-muzza-light/30">
                 ✨ Realce Natural
              </div>
              <table className="w-full text-sm text-left">
                <tbody className="divide-y divide-muzza-light/50">
                  {/* Lifting */}
                  <tr>
                    <td className="px-2 py-4 text-muzza-dark align-top">
                      <span className="font-bold block text-base">Lifting de Pestañas</span>
                      <span className="text-xs text-muzza-clay">Rizado + Tinte + Vitaminas</span>
                    </td>
                    <td className="px-2 py-4 text-right align-top">
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] text-gray-400 line-through">S/ 150</span>
                        <span className="font-bold text-muzza-med text-lg">S/ 99</span>
                        <span className="text-[10px] text-muzza-clay mt-1">Duración 4-6 sem</span>
                      </div>
                    </td>
                  </tr>
                  {/* Henna */}
                  <tr>
                    <td className="px-2 py-4 text-muzza-dark align-top">
                      <span className="font-bold block text-base">Diseño y Henna</span>
                      <span className="text-xs text-muzza-clay">Perfilado + Pigmento temporal</span>
                    </td>
                    <td className="px-2 py-4 text-right align-top">
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] text-gray-400 line-through">S/ 80</span>
                        <span className="font-bold text-muzza-med text-lg">S/ 59</span>
                        <span className="text-[10px] text-muzza-clay mt-1">Duración 7-10 días</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      ),
    },
    {
      id: 'technique',
      title: '¿Qué técnica usan?',
      icon: PenTool,
      content: (
        <div className="space-y-4 font-sans">
          <div className="space-y-3">
            <div className="bg-white p-5 rounded-2xl border border-muzza-light/50 shadow-sm">
              <span className="block text-base font-bold text-muzza-med mb-1 font-serif">Microblading</span>
              <p className="text-sm text-muzza-dark/80 leading-relaxed">Trazos hiper-realistas que simulan pelos naturales. Ideal para cejas poco pobladas y piel normal/seca.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-muzza-light/50 shadow-sm">
              <span className="block text-base font-bold text-muzza-med mb-1 font-serif">Microshading</span>
              <p className="text-sm text-muzza-dark/80 leading-relaxed">Técnica híbrida (Pelo a pelo + Sombreado). Perfecta para lograr mayor densidad y realismo 3D.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-muzza-light/50 shadow-sm">
              <span className="block text-base font-bold text-muzza-med mb-1 font-serif">Powder Brows</span>
              <p className="text-sm text-muzza-dark/80 leading-relaxed">Efecto sombreado tipo maquillaje. Ideal para piel grasa o quienes buscan definición.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-muzza-light/50 shadow-sm">
              <span className="block text-base font-bold text-muzza-med mb-1 font-serif">Remoción Láser</span>
              <p className="text-sm text-muzza-dark/80 leading-relaxed">Tecnología segura que fragmenta el pigmento antiguo sin dañar el vello ni la piel. Es necesaria para "limpiar el lienzo" antes de un nuevo diseño si tienes tatuajes previos oscuros.</p>
            </div>
          </div>
          <div className="relative pt-6 px-4 text-center">
             <span className="font-script text-4xl text-muzza-light absolute top-0 left-2 opacity-50">"</span>
             <p className="text-sm font-bold text-muzza-clay italic">
              Te recomendamos la mejor técnica según la población inicial de tus cejitas y tu tipo de piel.
            </p>
             <button 
                onClick={handleJumpToPrices}
                className="inline-flex items-center gap-1 text-sm font-bold text-muzza-med hover:text-muzza-dark transition-colors mt-2 border-b border-muzza-med/30 hover:border-muzza-dark pb-0.5"
              >
                Ver precios por técnica <ArrowRight size={14} />
              </button>
          </div>
        </div>
      ),
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
           {/* Procedure Duration */}
           <div className="flex gap-5 items-start">
              <div className="bg-muzza-pale border border-muzza-light p-3 rounded-full shrink-0 text-muzza-clay">
                <Clock size={20} />
              </div>
              <div>
                <span className="block text-lg font-bold text-muzza-dark font-serif">El Procedimiento</span>
                <span className="block text-sm font-bold text-muzza-med mb-1 uppercase tracking-wider">Aprox. 2 horas</span>
                <p className="text-sm text-muzza-dark/70 leading-relaxed">Incluye diseño personalizado (visagismo), tiempo de anestesia y tratamiento.</p>
              </div>
           </div>
           
           <div className="w-full h-px bg-muzza-light/30" />
           
           {/* Result Duration */}
           <div className="flex gap-5 items-start">
              <div className="bg-muzza-pale border border-muzza-light p-3 rounded-full shrink-0 text-muzza-clay">
                <Images size={20} />
              </div>
               <div>
                <span className="block text-lg font-bold text-muzza-dark font-serif">Tus Resultados</span>
                <span className="block text-sm font-bold text-muzza-clay mb-1 uppercase tracking-wider">12 a 18 meses</span>
                <p className="text-sm text-muzza-dark/70 leading-relaxed">La duración varía según tu tipo de piel y cuidados posteriores.</p>
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
          <p className="text-sm font-bold text-muzza-dark">Por tu seguridad, no realizamos el procedimiento en:</p>
          <ul className="grid grid-cols-1 gap-3 text-sm text-muzza-dark/80 font-medium">
            <li className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-muzza-light/50 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-muzza-med shrink-0"></span>
              Embarazadas
            </li>
             <li className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-muzza-light/50 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-muzza-med shrink-0"></span>
              Cicatrización queloide
            </li>
            <li className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-muzza-light/50 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-muzza-med shrink-0"></span>
              Diabetes (consultar médico)
            </li>
             <li className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-muzza-light/50 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-muzza-med shrink-0"></span>
              Lactantes (con bebés hasta 06 meses)
            </li>
          </ul>
        </div>
      ),
    },
  ];

  if (currentView === 'gallery') {
    return (
      <>
        <CaseGallery 
          onBack={() => setCurrentView('home')} 
          onCtaClick={handleOpenModal} 
        />
        <QualificationModal key={modalKey} isOpen={isModalOpen} onClose={handleCloseModal} />
      </>
    );
  }

  return (
    <div className="relative w-full shadow-2xl min-h-screen bg-muzza-pale font-sans text-muzza-dark overflow-x-hidden">
      
      {/* Brand Background Texture */}
      <BackgroundPattern />

      <div className="max-w-7xl mx-auto px-0 md:px-8 lg:px-8 lg:py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* ==================== 
              LEFT COLUMN (HEADER & CTA) 
              ==================== */}
          <div className="lg:col-span-5 xl:col-span-4 w-full lg:sticky lg:top-20 z-20">
            {/* Header / Sidebar Card */}
            <header className="relative px-8 pt-6 pb-5 lg:pt-14 lg:pb-10 text-left bg-white md:bg-transparent lg:bg-transparent rounded-b-[2rem] md:rounded-3xl lg:rounded-none shadow-sm md:shadow-none lg:shadow-none mb-4 lg:mb-0 border-b border-muzza-light/20 md:border-none transition-all duration-300">
              
              {/* Logo Section */}
              <div className="mb-3 lg:mb-8">
                 <MuzzaLogo className="h-9 lg:h-14 text-muzza-med w-auto" color="#ba94c4" />
              </div>

              {/* Marketing Taglines */}
              <h1 className="text-muzza-dark/90 font-medium text-base lg:text-xl tracking-wide leading-tight mb-3 lg:mb-8">
                Especialistas logrando <br className="hidden lg:block"/>
                <span className="font-script text-3xl lg:text-6xl text-muzza-med inline lg:block ml-1 lg:ml-0 mt-0 lg:mt-2">cejas naturales</span>
              </h1>
              
              <p className="hidden lg:block text-muzza-dark/70 text-base leading-relaxed mb-8 max-w-sm">
                Diseñamos miradas auténticas respetando tu belleza natural. Sin plantillas, 100% personalizado para ti.
              </p>

              {/* Social Proof Pills */}
              <div className="flex flex-nowrap items-center justify-start gap-1.5 md:gap-2 text-[9px] sm:text-[10px] lg:text-xs font-bold tracking-widest uppercase text-muzza-clay lg:mb-12">
                <span className="bg-muzza-pale px-2.5 lg:px-4 py-1.5 lg:py-2 rounded-full border border-muzza-light/50 whitespace-nowrap">+7.2K clientes</span>
                <span className="bg-muzza-pale px-2.5 lg:px-4 py-1.5 lg:py-2 rounded-full border border-muzza-light/50 whitespace-nowrap">4.9 Estrellas</span>
                <span className="bg-muzza-pale px-2.5 lg:px-4 py-1.5 lg:py-2 rounded-full border border-muzza-light/50 whitespace-nowrap">100% Natural</span>
              </div>

              {/* DESKTOP CTA (Visible only on LG screens) */}
              <div className="hidden lg:block relative group mt-8">
                <TimelineTooltip />
                <button
                  onClick={handleOpenModal}
                  className="w-full bg-muzza-med text-white rounded-2xl py-5 px-8 shadow-xl shadow-muzza-med/20 flex items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hover:bg-[#a682b0]"
                >
                  <span className="text-xl font-bold tracking-wide font-sans">Estoy lista para evaluar mis cejas</span>
                  <Sparkles size={24} className="text-white/80" />
                </button>
                <p className="text-center text-xs text-muzza-clay/60 mt-3 font-medium">
                  Evaluación gratuita por especialistas
                </p>
              </div>
            </header>
          </div>
          
          {/* ==================== 
              RIGHT COLUMN (CONTENT) 
              ==================== */}
          <main className="lg:col-span-7 xl:col-span-8 w-full relative z-10 px-6 md:px-0 space-y-4 lg:space-y-16 pb-32 lg:pb-0">
            
            {/* Gallery Teaser Card */}
            <section>
              <button 
                onClick={() => setCurrentView('gallery')}
                className="w-full bg-white p-3 lg:p-3 rounded-[1.2rem] lg:rounded-[2.5rem] shadow-lg shadow-muzza-med/5 border border-muzza-light flex items-center justify-between group active:scale-[0.98] transition-all duration-300 overflow-hidden relative"
              >
                 {/* Decorative blob behind */}
                 <div className="absolute top-0 right-0 w-32 lg:w-64 h-32 lg:h-64 bg-muzza-pale rounded-full translate-x-10 -translate-y-10 lg:translate-x-20 lg:-translate-y-20 z-0"></div>

                <div className="flex items-center gap-4 lg:gap-8 p-1 lg:p-8 relative z-10">
                  <div className="w-12 h-12 lg:w-20 lg:h-20 rounded-xl lg:rounded-3xl bg-muzza-med flex items-center justify-center text-white shadow-md group-hover:bg-muzza-clay transition-colors duration-300">
                    <Images size={20} className="lg:w-8 lg:h-8" strokeWidth={1.5} />
                  </div>
                  <div className="text-left">
                    <span className="block font-serif text-lg lg:text-3xl font-bold text-muzza-dark group-hover:text-muzza-med transition-colors">Ver Casos Reales</span>
                    <span className="text-xs lg:text-sm text-muzza-clay font-bold tracking-wider uppercase block mt-0.5 lg:mt-1">Antes y después</span>
                  </div>
                </div>
                <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-muzza-pale flex items-center justify-center text-muzza-med group-hover:translate-x-1 transition-transform mr-1 lg:mr-4 relative z-10 border border-muzza-light/50">
                  <span className="text-lg lg:text-xl">→</span>
                </div>
              </button>
            </section>

            {/* FAQ Section */}
            <section>
              <div className="flex items-center justify-start gap-4 mb-4 lg:mb-12">
                <h2 className="font-serif text-xl lg:text-4xl text-muzza-dark italic">Información Importante</h2>
                <div className="h-px bg-muzza-light w-16 lg:w-24 flex-grow lg:flex-none"></div>
              </div>
              <Accordion 
                items={faqItems} 
                openId={accordionOpenId}
                onToggle={handleAccordionToggle}
              />
            </section>
          </main>
        </div>
      </div>

      {/* MOBILE STICKY BUTTON (Hidden on Desktop) */}
      <div className="lg:hidden">
        <StickyButton onClick={handleOpenModal} />
      </div>
      
      <QualificationModal key={modalKey} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;