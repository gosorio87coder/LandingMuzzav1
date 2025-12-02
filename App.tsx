import React, { useState } from 'react';
import { MapPin, DollarSign, PenTool, HelpCircle, Clock, ShieldAlert, Calendar, Images } from 'lucide-react';
import { Accordion } from './components/Accordion';
import { StickyButton } from './components/StickyButton';
import { QualificationModal } from './components/QualificationModal';
import { CaseGallery } from './components/CaseGallery';
import { FAQItem } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'gallery'>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // FAQ Content Definition
  const faqItems: FAQItem[] = [
    {
      id: 'location',
      title: 'Ubicación',
      icon: MapPin,
      content: (
        <div className="space-y-3">
          <p>Nos encontramos en el corazón de la ciudad, un espacio diseñado para tu relajación.</p>
          <div className="bg-rose-50 border border-rose-100 p-3 rounded-lg text-sm text-rose-950 font-medium text-center">
            Av Arenales 1245 - Jesús María<br/>
            Lima, Perú
          </div>
          <div className="aspect-video bg-stone-200 rounded-lg flex items-center justify-center text-stone-400 text-xs">
            [Mapa Interactivo Placeholder]
          </div>
        </div>
      ),
    },
    {
      id: 'prices',
      title: 'Precios y Servicios',
      icon: DollarSign,
      content: (
        <div className="space-y-3">
          <div className="bg-stone-900 text-white text-xs font-medium px-3 py-2 rounded-lg text-center shadow-sm">
             ✨ Precios de promoción (-25% OFF)
          </div>
          <table className="w-full text-sm text-left">
            <tbody className="divide-y divide-stone-100">
              <tr>
                <td className="px-2 py-3 font-medium text-stone-800">
                  Microblading
                  <span className="block text-[10px] text-stone-400 font-normal">Pelo a pelo</span>
                </td>
                <td className="px-2 py-3 text-right">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-stone-400 line-through">S/ 400</span>
                    <span className="font-bold text-rose-900 text-base">S/ 299</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-2 py-3 font-medium text-stone-800">
                  Microshading
                  <span className="block text-[10px] text-stone-400 font-normal">Híbrida (Pelo + Sombra)</span>
                </td>
                <td className="px-2 py-3 text-right">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-stone-400 line-through">S/ 465</span>
                    <span className="font-bold text-rose-900 text-base">S/ 349</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-2 py-3 font-medium text-stone-800">
                  Powder Brows
                  <span className="block text-[10px] text-stone-400 font-normal">Efecto Polvo</span>
                </td>
                <td className="px-2 py-3 text-right">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-stone-400 line-through">S/ 400</span>
                    <span className="font-bold text-rose-900 text-base">S/ 299</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-2 py-3 font-medium text-stone-800">
                  Remoción Láser
                  <span className="block text-[10px] text-stone-400 font-normal leading-tight mt-0.5">
                    Necesario si hay trabajo previo
                  </span>
                </td>
                <td className="px-2 py-3 text-right">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-stone-400 line-through">S/ 265</span>
                    <span className="font-bold text-rose-900 text-base">S/ 199</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-2 py-3 font-medium text-stone-800">
                  Retoque
                  <span className="block text-[10px] text-stone-400 font-normal">4-6 semanas</span>
                </td>
                <td className="px-2 py-3 text-right">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-stone-400 line-through">S/ 200</span>
                    <span className="font-bold text-rose-900 text-base">S/ 149</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      id: 'technique',
      title: '¿Qué técnica usan?',
      icon: PenTool,
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="bg-stone-50 p-3 rounded-lg border border-stone-100">
              <span className="block text-xs font-bold text-stone-800 mb-1">Microblading</span>
              <p className="text-xs text-stone-500 leading-relaxed">Trazos hiper-realistas que simulan pelos naturales. Ideal para cejas poco pobladas y piel normal/seca.</p>
            </div>
            <div className="bg-stone-50 p-3 rounded-lg border border-stone-100">
              <span className="block text-xs font-bold text-stone-800 mb-1">Microshading</span>
              <p className="text-xs text-stone-500 leading-relaxed">Técnica híbrida (Pelo a pelo + Sombreado). Perfecta para lograr mayor densidad y realismo 3D en cualquier tipo de ceja.</p>
            </div>
            <div className="bg-stone-50 p-3 rounded-lg border border-stone-100">
              <span className="block text-xs font-bold text-stone-800 mb-1">Powder Brows</span>
              <p className="text-xs text-stone-500 leading-relaxed">Efecto sombreado tipo maquillaje (polvo). Ideal para piel grasa o quienes buscan un diseño más definido.</p>
            </div>
          </div>
          <p className="text-xs font-bold text-stone-600 mt-1">
            Te recomendamos la mejor técnica según la población inicial de tus cejitas y tu tipo de piel.
          </p>
        </div>
      ),
    },
    {
      id: 'pain',
      title: '¿Duele?',
      icon: HelpCircle,
      content: (
        <p>
          La comodidad es nuestra prioridad. Utilizamos una <strong>anestesia tópica de grado médico</strong> que se deja actuar por 20 minutos antes de empezar. La mayoría de nuestras clientas sienten un nivel de molestia de 1 o 2 sobre 10, e incluso algunas se quedan dormidas.
        </p>
      ),
    },
    {
      id: 'duration',
      title: 'Duración',
      icon: Clock,
      content: (
        <div className="space-y-4">
           {/* Procedure Duration */}
           <div className="flex gap-3 items-start">
              <div className="bg-rose-50 p-2 rounded-lg shrink-0">
                <Clock size={16} className="text-rose-900" />
              </div>
              <div>
                <span className="block text-sm font-bold text-stone-800">El Procedimiento</span>
                <span className="block text-xs font-semibold text-rose-900 mb-1">Aprox. 2 horas</span>
                <p className="text-xs text-stone-500 leading-snug">Incluye diseño personalizado (visagismo), tiempo de anestesia y la realización del tratamiento.</p>
              </div>
           </div>
           
           {/* Result Duration */}
           <div className="flex gap-3 items-start border-t border-stone-100 pt-3">
              <div className="bg-stone-50 p-2 rounded-lg shrink-0">
                <Calendar size={16} className="text-stone-600" />
              </div>
               <div>
                <span className="block text-sm font-bold text-stone-800">Tus Resultados</span>
                <span className="block text-xs font-semibold text-stone-700 mb-1">12 a 18 meses</span>
                <p className="text-xs text-stone-500 leading-snug">La duración del pigmento varía según tu tipo de piel (grasa/seca) y cuidados posteriores.</p>
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
        <div className="space-y-2">
          <p className="text-sm font-medium text-stone-800 mb-2">Por tu seguridad, no realizamos el procedimiento en:</p>
          <ul className="grid grid-cols-1 gap-2 text-sm text-stone-600">
            <li className="flex items-center gap-2 bg-stone-50 p-2 rounded-lg border border-stone-100">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-950"></span>
              Embarazadas
            </li>
             <li className="flex items-center gap-2 bg-stone-50 p-2 rounded-lg border border-stone-100">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-950"></span>
              Cicatrización queloide
            </li>
            <li className="flex items-center gap-2 bg-stone-50 p-2 rounded-lg border border-stone-100">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-950"></span>
              Diabetes (consultar antes con su médico)
            </li>
             <li className="flex items-center gap-2 bg-stone-50 p-2 rounded-lg border border-stone-100">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-950"></span>
              Enfermedades autoinmunes
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
          onCtaClick={() => {
            setIsModalOpen(true);
          }} 
        />
        <QualificationModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </>
    );
  }

  return (
    <div className="max-w-md mx-auto w-full shadow-2xl min-h-screen bg-stone-50 pb-32 font-sans text-stone-800">
      <header className="px-6 pt-10 pb-6 text-left">
        <h1 className="font-serif text-3xl font-medium mb-1">
          Muzza<span className="text-rose-500">.</span>
        </h1>
        <p className="text-stone-600 font-medium text-sm">Especialistas logrando cejas naturales</p>
        <div className="flex items-center gap-2 mt-1.5 text-xs text-stone-500 font-medium">
          <span>+7.2K clientes</span>
          <span className="text-stone-300">•</span>
          <span>4.9 Estrellas</span>
          <span className="text-stone-300">•</span>
          <span>100% Natural</span>
        </div>
      </header>
      
      <main className="px-6 space-y-8">
        <section>
          <button 
            onClick={() => setCurrentView('gallery')}
            className="w-full bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex items-center justify-between group active:scale-95 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                <Images size={20} />
              </div>
              <div className="text-left">
                <span className="block font-medium text-stone-900">Ver Casos Reales</span>
                <span className="text-xs text-stone-500">Galería de Antes y Después</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-stone-100 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition-colors">
              →
            </div>
          </button>
        </section>

        <section>
          <h2 className="font-serif text-xl font-medium mb-4 text-center">Preguntas Frecuentes</h2>
          <Accordion items={faqItems} />
        </section>
      </main>

      <StickyButton onClick={handleOpenModal} />
      
      <QualificationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;