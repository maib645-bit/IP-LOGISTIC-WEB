'use client';

import React, { useState } from 'react';
import {
  Search,
  MapPin,
  Navigation,
  CalendarClock,
  Warehouse,
  Truck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  PackageCheck,
  ShieldCheck,
  ArrowLeft,
  Loader2,
} from 'lucide-react';

const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/qksoxdifvlvip';

export interface ShipmentRecord {
  tracking_code: string;
  client?: string;
  origin: string;
  destination: string;
  status: string;
  location: string;
  eta: string;
}

interface TrackingPageProps {
  onBackHome?: () => void;
}

interface ProgressConfig {
  percentage: number;
  barColorClass: string;
  badgeTextClass: string;
  badgeBgClass: string;
  stepIndex: 0 | 1 | 2;
  canonicalLabel: 'En magatzem' | 'En trànsit' | 'Lliurat';
  rawStatus: string;
}

function normalizeText(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function getProgressConfig(rawStatus: string = ''): ProgressConfig {
  const normalized = normalizeText(rawStatus);

  if (
    normalized.includes('lliurat') ||
    normalized.includes('entregat') ||
    normalized.includes('delivered') ||
    normalized.includes('completat')
  ) {
    return {
      percentage: 100,
      barColorClass: 'bg-emerald-600',
      badgeTextClass: 'text-emerald-800',
      badgeBgClass: 'bg-emerald-50 border-emerald-200',
      stepIndex: 2,
      canonicalLabel: 'Lliurat',
      rawStatus,
    };
  }

  if (
    normalized.includes('transit') ||
    normalized.includes('ruta') ||
    normalized.includes('enviat') ||
    normalized.includes('shipped')
  ) {
    return {
      percentage: 50,
      barColorClass: 'bg-blue-600',
      badgeTextClass: 'text-blue-800',
      badgeBgClass: 'bg-blue-50 border-blue-200',
      stepIndex: 1,
      canonicalLabel: 'En trànsit',
      rawStatus,
    };
  }

  return {
    percentage: 10,
    barColorClass: 'bg-amber-500',
    badgeTextClass: 'text-amber-900',
    badgeBgClass: 'bg-amber-50 border-amber-200',
    stepIndex: 0,
    canonicalLabel: 'En magatzem',
    rawStatus,
  };
}

export default function TrackingPage({ onBackHome }: TrackingPageProps) {
  const [trackingCode, setTrackingCode] = useState('');
  const [shipment, setShipment] = useState<ShipmentRecord | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lastSearchedCode, setLastSearchedCode] = useState<string | null>(null);

  const performSearch = async (codeToSearch: string) => {
    const trimmed = codeToSearch.trim();
    if (!trimmed) {
      setErrorMessage('Introdueix un codi de seguiment per fer la cerca.');
      setShipment(null);
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);
    setLastSearchedCode(trimmed);

    try {
      const endpoint = `${SHEETDB_API_URL}/search?tracking_code=${encodeURIComponent(trimmed)}`;
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error del servidor (${response.status})`);
      }

      const data: unknown = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        setShipment(data[0] as ShipmentRecord);
        setErrorMessage(null);
      } else {
        setShipment(null);
        setErrorMessage('Codi no trobat');
      }
    } catch (err) {
      console.error('Error consultant SheetDB:', err);
      setShipment(null);
      setErrorMessage('No s’ha pogut connectar amb el servei de seguiment. Torna-ho a provar.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(trackingCode);
  };

  const progress = shipment ? getProgressConfig(shipment.status) : null;

  const timelineSteps = [
    {
      label: 'En magatzem',
      sublabel: 'Preparació i control OEA',
      percent: 10,
      icon: Warehouse,
    },
    {
      label: 'En trànsit',
      sublabel: 'Expedició internacional activa',
      percent: 50,
      icon: Truck,
    },
    {
      label: 'Lliurat',
      sublabel: 'Recepció confirmada en destí',
      percent: 100,
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-orange-50 text-neutral-900">
      {/* Corporate Search Header Band */}
      <section className="bg-neutral-950 text-white border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 sm:pt-14 sm:pb-16">
          {onBackHome && (
            <button
              type="button"
              onClick={onBackHome}
              className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-orange-200 transition-colors mb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 rounded"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Tornar a la portada d’IP Logístics</span>
            </button>
          )}

          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-orange-300 mb-3">
              IP Logístics · Seguiment en temps real
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
              Localitza el teu enviament
            </h1>
            <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
              Introdueix el codi de referència de la teva expedició per consultar la ubicació actual, l’estat operatiu i la previsió d’arribada.
            </p>
          </div>

          {/* Search Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-2xl"
            role="search"
            aria-label="Cercador de seguiment d'enviaments"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <label htmlFor="tracking-code-input" className="sr-only">
                  Codi de seguiment
                </label>
                <Search
                  className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  id="tracking-code-input"
                  type="text"
                  value={trackingCode}
                  onChange={(e) => setTrackingCode(e.target.value)}
                  placeholder="Introdueix el teu codi de seguiment"
                  autoComplete="off"
                  spellCheck={false}
                  className="w-full h-13 pl-12 pr-4 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder:text-neutral-500 font-mono text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="h-13 px-7 rounded-xl bg-orange-200 hover:bg-orange-300 active:bg-orange-400 text-neutral-950 font-semibold text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0 border border-orange-300 disabled:opacity-60 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 focus-visible:ring-orange-300"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                    <span>Cercant...</span>
                  </>
                ) : (
                  <>
                    <span>Cercar</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Main Results / Feedback Viewport */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Error State */}
        {errorMessage && !isLoading && (
          <div
            role="alert"
            className="bg-red-50 border border-red-300 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-3.5">
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 className="text-base font-bold text-red-800">
                  {errorMessage}
                </h2>
                <p className="text-sm text-red-700 mt-1">
                  {errorMessage === 'Codi no trobat' && lastSearchedCode
                    ? `No consta cap expedició activa amb la referència «${lastSearchedCode}». Revisa que el codi estigui escrit correctament.`
                    : 'Verifica la connexió i torna a intentar la consulta.'}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setTrackingCode('');
                setErrorMessage(null);
              }}
              className="px-4 py-2 text-xs font-semibold text-red-800 bg-red-100 hover:bg-red-200 border border-red-300 rounded-lg transition-colors whitespace-nowrap shrink-0 self-start sm:self-center cursor-pointer"
            >
              Nova cerca
            </button>
          </div>
        )}

        {/* Loading Skeleton */}
        {isLoading && (
          <div
            aria-busy="true"
            className="bg-white border border-orange-200/90 rounded-xl p-6 sm:p-8 space-y-6 animate-pulse"
          >
            <div className="flex items-center justify-between border-b border-orange-100 pb-5">
              <div className="space-y-2">
                <div className="h-3 w-32 bg-orange-100 rounded" />
                <div className="h-7 w-48 bg-neutral-200 rounded" />
              </div>
              <div className="h-8 w-28 bg-orange-100 rounded-lg" />
            </div>
            <div className="h-3 w-full bg-neutral-100 rounded-full" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-3 w-20 bg-neutral-200 rounded" />
                  <div className="h-5 w-32 bg-neutral-100 rounded" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Result Card */}
        {shipment && progress && !isLoading && (
          <article className="bg-white border border-orange-200/90 rounded-xl shadow-sm overflow-hidden">
            {/* Top Record Header */}
            <div className="px-6 py-5 sm:px-8 sm:py-6 border-b border-orange-200/70 bg-orange-100/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                  <span>Expedició verificada</span>
                  {shipment.client && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-neutral-700 font-semibold">{shipment.client}</span>
                    </>
                  )}
                </div>
                <div className="mt-1 flex items-center gap-3">
                  <PackageCheck className="w-6 h-6 text-neutral-950 shrink-0" aria-hidden="true" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums tracking-tight text-neutral-950">
                    {shipment.tracking_code}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-3 self-start sm:self-center">
                <div
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border text-sm font-semibold ${progress.badgeBgClass} ${progress.badgeTextClass}`}
                >
                  {progress.stepIndex === 2 ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  ) : progress.stepIndex === 1 ? (
                    <Truck className="w-4 h-4 shrink-0" aria-hidden="true" />
                  ) : (
                    <Warehouse className="w-4 h-4 shrink-0" aria-hidden="true" />
                  )}
                  <span>{shipment.status || progress.canonicalLabel}</span>
                </div>
              </div>
            </div>

            {/* Visual Progress Bar (Timeline) */}
            <div className="px-6 py-7 sm:px-8 border-b border-orange-100">
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Progrés de l’enviament
                </span>
                <span className="text-sm font-mono font-bold tabular-nums text-neutral-950">
                  {progress.percentage}%
                </span>
              </div>

              {/* Track */}
              <div
                className="w-full h-3.5 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200/80"
                role="progressbar"
                aria-valuenow={progress.percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Progrés de l'enviament: ${progress.percentage}% (${progress.canonicalLabel})`}
              >
                <div
                  className={`h-full rounded-full transition-all duration-500 ease-out ${progress.barColorClass}`}
                  style={{ width: `${progress.percentage}%` }}
                />
              </div>

              {/* 3-Stage Milestone Timeline */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {timelineSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isCompleted = index < progress.stepIndex;
                  const isCurrent = index === progress.stepIndex;

                  let stepIconStyle = 'bg-neutral-100 text-neutral-400 border-neutral-200';
                  let stepTitleStyle = 'text-neutral-500';
                  if (isCurrent) {
                    if (progress.stepIndex === 2) {
                      stepIconStyle = 'bg-emerald-600 text-white border-emerald-600';
                      stepTitleStyle = 'text-emerald-800 font-bold';
                    } else if (progress.stepIndex === 1) {
                      stepIconStyle = 'bg-blue-600 text-white border-blue-600';
                      stepTitleStyle = 'text-blue-800 font-bold';
                    } else {
                      stepIconStyle = 'bg-amber-500 text-white border-amber-500';
                      stepTitleStyle = 'text-amber-900 font-bold';
                    }
                  } else if (isCompleted) {
                    stepIconStyle =
                      progress.stepIndex === 2
                        ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
                        : 'bg-blue-100 text-blue-700 border-blue-200';
                    stepTitleStyle = 'text-neutral-900 font-semibold';
                  }

                  return (
                    <div
                      key={step.label}
                      className={`flex items-start gap-3 p-3.5 rounded-lg border transition-colors ${
                        isCurrent
                          ? 'bg-orange-50/70 border-orange-200'
                          : 'bg-transparent border-neutral-100'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${stepIconStyle}`}
                      >
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm ${stepTitleStyle}`}>{step.label}</span>
                          <span className="text-xs font-mono tabular-nums text-neutral-400">
                            {step.percent}%
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 mt-0.5 leading-snug">
                          {step.sublabel}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Shipment Key Details Grid */}
            <div className="px-6 py-7 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Origen */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  <MapPin className="w-3.5 h-3.5 text-orange-600" aria-hidden="true" />
                  <span>Origen</span>
                </div>
                <div className="mt-1.5 text-lg font-bold text-neutral-950 leading-snug">
                  {shipment.origin || '—'}
                </div>
              </div>

              {/* Destí */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  <Navigation className="w-3.5 h-3.5 text-orange-600" aria-hidden="true" />
                  <span>Destí</span>
                </div>
                <div className="mt-1.5 text-lg font-bold text-neutral-950 leading-snug">
                  {shipment.destination || '—'}
                </div>
              </div>

              {/* Ubicació actual */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  <Truck className="w-3.5 h-3.5 text-orange-600" aria-hidden="true" />
                  <span>Ubicació actual</span>
                </div>
                <div className="mt-1.5 text-lg font-bold text-neutral-950 leading-snug">
                  {shipment.location || '—'}
                </div>
              </div>

              {/* Data prevista (ETA) */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  <CalendarClock className="w-3.5 h-3.5 text-orange-600" aria-hidden="true" />
                  <span>Data prevista (ETA)</span>
                </div>
                <div className="mt-1.5 text-lg font-bold text-neutral-950 tabular-nums leading-snug">
                  {shipment.eta || '—'}
                </div>
              </div>
            </div>

            {/* Subtle OEA / Compliance Footer inside Card */}
            <div className="px-6 py-4 sm:px-8 bg-neutral-950 text-neutral-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-300 shrink-0" aria-hidden="true" />
                <span>
                  Traçabilitat supervisada sota certificació duanera OEA · Ibáñez Pascual Logístics
                </span>
              </div>
              <span className="text-neutral-400 font-mono">
                Ref. {shipment.tracking_code}
              </span>
            </div>
          </article>
        )}

        {/* Initial Idle Guidance State */}
        {!shipment && !errorMessage && !isLoading && (
          <div className="bg-white border border-orange-200/80 rounded-xl p-8 sm:p-10 text-center max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-orange-100 border border-orange-200 text-neutral-950 flex items-center justify-center mx-auto mb-4">
              <Search className="w-5 h-5" aria-hidden="true" />
            </div>
            <h2 className="text-lg font-bold text-neutral-950">
              Consulta l’estat de la teva càrrega
            </h2>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed max-w-md mx-auto">
              Escriu el codi d’expedició assignat pel nostre equip operatiu al cercador superior per visualitzar en temps real la ruta, ubicació i barra de progrés.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
