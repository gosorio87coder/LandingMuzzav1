import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Camera, Upload, Sparkles, ArrowLeft } from 'lucide-react';
import { ModalStep, EvaluationForm } from '../types';

interface QualificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QualificationModal: React.FC<QualificationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<ModalStep>('selection');
  const [selectionType, setSelectionType] = useState<'virgin' | 'tattoo' | null>(null);
  const [formData, setFormData] = useState<EvaluationForm>({
    name: '',
    whatsapp: '+51 ',
    photo: null,
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSelection = (type: 'virgin' | 'tattoo') => {
    setSelectionType(type);
    setStep('contact-form');
  };

  const handleBack = () => {
    setStep('selection');
    setSelectionType(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, photo: e.target.files[0] });
    }
  };

  // Construct WhatsApp Link
  const getWhatsAppLink = () => {
    // Basic cleaning of the number
    const phone = formData.whatsapp.replace(/\D/g, ''); 
    const name = encodeURIComponent(formData.name);
    
    let messageText = '';
    
    if (selectionType === 'virgin') {
      messageText = `Hola, soy ${name}. Quiero evaluar mis cejas (es mi primera vez). Adjunto mi foto aquí:`;
    } else {
      messageText = `Hola, soy ${name}. Tengo un trabajo anterior en mis cejas y quiero una evaluación. Adjunto mi foto aquí:`;
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(messageText)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) return;
    
    setIsSubmitting(true);
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirect to WhatsApp
    window.location.href = getWhatsAppLink();
    
    setIsSubmitting(false);
    setStep('form-submitted');
  };

  const renderContent = () => {
    switch (step) {
      case 'selection':
        return (
          <div className="space-y-8 py-4">
            <div className="text-center">
               <h3 className="text-2xl font-serif font-bold text-muzza-med leading-tight mb-2">
                ¿Tienes un trabajo anterior?
              </h3>
              <p className="text-sm font-medium text-muzza-clay font-script text-xl">
                 Queremos conocer tu historia
              </p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => handleSelection('virgin')}
                className="w-full p-5 border-2 border-muzza-light/50 rounded-2xl hover:border-muzza-med hover:bg-muzza-pale transition-all flex items-center gap-4 group text-left bg-white"
              >
                <div className="w-10 h-10 rounded-full bg-muzza-light/30 flex items-center justify-center group-hover:bg-muzza-med group-hover:text-white transition-colors text-muzza-clay">
                  <span className="font-bold font-serif">A</span>
                </div>
                <div>
                  <div className="font-bold text-muzza-dark text-lg">No, es mi primera vez</div>
                  <div className="text-xs text-muzza-clay font-medium uppercase tracking-wide mt-0.5">(Cejas Vírgenes)</div>
                </div>
              </button>

              <button
                onClick={() => handleSelection('tattoo')}
                className="w-full p-5 border-2 border-muzza-light/50 rounded-2xl hover:border-muzza-med hover:bg-muzza-pale transition-all flex items-center gap-4 group text-left bg-white"
              >
                <div className="w-10 h-10 rounded-full bg-muzza-light/30 flex items-center justify-center group-hover:bg-muzza-med group-hover:text-white transition-colors text-muzza-clay">
                  <span className="font-bold font-serif">B</span>
                </div>
                <div>
                  <div className="font-bold text-muzza-dark text-lg">Sí, tengo un trabajo previo</div>
                  <div className="text-xs text-muzza-clay font-medium uppercase tracking-wide mt-0.5">(Microblading, Compacta, etc.)</div>
                </div>
              </button>
            </div>
          </div>
        );

      case 'contact-form':
        return (
          <div className="space-y-6 animate-fade-in">
             {selectionType === 'tattoo' ? (
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-3 items-start">
                  <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={20} />
                  <p className="text-sm text-amber-900 font-medium">
                    Es necesario evaluar el estado actual del pigmento para darte la mejor recomendación.
                  </p>
                </div>
             ) : (
                <div className="bg-muzza-pale border border-muzza-light rounded-xl p-4 flex gap-3 items-start">
                  <Sparkles className="text-muzza-med shrink-0 mt-0.5" size={20} />
                  <p className="text-sm text-muzza-dark font-medium">
                    ¡Excelente! Para darte una cotización exacta y sugerirte el mejor diseño, necesitamos ver tus cejas naturales.
                  </p>
                </div>
             )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-muzza-dark mb-1.5 ml-1">Tu Nombre</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3.5 rounded-xl border border-muzza-light bg-white focus:ring-2 focus:ring-muzza-med focus:border-transparent outline-none text-muzza-dark placeholder-gray-400"
                  placeholder="Ej: María Pérez"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* Instructions Section instead of File Input */}
              <div className="bg-white border-2 border-dashed border-muzza-med/30 rounded-2xl p-6 text-center space-y-3">
                 <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-600 mb-2">
                    <Camera size={24} />
                 </div>
                 <h4 className="font-serif font-bold text-muzza-dark">Foto por WhatsApp</h4>
                 <p className="text-sm text-muzza-dark/70 leading-relaxed">
                   Al hacer clic en el botón de abajo, se abrirá tu WhatsApp. <br/>
                   <span className="font-bold text-muzza-med">Por favor adjunta tu foto directamente en el chat.</span>
                 </p>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start gap-3 px-1 pt-2">
                <div className="flex items-center h-5">
                  <input
                    id="privacy_policy"
                    type="checkbox"
                    required
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="w-5 h-5 rounded border-muzza-clay/50 text-muzza-med focus:ring-muzza-med accent-muzza-med cursor-pointer"
                  />
                </div>
                <label htmlFor="privacy_policy" className="text-xs text-muzza-dark/60 leading-tight cursor-pointer select-none font-medium">
                  Acepto la <span className="text-muzza-med underline">política de privacidad</span> y autorizo el contacto.
                </label>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting || !privacyAccepted}
                className="w-full bg-green-600 text-white font-bold py-4 rounded-full shadow-lg hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 transform active:scale-95"
              >
                {isSubmitting ? 'Abriendo WhatsApp...' : (
                  <>
                    <span className="font-sans text-lg">Continuar a WhatsApp</span>
                  </>
                )}
              </button>
            </form>
          </div>
        );

      case 'form-submitted':
        return (
          <div className="text-center space-y-6 animate-fade-in py-4">
            {/* ... this step is less likely to be seen now due to redirect, but kept for fallback ... */}
            <div className="w-20 h-20 bg-muzza-pale rounded-full flex items-center justify-center mx-auto border border-muzza-light">
              <Sparkles size={32} className="text-muzza-med" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-muzza-dark">¡Redirigiendo!</h3>
              <p className="text-muzza-clay font-medium mt-2">
                 Si no se abrió WhatsApp, verifica que tengas la app instalada.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-muzza-dark/40 backdrop-blur-sm transition-opacity"
        onClick={handleBackdropClick}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 overflow-hidden animate-in fade-in zoom-in duration-300 border border-muzza-light">
        
        {/* Back Button */}
        {(step === 'contact-form') && (
          <button 
            onClick={handleBack}
            className="absolute top-5 left-5 p-2 rounded-full hover:bg-muzza-pale text-muzza-clay hover:text-muzza-med transition-colors z-10"
          >
            <ArrowLeft size={20} />
          </button>
        )}

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-muzza-pale text-muzza-clay hover:text-muzza-med transition-colors z-10"
        >
          <X size={20} />
        </button>
        
        {renderContent()}
      </div>
    </div>
  );
};