import React, { useEffect } from 'react';
import { X, Globe, Check, Sparkles } from 'lucide-react';
import { Language, LANGUAGE_OPTIONS, TRANSLATIONS } from '../data/translations';

interface LanguageSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
}

export const LanguageSelectorModal: React.FC<LanguageSelectorModalProps> = ({
  isOpen,
  onClose,
  currentLanguage,
  onSelectLanguage,
}) => {
  const t = TRANSLATIONS[currentLanguage].modal;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-orange-50 rounded-xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl border border-orange-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-5 border-b border-orange-200 flex items-center justify-between gap-4 bg-orange-100/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-neutral-950 text-orange-300 rounded-lg">
              <Globe className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 id="language-modal-title" className="text-base font-bold text-neutral-950 tracking-tight leading-tight">
                {t.chooseLanguage}
              </h2>
              <p className="text-xs text-neutral-600 mt-0.5">
                {t.languageDesc}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-800 hover:bg-orange-200/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            aria-label="Tancar selector d'idiomes"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Language Options Grid */}
        <div className="p-6 overflow-y-auto space-y-2.5">
          {LANGUAGE_OPTIONS.map((option) => {
            const isSelected = currentLanguage === option.code;
            return (
              <button
                key={option.code}
                type="button"
                onClick={() => {
                  onSelectLanguage(option.code);
                  onClose();
                }}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'border-neutral-950 bg-neutral-950 text-white shadow-sm ring-1 ring-neutral-950'
                    : 'border-orange-200/80 bg-orange-50 text-neutral-900 hover:bg-orange-100/60 hover:border-orange-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-mono font-bold uppercase shrink-0 border ${
                      isSelected
                        ? 'bg-orange-400 text-neutral-950 border-orange-300 font-extrabold'
                        : 'bg-orange-100 text-neutral-800 border-orange-200'
                    }`}
                  >
                    {option.code}
                  </span>
                  <div>
                    <div className="text-sm font-bold tracking-tight">
                      {option.nativeLabel}
                    </div>
                    <div className={`text-xs mt-0.5 ${isSelected ? 'text-orange-200' : 'text-neutral-500'}`}>
                      {option.label}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {isSelected ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-orange-500/20 text-orange-300 border border-orange-400/30">
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{t.currentActive}</span>
                    </span>
                  ) : (
                    <span className="text-xs text-neutral-500 font-mono uppercase px-2 py-0.5 rounded bg-orange-100/70 border border-orange-200/80">
                      {option.code}
                    </span>
                  )}
                </div>
              </button>
            );
          })}

          {/* Quick Notice */}
          <div className="mt-4 p-3.5 rounded-lg bg-orange-100/70 border border-orange-200/80 flex items-start gap-2.5 text-xs text-neutral-700 leading-relaxed">
            <Sparkles className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              Totes les seccions de navegació, titulars, simulador logístic, serveis i formularis s'adapten immediatament a l'idioma seleccionat.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-orange-200 bg-orange-100/60 flex items-center justify-between">
          <div className="text-xs text-neutral-500 font-mono">
            IP Logístics · Global Trade
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-neutral-700 hover:bg-orange-200 rounded-lg transition-colors"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
