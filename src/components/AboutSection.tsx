import React from 'react';
import { ShieldCheck, Anchor, Users, Award, CheckCircle2, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';
import { Language, TRANSLATIONS } from '../data/translations';

interface AboutSectionProps {
  currentLanguage?: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLanguage = 'ca' }) => {
  const t = TRANSLATIONS[currentLanguage].about;

  return (
    <section id="quisom" className="py-20 bg-orange-100/40 border-b border-orange-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-700 mb-2">
            <span>{t.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 tracking-tight [text-wrap:balance]">
            {t.title}
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            {t.lead}
          </p>
        </div>

        {/* 2-Column Split: Story & Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-14">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-neutral-700 text-sm sm:text-base leading-relaxed bg-orange-50 border border-orange-200/80 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-neutral-950 tracking-tight">
              {t.storyTitle}
            </h3>
            <p>
              {t.storyP1}
            </p>
            <p>
              {t.storyP2}
            </p>

            <div className="pt-4 border-t border-orange-200/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">
                    {t.oeaSafety}
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {t.oeaSafetySub}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">
                    {t.zalHub}
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {t.zalHubSub}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            <div className="bg-orange-50 border border-orange-200/80 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-100/80 text-neutral-950 rounded-lg border border-orange-200/80">
                  <Anchor className="w-5 h-5" aria-hidden="true" />
                </div>
                <h4 className="text-sm font-bold text-neutral-950">
                  {t.pillar1Title}
                </h4>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {t.pillar1Desc}
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200/80 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-100/80 text-neutral-950 rounded-lg border border-orange-200/80">
                  <Users className="w-5 h-5" aria-hidden="true" />
                </div>
                <h4 className="text-sm font-bold text-neutral-950">
                  {t.pillar2Title}
                </h4>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {t.pillar2Desc}
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200/80 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-100/80 text-neutral-950 rounded-lg border border-orange-200/80">
                  <Award className="w-5 h-5" aria-hidden="true" />
                </div>
                <h4 className="text-sm font-bold text-neutral-950">
                  {t.pillar3Title}
                </h4>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {t.pillar3Desc}
              </p>
            </div>

          </div>

        </div>

        {/* Quantified Rigor Grid */}
        <div className="bg-orange-50 border border-orange-200/80 rounded-xl p-8 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-6 text-center sm:text-left">
            {t.metricsTitle}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-orange-200/60">
            <div className="sm:px-4 pt-3 sm:pt-0">
              <div className="text-3xl font-extrabold text-neutral-950 tabular-nums">
                25.000 m²
              </div>
              <div className="text-xs text-neutral-600 font-medium mt-1">
                {t.stat1Label}
              </div>
            </div>

            <div className="sm:px-4 pt-3 sm:pt-0">
              <div className="text-3xl font-extrabold text-neutral-950 tabular-nums">
                +42.000
              </div>
              <div className="text-xs text-neutral-600 font-medium mt-1">
                {t.stat2Label}
              </div>
            </div>

            <div className="sm:px-4 pt-3 sm:pt-0">
              <div className="text-3xl font-extrabold text-neutral-950 tabular-nums">
                &lt; 90 min
              </div>
              <div className="text-xs text-neutral-600 font-medium mt-1">
                {t.stat3Label}
              </div>
            </div>

            <div className="sm:px-4 pt-3 sm:pt-0">
              <div className="text-3xl font-extrabold text-neutral-950 tabular-nums">
                100%
              </div>
              <div className="text-xs text-neutral-600 font-medium mt-1">
                {t.stat4Label}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
