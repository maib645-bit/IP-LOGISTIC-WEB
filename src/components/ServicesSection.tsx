import React, { useState } from 'react';
import { LogisticsService } from '../types/logistics';
import { ArrowRight, Check, FileText, Ship, FileCheck, Warehouse } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface ServicesSectionProps {
  services: LogisticsService[];
  onSelectService: (service: LogisticsService) => void;
  onRequestQuoteForService: (service: LogisticsService) => void;
  currentLanguage?: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onSelectService,
  onRequestQuoteForService,
  currentLanguage = 'ca',
}) => {
  const t = TRANSLATIONS[currentLanguage].services;

  // Service icon mapping helper
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'transport-multimodal':
        return <Ship className="w-5 h-5 text-neutral-900" aria-hidden="true" />;
      case 'comerc-exterior-duanes':
        return <FileCheck className="w-5 h-5 text-neutral-900" aria-hidden="true" />;
      case 'magatzematge-ecommerce':
        return <Warehouse className="w-5 h-5 text-neutral-900" aria-hidden="true" />;
      default:
        return <Ship className="w-5 h-5 text-neutral-900" aria-hidden="true" />;
    }
  };

  return (
    <section id="serveis" className="py-20 bg-orange-100/40 border-b border-orange-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-700 mb-2">
            <span>{t.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 tracking-tight [text-wrap:balance]">
            {t.title}
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Detailed Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              icon={getServiceIcon(service.id)}
              onOpenDetails={() => onSelectService(service)}
              onRequestQuote={() => onRequestQuoteForService(service)}
            />
          ))}
        </div>

        {/* Informative Sub-banner with direct CTA */}
        <div className="mt-12 p-6 sm:p-8 bg-neutral-950 text-white rounded-xl shadow-md border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Necessites una solució logística a mida o un estudi de despatx duaner?
            </h3>
            <p className="mt-1 text-sm text-neutral-300 leading-relaxed">
              El nostre equip d'agents de duanes col·legiats i especialistes en rutes marítimes i aèries analitza la teva operativa sense compromís.
            </p>
          </div>
          <button
            onClick={() => {
              const contactElement = document.getElementById('contacte');
              contactElement?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-orange-200 hover:bg-orange-300 active:bg-orange-400 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm border border-orange-300"
          >
            <span>Parlar amb un agent duaner</span>
            <ArrowRight className="w-4 h-4 text-neutral-950" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: LogisticsService;
  index: number;
  icon: React.ReactNode;
  onOpenDetails: () => void;
  onRequestQuote: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  icon,
  onOpenDetails,
  onRequestQuote,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <article className="flex flex-col bg-orange-50 border border-orange-200/80 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Card Image Container with resilient fallback */}
      <div className="relative aspect-[4/3] w-full bg-orange-100/50 overflow-hidden">
        {!imageError ? (
          <img
            src={service.image}
            alt={service.title}
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : null}
        
        {/* CSS Fallback if image fails or before load */}
        {(!imageLoaded || imageError) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-orange-100/70 text-neutral-500 p-4">
            <div className="p-3 bg-orange-50 rounded-lg shadow-sm mb-2">{icon}</div>
            <span className="text-xs font-medium text-neutral-700 text-center">{service.title}</span>
          </div>
        )}

        {/* Quiet index & category overlay tag with strict legibility */}
        <div className="absolute top-3 left-3 bg-neutral-950/85 backdrop-blur-sm text-white px-2.5 py-1 rounded text-xs font-medium tracking-wide border border-neutral-700/50">
          <span>0{index + 1}</span>
          <span className="mx-1.5 opacity-60">·</span>
          <span>{service.category}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Header with Title */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-orange-100/80 border border-orange-200 rounded-md shrink-0">
              {icon}
            </div>
            <span className="text-xs font-semibold text-neutral-900">
              Ibáñez Pascual Logístics
            </span>
          </div>
          <h3 className="text-lg font-bold text-neutral-950 leading-snug tracking-tight">
            {service.title}
          </h3>
          <p className="mt-1 text-xs text-neutral-500 font-medium leading-relaxed">
            {service.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-600 leading-relaxed mb-5 line-clamp-3">
          {service.description}
        </p>

        {/* Key Features Bullet List */}
        <div className="space-y-2 mb-6 flex-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Capacitats destacades:
          </div>
          {service.keyFeatures.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 leading-normal">
              <Check className="w-3.5 h-3.5 text-orange-600 mt-0.5 shrink-0" aria-hidden="true" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Specifications Preview (Tabular numbers) */}
        <div className="pt-4 border-t border-orange-200/60 mb-6 bg-orange-100/60 -mx-6 px-6 py-3">
          <div className="text-[11px] text-neutral-500 space-y-1">
            <div className="flex justify-between items-center">
              <span className="font-medium text-neutral-600">Cobertura:</span>
              <span className="text-neutral-950 font-semibold truncate max-w-[180px]">
                {service.specifications[0]?.value || 'Global'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-neutral-600">Certificació:</span>
              <span className="text-neutral-950 font-semibold truncate max-w-[180px]">
                {service.certifications.split(',')[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <button
            type="button"
            onClick={onOpenDetails}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-medium text-neutral-700 bg-orange-100 hover:bg-orange-200 active:bg-orange-300 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-500" aria-hidden="true" />
            <span>Fitxa tècnica</span>
          </button>

          <button
            type="button"
            onClick={onRequestQuote}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-neutral-950 bg-orange-200 hover:bg-orange-300 active:bg-orange-400 rounded-lg transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 whitespace-nowrap border border-orange-300"
          >
            <span>Cotització</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-950" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
};
