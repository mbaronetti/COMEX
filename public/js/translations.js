const lang = new URLSearchParams(window.location.search).get("lang") || "es";
const phrases = {
  es: {
    title: "Comercio Internacional Estratégico",
    subtitle:
      "Impulsando el comercio exterior a través de inversiones estratégicas, alianzas bilaterales y la excelencia en gemas de alto valor.",
    hero1: "Simplicidad con Propósito.\nTransformamos Ideas en Soluciones.",
    hero2_title: "Comercio, Inversión y Alianzas",
    hero2_description:
      "En COMEX WORLD, facilitamos alianzas bilaterales y conectamos productos con mercados globales. Nuestra misión es potenciar la importación y exportación de bienes estratégicos, impulsando inversiones internacionales y soluciones comerciales efectivas.",
    services_title: "Servicios",
    services_description:
      "Desde la exportación e importación de productos de alto valor hasta la gestión de inversiones y acuerdos bilaterales, ofrecemos soluciones comerciales integrales y servicios logísticos adaptados a nuestros socios internacionales.",
    feat1: "Comercio Especializado",
    feat2: "Certificación Gemológica",
    feat3: "Alianzas Estratégicas",
    hero2: "Excelencia y Visión Global, Símbolos de Valor Atemporal",
    contacto_title: "Contacto",
    nav_home: "Inicio",
    nav_comex: "Comex",
    nav_services: "Servicios",
    nav_contact: "Contacto",
    nav_language: "Idioma",
  },
  en: {
    title: "Strategic International Trade",
    subtitle:
      "Driving foreign trade through strategic investments, bilateral partnerships, and excellence in high-value gems.",
    hero1: "Simplicity with Purpose.\nWe Turn Ideas into Solutions.",
    hero2_title: "Trade, Investment, and Partnerships",
    hero2_description:
      "At COMEX WORLD, we facilitate bilateral partnerships and connect products with global markets. Our mission is to enhance the import and export of strategic goods by boosting international investment and effective trade solutions.",
    services_title: "Services",
    services_description:
      "From the export and import of high-value products to investment management and bilateral agreements, we offer comprehensive business solutions and tailored logistics services for our international partners.",
    feat1: "Specialized Trade",
    feat2: "Gemological Certification",
    feat3: "Strategic Alliances",
    hero2: "Excellence and Global Vision, Symbols of Timeless Value",
    contacto_title: "Contact",
    nav_home: "Home",
    nav_comex: "Comex",
    nav_services: "Services",
    nav_contact: "Contact",
    nav_language: "Language",
  },
  de: {
    title: "Strategischer internationaler Handel",
    subtitle:
      "Förderung des Außenhandels durch strategische Investitionen, bilaterale Partnerschaften und Exzellenz in hochwertigen Edelsteinen.",
    hero1: "Einfachheit mit Ziel.\nWir verwandeln Ideen in Lösungen.",
    hero2_title: "Handel, Investitionen und Partnerschaften",
    hero2_description:
      "Bei COMEX WORLD fördern wir bilaterale Partnerschaften und verbinden Produkte mit globalen Märkten. Unsere Mission ist es, den Im- und Export strategischer Güter durch internationale Investitionen und effektive Handelslösungen zu stärken.",
    services_title: "Dienstleistungen",
    services_description:
      "Von der Aus- und Einfuhr hochwertiger Produkte bis hin zum Investitionsmanagement und bilateralen Abkommen bieten wir umfassende Geschäftslösungen und maßgeschneiderte Logistikdienstleistungen für unsere internationalen Partner.",
    feat1: "Spezialisierter Handel",
    feat2: "Gemologische Zertifizierung",
    feat3: "Strategische Allianzen",
    hero2: "Exzellenz und globale Vision, Symbole zeitlosen Wertes",
    contacto_title: "Kontakt",
    nav_home: "Startseite",
    nav_comex: "Comex",
    nav_services: "Dienstleistungen",
    nav_contact: "Kontakt",
    nav_language: "Sprache",
  },
  it: {
    title: "Commercio Internazionale Strategico",
    subtitle:
      "Promuoviamo il commercio estero attraverso investimenti strategici, alleanze bilaterali e l'eccellenza nelle gemme di alto valore.",
    hero1: "Semplicità con uno Scopo.\nTrasformiamo le Idee in Soluzioni.",
    hero2_title: "Commercio, Investimenti e Alleanze",
    hero2_description:
      "In COMEX WORLD facilitiamo alleanze bilaterali e colleghiamo i prodotti ai mercati globali. La nostra missione è rafforzare l'importazione e l'esportazione di beni strategici promuovendo investimenti internazionali e soluzioni commerciali efficaci.",
    services_title: "Servizi",
    services_description:
      "Dall'esportazione e importazione di prodotti di alto valore alla gestione degli investimenti e degli accordi bilaterali, offriamo soluzioni commerciali complete e servizi logistici personalizzati per i nostri partner internazionali.",
    feat1: "Commercio Specializzato",
    feat2: "Certificazione Gemmologica",
    feat3: "Alleanze Strategiche",
    hero2: "Eccellenza e Visione Globale, Simboli di Valore Senza Tempo",
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
    "i18n-hero2_title": "hero2_title",
    "i18n-hero2_description": "hero2_description",
    "i18n-hero2": "hero2",
    "i18n-services_title": "services_title",
    "i18n-services_description": "services_description",
    "i18n-feat1": "feat1",
    "i18n-feat2": "feat2",
    "i18n-feat3": "feat3",
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
    it: "🇮🇹 Italiano"
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const label = languageLabels[lang] || "🌐 Idioma";
    const labelElement = document.getElementById("current-language-label");
    if (labelElement) labelElement.innerText = label;
  });
