import { LogisticsService, BlogPost } from '../types/logistics';

export const COMPANY_INFO = {
  brandName: 'IP Logístics',
  fullName: 'Ibáñez Pascual Logístics & Comerç Exterior S.L.',
  shortDescription: 'Operador logístic integral, transport internacional multimodal i representació duanera OEA.',
  address: 'Av. Ports d\'Europa, 100 - Edifici ZAL Port (Zona d\'Activitats Logístiques)',
  city: '08040 Barcelona, Catalunya, Espanya',
  phone: '+34 93 479 80 00',
  fax: '+34 93 479 80 01',
  email: 'operacions@iplogistics.cat',
  commercialEmail: 'comercial@iplogistics.cat',
  hours: 'Dilluns a Divendres: 08:00h - 19:00h (Urgències operatives duaneres 24/7)',
  foundationYear: '1998',
  oeacert: 'ESAEOF2014000389 (Operador Econòmic Autoritzat Simplificació i Seguretat)',
  studentDisclaimer: 'Aquest portal web corporatiu és un prototip didàctic desenvolupat exclusivament en un entorn d\'aprenentatge estudiantil. Totes les dades empresarials, formularis i serveis tenen finalitat acadèmica sense vinculació mercantil real.',
};

export const SERVICES_CATALOG: LogisticsService[] = [
  {
    id: 'transport-multimodal',
    title: 'Transport Multimodal & Fret Internacional',
    subtitle: 'Connexió global per mar, aire i terra amb visibilitat total en temps real',
    category: 'Fret Internacional',
    image: '/images/service_freight_transport_1793205615212.jpg',
    description: 'Gestió integral de càrrega marítima FCL (contenidor complet) i LCL (grupatege consol·lidat propi), enviaments aeris urgents IATA i transport terrestre europeu amb càrrega completa (FTL) o fraccionada (LTL).',
    keyFeatures: [
      'Aliances estratègiques amb les principals navilieres i aerolínies globals',
      'Plataforma digital de seguiment GPS i fites de transport mil·limètriques',
      'Especialització en mercaderies industrials, béns de consum i càrrega refrigerada',
      'Pòlisses d\'assegurança de mercaderies tot risc door-to-door'
    ],
    specifications: [
      { label: 'Modalitats marítimes', value: 'FCL (20\', 40\', High Cube) & LCL consol·lidat propi' },
      { label: 'Càrrega aèria', value: 'IATA Agent directe, servei charter & express regular' },
      { label: 'Transport terrestre', value: 'Flota europea amb certificació ADR i temperatura controlada' },
      { label: 'Temps de trànsit mitjà Àsia-BCN', value: '26 - 32 dies marítim / 3 - 5 dies aeri' }
    ],
    routesCoverage: 'Rutes directes amb Àsia-Pacífic, Amèrica del Nord, Amèrica Llatina i distribució capil·lar a tota la Unió Europea.',
    certifications: 'IATA Cargo Agent, FIATA Member, Certificació ISO 9001:2015',
    idealFor: 'Empreses exportadores i importadores que requereixen fiabilitat d\'horaris, control de costos i gestió unificada d\'origen a destí.'
  },
  {
    id: 'comerc-exterior-duanes',
    title: 'Comerç Exterior & Gestió Duanera Integral',
    subtitle: 'Representació duanera certificada OEA i optimització aranzelària',
    category: 'Duanes & Consultoria',
    image: '/images/service_customs_clearance_real.jpg',
    description: 'Despatx d\'importació i exportació amb autorització d\'Operador Econòmic Autoritzat (OEA). Assessorament expert en classificació aranzelària TARIC, inspeccions en frontera i dipòsits duaners per a la suspensió d\'IVA i aranzels.',
    keyFeatures: [
      'Despatx telemàtic d\'importació i exportació en menys de 90 minuts (circuit verd)',
      'Gestió de Dipòsit Franc, Dipòsit Duaner (DA) i Dipòsit Distint del Duaner (DDA)',
      'Tramitació d\'inspeccions para-duaneres: SOIVRE, Sanitat Exterior, Fitosanitari i Veterinària',
      'Assessorament en acords de lliure comerç, orígens i clàusules Incoterms 2020'
    ],
    specifications: [
      { label: 'Acreditació duanera', value: 'OEA Complet (Simplificació duanera + Seguretat)' },
      { label: 'Connexió EDI', value: 'Interfície directa amb l\'Agència Tributària i VUE' },
      { label: 'Estalvi financer', value: 'Diferiment de l\'IVA a la importació i suspensió d\'aranzels en dipòsit' },
      { label: 'Rigor documental', value: 'Auditoria prèvia de factures comercials, EUR.1 i llistes de contingut' }
    ],
    routesCoverage: 'Operativa a tots els ports i aeroports de l\'Estat espanyol (Barcelona, València, Madrid Barajas, Algesires, Bilbao).',
    certifications: 'OEA AEOF, Col·legi Oficial d\'Agents de Duanes',
    idealFor: 'Pimes i grans companyies que busquen agilitzar el pas fronterer, evitar demores portuàries i minimitzar riscos fiscals.'
  },
  {
    id: 'magatzematge-ecommerce',
    title: 'Magatzematge Avançat, Cross-Docking & E-Commerce',
    subtitle: 'Fulfillment B2B/B2C, control d\'inventari intel·ligent i logística d\'última milla',
    category: 'Logística & Magatzem',
    image: '/images/service_smart_warehouse_1793205615164.jpg',
    description: 'Instal·lacions d\'alta capacitat situades a la ZAL del Port de Barcelona. Serveis de recepció, custòdia paletitzada, picking robotitzat, manipulació d\'etiquetatge comercial i integració directa amb botigues d\'e-commerce.',
    keyFeatures: [
      'Gestió d\'inventari mitjançant WMS propi accessible 24/7 pel client per API o portal',
      'Operativa de Cross-docking immediat per reduir temps de retenció i costos de custòdia',
      'Preparació de comandes e-commerce (Pick & Pack) amb packaging corporatiu i insercions',
      'Logística inversa i gestió integral de devolucions amb control de qualitat'
    ],
    specifications: [
      { label: 'Superfície logística', value: '25.000 m² a la ZAL Port BCN amb alçada lliure de 13,5 m' },
      { label: 'Capacitat d\'estoc', value: 'Més de 38.000 palets europeus en estanteries sísmiques' },
      { label: 'Sistemes tecnològics', value: 'Traçabilitat per codi de barres 2D / RFID i integració ERP' },
      { label: 'Seguretat de la càrrega', value: 'Vigilància 24/7 CCTV, control d\'accés biomètric i PCI nivell màxim' }
    ],
    routesCoverage: 'Hub central a Barcelona amb connectivitat directa a l\'AP-7, A-2 i accessos ferroviaris i portuaris.',
    certifications: 'Certificació TAPA (Transported Asset Protection Association), ISO 14001',
    idealFor: 'Marques de comerç electrònic, distribuïdors industrials i retailers amb alta rotació d\'estocs o enviaments omnicanal.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'incoterms-rutes-maritimes-2026',
    title: 'Claus de resiliència en les rutes marítimes globals i gestió d\'Incoterms',
    summary: 'Com afrontar la volatilitat del fret marítim i protegir el marge comercial mitjançant una elecció acurada d\'Incoterms (DAP vs CIF) i rutes alternatives.',
    category: 'Comerç Exterior',
    date: '24 d\'octubre de 2026',
    readTime: '5 min de lectura',
    author: 'Jordi Ibáñez',
    authorRole: 'Director d\'Operacions Internacionals',
    content: [
      'En l\'escenari geopolític i logístic actual, les empreses no poden dependre exclusivament de contractes spots ni d\'estimacions tradicionals de trànsit. La congestió puntual en punts neuràlgics com l\'estret de Malaca o les restriccions als canals interoceànics requereix una planificació predictiva de les cadenes de subministrament.',
      'Un dels errors més comuns en les operacions d\'importació és recórrer sistemàticament al terme CIF (Cost, Insurance and Freight) contractat pel proveïdor d\'origen. Això sovint amaga sobrecostos portuaris en destinació ("gastos de llegada") que desvirtuen el cost real de la mercaderia.',
      'A IP Logístics recomanem la negociació en termes FCA o FOB, fet que atorga a la companyia compradora el control directe sobre la naviliera, els temps de trànsit i, molt especialment, la lliure designació de l\'agent de duanes de confiança a ports com Barcelona o València.'
    ]
  },
  {
    id: 'avantatges-oea-duanes',
    title: 'Com reduir fins a un 40% el temps de despatx duaner gràcies a l\'estatus OEA',
    summary: 'La certificació d\'Operador Econòmic Autoritzat com a eina competitiva: menor nombre de circuits vermells, prioritat d\'inspecció i diferiment fiscal.',
    category: 'Legislació Duanera',
    date: '12 d\'octubre de 2026',
    readTime: '4 min de lectura',
    author: 'Montserrat Pascual',
    authorRole: 'Cap del Departament de Duanes i Assumptes Reguladors',
    content: [
      'L\'estatus d\'Operador Econòmic Autoritzat (OEA) atorgat per l\'Agència Tributària no és només un segell de prestigi: és una palanca operativa directa per a les companyies compromeses amb la continuïtat de negoci.',
      'Treballar amb un representant duaner amb certificació OEA Full (AEOF) significa gaudir de circuits verds amb despatx automàtic en un percentatge superior al 95% de les declaracions DUA, reduint dràsticament la probabilitat d\'aturades per circuit taronja (revisió documental) o circuit vermell (reconeixement físic).',
      'A més, la possibilitat de vincular les operacions a dipòsits duaners autoritzats permet ajornar la liquidació de l\'IVA d\'importació i els aranzels fins al moment exacte en què la mercaderia es ven o es distribueix en territori comunitari, alliberant liquiditat clau per al balanç financer.'
    ]
  },
  {
    id: 'logistica-ecommerce-b2b-fulfillment',
    title: 'Fulfillment transfronterer: Com unificar la logística de canal físic i botiga online',
    summary: 'Estratègies d\'emmagatzematge intel·ligent a la ZAL del Port de Barcelona per gestionar comandes B2B per a distribuïdors i paquets B2C d\'e-commerce sota el mateix estoc.',
    category: 'E-Commerce & Tecnologia',
    date: '28 de setembre de 2026',
    readTime: '6 min de lectura',
    author: 'Marc Ibáñez Pascual',
    authorRole: 'Responsable de Logística Digital i Sistemes WMS',
    content: [
      'La fragmentació de canals sovint condueix a duplicitats costoses d\'inventari: un estoc reservat per a comandes a gran escala per a botigues físiques i un altre estoc apartat per al canal de venda directa online.',
      'Mitjançant la implementació de sistemes de gestió de magatzems (WMS) d\'última generació connectats en temps real per API amb plataformes com Shopify Plus, WooCommerce o Magento, a IP Logístics fem possible la gestió unificada d\'inventaris omnicanal.',
      'Aquesta concentració a la ZAL Port permet consolidar càrregues internacionals procedents de terminals marítimes immediates, realitzar el control de qualitat i posar els productes a disposició dels compradors europeus en terminis de 24 a 48 hores.'
    ]
  }
];

export const LEGAL_TEXTS = {
  'avis-legal': {
    title: 'Avís Legal i Condicions Generals d\'Ús',
    updatedAt: 'Octubre 2026',
    sections: [
      {
        heading: '1. Dades identificatives del titular',
        text: 'En compliment del deure d\'informació estipulat a la Llei 34/2002, d\'11 de juliol, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE), s\'informa que aquest espai web és gestionat de manera simulada sota la denominació fictícia d\'Ibáñez Pascual Logístics S.L. (IP Logístics), amb domicili social simulat a Av. Ports d\'Europa 100, 08040 Barcelona.'
      },
      {
        heading: '2. Declaració explícita d\'àmbit estudiantil i acadèmic',
        text: 'AQUESTA WEB ÉS UN PROJECTE SIMULAT D\'ÀMBIT ESTUDIANTIL. No constitueix una oferta comercial vinculant ni una societat mercantil activa. Els noms corporatius, logotips, tarifes, formularis i serveis descrits es presenten exclusivament amb finalitats formatives, docents i d\'avaluació tècnica frontend.'
      },
      {
        heading: '3. Propietat intel·lectual i industrial',
        text: 'El disseny de la interfície, el codi font desenvolupat en React i Tailwind CSS, així com la composició visual han estat generats per a fins d\'estudi i pràctica de disseny web modern responsive.'
      }
    ]
  },
  'privacitat': {
    title: 'Política de Privacitat i Protecció de Dades',
    updatedAt: 'Octubre 2026',
    sections: [
      {
        heading: '1. Responsable del tractament fictici',
        text: 'En el marc d\'aquesta simulació docent, el suposat responsable del tractament és IP Logístics (Ibáñez Pascual Logístics). En tractar-se d\'un prototip estudiantil, les dades introduïdes al formulari de contacte es processen exclusivament en memòria local del navegador i no es transfereixen a cap base de dades comercial ni a tercers.'
      },
      {
        heading: '2. Finalitat de les dades del formulari',
        text: 'Els camps com nom, empresa, correu electrònic i consulta operativa s\'utilitzen únicament per demostrar la funcionalitat de validació frontend i la generació de rebuts de confirmació a la interfície d\'usuari.'
      },
      {
        heading: '3. Drets de l\'usuari (ARCO / RGPD)',
        text: 'Com que no s\'emmagatzemen dades reals en servidors de producció, no hi ha cap fitxer de dades personals subjecte a custòdia. Qualsevol qüestió pot dirigir-se a l\'entorn docent corresponent.'
      }
    ]
  },
  'cookies': {
    title: 'Política de Cookies i Tecnologies d\'Emmagatzematge',
    updatedAt: 'Octubre 2026',
    sections: [
      {
        heading: '1. Què són les cookies?',
        text: 'Una cookie és un petit fitxer de text que s\'emmagatzema al navegador en visitar determinades pàgines web per recordar preferències de navegació o sessió.'
      },
      {
        heading: '2. Ús en aquest lloc web de prova',
        text: 'Aquest lloc web estudiantil utilitza únicament emmagatzematge tècnic i d\'estat d\'aplicació (React state / localStorage de simulació) imprescindible per a la navegació fluida, com ara recordar filtres seleccionats o el tancament de notificacions. No s\'utilitzen cookies de seguiment publicitari de tercers ni eines intrusives de traçabilitat.'
      }
    ]
  }
};
