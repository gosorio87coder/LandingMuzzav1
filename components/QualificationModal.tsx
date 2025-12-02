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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setStep('form-submitted');
  };

  const renderContent = () => {
    switch (step) {
      case 'selection':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-semibold text-center text-stone-900 leading-tight">
              ¿Tienes un trabajo anterior en las cejas?
            </h3>
            <p className="text-sm text-stone-500 text-center">Es importante saber esto para asignarte la técnica correcta.</p>
            
            <div className="space-y-3">
              <button
                onClick={() => handleSelection('virgin')}
                className="w-full p-4 border-2 border-stone-200 rounded-xl hover:border-stone-800 hover:bg-stone-50 transition-all flex items-center gap-3 group text-left"
              >
                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-800 group-hover:text-white transition-colors">
                  <span className="font-bold">A</span>
                </div>
                <div>
                  <div className="font-semibold text-stone-800">No, es mi primera vez</div>
                  <div className="text-xs text-stone-500">(Cejas Vírgenes)</div>
                </div>
              </button>

              <button
                onClick={() => handleSelection('tattoo')}
                className="w-full p-4 border-2 border-stone-200 rounded-xl hover:border-stone-800 hover:bg-stone-50 transition-all flex items-center gap-3 group text-left"
              >
                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-800 group-hover:text-white transition-colors">
                  <span className="font-bold">B</span>
                </div>
                <div>
                  <div className="font-semibold text-stone-800">Sí, tengo un tatuaje antiguo</div>
                  <div className="text-xs text-stone-500">(Microblading, Compacta, etc.)</div>
                </div>
              </button>
            </div>
          </div>
        );

      case 'contact-form':
        return (
          <div className="space-y-4 animate-fade-in">
             {selectionType === 'tattoo' ? (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex gap-3 items-start">
                  <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-amber-800">
                    Es necesario evaluar el estado actual del pigmento para darte la mejor recomendación.
                  </p>
                </div>
             ) : (
                <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 flex gap-3 items-start">
                  <Sparkles className="text-stone-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-stone-700">
                    ¡Excelente! Para darte una cotización exacta y sugerirte el mejor diseño, necesitamos ver tus cejas naturales.
                  </p>
                </div>
             )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Nombre Completo</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-stone-500 focus:border-transparent outline-none bg-stone-50"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">WhatsApp</label>
                <input 
                  required
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-stone-500 focus:border-transparent outline-none bg-stone-50"
                  placeholder="999 999 999"
                  value={formData.whatsapp}
                  onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Sube una foto de tus cejas (Sin maquillaje)</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-stone-300 border-dashed rounded-lg bg-stone-50 hover:bg-stone-100 transition-colors relative cursor-pointer">
                  <input 
                    required
                    type="file" 
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    onChange={handleFileChange}
                  />
                  <div className="space-y-1 text-center">
                    {formData.photo ? (
                      <div className="flex items-center justify-center gap-2 text-green-600">
                        <CheckCircle2 size={20} />
                        <span className="text-sm font-medium">{formData.photo.name}</span>
                      </div>
                    ) : (
                      <>
                        <Camera className="mx-auto h-8 w-8 text-stone-400" />
                        <div className="text-sm text-stone-600">
                          <span className="font-medium text-stone-800">Toca para subir foto</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start gap-3 px-1">
                <div className="flex items-center h-5">
                  <input
                    id="privacy_policy"
                    type="checkbox"
                    required
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="w-4 h-4 rounded border-stone-300 text-stone-900 focus:ring-stone-500 accent-stone-900 cursor-pointer"
                  />
                </div>
                <label htmlFor="privacy_policy" className="text-xs text-stone-500 leading-tight cursor-pointer select-none">
                  Acepto la <span className="font-medium text-stone-700 underline">política de privacidad de datos</span> y autorizo el contacto por WhatsApp.
                </label>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting || !privacyAccepted}
                className="w-full bg-stone-900 text-white font-medium py-3.5 rounded-xl shadow-md hover:bg-stone-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {isSubmitting ? 'Enviando...' : (
                  <>
                    <Upload size={18} />
                    Enviar a Evaluación
                  </>
                )}
              </button>
            </form>
          </div>
        );

      case 'form-submitted':
        return (
          <div className="text-center space-y-6 animate-fade-in py-4">
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto">
              <Sparkles size={32} className="text-stone-800" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-semibold text-stone-900">¡Recibido!</h3>
              <p className="text-stone-500 mt-2">
                Una experta de Muzza revisará tu foto y te contactará por WhatsApp con {selectionType === 'virgin' ? 'tu cotización y diseño sugerido' : 'una evaluación de tu caso'} en menos de 24 horas.
              </p>
            </div>
            <button 
              onClick={onClose}
              className="w-full bg-stone-200 text-stone-800 font-medium py-3 rounded-xl hover:bg-stone-300 transition-colors"
            >
              Entendido, gracias
            </button>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleBackdropClick}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Back Button */}
        {(step === 'contact-form') && (
          <button 
            onClick={handleBack}
            className="absolute top-4 left-4 p-1 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-600 transition-colors z-10"
          >
            <ArrowLeft size={20} />
          </button>
        )}

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-600 transition-colors z-10"
        >
          <X size={20} />
        </button>
        
        {renderContent()}
      </div>
    </div>
  );
};