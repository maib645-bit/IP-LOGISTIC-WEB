import React, { useEffect } from 'react';
import { X, ShieldAlert, FileText, Lock, Cookie } from 'lucide-react';
import { LegalDocType } from '../types/logistics';
import { LEGAL_TEXTS } from '../data/logisticsData';

interface LegalModalProps {
  currentType: NonNullable<LegalDocType>;
  isOpen: boolean;
  onClose: () => void;
  onSwitchType: (type: NonNullable<LegalDocType>) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  currentType,
  isOpen,
  onClose,
  onSwitchType,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const doc = LEGAL_TEXTS[currentType];

  const tabs: { id: NonNullable<LegalDocType>; label: string; icon: React.ReactNode }[] = [
    { id: 'avis-legal', label: 'Avís Legal', icon: <FileText className="w-3.5 h-3.5" /> },
    { id: 'privacitat', label: 'Privacitat', icon: <Lock className="w-3.5 h-3.5" /> },
    { id: 'cookies', label: 'Cookies', icon: <Cookie className="w-3.5 h-3.5" /> },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-orange-50 rounded-xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-orange-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Tabs */}
        <div className="p-4 sm:p-5 border-b border-orange-200 bg-orange-100/60 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 p-1 bg-orange-200/60 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSwitchType(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  currentType === tab.id
                    ? 'bg-neutral-950 text-orange-200 shadow-sm'
                    : 'text-neutral-700 hover:text-neutral-950'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-800 hover:bg-orange-200/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            aria-label="Tancar finestra"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Academic Reminder Notice */}
        <div className="px-6 py-3 bg-orange-100/70 border-b border-orange-200/80 flex items-center gap-2.5 text-xs text-orange-950">
          <ShieldAlert className="w-4 h-4 text-orange-600 shrink-0" aria-hidden="true" />
          <span>
            <strong>Nota Acadèmica:</strong> Aquest document és una redacció simulada per a la pràctica d'una plataforma d'e-commerce i logística en l'àmbit estudiantil.
          </span>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-neutral-700 text-sm leading-relaxed">
          <div>
            <h2 id="legal-modal-title" className="text-xl font-bold text-neutral-950 tracking-tight">
              {doc.title}
            </h2>
            <div className="text-xs text-neutral-500 mt-1">
              Darrera actualització simulada: {doc.updatedAt}
            </div>
          </div>

          {doc.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-sm font-bold text-neutral-950">
                {sec.heading}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {sec.text}
              </p>
            </div>
          ))}

          <div className="p-4 bg-orange-100/50 border border-orange-200/80 rounded-lg text-xs text-neutral-600">
            Per a qualsevol qüestió relacionada amb el codi font o el desenvolupament del projecte estudiantil, contacteu amb l'administració acadèmica de l'assignatura.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-orange-200 bg-orange-100/60 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-neutral-700 hover:bg-orange-200 rounded-lg transition-colors"
          >
            Tancar document
          </button>
        </div>
      </div>
    </div>
  );
};
