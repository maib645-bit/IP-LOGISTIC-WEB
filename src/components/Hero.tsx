import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, Globe, Clock, Award } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeroProps {
  onQuoteClick: () => void;
  onServicesClick: () => void;
  currentLanguage?: Language;
}

export const Hero: React.FC<HeroProps> = ({
  onQuoteClick,
  onServicesClick,
  currentLanguage = 'ca',
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const t = TRANSLATIONS[currentLanguage].hero;

  const heroImagePath = '/images/hero_logistics_hub_1793205612659.jpg';

  return (
    <section id="inici" className="relative bg-neutral-950 text-white overflow-hidden">
      {/* Background Photography with measured scrim */}
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <img
            src={heroImagePath}
            alt="Terminal marítima de càrrega i contenidors d'IP Logístics al Port de Barcelona"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
              imageLoaded ? 'opacity-30' : 'opacity-0'
            }`}
          />
        ) : null}
        {/* Measured contrast gradient overlay for strict WCAG AA legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-neutral-950/95 to-neutral-900/80" />
        <div className="absolute inset-0 bg-radial-at-c from-orange-500/10 via-transparent to-neutral-950/70 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
        <div className="max-w-3xl">
          {/* Unboxed domain kicker */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-orange-300 mb-4">
            <span>{t.kicker}</span>
          </div>

          {/* Potent Sector Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight sm:leading-tight lg:leading-tight mb-6 [text-wrap:balance]">
            {t.title}
          </h1>

          {/* Professional Subtitle */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal">
            {t.subtitle}
          </p>

          {/* Two Mandatory Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <button
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-orange-200 hover:bg-orange-300 active:bg-orange-400 rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-300 whitespace-nowrap border border-orange-300"
            >
              <span>{t.ctaQuote}</span>
              <ArrowRight className="w-4 h-4 text-neutral-950" aria-hidden="true" />
            </button>

            <button
              onClick={onServicesClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 whitespace-nowrap"
            >
              <span>{t.ctaServices}</span>
              <ChevronDown className="w-4 h-4 text-orange-200" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Adjacency Proof Strip in a full-width row below the hero content */}
      <div className="relative z-10 border-t border-neutral-800 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-orange-300 mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums tracking-tight">
                  +85 Països
                </div>
                <div className="text-xs text-neutral-400 mt-0.5 font-medium">
                  Xarxa logística i duanera global
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-orange-300 mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums tracking-tight">
                  99.4%
                </div>
                <div className="text-xs text-neutral-400 mt-0.5 font-medium">
                  Índex d'arribades i entregues a temps
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-orange-300 mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums tracking-tight">
                  Operador OEA
                </div>
                <div className="text-xs text-neutral-400 mt-0.5 font-medium">
                  Simplificació duanera i seguretat
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-orange-300 mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums tracking-tight">
                  +25 Anys
                </div>
                <div className="text-xs text-neutral-400 mt-0.5 font-medium">
                  Trajectòria a ports i aeroports
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
