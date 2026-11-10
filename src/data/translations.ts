export type Language = 'ca' | 'es' | 'en' | 'fr' | 'de' | 'zh';

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  flag: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'ca', label: 'Català', nativeLabel: 'Català (Original)', flag: '🏴' },
  { code: 'es', label: 'Castellà', nativeLabel: 'Español (Castellano)', flag: '🇪🇸' },
  { code: 'en', label: 'Anglès', nativeLabel: 'English (International)', flag: '🇬🇧' },
  { code: 'fr', label: 'Francès', nativeLabel: 'Français (Commerce Extérieur)', flag: '🇫🇷' },
  { code: 'de', label: 'Alemany', nativeLabel: 'Deutsch (Spedition & Zoll)', flag: '🇩🇪' },
  { code: 'zh', label: 'Xinès', nativeLabel: '中文 (国际物流与清关)', flag: '🇨🇳' },
];

export const TRANSLATIONS: Record<Language, {
  nav: {
    inici: string;
    serveis: string;
    quisom: string;
    blog: string;
    contacte: string;
    quoteBtn: string;
    translate: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaQuote: string;
    ctaServices: string;
    proof1: string;
    proof2: string;
    proof3: string;
    proof4: string;
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    bannerTitle: string;
    bannerSubtitle: string;
    bannerBtn: string;
    techSheet: string;
    quote: string;
    featuresTitle: string;
    coverageLabel: string;
    certLabel: string;
  };
  calculator: {
    kicker: string;
    title: string;
    subtitle: string;
    badge: string;
    origin: string;
    destination: string;
    modality: string;
    weight: string;
    volume: string;
    customsOea: string;
    customsOeaSub: string;
    insurance: string;
    insuranceSub: string;
    summaryTitle: string;
    etaLabel: string;
    etaNotice: string;
    costLabel: string;
    costNotice: string;
    routeSelected: string;
    volWeight: string;
    carbon: string;
    cta: string;
    appliedSuccess: string;
  };
  about: {
    kicker: string;
    title: string;
    lead: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    oeaSafety: string;
    oeaSafetySub: string;
    zalHub: string;
    zalHubSub: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    metricsTitle: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    stat4Label: string;
  };
  blog: {
    kicker: string;
    title: string;
    subtitle: string;
    periodicLabel: string;
    read: string;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    officeTitle: string;
    zalTag: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    commitmentTitle: string;
    commitmentDesc: string;
    formTitle: string;
    formSubtitle: string;
    fullName: string;
    company: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    messagePlaceholder: string;
    privacyNotice: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    anotherQuery: string;
    callCentral: string;
  };
  footer: {
    studentBannerTitle: string;
    studentBannerText: string;
    studentTag: string;
    corporateDesc: string;
    customsAccreditation: string;
    foundation: string;
    navTitle: string;
    hubsTitle: string;
    hqTitle: string;
    legalTitle: string;
    legalNotice: string;
    privacy: string;
    cookies: string;
    rights: string;
    studentFootnote: string;
    backToTop: string;
    translateButton: string;
    translateSubtitle: string;
  };
  modal: {
    chooseLanguage: string;
    languageDesc: string;
    currentActive: string;
    close: string;
    switchSuccess: string;
  };
}> = {
  ca: {
    nav: {
      inici: 'Inici',
      serveis: 'Serveis/Catàleg',
      quisom: 'Qui Som',
      blog: 'Blog',
      contacte: 'Contacte',
      quoteBtn: 'Demanar Cotització',
      translate: 'Idioma',
    },
    hero: {
      kicker: 'Ibáñez Pascual Logístics · Comerç Exterior & Fret Internacional · Est. 1998',
      title: 'Solucions globals de transport i comerç exterior per a cadenes de subministrament exigents',
      subtitle: 'Sincronitzem transport marítim FCL/LCL, aeri IATA i terrestre europeu amb gestió duanera certificada OEA i un hub de magatzematge avançat a la ZAL Port de Barcelona per garantir seguretat, rapidesa i estalvi d\'aranzels en el teu comerç internacional.',
      ctaQuote: 'Demanar Cotització',
      ctaServices: 'Veure Serveis',
      proof1: 'Despatx OEA < 90 min',
      proof2: 'Hub ZAL Port Barcelona',
      proof3: 'Fret Marítim & Aeri 24/7',
      proof4: 'Operador Certificat ISO',
    },
    services: {
      kicker: 'Catàleg d\'Operacions Internacionals · Solucions B2B i E-Commerce',
      title: 'Serveis integrats de transport, duanes i emmagatzematge',
      subtitle: 'Estructures operatives dissenyades per reduir temps de trànsit, evitar demores en inspeccions de frontera i optimitzar el flux de mercaderies d\'importació i exportació.',
      bannerTitle: 'Necessites una solució logística a mida o un estudi de despatx duaner?',
      bannerSubtitle: 'El nostre equip d\'agents de duanes col·legiats i especialistes en rutes marítimes i aèries analitza la teva operativa sense compromís.',
      bannerBtn: 'Parlar amb un agent duaner',
      techSheet: 'Fitxa tècnica',
      quote: 'Cotització',
      featuresTitle: 'Capacitats destacades:',
      coverageLabel: 'Cobertura:',
      certLabel: 'Certificació:',
    },
    calculator: {
      kicker: 'Simulador de Fret & Trànsit Internacional',
      title: 'Calcula la teva estimació logística en temps real',
      subtitle: 'Configura origen, destí, modalitat de transport i requeriments duaners per obtenir una referència immediata de dies de trànsit i costos operatius.',
      badge: 'Tarifes indexades a l\'estatus OEA i preus de mercat BCN Port',
      origin: 'Port o Ciutat d\'Origen',
      destination: 'Port o Hub de Destinació',
      modality: 'Modalitat de Transport',
      weight: 'Pes brut aproximat',
      volume: 'Volum aproximat',
      customsOea: 'Incloure Despatx Duaner OEA',
      customsOeaSub: 'Gestió telemàtica DUA i revisió aranzelària TARIC',
      insurance: 'Pòlissa All-Risks Door-to-Door',
      insuranceSub: 'Cobertura Institut de Londres A per danys o avaria',
      summaryTitle: 'Resum de la Simulació',
      etaLabel: 'Temps estimat d\'arribada (Port-to-Port / Hub):',
      etaNotice: 'Ruta regular subjecte a condicions climàtiques i circuit duaner.',
      costLabel: 'Banda estimada de cost operatiu (fret + gestió):',
      costNotice: 'Preu estimat sense IVA. Inclou taxes portuàries i gestió integral si està activada.',
      routeSelected: 'Ruta seleccionada:',
      volWeight: 'Volum / Pes:',
      carbon: 'Petjada de carboni estimada:',
      cta: 'Sol·licitar Oferta Formal',
      appliedSuccess: 'Dades transferides al formulari de contacte inferior!',
    },
    about: {
      kicker: 'Qui Som · Ibáñez Pascual Logístics · Tradició i Rigor Operatiu',
      title: 'Més de dues dècades connectant les indústries catalanes i europees amb els mercats globals',
      lead: 'Fundada l\'any 1998 per la família Ibáñez Pascual, la nostra companyia ha evolucionat des d\'una agència duanera especialitzada fins a consolidar-se com un operador logístic integral de referència a la façana mediterrània.',
      storyTitle: 'Excel·lència tècnica, transparència documental i seguretat jurídica',
      storyP1: 'El comerç exterior no admet improvisacions. Un error en la declaració d\'un codi TARIC o una demora en la presentació d\'un certificat para-duaner pot suposar dies de paralització d\'un contenidor i costos greus d\'ocupació i estades.',
      storyP2: 'A IP Logístics combinem la proximitat d\'una empresa amb lideratge familiar amb les capacitats tecnològiques més avançades: connexió EDI directa amb les duanes comunitàries, gestió documental digitalitzada i magatzems a la Zona d\'Activitats Logístiques (ZAL) del Port de Barcelona.',
      oeaSafety: 'Certificació OEA AEOF',
      oeaSafetySub: 'Màxima qualificació de seguretat i simplificació duanera de la Unió Europea.',
      zalHub: 'Hub ZAL Port Barcelona',
      zalHubSub: 'Instal·lacions immediates a les terminals de contenidors BEST i APM.',
      pillar1Title: 'Control Integral Door-to-Door',
      pillar1Desc: 'Supervisió única des de la càrrega a la fàbrica d\'origen fins a l\'entrega final al magatzem de destinació o client de comerç electrònic.',
      pillar2Title: 'Agents Duaners Col·legiats',
      pillar2Desc: 'Un equip altament qualificat i col·legiat que defensa els interessos tributaris i logístics dels nostres clients davant les autoritats.',
      pillar3Title: 'Auditoria i Compliment Continu',
      pillar3Desc: 'Revisió exhaustiva d\'orígens preferencials, acords de lliure comerç i condicions d\'embalatge per garantir zero infraccions.',
      metricsTitle: 'Compromís operatiu i mètriques d\'eficiència demostrables',
      stat1Label: 'Superfície de magatzem a la ZAL Port',
      stat2Label: 'Expedients de duana despatxats anualment',
      stat3Label: 'Temps mitjà de despatx en circuit verd',
      stat4Label: 'Traçabilitat digital de fites per API',
    },
    blog: {
      kicker: 'Actualitat & Comerç Exterior',
      title: 'Anàlisi operativa, normativa duanera i tendències logístiques',
      subtitle: 'Articles i guies pràctiques elaborades pels nostres representants duaners i directors de trànsit internacional per a professionals del sector.',
      periodicLabel: 'Publicacions periòdiques d\'Ibáñez Pascual Logístics',
      read: 'Llegir',
    },
    contact: {
      kicker: 'Oficina Central & Operacions · Atenció Professional',
      title: 'Contacta amb l\'equip d\'operacions d\'IP Logístics',
      subtitle: 'Ens trobaràs al cor logístic del Port de Barcelona. Envia\'ns la teva consulta operativa o sol·licita informació sobre quotes aranzelàries, frets marítims o espai de magatzematge.',
      officeTitle: 'Dades de la Seu Central',
      zalTag: 'ZAL Port BCN',
      addressLabel: 'Adreça física:',
      phoneLabel: 'Telèfon directe:',
      emailLabel: 'Correu operatiu:',
      hoursLabel: 'Horari d\'atenció:',
      commitmentTitle: 'Compromís de resposta operativa',
      commitmentDesc: 'Totes les consultes rebudes en dies feiners són assignades directament a un gestor duaner o tècnic de fret amb resposta en menys de 2 hores hàbils.',
      formTitle: 'Formulari de Consulta Operativa & Cotització',
      formSubtitle: 'Els camps assenyalats són obligatoris per processar la teva sol·licitud logísticament.',
      fullName: 'Nom complet',
      company: 'Empresa',
      email: 'Correu corporatiu',
      phone: 'Telèfon de contacte (opcional)',
      service: 'Àmbit o servei principal requerit',
      message: 'Consulta operativa',
      messagePlaceholder: 'Descriu la teva operació: origen, destí, tipus de mercaderia, volum estimat o tràmits duaners que necessites gestionar...',
      privacyNotice: 'He llegit i accepto la política de privacitat i entenc que aquest formulari forma part d\'un prototip web estudiantil sense validesa contractual.',
      submit: 'Enviar Consulta Operativa',
      submitting: 'Processant consulta...',
      successTitle: 'Consulta operativa registrada correctament',
      successDesc: 'Hem assignat el teu expedient al departament corresponent d\'Ibáñez Pascual Logístics.',
      anotherQuery: 'Enviar una altra consulta',
      callCentral: 'Trucar a la central',
    },
    footer: {
      studentBannerTitle: 'Avís d\'Àmbit Estudiantil:',
      studentBannerText: 'Aquest portal web és una maqueta i prototip de prova generat en l\'àmbit acadèmic per a l\'empresa simulada IP Logístics (Ibáñez Pascual Logístics). No té vinculació comercial ni contractual activa.',
      studentTag: 'Entorn Docent 2026',
      corporateDesc: 'Operador logístic integral, transport internacional multimodal i representació duanera OEA amb hub operatiu a la ZAL del Port de Barcelona.',
      customsAccreditation: 'Acreditació duanera:',
      foundation: 'Fundació empresarial: Any',
      navTitle: 'Navegació',
      hubsTitle: 'Terminals Operatives',
      hqTitle: 'Seu Central',
      legalTitle: 'Marc Legal & Normativa',
      legalNotice: 'Avís Legal',
      privacy: 'Privacitat',
      cookies: 'Cookies',
      rights: 'Tots els drets reservats.',
      studentFootnote: 'Plataforma web de prova acadèmica realitzada en l\'àmbit estudiantil.',
      backToTop: 'Dalt',
      translateButton: 'Traduir Web (Idioma)',
      translateSubtitle: 'Selecciona l\'idioma de navegació de la plataforma',
    },
    modal: {
      chooseLanguage: 'Traduir Plataforma Web',
      languageDesc: 'Selecciona el teu idioma de preferència per navegar per tota la plataforma d\'IP Logístics.',
      currentActive: 'Idioma actiu',
      close: 'Tancar',
      switchSuccess: 'Idioma actualitzat correctament',
    },
  },
  es: {
    nav: {
      inici: 'Inicio',
      serveis: 'Servicios/Catálogo',
      quisom: 'Quiénes Somos',
      blog: 'Blog',
      contacte: 'Contacto',
      quoteBtn: 'Pedir Cotización',
      translate: 'Idioma',
    },
    hero: {
      kicker: 'Ibáñez Pascual Logístics · Comercio Exterior & Flete Internacional · Est. 1998',
      title: 'Soluciones globales de transporte y comercio exterior para cadenas de suministro exigentes',
      subtitle: 'Sincronizamos transporte marítimo FCL/LCL, aéreo IATA y terrestre europeo con gestión aduanera certificada OEA y un hub de almacenaje avanzado en la ZAL Puerto de Barcelona para garantizar seguridad, rapidez y ahorro arancelario en tu comercio internacional.',
      ctaQuote: 'Pedir Cotización',
      ctaServices: 'Ver Servicios',
      proof1: 'Despacho OEA < 90 min',
      proof2: 'Hub ZAL Puerto Barcelona',
      proof3: 'Flete Marítimo & Aéreo 24/7',
      proof4: 'Operador Certificado ISO',
    },
    services: {
      kicker: 'Catálogo de Operaciones Internacionales · Soluciones B2B y E-Commerce',
      title: 'Servicios integrados de transporte, aduanas y almacenamiento',
      subtitle: 'Estructuras operativas diseñadas para reducir tiempos de tránsito, evitar demoras en inspecciones fronterizas y optimizar el flujo de mercancías de importación y exportación.',
      bannerTitle: '¿Necesitas una solución logística a medida o un estudio de despacho aduanero?',
      bannerSubtitle: 'Nuestro equipo de agentes de aduanas colegiados y especialistas en rutas marítimas y aéreas analiza tu operativa sin compromiso.',
      bannerBtn: 'Hablar con un agente aduanero',
      techSheet: 'Ficha técnica',
      quote: 'Cotización',
      featuresTitle: 'Capacidades destacadas:',
      coverageLabel: 'Cobertura:',
      certLabel: 'Certificación:',
    },
    calculator: {
      kicker: 'Simulador de Flete & Tránsito Internacional',
      title: 'Calcula tu estimación logística en tiempo real',
      subtitle: 'Configura origen, destino, modalidad de transporte y requerimientos aduaneros para obtener una referencia inmediata de días de tránsito y costes operativos.',
      badge: 'Tarifas indexadas al estatus OEA y precios de mercado BCN Port',
      origin: 'Puerto o Ciudad de Origen',
      destination: 'Puerto o Hub de Destino',
      modality: 'Modalidad de Transporte',
      weight: 'Peso bruto aproximado',
      volume: 'Volumen aproximado',
      customsOea: 'Incluir Despacho Aduanero OEA',
      customsOeaSub: 'Gestión telemática DUA y revisión arancelaria TARIC',
      insurance: 'Póliza All-Risks Door-to-Door',
      insuranceSub: 'Cobertura Instituto de Londres A por daños o avería',
      summaryTitle: 'Resumen de la Simulación',
      etaLabel: 'Tiempo estimado de llegada (Port-to-Port / Hub):',
      etaNotice: 'Ruta regular sujeta a condiciones climáticas y circuito aduanero.',
      costLabel: 'Banda estimada de coste operativo (flete + gestión):',
      costNotice: 'Precio estimado sin IVA. Incluye tasas portuarias y gestión integral si está activada.',
      routeSelected: 'Ruta seleccionada:',
      volWeight: 'Volumen / Peso:',
      carbon: 'Huella de carbono estimada:',
      cta: 'Solicitar Oferta Formal',
      appliedSuccess: '¡Datos transferidos al formulario de contacto inferior!',
    },
    about: {
      kicker: 'Quiénes Somos · Ibáñez Pascual Logístics · Tradición y Rigor Operativo',
      title: 'Más de dos décadas conectando las industrias con los mercados globales',
      lead: 'Fundada en 1998 por la familia Ibáñez Pascual, nuestra compañía ha evolucionado desde una agencia aduanera especializada hasta consolidarse como un operador logístico integral de referencia en el Mediterráneo.',
      storyTitle: 'Excelencia técnica, transparencia documental y seguridad jurídica',
      storyP1: 'El comercio exterior no admite improvisaciones. Un error en la declaración de un código TARIC o una demora documental puede suponer días de paralización y graves sobrecostes de ocupación y estancias.',
      storyP2: 'En IP Logístics combinamos la cercanía de una empresa con liderazgo familiar con las tecnologías más avanzadas: conexión EDI directa con aduanas, gestión documental digitalizada y almacenes en la ZAL del Puerto de Barcelona.',
      oeaSafety: 'Certificación OEA AEOF',
      oeaSafetySub: 'Máxima calificación de seguridad y simplificación aduanera de la Unión Europea.',
      zalHub: 'Hub ZAL Puerto Barcelona',
      zalHubSub: 'Instalaciones inmediatas a las terminales de contenedores BEST y APM.',
      pillar1Title: 'Control Integral Door-to-Door',
      pillar1Desc: 'Supervisión única desde la carga en fábrica de origen hasta la entrega final en almacén de destino o cliente e-commerce.',
      pillar2Title: 'Agentes Aduaneros Colegiados',
      pillar2Desc: 'Un equipo altamente cualificado y colegiado que defiende los intereses tributarios y logísticos de nuestros clientes.',
      pillar3Title: 'Auditoría y Cumplimiento Continuo',
      pillar3Desc: 'Revisión exhaustiva de orígenes preferenciales, acuerdos de libre comercio y condiciones de embalaje para garantizar cero infracciones.',
      metricsTitle: 'Compromiso operativo y métricas de eficiencia demostrables',
      stat1Label: 'Superficie de almacén en la ZAL Puerto',
      stat2Label: 'Expedientes de aduana despachados anualmente',
      stat3Label: 'Tiempo medio de despacho en circuito verde',
      stat4Label: 'Trazabilidad digital de hitos por API',
    },
    blog: {
      kicker: 'Actualidad & Comercio Exterior',
      title: 'Análisis operativo, normativa aduanera y tendencias logísticas',
      subtitle: 'Artículos y guías prácticas elaboradas por nuestros representantes aduaneros y directores de tráfico internacional.',
      periodicLabel: 'Publicaciones periódicas de Ibáñez Pascual Logístics',
      read: 'Leer',
    },
    contact: {
      kicker: 'Oficina Central & Operaciones · Atención Profesional',
      title: 'Contacta con el equipo de operaciones de IP Logístics',
      subtitle: 'Nos encontrarás en el corazón logístico del Puerto de Barcelona. Envíanos tu consulta operativa o solicita información sobre fletes, aranceles o espacio de almacén.',
      officeTitle: 'Datos de la Sede Central',
      zalTag: 'ZAL Port BCN',
      addressLabel: 'Dirección física:',
      phoneLabel: 'Teléfono directo:',
      emailLabel: 'Correo operativo:',
      hoursLabel: 'Horario de atención:',
      commitmentTitle: 'Compromiso de respuesta operativa',
      commitmentDesc: 'Todas las consultas recibidas en días laborables se asignan directamente a un gestor aduanero con respuesta en menos de 2 horas hábiles.',
      formTitle: 'Formulario de Consulta Operativa & Cotización',
      formSubtitle: 'Los campos señalados son obligatorios para procesar tu solicitud logísticamente.',
      fullName: 'Nombre completo',
      company: 'Empresa',
      email: 'Correo corporativo',
      phone: 'Teléfono de contacto (opcional)',
      service: 'Ámbito o servicio principal requerido',
      message: 'Consulta operativa',
      messagePlaceholder: 'Describe tu operación: origen, destino, tipo de mercancía, volumen estimado o trámites aduaneros que necesitas gestionar...',
      privacyNotice: 'He leído y acepto la política de privacidad y entiendo que este formulario forma parte de un prototipo web estudiantil sin validez contractual.',
      submit: 'Enviar Consulta Operativa',
      submitting: 'Procesando consulta...',
      successTitle: 'Consulta operativa registrada correctamente',
      successDesc: 'Hemos asignado tu expediente al departamento correspondiente de Ibáñez Pascual Logístics.',
      anotherQuery: 'Enviar otra consulta',
      callCentral: 'Llamar a la central',
    },
    footer: {
      studentBannerTitle: 'Aviso de Ámbito Estudiantil:',
      studentBannerText: 'Este portal web es una maqueta y prototipo de prueba generado en el ámbito académico para la empresa simulada IP Logístics (Ibáñez Pascual Logístics). No tiene vinculación comercial ni contractual activa.',
      studentTag: 'Entorno Docente 2026',
      corporateDesc: 'Operador logístico integral, transporte internacional multimodal y representación aduanera OEA con hub operativo en la ZAL del Puerto de Barcelona.',
      customsAccreditation: 'Acreditación aduanera:',
      foundation: 'Fundación empresarial: Año',
      navTitle: 'Navegación',
      hubsTitle: 'Terminales Operativas',
      hqTitle: 'Sede Central',
      legalTitle: 'Marco Legal & Normativa',
      legalNotice: 'Aviso Legal',
      privacy: 'Privacidad',
      cookies: 'Cookies',
      rights: 'Todos los derechos reservados.',
      studentFootnote: 'Plataforma web de prueba académica realizada en el ámbito estudiantil.',
      backToTop: 'Arriba',
      translateButton: 'Traducir Web (Idioma)',
      translateSubtitle: 'Selecciona el idioma de navegación de la plataforma',
    },
    modal: {
      chooseLanguage: 'Traducir Plataforma Web',
      languageDesc: 'Selecciona tu idioma de preferencia para navegar por toda la plataforma de IP Logístics.',
      currentActive: 'Idioma activo',
      close: 'Cerrar',
      switchSuccess: 'Idioma actualizado correctamente',
    },
  },
  en: {
    nav: {
      inici: 'Home',
      serveis: 'Services/Catalog',
      quisom: 'About Us',
      blog: 'Blog',
      contacte: 'Contact',
      quoteBtn: 'Request Quote',
      translate: 'Language',
    },
    hero: {
      kicker: 'Ibáñez Pascual Logístics · Foreign Trade & Global Freight · Est. 1998',
      title: 'Global transport and customs solutions for demanding supply chains',
      subtitle: 'We synchronize maritime FCL/LCL, IATA air cargo, and European road transport with AEO-certified customs management and an advanced logistics hub in the Port of Barcelona ZAL.',
      ctaQuote: 'Request Quote',
      ctaServices: 'View Services',
      proof1: 'AEO Customs Clearance < 90 min',
      proof2: 'Barcelona Port ZAL Hub',
      proof3: '24/7 Ocean & Air Freight',
      proof4: 'ISO Certified Logistics Operator',
    },
    services: {
      kicker: 'International Operations Catalog · B2B and E-Commerce Logistics',
      title: 'Integrated freight forwarding, customs and warehousing services',
      subtitle: 'Operational workflows engineered to cut transit times, avoid border inspection bottlenecks and optimize your global import-export supply chain.',
      bannerTitle: 'Need a tailored logistics solution or customs duty consultation?',
      bannerSubtitle: 'Our team of licensed customs brokers and ocean/air freight specialists analyzes your shipment requirements with zero commitment.',
      bannerBtn: 'Speak with a customs broker',
      techSheet: 'Technical specs',
      quote: 'Quote',
      featuresTitle: 'Key capabilities:',
      coverageLabel: 'Coverage:',
      certLabel: 'Certification:',
    },
    calculator: {
      kicker: 'International Freight & Transit Simulator',
      title: 'Calculate your real-time logistics estimate',
      subtitle: 'Configure origin, destination, shipping mode and customs requirements for instant transit days and operational pricing benchmarks.',
      badge: 'Rates benchmarked to AEO status and BCN Port market conditions',
      origin: 'Port or City of Origin',
      destination: 'Port or Hub of Destination',
      modality: 'Transport Mode',
      weight: 'Approximate gross weight',
      volume: 'Approximate volume',
      customsOea: 'Include AEO Customs Clearance',
      customsOeaSub: 'Electronic SAD processing & TARIC classification audit',
      insurance: 'All-Risks Door-to-Door Policy',
      insuranceSub: 'Institute Cargo Clauses (A) London full damage coverage',
      summaryTitle: 'Simulation Summary',
      etaLabel: 'Estimated Transit Time (Port-to-Port / Hub):',
      etaNotice: 'Regular scheduled route subject to weather and customs green/orange/red channels.',
      costLabel: 'Estimated operational cost bracket (freight + clearance):',
      costNotice: 'Estimated price excluding VAT. Includes port handling charges and full brokerage if enabled.',
      routeSelected: 'Selected route:',
      volWeight: 'Volume / Weight:',
      carbon: 'Estimated Carbon Footprint:',
      cta: 'Request Formal Proposal',
      appliedSuccess: 'Data successfully transferred to the contact form below!',
    },
    about: {
      kicker: 'About Us · Ibáñez Pascual Logístics · Operational Rigor & Tradition',
      title: 'Over two decades connecting Mediterranean industry with global markets',
      lead: 'Founded in 1998 by the Ibáñez Pascual family, our company has evolved from a boutique customs agency into a leading full-service 3PL logistics operator.',
      storyTitle: 'Technical excellence, document transparency and regulatory compliance',
      storyP1: 'International trade leaves zero room for error. A misplaced TARIC tariff code or delayed certificate can cause days of container demurrage and storage penalties.',
      storyP2: 'At IP Logístics we combine personalized family-owned service with state-of-the-art EDI connectivity, digital paperless clearance, and 25,000 m² of prime warehousing in Barcelona.',
      oeaSafety: 'AEOF Customs Certification',
      oeaSafetySub: 'Highest EU security and simplified procedures authorization.',
      zalHub: 'Barcelona Port ZAL Hub',
      zalHubSub: 'Immediate connectivity to BEST and APM ocean container terminals.',
      pillar1Title: 'End-to-End Door-to-Door Control',
      pillar1Desc: 'Unified oversight from factory pickup at origin to final delivery at destination warehouse or e-commerce recipient.',
      pillar2Title: 'Licensed Customs Brokers',
      pillar2Desc: 'A certified in-house legal and customs team defending client fiscal and trade interests before authorities.',
      pillar3Title: 'Continuous Compliance & Audit',
      pillar3Desc: 'Comprehensive audit of preferential origins, Free Trade Agreements and packaging standards for zero border infractions.',
      metricsTitle: 'Proven operational commitments and measurable efficiency',
      stat1Label: 'Warehouse space in Barcelona Port ZAL',
      stat2Label: 'Customs entries cleared annually',
      stat3Label: 'Average green channel clearance time',
      stat4Label: 'API real-time milestone traceability',
    },
    blog: {
      kicker: 'Insights & Foreign Trade',
      title: 'Operational analysis, customs regulations and logistics trends',
      subtitle: 'In-depth articles and operational guides authored by our licensed customs brokers and international freight forwarding directors.',
      periodicLabel: 'Periodic publications by Ibáñez Pascual Logístics',
      read: 'Read article',
    },
    contact: {
      kicker: 'Headquarters & Operations · Professional Support',
      title: 'Contact the IP Logístics operations team',
      subtitle: 'Located right in the logistics heartbeat of the Port of Barcelona. Submit your operational inquiry or request ocean freight, air cargo, and customs quotations.',
      officeTitle: 'Corporate Headquarters Information',
      zalTag: 'ZAL Port BCN',
      addressLabel: 'Physical address:',
      phoneLabel: 'Direct phone line:',
      emailLabel: 'Operational email:',
      hoursLabel: 'Operating hours:',
      commitmentTitle: 'Operational SLA Response Commitment',
      commitmentDesc: 'All inquiries received during business days are assigned directly to a customs broker or freight coordinator with a response under 2 business hours.',
      formTitle: 'Operational Inquiry & Quotation Form',
      formSubtitle: 'Marked fields are required to process your shipping request accurately.',
      fullName: 'Full name',
      company: 'Company name',
      email: 'Corporate email',
      phone: 'Phone number (optional)',
      service: 'Primary service or scope required',
      message: 'Operational inquiry details',
      messagePlaceholder: 'Describe your shipment: origin, destination, cargo classification, estimated volume or customs procedures required...',
      privacyNotice: 'I have read and agree to the privacy policy and understand that this form is part of an academic student prototype without commercial validity.',
      submit: 'Submit Operational Inquiry',
      submitting: 'Processing inquiry...',
      successTitle: 'Inquiry registered successfully',
      successDesc: 'Your request reference has been logged and assigned to the relevant department at Ibáñez Pascual Logístics.',
      anotherQuery: 'Send another inquiry',
      callCentral: 'Call headquarters',
    },
    footer: {
      studentBannerTitle: 'Student Academic Notice:',
      studentBannerText: 'This web portal is an educational prototype and design demonstration created for the simulated company IP Logístics (Ibáñez Pascual Logístics). It has no active commercial or binding contractual validity.',
      studentTag: 'Academic Environment 2026',
      corporateDesc: 'Integrated 3PL logistics operator, multimodal international transport, and AEO certified customs brokerage headquartered in the Port of Barcelona ZAL.',
      customsAccreditation: 'Customs Authorization:',
      foundation: 'Established: Year',
      navTitle: 'Navigation',
      hubsTitle: 'Operating Terminals',
      hqTitle: 'Headquarters',
      legalTitle: 'Legal & Regulations',
      legalNotice: 'Avís Legal',
      privacy: 'Privacitat',
      cookies: 'Cookies',
      rights: 'All rights reserved.',
      studentFootnote: 'Academic evaluation web platform built in student educational context.',
      backToTop: 'Top',
      translateButton: 'Translate Web (Language)',
      translateSubtitle: 'Select your preferred browsing language for the platform',
    },
    modal: {
      chooseLanguage: 'Translate Web Platform',
      languageDesc: 'Select your preferred language to browse the IP Logístics website.',
      currentActive: 'Active Language',
      close: 'Close',
      switchSuccess: 'Language updated successfully',
    },
  },
  fr: {
    nav: {
      inici: 'Accueil',
      serveis: 'Services/Catalogue',
      quisom: 'Qui Sommes-Nous',
      blog: 'Blog',
      contacte: 'Contact',
      quoteBtn: 'Demander un Devis',
      translate: 'Langue',
    },
    hero: {
      kicker: 'Ibáñez Pascual Logístics · Commerce Extérieur & Fret Mondial · Fondée en 1998',
      title: 'Solutions globales de transport et dédouanement pour chaînes d\'approvisionnement exigeantes',
      subtitle: 'Nous synchronisons le fret maritime FCL/LCL, aérien IATA et routier européen avec une représentation douanière OEA et un hub logistique moderne à la ZAL Port de Barcelone.',
      ctaQuote: 'Demander un Devis',
      ctaServices: 'Voir Services',
      proof1: 'Dédouanement OEA < 90 min',
      proof2: 'Hub ZAL Port Barcelone',
      proof3: 'Fret Maritime & Aérien 24/7',
      proof4: 'Opérateur Certifié ISO',
    },
    services: {
      kicker: 'Catalogue des Opérations Internationales · Solutions B2B et E-Commerce',
      title: 'Services intégrés de transport, douane et entreposage',
      subtitle: 'Structures opérationnelles conçues pour réduire les délais de transit et optimiser vos flux d\'importation et d\'exportation.',
      bannerTitle: 'Besoin d\'une solution logistique sur mesure ou d\'une étude douanière ?',
      bannerSubtitle: 'Notre équipe de déclarants en douane agréés et spécialistes du fret analyse votre dossier sans engagement.',
      bannerBtn: 'Contacter un déclarant en douane',
      techSheet: 'Fiche technique',
      quote: 'Cotation',
      featuresTitle: 'Capacités clés :',
      coverageLabel: 'Couverture :',
      certLabel: 'Certification :',
    },
    calculator: {
      kicker: 'Simulateur de Fret & Transit International',
      title: 'Calculez votre estimation logistique en temps réel',
      subtitle: 'Configurez l\'origine, la destination, le mode de transport et les besoins douaniers pour obtenir une référence immédiate de coûts et délais.',
      badge: 'Tarifs indexés sur le statut OEA et les conditions du Port de Barcelone',
      origin: 'Port ou Ville d\'Origine',
      destination: 'Port ou Hub de Destination',
      modality: 'Mode de Transport',
      weight: 'Poids brut approximatif',
      volume: 'Volume approximatif',
      customsOea: 'Inclure Dédouanement OEA',
      customsOeaSub: 'Déclaration électronique DAU et contrôle tarifaire TARIC',
      insurance: 'Assurance Tous Risques Porte-à-Porte',
      insuranceSub: 'Couverture Institute Cargo Clauses (A) Londres',
      summaryTitle: 'Résumé de la Simulation',
      etaLabel: 'Délai d\'acheminement estimé (Port-à-Port / Hub) :',
      etaNotice: 'Ligne régulière soumise aux conditions météo et contrôle douanier.',
      costLabel: 'Fourchette estimée du coût opérationnel (fret + douane) :',
      costNotice: 'Tarif indicatif hors TVA. Inclut les frais portuaires et la gestion complète si activée.',
      routeSelected: 'Itinéraire sélectionné :',
      volWeight: 'Volume / Poids :',
      carbon: 'Empreinte carbone estimée :',
      cta: 'Demander une Offre Ferme',
      appliedSuccess: 'Données transférées au formulaire de contact ci-dessous !',
    },
    about: {
      kicker: 'Qui Sommes-Nous · Ibáñez Pascual Logístics · Rigueur & Tradition',
      title: 'Plus de deux décennies reliant les industries méditerranéennes aux marchés mondiaux',
      lead: 'Fondée en 1998 par la famille Ibáñez Pascual, notre entreprise est devenue un opérateur logistique 3PL et douanier de premier plan.',
      storyTitle: 'Excellence technique, transparence documentaire et conformité légale',
      storyP1: 'Le commerce international n\'admet aucune approximation. Une erreur de code TARIC ou un retard documentaire peut entraîner des pénalités de surestaries coûteuses.',
      storyP2: 'Chez IP Logístics, nous allions la proximité d\'une gestion familiale aux technologies EDI les plus performantes et à 25.000 m² d\'entrepôts à la ZAL Port de Barcelone.',
      oeaSafety: 'Certification OEA AEOF',
      oeaSafetySub: 'Statut européen le plus élevé de simplification et sécurité douanière.',
      zalHub: 'Hub ZAL Port Barcelone',
      zalHubSub: 'Accès direct aux terminaux à conteneurs BEST et APM.',
      pillar1Title: 'Contrôle Intégral Porte-à-Porte',
      pillar1Desc: 'Supervision unique de l\'usine d\'origine jusqu\'au client final e-commerce.',
      pillar2Title: 'Déclarants en Douane Agréés',
      pillar2Desc: 'Une équipe spécialisée qui défend les intérêts fiscaux et logistiques de nos clients.',
      pillar3Title: 'Audit & Conformité Continue',
      pillar3Desc: 'Contrôle rigoureux des origines préférentielles et accords de libre-échange.',
      metricsTitle: 'Engagements opérationnels et indicateurs de performance',
      stat1Label: 'Surface d\'entrepôt à la ZAL Port',
      stat2Label: 'Dossiers douaniers traités par an',
      stat3Label: 'Temps moyen de dédouanement (circuit vert)',
      stat4Label: 'Traçabilité digitale en temps réel par API',
    },
    blog: {
      kicker: 'Actualités & Commerce Extérieur',
      title: 'Analyses opérationnelles, réglementation douanière et tendances logistiques',
      subtitle: 'Articles rédigés par nos déclarants en douane et directeurs de fret international.',
      periodicLabel: 'Publications régulières d\'Ibáñez Pascual Logístics',
      read: 'Lire l\'article',
    },
    contact: {
      kicker: 'Siège Social & Opérations · Assistance Professionnelle',
      title: 'Contactez l\'équipe opérationnelle d\'IP Logístics',
      subtitle: 'Situés au cœur logistique du Port de Barcelone. Soumettez votre demande opérationnelle de fret ou de dédouanement.',
      officeTitle: 'Coordonnées du Siège Central',
      zalTag: 'ZAL Port BCN',
      addressLabel: 'Adresse physique :',
      phoneLabel: 'Ligne directe :',
      emailLabel: 'E-mail opérationnel :',
      hoursLabel: 'Heures d\'ouverture :',
      commitmentTitle: 'Engagement de réactivité opérationnelle',
      commitmentDesc: 'Toutes les demandes en jours ouvrés reçoivent une réponse de nos experts en moins de 2 heures.',
      formTitle: 'Formulaire de Demande Opérationnelle & Devis',
      formSubtitle: 'Les champs signalés sont obligatoires pour traiter votre demande.',
      fullName: 'Nom complet',
      company: 'Société',
      email: 'E-mail professionnel',
      phone: 'Téléphone (facultatif)',
      service: 'Service ou besoin principal',
      message: 'Détails de l\'opération',
      messagePlaceholder: 'Décrivez votre expédition : origine, destination, type de marchandise, volume estimé ou formalités douanières requises...',
      privacyNotice: 'J\'ai lu et j\'accepte la politique de confidentialité et je comprends que ce formulaire fait partie d\'un prototype étudiant.',
      submit: 'Envoyer la Demande Opérationnelle',
      submitting: 'Traitement en cours...',
      successTitle: 'Demande enregistrée avec succès',
      successDesc: 'Votre demande a été attribuée au département concerné chez Ibáñez Pascual Logístics.',
      anotherQuery: 'Envoyer une autre demande',
      callCentral: 'Appeler le siège',
    },
    footer: {
      studentBannerTitle: 'Avis du Projet Étudiant :',
      studentBannerText: 'Ce portail web est une maquette et un prototype didactique réalisé dans le cadre académique pour l\'entreprise simulée IP Logístics (Ibáñez Pascual Logístics). Sans valeur commerciale réelle.',
      studentTag: 'Cadre Pédagogique 2026',
      corporateDesc: 'Opérateur logistique 3PL intégral, transport multimodal international et représentation douanière OEA à la ZAL Port de Barcelone.',
      customsAccreditation: 'Accréditation douanière :',
      foundation: 'Fondation : Année',
      navTitle: 'Navigation',
      hubsTitle: 'Terminaux Opérationnels',
      hqTitle: 'Siège Central',
      legalTitle: 'Cadre Légal & Réglementaire',
      legalNotice: 'Avís Legal',
      privacy: 'Privacitat',
      cookies: 'Cookies',
      rights: 'Tous droits réservés.',
      studentFootnote: 'Plateforme web didactique d\'évaluation académique.',
      backToTop: 'Haut',
      translateButton: 'Traduire le Site (Langue)',
      translateSubtitle: 'Choisissez votre langue de navigation sur la plateforme',
    },
    modal: {
      chooseLanguage: 'Traduire la Plateforme Web',
      languageDesc: 'Sélectionnez votre langue de préférence pour naviguer sur le site d\'IP Logístics.',
      currentActive: 'Langue active',
      close: 'Fermer',
      switchSuccess: 'Langue mise à jour avec succès',
    },
  },
  de: {
    nav: {
      inici: 'Startseite',
      serveis: 'Leistungen/Katalog',
      quisom: 'Über Uns',
      blog: 'Blog',
      contacte: 'Kontakt',
      quoteBtn: 'Angebot Anfordern',
      translate: 'Sprache',
    },
    hero: {
      kicker: 'Ibáñez Pascual Logístics · Außenhandel & Internationale Spedition · Gegr. 1998',
      title: 'Globale Transport- und Zolllösungen für anspruchsvolle Lieferketten',
      subtitle: 'Wir synchronisieren Seefracht FCL/LCL, IATA-Luftfracht und europäischen Straßentransport mit AEO-zertifizierter Zollabfertigung und einem modernen Logistik-Hub im Hafen von Barcelona.',
      ctaQuote: 'Angebot Anfordern',
      ctaServices: 'Leistungen Ansehen',
      proof1: 'AEO Zollabfertigung < 90 Min',
      proof2: 'Hub ZAL Hafen Barcelona',
      proof3: '24/7 See- & Luftfracht',
      proof4: 'ISO-Zertifizierter Logistikdienstleister',
    },
    services: {
      kicker: 'Internationaler Leistungskatalog · B2B- & E-Commerce-Logistik',
      title: 'Integrierte Transport-, Zoll- und Lagerhaltungsdienste',
      subtitle: 'Optimierte Prozesse zur Reduzierung von Transitzeiten und reibungslosen Im- und Exportströmen.',
      bannerTitle: 'Benötigen Sie eine maßgeschneiderte Logistiklösung oder Zollberatung?',
      bannerSubtitle: 'Unser Team aus zugelassenen Zollagenten und Speditionsexperten berät Sie unverbindlich.',
      bannerBtn: 'Zollexperten kontaktieren',
      techSheet: 'Datenblatt',
      quote: 'Preisanfrage',
      featuresTitle: 'Kernkompetenzen:',
      coverageLabel: 'Reichweite:',
      certLabel: 'Zertifizierung:',
    },
    calculator: {
      kicker: 'Internationaler Fracht- & Laufzeit-Rechner',
      title: 'Berechnen Sie Ihre Frachtkalkulation in Echtzeit',
      subtitle: 'Wählen Sie Herkunft, Zielort, Transportart und Zollanforderungen für sofortige Laufzeiten und Richtpreise.',
      badge: 'Indexiert nach AEO-Status und Marktpreisen im Hafen Barcelona',
      origin: 'Abgangshafen oder Stadt',
      destination: 'Zielhafen oder Logistik-Hub',
      modality: 'Transportmodus',
      weight: 'Bruttogewicht ca.',
      volume: 'Volumen ca.',
      customsOea: 'Inklusive AEO-Zollabfertigung',
      customsOeaSub: 'Elektronische Abfertigung & TARIC-Tarifeinstufung',
      insurance: 'All-Risks Haus-zu-Haus Versicherung',
      insuranceSub: 'Institute Cargo Clauses (A) London Deckung',
      summaryTitle: 'Kalkulationsübersicht',
      etaLabel: 'Voraussichtliche Laufzeit (Port-to-Port / Hub):',
      etaNotice: 'Reguläre Route vorbehaltlich Witterung und behördlicher Zollkanäle.',
      costLabel: 'Geschätzte operative Kostenbandbreite (Fracht + Zoll):',
      costNotice: 'Richtpreis zzgl. MwSt. Inklusive Hafengebühren und Komplettabfertigung falls aktiviert.',
      routeSelected: 'Gewählte Route:',
      volWeight: 'Volumen / Gewicht:',
      carbon: 'Geschätzter CO₂-Fußabdruck:',
      cta: 'Verbindliches Angebot anfragen',
      appliedSuccess: 'Daten wurden in das Kontaktformular unten übertragen!',
    },
    about: {
      kicker: 'Über Uns · Ibáñez Pascual Logístics · Tradition & Präzision',
      title: 'Über zwei Jahrzehnte Verbindung zwischen Industrie und globalen Märkten',
      lead: 'Gegründet 1998 von der Familie Ibáñez Pascual, haben wir uns von einer spezialisierten Zollagentur zu einem führenden 3PL-Logistikdienstleister entwickelt.',
      storyTitle: 'Technische Exzellenz, Dokumententransparenz und Rechtssicherheit',
      storyP1: 'Außenhandel erlaubt keine Improvisation. Ein TARIC-Klassifizierungsfehler oder Verzögerungen können kostspielige Liegegelder verursachen.',
      storyP2: 'Bei IP Logístics verbinden wir familiäre Kundennähe mit modernster EDI-Zollanbindung und 25.000 m² Lagerfläche in Barcelona.',
      oeaSafety: 'AEOF-Zollzertifizierung',
      oeaSafetySub: 'Höchster Sicherheits- und Vereinfachungsstatus der EU.',
      zalHub: 'Hub ZAL Hafen Barcelona',
      zalHubSub: 'Direkte Anbindung an Containerterminals BEST und APM.',
      pillar1Title: 'Door-to-Door Gesamtkontrolle',
      pillar1Desc: 'Durchgängige Überwachung ab Verladewerk bis zum Endkunden.',
      pillar2Title: 'Zugelassene Zollspediteure',
      pillar2Desc: 'Ein erfahrenes Team vertritt Ihre steuerlichen und zollrechtlichen Interessen.',
      pillar3Title: 'Kontinuierliche Compliance-Prüfung',
      pillar3Desc: 'Gründliche Prüfung von Präferenzursprüngen und Freihandelsabkommen.',
      metricsTitle: 'Operative Kennzahlen und Leistungsmetriken',
      stat1Label: 'Lagerfläche in der ZAL Port Barcelona',
      stat2Label: 'Jährlich abgewickelte Zollakten',
      stat3Label: 'Durchschnittliche Freigabezeit im Grünkanal',
      stat4Label: 'Echtzeit-Sendungsverfolgung per API',
    },
    blog: {
      kicker: 'Aktuelles & Außenhandel',
      title: 'Operative Analysen, Zollvorschriften und Logistiktrends',
      subtitle: 'Fachbeiträge und Praxisleitfäden unserer Zollexperten und Speditionsleiter.',
      periodicLabel: 'Regelmäßige Veröffentlichungen von Ibáñez Pascual Logístics',
      read: 'Artikel lesen',
    },
    contact: {
      kicker: 'Zentrale & Betrieb · Professionelle Beratung',
      title: 'Kontaktieren Sie das Operationsteam von IP Logístics',
      subtitle: 'Sie finden uns im Herzen des Hafens von Barcelona. Senden Sie uns Ihre Fracht- oder Zollanfrage.',
      officeTitle: 'Daten der Hauptniederlassung',
      zalTag: 'ZAL Port BCN',
      addressLabel: 'Standortadresse:',
      phoneLabel: 'Telefon direkt:',
      emailLabel: 'Operative E-Mail:',
      hoursLabel: 'Servicezeiten:',
      commitmentTitle: 'Reaktionsgarantie für Geschäftskunden',
      commitmentDesc: 'Werktags eingehende Anfragen werden innerhalb von weniger als 2 Arbeitsstunden direkt bearbeitet.',
      formTitle: 'Frachtanfrage & Kontaktformular',
      formSubtitle: 'Pflichtfelder sind gekennzeichnet.',
      fullName: 'Vollständiger Name',
      company: 'Firma',
      email: 'Geschäftliche E-Mail',
      phone: 'Telefonnummer (optional)',
      service: 'Gewünschter Leistungsbereich',
      message: 'Details zur Frachtanfrage',
      messagePlaceholder: 'Beschreiben Sie Ihre Sendung: Herkunft, Zielort, Warenart, Volumen oder Zollanforderungen...',
      privacyNotice: 'Ich habe die Datenschutzerklärung gelesen und nehme zur Kenntnis, dass dies ein didaktischer Prototyp ist.',
      submit: 'Anfrage Absenden',
      submitting: 'Wird übermittelt...',
      successTitle: 'Anfrage erfolgreich registriert',
      successDesc: 'Ihre Anfrage wurde der zuständigen Abteilung von Ibáñez Pascual Logístics zugewiesen.',
      anotherQuery: 'Weitere Anfrage senden',
      callCentral: 'Zentrale anrufen',
    },
    footer: {
      studentBannerTitle: 'Hinweis zum Studienprojekt:',
      studentBannerText: 'Dieses Webportal ist ein didaktischer Prototyp im Rahmen eines Hochschulprojekts für die simulierte Firma IP Logístics (Ibáñez Pascual Logístics). Ohne reale geschäftliche Verbindlichkeit.',
      studentTag: 'Lehrumgebung 2026',
      corporateDesc: 'Ganzheitlicher 3PL-Logistikdienstleister, internationaler Multimodaltransport und AEO-Zollvertretung in der ZAL Port Barcelona.',
      customsAccreditation: 'Zollakkreditierung:',
      foundation: 'Unternehmensgründung: Jahr',
      navTitle: 'Navigation',
      hubsTitle: 'Terminals & Hubs',
      hqTitle: 'Hauptsitz',
      legalTitle: 'Rechtliches & Richtlinien',
      legalNotice: 'Avís Legal',
      privacy: 'Privacitat',
      cookies: 'Cookies',
      rights: 'Alle Rechte vorbehalten.',
      studentFootnote: 'Akademische Demonstrationsplattform im Bildungsbereich.',
      backToTop: 'Nach oben',
      translateButton: 'Website Übersetzen (Sprache)',
      translateSubtitle: 'Wählen Sie Ihre bevorzugte Sprache für die Plattform',
    },
    modal: {
      chooseLanguage: 'Plattform Übersetzen',
      languageDesc: 'Wählen Sie die gewünschte Sprache für die Website von IP Logístics.',
      currentActive: 'Aktive Sprache',
      close: 'Schließen',
      switchSuccess: 'Sprache erfolgreich umgestellt',
    },
  },
  zh: {
    nav: {
      inici: '首页',
      serveis: '服务/目录',
      quisom: '关于我们',
      blog: '资讯',
      contacte: '联系我们',
      quoteBtn: '索取报价',
      translate: '语言',
    },
    hero: {
      kicker: 'Ibáñez Pascual Logístics · 国际物流与外贸 · 始于1998',
      title: '为严谨供应链量身定制的全球运输与清关解决方案',
      subtitle: '我们整合海运集装箱FCL/拼箱LCL、IATA空运及欧洲陆运，拥有欧盟AEO高级认证报关资质，并在巴塞罗那港ZAL设有先进智能仓储中心。',
      ctaQuote: '索取报价',
      ctaServices: '浏览服务',
      proof1: 'AEO绿色通道清关 < 90分钟',
      proof2: '巴塞罗那港ZAL枢纽',
      proof3: '海运与空运24/7全天候运营',
      proof4: 'ISO认证综合物流运营商',
    },
    services: {
      kicker: '国际业务目录 · B2B与跨境电商综合方案',
      title: '海陆空运输、报关与仓储一站式综合服务',
      subtitle: '精益化运作流程，缩短航程时间，避免口岸查验延误，优化您的进出口货物流动。',
      bannerTitle: '需要量身定制的物流方案或关税咨询吗？',
      bannerSubtitle: '我们的资深报关专员与海运空运专家随时为您评估方案，无任何附加约束。',
      bannerBtn: '咨询专业报关员',
      techSheet: '技术规格',
      quote: '即时报价',
      featuresTitle: '核心能力优势：',
      coverageLabel: '覆盖航线：',
      certLabel: '资质认证：',
    },
    calculator: {
      kicker: '国际运费与航程测算模拟器',
      title: '实时测算您的国际物流预算与时效',
      subtitle: '自由配置起运港、目的港、运输方式及报关选项，即时获取航程天数与操作成本参考。',
      badge: '基于AEO海关优惠及巴塞罗那港市场现行运价',
      origin: '起运港或城市',
      destination: '目的港或物流枢纽',
      modality: '运输方式',
      weight: '预计毛重',
      volume: '预计体积',
      customsOea: '包含欧盟AEO专业清关',
      customsOeaSub: '电子单证DUA报关与TARIC税则审核',
      insurance: '门到门一切险（All-Risks）',
      insuranceSub: '伦敦协会货物保险A条款全面保障',
      summaryTitle: '测算结果摘要',
      etaLabel: '预计在途时间 (港到港/枢纽)：',
      etaNotice: '常规航线受气候及海关通道查验影响。',
      costLabel: '预计综合操作费用区间 (运费+关务)：',
      costNotice: '不含增值税。已包含港口杂费及选中服务。',
      routeSelected: '选定路线：',
      volWeight: '体积 / 重量：',
      carbon: '预计碳排放量：',
      cta: '索取正式商业要约',
      appliedSuccess: '数据已自动同步至下方咨询表单！',
    },
    about: {
      kicker: '关于我们 · 传承与专业严谨',
      title: '二十余载专注连接欧洲与全球商贸市场',
      lead: '由Ibáñez Pascual家族于1998年创立，已从专业报关行发展成为地中海领先的3PL综合供应链物流巨头。',
      storyTitle: '专业技术、单证透明与法律安全合规',
      storyP1: '国际外贸绝无侥幸。税则代码申报错误或单证延误可能导致昂贵的集装箱滞港超期费用。',
      storyP2: '在IP Logístics，我们将家族企业的精细服务与先进EDI海关系统对接相结合，在巴塞罗那港ZAL拥有25,000平米现代化仓库。',
      oeaSafety: '欧盟AEOF认证企业',
      oeaSafetySub: '欧盟海关安全与简化流程最高信誉资质。',
      zalHub: '巴塞罗那港ZAL物流中心',
      zalHubSub: '无缝连接BEST和APM集装箱码头。',
      pillar1Title: '门到门全程端到端管控',
      pillar1Desc: '从海外工厂提货直到最终派送目的仓或电商消费者，全程监控。',
      pillar2Title: '持牌报关师团队',
      pillar2Desc: '高素质专业团队代表客户维护税务与合法关税权益。',
      pillar3Title: '合规审计与原产地核查',
      pillar3Desc: '严谨审核优惠原产地证明与自贸协定，规避行政处罚风险。',
      metricsTitle: '卓越运营效率与量化指标',
      stat1Label: '巴塞罗那港ZAL仓储面积',
      stat2Label: '年均报关清关单量',
      stat3Label: '绿色通道平均放行时间',
      stat4Label: 'API接口数字化节点实时追踪',
    },
    blog: {
      kicker: '行业动态与外贸前沿',
      title: '实务解析、海关政策与前沿物流趋势',
      subtitle: '由持牌报关专员和国际货运主管精心编撰的实战指南。',
      periodicLabel: 'IP Logístics官方定期发布',
      read: '阅读全文',
    },
    contact: {
      kicker: '总部与操作中心 · 竭诚为您服务',
      title: '联络IP Logístics运营团队',
      subtitle: '位于巴塞罗那港核心物流区。随时提交您的操作咨询或索取海空运与仓储报价。',
      officeTitle: '总部核心信息',
      zalTag: 'ZAL Port BCN',
      addressLabel: '办公地址：',
      phoneLabel: '直线电话：',
      emailLabel: '业务邮箱：',
      hoursLabel: '工作时间：',
      commitmentTitle: '高标准服务响应承诺',
      commitmentDesc: '工作日收到的所有咨询均直接分配给专业报关师或调度专员，2个工作小时内迅速答复。',
      formTitle: '业务咨询与运费报价单',
      formSubtitle: '标有星号的项目为处理业务所必需。',
      fullName: '联系人姓名',
      company: '企业名称',
      email: '企业邮箱',
      phone: '联系电话 (选填)',
      service: '所需核心服务板块',
      message: '业务咨询详情',
      messagePlaceholder: '请描述您的货物情况：起运地、目的地、品名、体积或特殊清关需求...',
      privacyNotice: '本人已阅读并同意隐私政策，知晓本网站为学术演示系统，无商业契约效力。',
      submit: '提交业务咨询',
      submitting: '正在提交...',
      successTitle: '您的咨询已成功受理登记',
      successDesc: '专属查询编号已生成，已分配至相关业务部门。',
      anotherQuery: '提交其他咨询',
      callCentral: '致电总部',
    },
    footer: {
      studentBannerTitle: '学生学术项目声明：',
      studentBannerText: '本网站为学术模拟演示原型，专为虚拟企业IP Logístics（Ibáñez Pascual Logístics）设计，无实际商业或法律合同效力。',
      studentTag: '教学演示系统 2026',
      corporateDesc: '集国际多式联运、AEO高级报关及巴塞罗那港仓储于一体的综合3PL物流运营商。',
      customsAccreditation: '海关资质：',
      foundation: '创立年份：',
      navTitle: '页面导航',
      hubsTitle: '口岸枢纽',
      hqTitle: '总部中心',
      legalTitle: '法律法规',
      legalNotice: 'Avís Legal',
      privacy: 'Privacitat',
      cookies: 'Cookies',
      rights: '版权所有 · 保留所有权利。',
      studentFootnote: '本平台为高校教育学术实践原型。',
      backToTop: '回到顶部',
      translateButton: '翻译网页 (多语言)',
      translateSubtitle: '选择您浏览本平台的首选语言',
    },
    modal: {
      chooseLanguage: '选择网页语言',
      languageDesc: '请选择您浏览IP Logístics平台界面的语言版本。',
      currentActive: '当前语言',
      close: '关闭',
      switchSuccess: '语言设置已更新',
    },
  },
};
