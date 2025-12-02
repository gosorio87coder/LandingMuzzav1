import React from 'react';

export interface FAQItem {
  id: string;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

export type ModalStep = 'selection' | 'contact-form' | 'form-submitted';

export interface EvaluationForm {
  name: string;
  whatsapp: string;
  photo: File | null;
}