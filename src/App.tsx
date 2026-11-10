import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { AboutSection } from './components/AboutSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { BlogDetailModal } from './components/BlogDetailModal';
import { LanguageSelectorModal } from './components/LanguageSelectorModal';
import { SERVICES_CATALOG, BLOG_POSTS } from './data/logisticsData';
import { LogisticsService, BlogPost, LegalDocType } from './types/logistics';
import { Language } from './data/translations';

export default function App() {
  const [activeSection, setActiveSection] = useState('inici');
  
  // Multilingual state with local persistence
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('ip_logistics_lang');
      if (saved && ['ca', 'es', 'en', 'fr', 'de', 'zh'].includes(saved)) {
        return saved as Language;
      }
    } catch {
      // fallback
    }
    return 'ca';
  });
  const [isTranslateModalOpen, setIsTranslateModalOpen] = useState(false);

  const handleSelectLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    try {
      localStorage.setItem('ip_logistics_lang', lang);
    } catch {
      // ignore
    }
  };

  // Modals state
  const [selectedService, setSelectedService] = useState<LogisticsService | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeLegalDoc, setActiveLegalDoc] = useState<NonNullable<LegalDocType> | null>(null);

  // Pre-filled contact form state transferred from calculator or service card
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledMessage, setPrefilledMessage] = useState('');

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Direct CTA handlers
  const handleRequestQuote = () => {
    const contactSection = document.getElementById('contacte');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServicesClick = () => {
    const servicesSection = document.getElementById('serveis');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestQuoteForService = (service: LogisticsService) => {
    setPrefilledService(service.title);
    setPrefilledMessage(
      `Sol·licitud de cotització per al servei: ${service.title} (${service.category})\nRequerim informació sobre tarifes, terminis operatius i disponibilitat per a la nostra empresa.`
    );
    handleRequestQuote();
  };

  const handleTransferFromCalculator = (data: { serviceInterest: string; message: string }) => {
    setPrefilledService(data.serviceInterest);
    setPrefilledMessage(data.message);
    handleRequestQuote();
  };

  // Intersection observer to automatically update active navbar tab on scroll
  useEffect(() => {
    const sections = ['inici', 'serveis', 'quisom', 'blog', 'contacte'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-orange-50 text-neutral-900 font-sans">
      
      {/* 1. Navbar Superior (Strict Top Bar Contract & Mobile Drawer) */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onRequestQuote={handleRequestQuote}
        currentLanguage={currentLanguage}
        onOpenTranslate={() => setIsTranslateModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 2. Hero Section (Portada amb titular potent i dos botons CTA) */}
        <Hero
          onQuoteClick={handleRequestQuote}
          onServicesClick={handleServicesClick}
          currentLanguage={currentLanguage}
        />

        {/* 3. Secció de Serveis / Catàleg (3 targetes detallades amb imatges i fitxes) */}
        <ServicesSection
          services={SERVICES_CATALOG}
          onSelectService={(service) => setSelectedService(service)}
          onRequestQuoteForService={handleRequestQuoteForService}
          currentLanguage={currentLanguage}
        />

        {/* E-Commerce & B2B Logistics Quote Estimator */}
        <QuoteCalculator
          onTransferToContact={handleTransferFromCalculator}
        />

        {/* 4. Secció Qui Som (Ibáñez Pascual Logístics: trajectòria, OEA, valors) */}
        <AboutSection currentLanguage={currentLanguage} />

        {/* 5. Secció Blog (Articles especialitzats en logística i comerç exterior) */}
        <BlogSection
          posts={BLOG_POSTS}
          onReadPost={(post) => setSelectedPost(post)}
        />

        {/* 6. Pàgina / Secció de Contacte (Dades d'oficina + formulari validat) */}
        <ContactSection
          initialServiceInterest={prefilledService}
          initialMessage={prefilledMessage}
          onOpenLegal={(type) => setActiveLegalDoc(type)}
        />

      </main>

      {/* 7. Footer Corporatiu Fosc amb avís d'àmbit estudiantil, enllaços legals i botó de traducció */}
      <Footer
        onOpenLegal={(type) => setActiveLegalDoc(type)}
        onNavigate={handleNavigate}
        onOpenTranslate={() => setIsTranslateModalOpen(true)}
        currentLanguage={currentLanguage}
      />

      {/* Interactive Modals */}
      <LanguageSelectorModal
        isOpen={isTranslateModalOpen}
        onClose={() => setIsTranslateModalOpen(false)}
        currentLanguage={currentLanguage}
        onSelectLanguage={handleSelectLanguage}
      />

      <LegalModal
        currentType={activeLegalDoc || 'avis-legal'}
        isOpen={activeLegalDoc !== null}
        onClose={() => setActiveLegalDoc(null)}
        onSwitchType={(type) => setActiveLegalDoc(type)}
      />

      <ServiceDetailModal
        service={selectedService}
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        onRequestQuote={handleRequestQuoteForService}
      />

      <BlogDetailModal
        post={selectedPost}
        isOpen={selectedPost !== null}
        onClose={() => setSelectedPost(null)}
      />

    </div>
  );
}
