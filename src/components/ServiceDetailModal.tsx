import React, { useEffect, useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Globe, Building2 } from 'lucide-react';
import { LogisticsService } from '../types/logistics';

interface ServiceDetailModalProps {
  service: LogisticsService | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (service: LogisticsService) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onRequestQuote,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

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

  if (!isOpen || !service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-orange-50 rounded-xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-orange-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-orange-200 flex items-center justify-between gap-4 bg-orange-100/60">
          <div className="flex items-center gap-2 text-xs text-neutral-950 font-semibold uppercase tracking-wider">
            <span>{service.category}</span>
            <span aria-hidden="true">·</span>
            <span>Fitxa Tècnica Operativa</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-800 hover:bg-orange-200/60 transition-colors"
            aria-label="Tancar finestra"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Top visual & title */}
          <div>
            <div className="relative aspect-[16/9] w-full bg-orange-100/60 rounded-lg overflow-hidden mb-4">
              <img
                src={service.image}
                alt={service.title}
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-300">
                  Ibáñez Pascual Logístics
                </span>
                <h2 id="service-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
                  {service.title}
                </h2>
              </div>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Technical Specifications Table */}
          <div className="bg-orange-100/50 border border-orange-200/80 rounded-lg p-4 sm:p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3">
              Especificacions i Paràmetres Operatius
            </h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs">
              {service.specifications.map((spec, idx) => (
                <div key={idx} className="pb-2 border-b border-orange-200/70">
                  <dt className="text-neutral-500 font-medium">{spec.label}:</dt>
                  <dd className="text-neutral-900 font-semibold mt-0.5">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Key Advantages */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3">
              Prestacions Inclòs en el Servei:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
              {service.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-orange-200/60">
            <div className="flex items-start gap-2.5">
              <Globe className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="font-semibold text-neutral-900">Àmbit de cobertura:</span>
                <p className="text-neutral-600 mt-0.5">{service.routesCoverage}</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="font-semibold text-neutral-900">Acreditacions de qualitat:</span>
                <p className="text-neutral-600 mt-0.5">{service.certifications}</p>
              </div>
            </div>
          </div>

          <div className="p-3 bg-orange-100/70 border border-orange-200/80 rounded-lg text-xs text-neutral-950">
            <strong>Ideal per a:</strong> {service.idealFor}
          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="p-4 border-t border-orange-200 bg-orange-100/60 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-medium text-neutral-700 hover:bg-orange-200 rounded-lg transition-colors"
          >
            Tancar
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onRequestQuote(service);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-orange-200 hover:bg-orange-300 rounded-lg transition-colors shadow-sm border border-orange-300"
          >
            <span>Demanar cotització d'aquest servei</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-950" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};
