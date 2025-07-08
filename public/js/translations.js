const lang = new URLSearchParams(window.location.search).get("lang") || "en";
const phrases = {
  es: {
    title: "Gemas, Inversiones y Comercio Global",
    subtitle:
      "En COMEX WORLD nos especializamos en esmeraldas certificadas, oportunidades de inversión estratégica y soluciones en comercio exterior. Descubrí cómo COMEX WORLD conecta valor con visión internacional.",
    hero1: "Simplicidad con Propósito.\nTransformamos Ideas en Soluciones.",
    hero2: "Acceda a mercados y oportunidades globales con COMEX WORLD.",
    area_emeralds_title: "Esmeraldas Certificadas de Origen Auténtico",
    area_emeralds_desc:
      "Conectamos compradores internacionales con esmeraldas de alta calidad, certificadas por laboratorios gemológicos reconocidos. Ofrecemos transparencia, trazabilidad y asesoramiento experto en la adquisición y comercialización de gemas de inversión.",
    area_investment_title: "Inversiones Estratégicas y Bilaterales",
    area_investment_desc:
      "Asesoramos y gestionamos oportunidades de inversión local e internacional con foco en sectores de alto rendimiento. Facilitamos alianzas bilaterales entre empresas, gobiernos e inversores.",
    area_trade_title: "Soluciones Integrales en Comercio Internacional",
    area_trade_desc:
      "Facilitamos exportación e importación de bienes estratégicos. Brindamos soporte logístico, regulatorio y comercial para conectar productos con mercados globales.",
    services_title: "Áreas de Especialización",
    services_description:
      "COMEX WORLD transforma conocimiento en acción, a través de servicios claros y especializados en gemología, inversiones y comercio exterior.",
    feat1: "Esmeraldas Certificadas",
    feat1_desc:
      "Acceda a gemas auténticas y certificadas con trazabilidad garantizada. Consulte con nuestros expertos.",
    feat2: "Gestión de Inversiones Estratégicas",
    feat2_desc:
      "Detectamos oportunidades de alto valor y creamos alianzas rentables. Hablemos de su próximo proyecto.",
    feat3: "Comercio Exterior Eficiente",
    feat3_desc:
      "Conectamos productos con mercados globales mediante soluciones ágiles y seguras. Contáctenos hoy.",
    contacto_title: "Contacto",
    nav_home: "Inicio",
    nav_comex: "Comex",
    nav_services: "Servicios",
    nav_contact: "Contacto",
    nav_language: "Idioma",
  },

  en: {
    title: "Gemstones, Investments & Global Trade",
    subtitle:
      "At COMEX WORLD we specialize in certified emeralds, strategic investment opportunities, and international trade solutions. See how COMEX WORLD turns value into global vision.",
    hero1: "Simplicity with Purpose.\nWe Turn Ideas into Solutions.",
    hero2: "Unlock new markets and global connections with COMEX WORLD.",
    area_emeralds_title: "Certified Emeralds from Authentic Origins",
    area_emeralds_desc:
      "We connect international buyers with high-quality emeralds, certified by recognized gemological labs. We offer transparency, traceability, and expert advice for investment-grade gemstones.",
    area_investment_title: "Strategic and Bilateral Investments",
    area_investment_desc:
      "We advise and manage local and international investment opportunities focused on high-performing sectors. We enable bilateral partnerships among companies, governments, and investors.",
    area_trade_title: "Comprehensive International Trade Solutions",
    area_trade_desc:
      "We facilitate the export and import of strategic goods. Our services include logistics, regulatory, and commercial support to connect products with global markets.",
    services_title: "Areas of Expertise",
    services_description:
      "COMEX WORLD turns knowledge into action through focused services in gemology, strategic investments, and global trade.",
    feat1: "Certified Emeralds",
    feat1_desc:
      "Access authentic, certified gems with full traceability. Speak with our experts today.",
    feat2: "Strategic Investment Management",
    feat2_desc:
      "We identify high-value opportunities and build profitable alliances. Let’s discuss your project.",
    feat3: "Efficient Global Trade",
    feat3_desc:
      "We connect products with global markets through agile and secure solutions. Contact us now.",
    contacto_title: "Contact",
    nav_home: "Home",
    nav_comex: "Comex",
    nav_services: "Services",
    nav_contact: "Contact",
    nav_language: "Language",
  },

  de: {
    title: "Edelsteine, Investitionen & Welthandel",
    subtitle:
      "COMEX WORLD ist spezialisiert auf zertifizierte Smaragde, strategische Investitionsmöglichkeiten und Lösungen im internationalen Handel. COMEX WORLD verbindet Wert mit globaler Vision.",
    hero1: "Zweckmäßige Einfachheit.\nWir verwandeln Ideen in Lösungen.",
    hero2:
      "Erschließen Sie neue Märkte und globale Verbindungen mit COMEX WORLD.",
    area_emeralds_title: "Zertifizierte Smaragde mit authentischem Ursprung",
    area_emeralds_desc:
      "Wir verbinden internationale Käufer mit hochwertigen Smaragden, zertifiziert von anerkannten gemmologischen Laboren. Wir bieten Transparenz, Rückverfolgbarkeit und fachkundige Beratung für Investitionsedelsteine.",
    area_investment_title: "Strategische und bilaterale Investitionen",
    area_investment_desc:
      "Wir beraten und verwalten lokale und internationale Investitionsmöglichkeiten mit Fokus auf leistungsstarke Sektoren. Wir ermöglichen bilaterale Partnerschaften zwischen Unternehmen, Regierungen und Investoren.",
    area_trade_title: "Umfassende Lösungen für den Außenhandel",
    area_trade_desc:
      "Wir erleichtern den Export und Import strategischer Güter. Unsere Dienstleistungen umfassen logistische, regulatorische und kommerzielle Unterstützung zur Verbindung von Produkten mit globalen Märkten.",
    services_title: "Fachgebiete",
    services_description:
      "COMEX WORLD Wissen in Handlung umsetzt – mit spezialisierten Leistungen in Edelsteinkunde, Investitionen und Außenhandel.",
    feat1: "Zertifizierte Smaragde",
    feat1_desc:
      "Authentische, zertifizierte Edelsteine mit garantierter Rückverfolgbarkeit. Kontaktieren Sie uns gern.",
    feat2: "Strategisches Investitionsmanagement",
    feat2_desc:
      "Wir identifizieren Chancen mit hoher Rendite und fördern starke Partnerschaften. Jetzt informieren.",
    feat3: "Effizienter Außenhandel",
    feat3_desc:
      "Wir bringen Produkte sicher und effizient in globale Märkte. Nehmen Sie Kontakt mit uns auf.",
    contacto_title: "Kontakt",
    nav_home: "Startseite",
    nav_comex: "Comex",
    nav_services: "Dienstleistungen",
    nav_contact: "Kontakt",
    nav_language: "Sprache",
  },

  it: {
    title: "Gemme, Investimenti e Commercio Globale",
    subtitle:
      "In COMEX WORLD siamo specializzati in smeraldi certificati, opportunità di investimento strategico e soluzioni per il commercio internazionale. COMEX WORLD trasforma il valore in visione globale.",
    hero1: "Semplicità con uno Scopo.\nTrasformiamo le Idee in Soluzioni.",
    hero2: "Apri nuovi mercati e connessioni globali con COMEX WORLD.",
    area_emeralds_title: "Smeraldi Certificati di Origine Autentica",
    area_emeralds_desc:
      "Colleghiamo acquirenti internazionali a smeraldi di alta qualità certificati da laboratori gemmologici riconosciuti. Offriamo trasparenza, tracciabilità e consulenza esperta per gemme da investimento.",
    area_investment_title: "Investimenti Strategici e Bilaterali",
    area_investment_desc:
      "Consigliamo e gestiamo opportunità di investimento locali e internazionali con focus su settori ad alte prestazioni. Favoriamo alleanze bilaterali tra aziende, governi e investitori.",
    area_trade_title: "Soluzioni Complete di Commercio Estero",
    area_trade_desc:
      "Facilitiamo l'esportazione e l'importazione di beni strategici. Offriamo supporto logistico, normativo e commerciale per connettere i prodotti ai mercati globali.",
    services_title: "Aree di Specializzazione",
    services_description:
      "COMEX WORLD trasforma la conoscenza in azione attraverso servizi mirati in gemmologia, investimenti strategici e commercio globale.",
    feat1: "Smeraldi Certificati",
    feat1_desc:
      "Accedi a gemme autentiche e certificate con tracciabilità garantita. Parla con i nostri esperti.",
    feat2: "Gestione di Investimenti Strategici",
    feat2_desc:
      "Scopri opportunità ad alto valore e costruisci alleanze solide. Discutiamone insieme.",
    feat3: "Commercio Estero Efficiente",
    feat3_desc:
      "Colleghiamo i prodotti ai mercati globali con soluzioni sicure ed efficaci. Contattaci ora.",
    contacto_title: "Contatto",
    nav_home: "Home",
    nav_comex: "Comex",
    nav_services: "Servizi",
    nav_contact: "Contatto",
    nav_language: "Lingua",
  },
};

const polyglot = new Polyglot({ phrases: phrases[lang] });

window.addEventListener("DOMContentLoaded", function () {
  const map = {
    "i18n-title": "title",
    "i18n-subtitle": "subtitle",
    "i18n-hero1": "hero1",
    "i18n-hero2": "hero2",

    // Áreas clave
    "i18n-area_emeralds_title": "area_emeralds_title",
    "i18n-area_emeralds_desc": "area_emeralds_desc",
    "i18n-area_investment_title": "area_investment_title",
    "i18n-area_investment_desc": "area_investment_desc",
    "i18n-area_trade_title": "area_trade_title",
    "i18n-area_trade_desc": "area_trade_desc",

    // Servicios destacados
    "i18n-services_title": "services_title",
    "i18n-services_description": "services_description",
    "i18n-feat1": "feat1",
    "i18n-feat1_desc": "feat1_desc",
    "i18n-feat2": "feat2",
    "i18n-feat2_desc": "feat2_desc",
    "i18n-feat3": "feat3",
    "i18n-feat3_desc": "feat3_desc",

    // Navegación
    "i18n-contacto_title": "contacto_title",
    "i18n-nav_home": "nav_home",
    "i18n-nav_comex": "nav_comex",
    "i18n-nav_services": "nav_services",
    "i18n-nav_contact": "nav_contact",
    "i18n-nav_language": "nav_language",
  };

  Object.entries(map).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) {
      el.innerText = polyglot.t(key);
    }
  });
});

const languageLabels = {
  es: "🇪🇸 Español",
  en: "🇺🇸 English",
  de: "🇩🇪 Deutsch",
  it: "🇮🇹 Italiano",
};

document.addEventListener("DOMContentLoaded", () => {
  const label = languageLabels[lang] || "🌐 Idioma";
  const labelElement = document.getElementById("current-language-label");
  if (labelElement) labelElement.innerText = label;
});
