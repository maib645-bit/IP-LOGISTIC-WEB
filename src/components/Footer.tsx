import React from 'react';
import { ShieldAlert, MapPin, Phone, Mail, Globe, ArrowUp, Scale } from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';
import { LegalDocType } from '../types/logistics';
import { Language, TRANSLATIONS, LANGUAGE_OPTIONS } from '../data/translations';

interface FooterProps {
  onOpenLegal: (type: NonNullable<LegalDocType>) => void;
  onNavigate: (sectionId: string) => void;
  onOpenTranslate: () => void;
  currentLanguage: Language;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLegal,
  onNavigate,
  onOpenTranslate,
  currentLanguage = 'ca',
}) => {
  const t = TRANSLATIONS[currentLanguage].footer;
  const currentLangObj = LANGUAGE_OPTIONS.find((l) => l.code === currentLanguage);

  // Dynamic formatted today's date
  const todayDate = new Intl.DateTimeFormat('ca-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800">
      
      {/* Prominent Student Project / Academic Prototype Banner */}
      <div className="bg-neutral-900 border-b border-neutral-800 text-neutral-300 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <ShieldAlert className="w-4 h-4 text-orange-400 shrink-0" aria-hidden="true" />
            <span>
              <strong className="text-white font-semibold uppercase tracking-wide">
                {t.studentBannerTitle}
              </strong>{' '}
              {t.studentBannerText}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono shrink-0">
            <span className="text-neutral-400">📅 {todayDate}</span>
            <span className="text-neutral-600">·</span>
            <span className="text-orange-300 font-semibold">Versió 1</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-neutral-800">
          
          {/* Brand & Corporate Overview (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 p-1 flex items-center justify-center shrink-0 shadow-sm border border-neutral-800">
                <img
                  src="/assets/aistudio/ip_logistics_symbol_transparent.png"
                  alt="IP Logístics Símbol"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight leading-none">
                  IP Logístics
                </span>
                <span className="text-xs text-neutral-400 mt-1">
                  Ibáñez Pascual Logístics & Comerç Exterior
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              {t.corporateDesc}
            </p>

            <div className="pt-1 text-xs text-neutral-500 font-mono">
              <div>{t.customsAccreditation} {COMPANY_INFO.oeacert}</div>
              <div>{t.foundation} {COMPANY_INFO.foundationYear}</div>
            </div>

            {/* Translation Button in Corporate Block */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenTranslate}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-400/80 rounded-lg transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
                aria-label="Traduir web a diversos idiomes"
              >
                <Globe className="w-4 h-4 text-orange-400 shrink-0" aria-hidden="true" />
                <span>{t.translateButton}</span>
                <span className="ml-1 px-1.5 py-0.5 text-[10px] uppercase font-mono font-bold tracking-wider bg-orange-500/20 text-orange-300 rounded border border-orange-500/30">
                  {currentLanguage.toUpperCase()}
                </span>
              </button>
            </div>
          </div>

          {/* Navigational Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              {t.navTitle}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('inici')}
                  className="hover:text-orange-200 transition-colors"
                >
                  Inici / Portada
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('serveis')}
                  className="hover:text-orange-200 transition-colors"
                >
                  Serveis / Catàleg
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('quisom')}
                  className="hover:text-orange-200 transition-colors"
                >
                  Qui Som (Història & OEA)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('blog')}
                  className="hover:text-orange-200 transition-colors"
                >
                  Blog & Comerç Exterior
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contacte')}
                  className="hover:text-orange-200 transition-colors"
                >
                  Contacte & Oficines
                </button>
              </li>
            </ul>
          </div>

          {/* Mandatory Legal & Regulatory Links Column */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
              <span>{t.legalTitle}</span>
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a
                  href="#avis-legal"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenLegal('avis-legal');
                  }}
                  className="hover:text-orange-200 transition-colors block py-0.5"
                >
                  {t.legalNotice}
                </a>
              </li>
              <li>
                <a
                  href="#privacitat"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenLegal('privacitat');
                  }}
                  className="hover:text-orange-200 transition-colors block py-0.5"
                >
                  {t.privacy}
                </a>
              </li>
              <li>
                <a
                  href="#cookies"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenLegal('cookies');
                  }}
                  className="hover:text-orange-200 transition-colors block py-0.5"
                >
                  {t.cookies}
                </a>
              </li>
              <li className="pt-2 text-[11px] text-neutral-500 leading-tight">
                Textos reglamentaris i marc de compliment RGPD/OEA.
              </li>
            </ul>
          </div>

          {/* Operational Hubs */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              {t.hubsTitle}
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Port de Barcelona (ZAL Hub)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Port de València (Fret & Duanes)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Aeroport Josep Tarradellas BCN</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Madrid Barajas Cargo Terminal</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Port d'Algesires (Connexió Àfrica)</span>
              </li>
            </ul>
          </div>

          {/* Headquarters Contacts */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              {t.hqTitle}
            </div>
            <div className="space-y-2 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-300 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="leading-snug">Av. Ports d'Europa 100, ZAL Port, 08040 Barcelona</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-300 shrink-0" aria-hidden="true" />
                <span className="font-mono text-neutral-300">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-300 shrink-0" aria-hidden="true" />
                <span className="text-neutral-300">{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Mandatory Legal Links, Translation Button & Academic Status */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          
          <div className="text-center md:text-left">
            <div>
              &copy; {new Date().getFullYear()} IP Logístics (Ibáñez Pascual Logístics S.L.). {t.rights}
            </div>
            <div className="text-[11px] text-neutral-500 mt-0.5">
              {t.studentFootnote}
            </div>
            <div className="mt-2 inline-flex flex-wrap items-center gap-2 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-300 font-mono">
              <span className="text-orange-400">📅 Data: {todayDate}</span>
              <span className="text-neutral-600">·</span>
              <span className="text-orange-200">Versió 1</span>
            </div>
          </div>

          {/* Interactive Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-neutral-400 font-medium">
            <a
              href="#avis-legal"
              onClick={(e) => {
                e.preventDefault();
                onOpenLegal('avis-legal');
              }}
              className="hover:text-orange-300 transition-colors underline-offset-4 hover:underline"
            >
              {t.legalNotice}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="#privacitat"
              onClick={(e) => {
                e.preventDefault();
                onOpenLegal('privacitat');
              }}
              className="hover:text-orange-300 transition-colors underline-offset-4 hover:underline"
            >
              {t.privacy}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="#cookies"
              onClick={(e) => {
                e.preventDefault();
                onOpenLegal('cookies');
              }}
              className="hover:text-orange-300 transition-colors underline-offset-4 hover:underline"
            >
              {t.cookies}
            </a>
            <span aria-hidden="true">·</span>
            
            {/* Quick Translation Switcher Trigger */}
            <button
              type="button"
              onClick={onOpenTranslate}
              className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-orange-300 transition-colors focus:outline-none"
              aria-label="Canviar idioma de la web"
            >
              <Globe className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
              <span>{t.translateButton}</span>
            </button>
          </div>

          {/* Scroll to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-orange-200 border border-neutral-800 rounded-lg transition-colors"
            aria-label="Tornar a l'inici de la pàgina"
          >
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
            <span className="text-[11px]">{t.backToTop}</span>
          </button>

        </div>

      </div>
    </footer>
  );
};

