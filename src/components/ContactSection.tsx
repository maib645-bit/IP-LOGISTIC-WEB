import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, Building2, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';

interface ContactSectionProps {
  initialServiceInterest?: string;
  initialMessage?: string;
  onOpenLegal: (type: 'privacitat') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServiceInterest = '',
  initialMessage = '',
  onOpenLegal,
}) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceInterest, setServiceInterest] = useState('Fret Marítim FCL / LCL');
  const [message, setMessage] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  // Validation errors & network states
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedVoucher, setSubmittedVoucher] = useState<{
    referenceId: string;
    submittedAt: string;
    fullName: string;
    companyName: string;
    email: string;
    serviceInterest: string;
  } | null>(null);

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbgordqn';

  // Sync initial prefilled data if provided
  useEffect(() => {
    if (initialServiceInterest) {
      setServiceInterest(initialServiceInterest);
    }
  }, [initialServiceInterest]);

  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'El camp Nom és obligatori.';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Introdueix un nom vàlid.';
    }

    if (!companyName.trim()) {
      newErrors.companyName = 'El camp Empresa és obligatori.';
    }

    if (!email.trim()) {
      newErrors.email = 'El camp Correu és obligatori.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Introdueix un correu electrònic vàlid.';
    }

    if (!message.trim()) {
      newErrors.message = 'Detalla la teva consulta operativa.';
    } else if (message.trim().length < 10) {
      newErrors.message = 'La consulta ha de tenir com a mínim 10 caràcters per analitzar l\'operativa.';
    }

    if (!privacyAccepted) {
      newErrors.privacy = 'Cal acceptar la política de privacitat i avís acadèmic per continuar.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        nom: fullName,
        empresa: companyName,
        email: email,
        telefon: phone || 'No indicat',
        servei: serviceInterest,
        consulta_operativa: message,
        _subject: `Nova consulta IP Logístics: ${companyName} - ${fullName}`,
      };

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const generatedRef = `IPL-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
        setSubmittedVoucher({
          referenceId: generatedRef,
          submittedAt: new Date().toLocaleTimeString('ca-ES', { hour: '2-digit', minute: '2-digit' }),
          fullName,
          companyName,
          email,
          serviceInterest,
        });
      } else {
        const data = await response.json().catch(() => ({}));
        const errDesc =
          data?.error ||
          (data?.errors && data.errors.map((errItem: { message: string }) => errItem.message).join(', ')) ||
          'No s\'ha pogut trametre la consulta a Formspree. Si us plau, revisa les dades o torna-ho a intentar.';
        setSubmitError(errDesc);
      }
    } catch (err) {
      console.error('Error enviant formulari a Formspree:', err);
      setSubmitError('S\'ha produït un error de xarxa en contactar amb Formspree. Comprova la teva connexió.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFullName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setPrivacyAccepted(false);
    setErrors({});
    setSubmitError(null);
    setSubmittedVoucher(null);
  };

  return (
    <section id="contacte" className="py-20 bg-orange-100/40 border-b border-orange-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-700 mb-2">
            <Building2 className="w-4 h-4 text-orange-600" aria-hidden="true" />
            <span>Oficina Central & Operacions</span>
            <span aria-hidden="true">·</span>
            <span>Atenció Professional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 tracking-tight [text-wrap:balance]">
            Contacta amb l'equip d'operacions d'IP Logístics
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Ens trobaràs al cor logístic del Port de Barcelona. Envia'ns la teva consulta operativa o sol·licita informació sobre quotes aranzelàries, frets marítims o espai de magatzematge.
          </p>
        </div>

        {/* 2-Column Layout: Office Data & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Office Card */}
            <div className="bg-orange-50 border border-orange-200/80 rounded-xl p-6 sm:p-7 shadow-sm">
              <h3 className="text-base font-bold text-neutral-950 mb-5 flex items-center justify-between pb-3 border-b border-orange-200/60">
                <span>Dades de la Seu Central</span>
                <span className="text-xs font-semibold text-neutral-950 bg-orange-100 border border-orange-200/80 px-2 py-0.5 rounded">
                  ZAL Port BCN
                </span>
              </h3>

              <div className="space-y-4 text-sm">
                
                {/* Adreça */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100/80 text-neutral-950 border border-orange-200/60 rounded-lg shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-950">Adreça física:</div>
                    <div className="text-neutral-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      {COMPANY_INFO.address}
                    </div>
                    <div className="text-neutral-500 text-xs mt-0.5">
                      {COMPANY_INFO.city}
                    </div>
                  </div>
                </div>

                {/* Telèfon */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100/80 text-neutral-950 border border-orange-200/60 rounded-lg shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-950">Telèfon directe:</div>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-neutral-950 hover:text-orange-700 font-mono text-sm font-bold tracking-tight"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <div className="text-neutral-500 text-xs mt-0.5">
                      Fax d'expedicions: {COMPANY_INFO.fax}
                    </div>
                  </div>
                </div>

                {/* Correu */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100/80 text-neutral-950 border border-orange-200/60 rounded-lg shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-950">Correu operatiu:</div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-neutral-950 hover:text-orange-700 text-sm font-semibold hover:underline block"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.commercialEmail}`}
                      className="text-neutral-600 hover:text-neutral-900 text-xs block mt-0.5"
                    >
                      {COMPANY_INFO.commercialEmail}
                    </a>
                  </div>
                </div>

                {/* Horaris */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100/80 text-neutral-950 border border-orange-200/60 rounded-lg shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-950">Horari d'atenció:</div>
                    <div className="text-neutral-600 text-xs leading-relaxed mt-0.5">
                      {COMPANY_INFO.hours}
                    </div>
                  </div>
                </div>

              </div>

              {/* OEA Badge */}
              <div className="mt-6 pt-4 border-t border-orange-200/60 flex items-center gap-2.5 text-xs text-neutral-600 bg-orange-100/60 p-3 rounded-lg border border-orange-200/80">
                <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0" aria-hidden="true" />
                <span>Autorització OEA: <strong className="text-neutral-950 font-mono">ESAEOF2014000389</strong></span>
              </div>
            </div>

            {/* Quick response commitment */}
            <div className="bg-neutral-950 text-white rounded-xl p-5 shadow-sm border border-neutral-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-orange-300 mb-1">
                Compromís de resposta operativa
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Totes les consultes rebudes en dies feiners són assignades directament a un gestor duaner o tècnic de fret amb resposta en menys de 2 hores hàbils.
              </p>
            </div>

          </div>

          {/* Right Column: Contact & Inquiries Form (7 cols) */}
          <div className="lg:col-span-7 bg-orange-50 border border-orange-200/80 rounded-xl p-6 sm:p-8 shadow-sm">
            
            {submittedVoucher ? (
              /* Success Confirmation Voucher */
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3.5">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-base font-bold text-emerald-900">
                      Consulta operativa registrada correctament
                    </h3>
                    <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                      Hem assignat el teu expedient al departament corresponent d'Ibáñez Pascual Logístics.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-100/50 border border-orange-200/80 rounded-xl p-5 text-xs space-y-2.5">
                  <div className="flex justify-between items-center pb-2 border-b border-orange-200/80">
                    <span className="font-semibold text-neutral-500">Codi d'expedient simulat:</span>
                    <span className="font-mono text-sm font-bold text-neutral-950">{submittedVoucher.referenceId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Remitent / Empresa:</span>
                    <span className="font-medium text-neutral-950">{submittedVoucher.fullName} ({submittedVoucher.companyName})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Correu de contacte:</span>
                    <span className="font-mono text-neutral-950">{submittedVoucher.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Servei consultat:</span>
                    <span className="font-medium text-neutral-950">{submittedVoucher.serviceInterest}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Hora de recepció:</span>
                    <span className="font-mono text-neutral-950">{submittedVoucher.submittedAt} h</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-orange-200/80 text-[11px]">
                    <span className="text-neutral-500 font-medium">Destí de notificació:</span>
                    <span className="font-mono text-emerald-700 font-medium inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Formspree (xbgordqn)
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex-1 py-3 px-4 text-xs font-semibold text-neutral-700 bg-orange-100 hover:bg-orange-200 rounded-lg transition-colors text-center"
                  >
                    Enviar una altra consulta
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                    className="flex-1 py-3 px-4 text-xs font-semibold text-neutral-950 bg-orange-200 hover:bg-orange-300 rounded-lg transition-colors text-center inline-flex items-center justify-center gap-1.5 border border-orange-300"
                  >
                    <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Trucar a la central</span>
                  </a>
                </div>
              </div>
            ) : (
              /* Contact Form */
              <form
                onSubmit={handleSubmit}
                action={FORMSPREE_ENDPOINT}
                method="POST"
                noValidate
                className="space-y-5"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-lg font-bold text-neutral-950 tracking-tight">
                      Formulari de Consulta Operativa & Cotització
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-100 text-emerald-800 border border-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span>Formspree connectat</span>
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Els camps assenyalats són obligatoris. Les consultes es remeten en temps real a <span className="font-mono text-neutral-700">formspree.io/f/xbgordqn</span>.
                  </p>
                </div>

                {/* Submit Error Banner if any */}
                {submitError && (
                  <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="flex-1">
                      <div className="font-semibold">Error en enviar la consulta:</div>
                      <div className="mt-0.5">{submitError}</div>
                    </div>
                  </div>
                )}

                {/* Nom & Empresa (Mandatory fields) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-700 mb-1">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="nom"
                      type="text"
                      placeholder="Ex: Jordi Rovira"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full text-sm bg-orange-50/90 border rounded-lg px-3.5 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 ${
                        errors.fullName
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-orange-200/90 focus:ring-orange-300 focus:border-neutral-900'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-semibold text-neutral-700 mb-1">
                      Empresa <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-company"
                      name="empresa"
                      type="text"
                      placeholder="Ex: Indústries Químiques Rovira S.L."
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className={`w-full text-sm bg-orange-50/90 border rounded-lg px-3.5 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 ${
                        errors.companyName
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-orange-200/90 focus:ring-orange-300 focus:border-neutral-900'
                      }`}
                    />
                    {errors.companyName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                        <span>{errors.companyName}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Correu & Telèfon */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-700 mb-1">
                      Correu corporatiu <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="nom@empresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full text-sm bg-orange-50/90 border rounded-lg px-3.5 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-orange-200/90 focus:ring-orange-300 focus:border-neutral-900'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-neutral-700 mb-1">
                      Telèfon de contacte (opcional)
                    </label>
                    <input
                      id="contact-phone"
                      name="telefon"
                      type="tel"
                      placeholder="+34 600 000 000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-sm bg-orange-50/90 border border-orange-200/90 rounded-lg px-3.5 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-neutral-900"
                    />
                  </div>
                </div>

                {/* Tipus de Servei */}
                <div>
                  <label htmlFor="contact-service" className="block text-xs font-semibold text-neutral-700 mb-1">
                    Àmbit o servei principal requerit
                  </label>
                  <select
                    id="contact-service"
                    name="servei"
                    value={serviceInterest}
                    onChange={(e) => setServiceInterest(e.target.value)}
                    className="w-full text-sm bg-orange-50/90 border border-orange-200/90 rounded-lg px-3.5 py-2.5 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-neutral-900"
                  >
                    <option value="Fret Marítim FCL / LCL">Fret Marítim Internacional (FCL / LCL)</option>
                    <option value="Càrrega Aèria IATA Urgent">Càrrega Aèria IATA Urgent</option>
                    <option value="Transport Terrestre Europeu FTL/LTL">Transport Terrestre Europeu (FTL / LTL)</option>
                    <option value="Comerç Exterior & Gestió Duanera OEA">Despatx Duaner OEA & Assessoria TARIC</option>
                    <option value="Magatzematge Avançat & E-Commerce">Magatzem ZAL Port BCN & Fulfillment E-Commerce</option>
                    <option value="Altres consultes logístiques">Altres consultes logístiques o multimodals</option>
                  </select>
                </div>

                {/* Consulta Operativa (Mandatory field) */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-700 mb-1">
                    Consulta operativa <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="consulta_operativa"
                    rows={4}
                    placeholder="Descriu la teva operació: origen, destí, tipus de mercaderia, volum estimat o tràmits duaners que necessites gestionar..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full text-sm bg-orange-50/90 border rounded-lg p-3.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-400'
                        : 'border-orange-200/90 focus:ring-orange-300 focus:border-neutral-900'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Privacy checkbox */}
                <div>
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="mt-0.5 rounded border-neutral-300 text-neutral-950 focus:ring-orange-300"
                    />
                    <span className="text-xs text-neutral-600 leading-normal">
                      He llegit i accepto la{' '}
                      <button
                        type="button"
                        onClick={() => onOpenLegal('privacitat')}
                        className="text-orange-700 underline hover:text-orange-800 font-semibold"
                      >
                        política de privacitat
                      </button>
                      {' '}i entenc que aquest formulari forma part d'un prototip web estudiantil sense validesa contractual.
                    </span>
                  </label>
                  {errors.privacy && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                      <span>{errors.privacy}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold uppercase tracking-wider text-neutral-950 bg-orange-200 hover:bg-orange-300 active:bg-orange-400 border border-orange-300 rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-300 disabled:opacity-75 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Processant consulta...</span>
                  ) : (
                    <>
                      <span>Enviar Consulta Operativa</span>
                      <Send className="w-4 h-4 text-neutral-950" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
