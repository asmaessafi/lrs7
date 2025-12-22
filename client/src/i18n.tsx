import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import type { Category } from "@shared/schema";

type Language = "fr" | "en";

type Translations = Record<string, string>;

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tCategoryLabel: (category: Category, defaultLabel: string) => string;
  tProductText: (productId: string, field: "name" | "description", defaultValue: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "lrs-language";

const fr: Translations = {
  // Navbar
  "nav.home": "Accueil",
  "nav.about": "À propos",
  "nav.products": "Produits",
  "nav.contact": "Contact",
  "nav.language.fr": "FR",
  "nav.language.en": "EN",

  // Hero
  "hero.badge": "Fabrication 100% Tunisienne depuis 2009",
  "hero.subtitle": "Une Histoire de Passion",
  "hero.description.1": "Des produits de haute qualité pour tous les âges et tous les types de peau et cheveux.",
  "hero.description.2": "Soins quotidiens raffinés, formulés avec passion pour sublimer votre beauté naturelle.",
  "hero.cta.products": "Découvrir nos produits",
  "hero.cta.about": "En savoir plus",

  // Home page
  "home.intro.title": "Des produits sains, respectueux et accessibles",
  "home.intro.p1": "Shampoings, après-shampoings, gels douche, déodorants, masques capillaires, huiles, roll-on…",
  "home.intro.p2": "Plus de 120 produits de haute qualité pour tous les âges et tous les types de peau et cheveux.",
  "home.intro.p3": "Du soin quotidien aux gammes spécialisées, pour toute la famille.",
  "home.brands.title": "Nos Marques",
  "home.brands.subtitle": "Trois univers complémentaires pour sublimer votre quotidien",
  "home.featured.title": "Produits Phares",
  "home.featured.subtitle": "Les incontournables plébiscités par nos clients",
  "home.featured.button": "Découvrir tous les produits",
  "home.quality.title": "Nos Engagements Qualité",

  "home.brand.lys.description": "Notre marque phare proposant une gamme complète de soins pour le corps et les cheveux.",
  "home.brand.boom.description": "La gamme styling dédiée aux hommes.",
  "home.brand.aljara.description": "Gels douche premium aux parfums raffinés.",

  "home.cert.phNeutral.label": "pH Neutral",
  "home.cert.phNeutral.desc": "Formules équilibrées",
  "home.cert.recycled.label": "Recycled Plastic",
  "home.cert.recycled.desc": "Emballages responsables",
  "home.cert.derm.label": "Dermatologically Tested",
  "home.cert.derm.desc": "Sécurité garantie",
  "home.cert.iso.label": "ISO 22000",
  "home.cert.iso.desc": "Qualité certifiée",

  // Products page
  "products.header.title": "Nos Produits",
  "products.header.subtitle.1": "Découvrez notre gamme complète de plus de 120 produits cosmétiques et d’hygiène",
  "products.header.subtitle.2": "Formulés avec passion pour sublimer votre beauté au quotidien",
  "products.count": "{{count}} produit{{plural}} affiché{{plural}}",
  "products.error.title": "Erreur de chargement",
  "products.error.body": "Impossible de charger les produits pour le moment. Veuillez réessayer plus tard.",
  "products.empty.title": "Aucun produit trouvé",
  "products.empty.body": "Essayez une autre catégorie ou consultez l’ensemble de notre catalogue.",
  "products.filter.all": "Tous",

  // About page
  "about.header.title": "À Propos LRS",
  "about.header.subtitle": "Laboratoires Réunis de Soin — Une entreprise tunisienne dédiée à la beauté et au bien-être depuis 2009",
  "about.story.title": "LYS INTENSE – Une Histoire de Passion",
  "about.story.p1": "Nous voulons tous une apparence attractive et soignée. Cependant, tout le monde ne sait pas que cet objectif ne peut être atteint qu'avec une série de soins.",
  "about.story.p2": "LYS INTENSE propose des produits de haute qualité pour tous les types et tous les âges, des soins de la tête aux pieds, avec une attention particulière portée aux différentes exigences de la peau et des cheveux.",
  "about.story.p3": "Shampoings, après-shampoings, gels douche, soins hydratants, sérums, masques capillaires, roll-on et déodorants — des lignes élégantes, accessibles et respectueuses pour toute la famille.",
  "about.stats.year": "Année de création",
  "about.stats.points": "Points de vente",
  "about.stats.products": "Produits",
  "about.stats.brands": "Marques",
  "about.presentation.title": "Présentation de LRS",
  "about.presentation.p1": "LRS est une S.A.R.L fondée le 11 mai 2009 avec une production 100 % tunisienne et une démarche responsable.",
  "about.presentation.p2": "Aujourd'hui : 200+ points de vente, 3 marques (LYS INTENSE, BOOM, AL JARA) et plus de 120 produits pour homme, femme, enfant et bébé.",
  "about.presentation.p3": "Présence en Tunisie et export en Libye, Algérie et Afrique de l'Ouest.",
  "about.presentation.p4": "Chaque produit passe des contrôles physico-chimiques et toxicologiques (cutanée, transcutanée, oculaire) avant commercialisation.",
  "about.commitments.title": "Nos Engagements",
  "about.commitments.subtitle": "Qualité, sécurité et respect de l'environnement au cœur de chaque produit",
  "about.mission.title": "Notre Mission",
  "about.mission.body": "Offrir des produits cosmétiques et d'hygiène de haute qualité, accessibles à tous, tout en respectant l'environnement et en faisant rayonner l'industrie tunisienne.",

  // Contact page
  "contact.header.title": "Contactez-nous",
  "contact.header.subtitle.1": "Une question, une suggestion ou une demande de partenariat ?",
  "contact.header.subtitle.2": "Notre équipe est à votre écoute avec plaisir.",
  "contact.info.title": "Nos coordonnées",
  "contact.info.address.label": "Adresse",
  "contact.info.phone.label": "Téléphone",
  "contact.info.whatsapp.label": "WhatsApp",
  "contact.info.email.label": "Email",
  "contact.info.hours.label": "Horaires",
  "contact.info.hours.value": "Lun - Ven: 8h00 - 17h00",
  "contact.social.title": "Suivez-nous",
  "contact.distribution.title": "Distribution internationale",
  "contact.distribution.body": "Nous distribuons nos produits en Tunisie, Libye, Algérie et Afrique de l’Ouest.\nPour les demandes de partenariat ou de distribution, contactez-nous directement.",

  // Contact form
  "contact.form.title": "Contactez-nous",
  "contact.form.subtitle": "Nous sommes à votre écoute avec plaisir",
  "contact.form.name": "Nom complet",
  "contact.form.name.placeholder": "Votre nom complet",
  "contact.form.email": "Email",
  "contact.form.email.placeholder": "votre@email.com",
  "contact.form.phone": "Téléphone (optionnel)",
  "contact.form.phone.placeholder": "+216 XX XXX XXX",
  "contact.form.message": "Votre message",
  "contact.form.message.placeholder": "Partagez-nous vos pensées, questions ou suggestions...",
  "contact.form.submit": "Envoyer le message",
  "contact.form.toast.title": "Message envoyé avec succès !",
  "contact.form.toast.description": "Nous vous répondrons dans les plus brefs délais.",

  // Footer
  "footer.description": "Cosmétiques et produits d'hygiène de haute qualité, fabriqués en Tunisie depuis 2009 avec passion et excellence.",
  "footer.contact": "Contact",
  "footer.certifications": "Certifications",
  "footer.followUs": "Suivez-nous",
  "footer.address": "Zone industrielle, Oued Chaabouni, Route Aéroport km4, 3071 Sfax, Tunisie",
  "footer.phone": "+216 74 68 02 35",
  "footer.whatsapp": "+216 26 56 55 55",
  "footer.email": "admin@lrs.com",
  "footer.cert.ph": "pH Neutral",
  "footer.cert.recycled": "Recycled Plastic",
  "footer.cert.derm": "Dermatologically Tested",
  "footer.cert.iso": "ISO 22000",
  "footer.bottom.copyright": "© 2025 LRS – Tous droits réservés",
  "footer.link.about": "À propos",
  "footer.link.products": "Produits",
  "footer.link.contact": "Contact",

  // Not found
  "notFound.title": "404 Page non trouvée",
  "notFound.body": "Avez-vous ajouté la page au routeur ?",
};

const en: Translations = {
  // Navbar
  "nav.home": "Home",
  "nav.about": "About",
  "nav.products": "Products",
  "nav.contact": "Contact",
  "nav.language.fr": "FR",
  "nav.language.en": "EN",

  // Hero
  "hero.badge": "100% Tunisian manufacturing since 2009",
  "hero.subtitle": "A Story of Passion",
  "hero.description.1": "High-quality products for all ages and all skin and hair types.",
  "hero.description.2": "Refined daily care, formulated with passion to enhance your natural beauty.",
  "hero.cta.products": "Discover our products",
  "hero.cta.about": "Learn more",

  // Home page
  "home.intro.title": "Healthy, respectful and accessible products",
  "home.intro.p1": "Shampoos, conditioners, shower gels, deodorants, hair masks, oils, roll-ons…",
  "home.intro.p2": "More than 120 high-quality products for all ages and all skin and hair types.",
  "home.intro.p3": "From everyday care to specialized ranges, for the whole family.",
  "home.brands.title": "Our Brands",
  "home.brands.subtitle": "Three complementary universes to enhance your daily life",
  "home.featured.title": "Featured Products",
  "home.featured.subtitle": "Customer-favorite essentials",
  "home.featured.button": "View all products",
  "home.quality.title": "Our Quality Commitments",

  "home.brand.lys.description": "Our flagship brand offering a complete range of body and hair care.",
  "home.brand.boom.description": "The styling range dedicated to men.",
  "home.brand.aljara.description": "Premium shower gels with refined fragrances.",

  "home.cert.phNeutral.label": "pH Neutral",
  "home.cert.phNeutral.desc": "Balanced formulas",
  "home.cert.recycled.label": "Recycled Plastic",
  "home.cert.recycled.desc": "Responsible packaging",
  "home.cert.derm.label": "Dermatologically Tested",
  "home.cert.derm.desc": "Guaranteed safety",
  "home.cert.iso.label": "ISO 22000",
  "home.cert.iso.desc": "Certified quality",

  // Products page
  "products.header.title": "Our Products",
  "products.header.subtitle.1": "Discover our full range of more than 120 cosmetic and hygiene products",
  "products.header.subtitle.2": "Formulated with passion to enhance your beauty every day",
  "products.count": "{{count}} product{{plural}} displayed",
  "products.error.title": "Loading error",
  "products.error.body": "Unable to load products at the moment. Please try again later.",
  "products.empty.title": "No products found",
  "products.empty.body": "Try another category or browse our full catalog.",
  "products.filter.all": "All",

  // About page
  "about.header.title": "About LRS",
  "about.header.subtitle": "Laboratoires Réunis de Soin — A Tunisian company dedicated to beauty and well-being since 2009",
  "about.story.title": "LYS INTENSE – A Story of Passion",
  "about.story.p1": "We all want to look attractive and well groomed. However, not everyone knows that this goal can only be achieved with a consistent care routine.",
  "about.story.p2": "LYS INTENSE offers high-quality products for all types and all ages, from head to toe, with particular attention paid to the different needs of skin and hair.",
  "about.story.p3": "Shampoos, conditioners, shower gels, moisturizers, serums, hair masks, roll-ons and deodorants — elegant, accessible and respectful ranges for the whole family.",
  "about.stats.year": "Year founded",
  "about.stats.points": "Points of sale",
  "about.stats.products": "Products",
  "about.stats.brands": "Brands",
  "about.presentation.title": "LRS Overview",
  "about.presentation.p1": "LRS is a limited liability company founded on May 11, 2009 with 100% Tunisian production and a responsible approach.",
  "about.presentation.p2": "Today: 200+ points of sale, 3 brands (LYS INTENSE, BOOM, AL JARA) and more than 120 products for men, women, children and babies.",
  "about.presentation.p3": "Presence in Tunisia and exports to Libya, Algeria and West Africa.",
  "about.presentation.p4": "Each product undergoes physico-chemical and toxicological tests (cutaneous, transcutaneous, ocular) before being marketed.",
  "about.commitments.title": "Our Commitments",
  "about.commitments.subtitle": "Quality, safety and environmental respect at the heart of every product",
  "about.mission.title": "Our Mission",
  "about.mission.body": "To offer high-quality cosmetic and hygiene products accessible to all, while respecting the environment and promoting the Tunisian industry.",

  // Contact page
  "contact.header.title": "Contact us",
  "contact.header.subtitle.1": "A question, suggestion or partnership request?",
  "contact.header.subtitle.2": "Our team will be happy to help.",
  "contact.info.title": "Our contact details",
  "contact.info.address.label": "Address",
  "contact.info.phone.label": "Phone",
  "contact.info.whatsapp.label": "WhatsApp",
  "contact.info.email.label": "Email",
  "contact.info.hours.label": "Opening hours",
  "contact.info.hours.value": "Mon - Fri: 8:00 - 17:00",
  "contact.social.title": "Follow us",
  "contact.distribution.title": "International distribution",
  "contact.distribution.body": "We distribute our products in Tunisia, Libya, Algeria and West Africa.\nFor partnership or distribution requests, please contact us directly.",

  // Contact form
  "contact.form.title": "Contact us",
  "contact.form.subtitle": "We are happy to hear from you",
  "contact.form.name": "Full name",
  "contact.form.name.placeholder": "Your full name",
  "contact.form.email": "Email",
  "contact.form.email.placeholder": "your@email.com",
  "contact.form.phone": "Phone (optional)",
  "contact.form.phone.placeholder": "+216 XX XXX XXX",
  "contact.form.message": "Your message",
  "contact.form.message.placeholder": "Share your thoughts, questions or suggestions...",
  "contact.form.submit": "Send message",
  "contact.form.toast.title": "Message sent successfully!",
  "contact.form.toast.description": "We will get back to you as soon as possible.",

  // Footer
  "footer.description": "High-quality cosmetics and hygiene products manufactured in Tunisia since 2009 with passion and excellence.",
  "footer.contact": "Contact",
  "footer.certifications": "Certifications",
  "footer.followUs": "Follow us",
  "footer.address": "Industrial zone, Oued Chaabouni,Airport Road km4, 3071 Sfax, Tunisia",
  "footer.phone": "+216 74 680 235",
  "footer.whatsapp": "+216 26 565 555",
  "footer.email": "admin@lrs.com",
  "footer.cert.ph": "pH Neutral",
  "footer.cert.recycled": "Recycled Plastic",
  "footer.cert.derm": "Dermatologically Tested",
  "footer.cert.iso": "ISO 22000",
  "footer.bottom.copyright": "© 2025 LRS – All rights reserved",
  "footer.link.about": "About",
  "footer.link.products": "Products",
  "footer.link.contact": "Contact",

  // Not found
  "notFound.title": "404 Page Not Found",
  "notFound.body": "Did you forget to add the page to the router?",
};

// Per-category English labels (French is the default via shared schema)
const categoryEn: Record<Category, string> = {
  "gel-douche": "Shower Gel",
  "deodorant": "Deodorant",
  "roll-on": "Roll-On",
  "shampoing": "Shampoo",
  "masques-capillaires": "Hair Masks",
  "huiles": "Oils",
  "soins-enfants-bebe": "Kids & Baby Care",
  "styling": "Styling (BOOM)",
  "cremes-vaselines": "Creams / Vaselines",
  "gel-hydro-alcoolique": "Hydro-alcoholic Gel",
  "autres": "Others",
};

// Per-product translations for cards (fall back to original when missing)
const productTranslations: Record<
  string,
  {
    name?: string;
    description?: string;
  }
> = {
  // Example entries – extend as needed
  "gd-kiss-me": {
    name: "Kiss Me Sensation Shower Gel",
    description: "Invigorating – Moisturizing",
  },
  "gd-mojito": {
    name: "Mojito Cocktail Shower Gel",
    description: "Relaxing – Refreshing",
  },
  "deo-kiss-me": {
    name: "Kiss Me Deodorant",
    description: "Invigorating – Stimulating",
  },
  "deo-mojito": {
    name: "Mojito Cocktail Deodorant",
    description: "Relaxing – Fruity – Soothing",
  },
  "masque-avocado": {
    name: "Avocado & Coconut Hair Mask",
    description: "For dry and damaged hair",
  },
  "masque-argan": {
    name: "Argan & Aloe Vera Hair Mask",
    description: "For all hair types",
  },
  "shampoing-2en1": {
    name: "2-in-1 Shampoo",
    description: "For all hair types",
  },
  "shampoing-familial": {
    name: "Family Shampoo",
    description: "Gentle formula for the whole family",
  },
  "balsam-familial": {
    name: "Family Conditioner",
    description: "After-shampoo care",
  },
  "shampoing-kids": {
    name: "Kids Shampoo & Shower Gel",
    description: "Fruity fragrances for children",
  },
  "shampoing-bebe": {
    name: "Baby Shampoo & Shower Gel",
    description: "Hair and body – Gentle formula",
  },
};

const dictionaries: Record<Language, Translations> = {
  fr,
  en,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (stored === "fr" || stored === "en") {
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language);
    }
  }, [language]);

  const setLanguage = (lang: Language) => setLanguageState(lang);
  const toggleLanguage = () => setLanguageState((prev) => (prev === "fr" ? "en" : "fr"));

  const t = (key: string): string => {
    const dict = dictionaries[language];
    return dict[key] ?? key;
  };

  const tCategoryLabel = (category: Category, defaultLabel: string): string => {
    if (language === "en") {
      return categoryEn[category] ?? defaultLabel;
    }
    return defaultLabel;
  };

  const tProductText = (productId: string, field: "name" | "description", defaultValue: string): string => {
    if (language === "en") {
      const entry = productTranslations[productId];
      if (!entry) return defaultValue;
      const value = entry[field];
      return value ?? defaultValue;
    }
    return defaultValue;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        setLanguage,
        t,
        tCategoryLabel,
        tProductText,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}



