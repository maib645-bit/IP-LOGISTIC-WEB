import React, { useState } from 'react';
import { Calculator, ArrowRight, Clock, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface QuoteCalculatorProps {
  onTransferToContact: (data: {
    serviceInterest: string;
    message: string;
  }) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onTransferToContact }) => {
  const [origin, setOrigin] = useState('Shanghai (CNSHA)');
  const [destination, setDestination] = useState('Port de Barcelona (ESBCN)');
  const [modalitat, setModalitat] = useState<'maritim-fcl' | 'maritim-lcl' | 'aeri' | 'terrestre'>('maritim-fcl');
  const [weightKg, setWeightKg] = useState(2500);
  const [volumeCbm, setVolumeCbm] = useState(12);
  const [customsOea, setCustomsOea] = useState(true);
  const [insurance, setInsurance] = useState(true);
  const [appliedNotification, setAppliedNotification] = useState(false);

  // Dynamic calculations based on selections
  const calculateEstimates = () => {
    let days = '26 - 30 dies';
    let minPrice = 1800;
    let maxPrice = 2400;
    let co2Kg = Math.round(weightKg * 0.04);

    if (modalitat === 'maritim-fcl') {
      days = '28 - 32 dies de trànsit';
      minPrice = 2100;
      maxPrice = 2650;
      co2Kg = Math.round(weightKg * 0.035);
    } else if (modalitat === 'maritim-lcl') {
      days = '32 - 36 dies de trànsit';
      const cbmRate = Math.max(volumeCbm, weightKg / 1000);
      minPrice = Math.round(cbmRate * 120 + 350);
      maxPrice = Math.round(cbmRate * 155 + 420);
      co2Kg = Math.round(cbmRate * 45);
    } else if (modalitat === 'aeri') {
      days = '3 - 5 dies de trànsit';
      const chargeableWeight = Math.max(weightKg, volumeCbm * 167);
      minPrice = Math.round(chargeableWeight * 4.8 + 220);
      maxPrice = Math.round(chargeableWeight * 6.2 + 300);
      co2Kg = Math.round(chargeableWeight * 0.65);
    } else if (modalitat === 'terrestre') {
      days = '2 - 4 dies de trànsit';
      minPrice = Math.round(weightKg * 0.35 + 180);
      maxPrice = Math.round(weightKg * 0.48 + 260);
      co2Kg = Math.round(weightKg * 0.12);
    }

    if (customsOea) {
      minPrice += 140;
      maxPrice += 190;
    }

    if (insurance) {
      minPrice += 85;
      maxPrice += 120;
    }

    return { days, minPrice, maxPrice, co2Kg };
  };

  const estimates = calculateEstimates();

  const handleApplyToContact = () => {
    const modalitatLabels = {
      'maritim-fcl': 'Fret Marítim FCL (Contenidor complet)',
      'maritim-lcl': 'Fret Marítim LCL (Grupatege consol·lidat)',
      'aeri': 'Càrrega Aèria IATA Urgent',
      'terrestre': 'Transport Terrestre Europeu FTL/LTL',
    };

    const detailsMessage = `Sol·licitud de cotització formal des del simulador web:\n- Origen: ${origin}\n- Destinació: ${destination}\n- Modalitat: ${modalitatLabels[modalitat]}\n- Càrrega: ${weightKg.toLocaleString()} kg / ${volumeCbm} m³\n- Despatx duaner OEA: ${customsOea ? 'Sí (requerit)' : 'No'}\n- Cobertura assegurança tot risc: ${insurance ? 'Sí' : 'No'}\n- Estimació estimada: ${estimates.minPrice.toLocaleString()}€ - ${estimates.maxPrice.toLocaleString()}€ (${estimates.days})\n\nPreguem ens contactin amb l'oferta ferma i disponibilitat d'espai.`;

    onTransferToContact({
      serviceInterest: modalitatLabels[modalitat],
      message: detailsMessage,
    });

    setAppliedNotification(true);
    setTimeout(() => setAppliedNotification(false), 4000);
  };

  return (
    <section className="py-16 bg-orange-50 border-b border-orange-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-700 mb-2">
              <Calculator className="w-4 h-4 text-orange-600" aria-hidden="true" />
              <span>Simulador de Fret & Trànsit Internacional</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              Calcula la teva estimació logística en temps real
            </h2>
            <p className="mt-2 text-sm text-neutral-600 max-w-xl">
              Configura origen, destí, modalitat de transport i requeriments duaners per obtenir una referència immediata de dies de trànsit i costos operatius.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-700 bg-orange-100/60 border border-orange-200/80 px-3.5 py-2 rounded-lg shrink-0">
            <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0" aria-hidden="true" />
            <span>Tarifes indexades a l'estatus OEA i preus de mercat BCN Port</span>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-orange-100/40 border border-orange-200/80 rounded-xl p-6 space-y-6">
            
            {/* Origin & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="calc-origin" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Port o Ciutat d'Origen
                </label>
                <select
                  id="calc-origin"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full text-xs font-medium bg-orange-50 border border-orange-200 rounded-lg px-3 py-2.5 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-neutral-900"
                >
                  <option value="Shanghai (CNSHA)">Shanghai (Xina - CNSHA)</option>
                  <option value="Ningbo-Zhoushan (CNNGB)">Ningbo (Xina - CNNGB)</option>
                  <option value="Shenzhen (CNSZX)">Shenzhen (Xina - CNSZX)</option>
                  <option value="Rotterdam (NLRTM)">Rotterdam (Països Baixos - NLRTM)</option>
                  <option value="Hamburg (DEHAM)">Hamburg (Alemanya - DEHAM)</option>
                  <option value="Nova York (USNYC)">Nova York (EUA - USNYC)</option>
                  <option value="Santos (BRSSZ)">Santos (Brasil - BRSSZ)</option>
                  <option value="Singapur (SGSIN)">Singapur (SGSIN)</option>
                </select>
              </div>

              <div>
                <label htmlFor="calc-destination" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Port o Hub de Destinació
                </label>
                <select
                  id="calc-destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full text-xs font-medium bg-orange-50 border border-orange-200 rounded-lg px-3 py-2.5 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-neutral-900"
                >
                  <option value="Port de Barcelona (ESBCN)">Port de Barcelona / ZAL (ESBCN)</option>
                  <option value="Port de València (ESVLC)">Port de València (ESVLC)</option>
                  <option value="Aeroport Josep Tarradellas BCN">Aeroport BCN-El Prat (Càrrega Aèria)</option>
                  <option value="Madrid Barajas Cargo (ESMAD)">Madrid Barajas Hub (ESMAD)</option>
                  <option value="Port d'Algesires (ESALG)">Port d'Algesires (ESALG)</option>
                </select>
              </div>
            </div>

            {/* Modalitat Selector (Interactive Segmented Control) */}
            <div>
              <span className="block text-xs font-semibold text-neutral-700 mb-2">
                Modalitat de Transport
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'maritim-fcl', label: 'Marítim FCL', sub: 'Contenidor 20\'/40\'' },
                  { id: 'maritim-lcl', label: 'Marítim LCL', sub: 'Grupatege consol·lidat' },
                  { id: 'aeri', label: 'Aeri Express', sub: 'IATA 3-5 dies' },
                  { id: 'terrestre', label: 'Terrestre', sub: 'Flota europea' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setModalitat(item.id as any)}
                    className={`p-2.5 text-left rounded-lg border transition-all text-xs ${
                      modalitat === item.id
                        ? 'border-neutral-950 bg-neutral-950 text-orange-200 shadow-sm ring-1 ring-neutral-950'
                        : 'border-orange-200/80 bg-orange-50 text-neutral-700 hover:border-orange-300'
                    }`}
                  >
                    <div className="font-semibold leading-tight">{item.label}</div>
                    <div className={`text-[10px] mt-0.5 ${modalitat === item.id ? 'text-orange-200/80' : 'text-neutral-500'}`}>{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Weight and Volume Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="font-semibold text-neutral-700">Pes brut aproximat</span>
                  <span className="font-mono tabular-nums text-neutral-950 font-bold">
                    {weightKg.toLocaleString()} kg
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="24000"
                  step="100"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                  <span>100 kg</span>
                  <span>10.000 kg</span>
                  <span>24.000 kg</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="font-semibold text-neutral-700">Volum aproximat</span>
                  <span className="font-mono tabular-nums text-neutral-950 font-bold">
                    {volumeCbm} m³ (CBM)
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="70"
                  step="1"
                  value={volumeCbm}
                  onChange={(e) => setVolumeCbm(Number(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                  <span>1 m³</span>
                  <span>35 m³</span>
                  <span>70 m³</span>
                </div>
              </div>
            </div>

            {/* Checkbox Options */}
            <div className="pt-3 border-t border-orange-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex items-start gap-2.5 text-xs text-neutral-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={customsOea}
                  onChange={(e) => setCustomsOea(e.target.checked)}
                  className="mt-0.5 rounded border-neutral-300 text-neutral-950 focus:ring-orange-300"
                />
                <div>
                  <span className="font-semibold">Incloure Despatx Duaner OEA</span>
                  <p className="text-[11px] text-neutral-500">Gestió telemàtica DUA i revisió aranzelària TARIC</p>
                </div>
              </label>

              <label className="flex items-start gap-2.5 text-xs text-neutral-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={insurance}
                  onChange={(e) => setInsurance(e.target.checked)}
                  className="mt-0.5 rounded border-neutral-300 text-neutral-950 focus:ring-orange-300"
                />
                <div>
                  <span className="font-semibold">Pòlissa All-Risks Door-to-Door</span>
                  <p className="text-[11px] text-neutral-500">Cobertura Institut de Londres A per danys o avaria</p>
                </div>
              </label>
            </div>

          </div>

          {/* Results Summary Column (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-950 text-white rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-md border border-neutral-800">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="text-xs uppercase tracking-wider font-semibold text-orange-300">
                  Resum de la Simulació
                </div>
                <div className="text-[11px] text-neutral-400 font-mono">
                  REF: EST-{Math.floor(Math.random() * 8000 + 1000)}
                </div>
              </div>

              {/* Transit time card */}
              <div className="my-5 p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                <div className="flex items-center gap-2 text-xs text-orange-200 mb-1">
                  <Clock className="w-4 h-4 text-orange-300" aria-hidden="true" />
                  <span>Temps estimat d'arribada (Port-to-Port / Hub):</span>
                </div>
                <div className="text-xl font-bold text-white tracking-tight">
                  {estimates.days}
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Ruta regular subjecte a condicions climàtiques i circuit duaner.
                </p>
              </div>

              {/* Cost Band */}
              <div className="mb-5">
                <div className="text-xs text-neutral-400 mb-1">
                  Banda estimada de cost operatiu (fret + gestió):
                </div>
                <div className="text-3xl font-extrabold text-white tabular-nums tracking-tight">
                  {estimates.minPrice.toLocaleString()}€ – {estimates.maxPrice.toLocaleString()}€
                </div>
                <div className="text-xs text-neutral-400 mt-1">
                  Preu estimat sense IVA. Inclou taxes portuàries i gestió integral si està activada.
                </div>
              </div>

              {/* Key Specs Breakdown */}
              <div className="space-y-2 text-xs text-neutral-300 border-t border-neutral-800 pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Ruta seleccionada:</span>
                  <span className="font-medium text-white truncate max-w-[200px]">{origin.split(' ')[0]} → BCN</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Volum / Pes:</span>
                  <span className="font-mono text-white">{weightKg.toLocaleString()} kg · {volumeCbm} m³</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Petjada de carboni estimada:</span>
                  <span className="font-mono text-emerald-400">~{estimates.co2Kg} kg CO₂e</span>
                </div>
              </div>
            </div>

            {/* Transfer to Lead Form Button */}
            <div>
              <button
                type="button"
                onClick={handleApplyToContact}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-orange-200 hover:bg-orange-300 active:bg-orange-400 rounded-lg transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 whitespace-nowrap border border-orange-300"
              >
                <span>Sol·licitar Oferta Formal</span>
                <ArrowRight className="w-4 h-4 text-neutral-950" aria-hidden="true" />
              </button>

              {appliedNotification && (
                <div className="mt-3 flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 rounded-lg px-3 py-2 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Dades transferides al formulari de contacte inferior!</span>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
