import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { Language, TRANSLATIONS, LANGUAGE_OPTIONS } from '../data/translations';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onRequestQuote: () => void;
  currentLanguage?: Language;
  onOpenTranslate?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onRequestQuote,
  currentLanguage = 'ca',
  onOpenTranslate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLanguage].nav;
  const currentLangObj = LANGUAGE_OPTIONS.find((l) => l.code === currentLanguage);

  const navLinks = [
    { id: 'inici', label: t.inici },
    { id: 'serveis', label: t.serveis },
    { id: 'quisom', label: t.quisom },
    { id: 'blog', label: t.blog },
    { id: 'contacte', label: t.contacte },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-orange-50/95 backdrop-blur-md border-b border-orange-200/80 transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict Top Bar Contract: 3 Zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Element with uploaded IP Logistics logo */}
          <a
            href="#inici"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('inici');
            }}
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded"
            aria-label="IP Logístics - Ibáñez Pascual Logístics"
          >
            <img
              src="/assets/aistudio/watermarked_img_14908228590763494883_d95b806d.jpg"
              alt="IP Logístics Logo"
              className="h-12 w-12 object-contain mix-blend-multiply transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col text-left">
              <span className="text-lg font-bold tracking-tight text-neutral-950 leading-none group-hover:text-neutral-800 transition-colors">
                IP Logístics
              </span>
              <span className="text-[11px] font-medium text-neutral-600 tracking-normal mt-1">
                Ibáñez Pascual Logístics
              </span>
            </div>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600"
            aria-label="Navegació principal"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`whitespace-nowrap shrink-0 py-2 transition-colors relative focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded ${
                    isActive
                      ? 'text-neutral-950 font-semibold'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action & Language switcher */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {onOpenTranslate && (
              <button
                type="button"
                onClick={onOpenTranslate}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-800 bg-orange-100/90 hover:bg-orange-200 border border-orange-300/80 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                aria-label="Traduir web / Canviar idioma"
                title="Traduir web"
              >
                <Globe className="w-3.5 h-3.5 text-neutral-800" aria-hidden="true" />
                <span className="text-[11px] font-bold text-orange-950">{currentLangObj?.flag}</span>
                <span className="hidden xl:inline text-xs">{t.translate}</span>
              </button>
            )}

            <button
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-orange-200 hover:bg-orange-300 active:bg-orange-400 rounded-lg transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-950 whitespace-nowrap shrink-0 border border-orange-300"
            >
              <span>{t.quoteBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-950" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            {onOpenTranslate && (
              <button
                type="button"
                onClick={onOpenTranslate}
                className="p-2 rounded-lg text-neutral-800 bg-orange-100 border border-orange-300 focus:outline-none text-xs font-bold"
                aria-label="Traduir web"
              >
                <span className="text-base leading-none">{currentLangObj?.flag}</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-neutral-600 hover:text-neutral-950 hover:bg-orange-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Tancar menú' : 'Obrir menú'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-orange-200/80 bg-orange-50 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between w-full text-left px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-orange-100 text-neutral-950 font-semibold'
                      : 'text-neutral-700 hover:bg-orange-100/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-orange-200/60 space-y-2">
            {onOpenTranslate && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTranslate();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-neutral-800 bg-orange-100 hover:bg-orange-200 border border-orange-300 rounded-lg transition-colors"
              >
                <Globe className="w-4 h-4 text-neutral-800" aria-hidden="true" />
                <span>{t.translate}: {currentLangObj?.flag} {currentLangObj?.label}</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold uppercase tracking-wider text-neutral-950 bg-orange-200 hover:bg-orange-300 rounded-lg transition-colors border border-orange-300"
            >
              <span>{t.quoteBtn}</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-950" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
