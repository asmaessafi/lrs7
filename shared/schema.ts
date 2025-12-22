import { z } from "zod";

export type Category = 
  | "gel-douche"
  | "deodorant"
  | "roll-on"
  | "shampoing"
  | "masques-capillaires"
  | "huiles"
  | "soins-enfants-bebe"
  | "styling"
  | "cremes-vaselines"
  | "gel-hydro-alcoolique"
  | "autres";

export type Brand = "LYS INTENSE" | "BOOM" | "AL JARA";

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  category: Category;
  description: string;
  variants?: string[];
  imageUrl: string;
}

export const categoryLabels: Record<Category, string> = {
  "gel-douche": "Gel Douche",
  "deodorant": "Déodorant",
  "roll-on": "Roll-On",
  "shampoing": "Shampoing",
  "masques-capillaires": "Masques Capillaires",
  "huiles": "Huiles",
  "soins-enfants-bebe": "Soins Enfants/Bébé",
  "styling": "Styling (BOOM)",
  "cremes-vaselines": "Crèmes/Vaselines",
  "gel-hydro-alcoolique": "Gel Hydro/Alcoolique",
  "autres": "Autres",
};

export const allCategories: Category[] = [
  "gel-douche",
  "deodorant",
  "roll-on",
  "shampoing",
  "masques-capillaires",
  "huiles",
  "soins-enfants-bebe",
  "styling",
  "cremes-vaselines",
  "gel-hydro-alcoolique",
  "autres",
];

export const products: Product[] = [
  // {
  //   id: "gd-kiss-me",
  //   name: "Gel Douche Kiss Me Sensation",
  //   brand: "LYS INTENSE",
  //   category: "gel-douche",
  //   description: "Revigorant – Hydratant",
  //   variants: ["Kiss Me", "La Vie en Rose", "Macaron Gourmand", "Macha3ir Oriental"],
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // {
  //   id: "gd-mojito",
  //   name: "Gel Douche Mojito Cocktail",
  //   brand: "LYS INTENSE",
  //   category: "gel-douche",
  //   description: "Relaxant – Rafraîchissant",
  //   variants: ["Mojito Cocktail", "Montagne & Neige", "Sidi Bou-Saïd Voyage", "Tahiti Voyage"],
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  ////////////AL JARA///////////
  {
    id: "gd-aljara-cedar",
    name: "Gel Douche",
    brand: "AL JARA",
    category: "gel-douche",
    description: "Cedarwood",
    variants: ["Cedarwood", "Musk", "Lavender"],
    imageUrl: "/pictures/aljara/1.jpg",
  },
  {
    id: "gd-aljara-purple",
    name: "Gel Douche",
    brand: "AL JARA",
    category: "gel-douche",
    description: "Purple Flowers",
    variants: ["Cedarwood", "Musk", "Lavender"],
    imageUrl: "/pictures/aljara/2.jpg",
  },
  {
    id: "gd-aljara-musk",
    name: "Gel Douche",
    brand: "AL JARA",
    category: "gel-douche",
    description: "Musk",
    variants: ["Cedarwood", "Musk", "Lavender"],
    imageUrl: "/pictures/aljara/3.jpg",
  },
  {
    id: "gd-aljara-lavender",
    name: "Gel Douche",
    brand: "AL JARA",
    category: "gel-douche",
    description: "Lavender",
    variants: ["Cedarwood", "Musk", "Lavender"],
    imageUrl: "/pictures/aljara/4.jpg",
  },
  {
    id: "gd-aljara-vanilla",
    name: "Gel Douche",
    brand: "AL JARA",
    category: "gel-douche",
    description: "Vanilla",
    variants: ["Cedarwood", "Musk", "Lavender"],
    imageUrl: "/pictures/aljara/5.jpg",
  },
  {
    id: "gd-aljara-fresh",
    name: "Gel Douche Vanilla",
    brand: "AL JARA",
    category: "gel-douche",
    description: "Fresh",
    variants: ["Vanilla", "Purple Flowers", "Marine Minerals"],
    imageUrl: "/pictures/aljara/1.jpg",
  },
  ///////////BOOM///////////
  {
    id: "boom-wax-bambou",
    name: "BOOM Cire Wax",
    brand: "BOOM",
    category: "styling",
    description: "Extrait Bambou",
    variants: ["Extrait Bambou", "Multivitaminé Cactus"],
    imageUrl: "/pictures/boom/1.jpg",
  },
  {
    id: "boom-gel-cactus",
    name: "BOOM Cire Wax",
    brand: "BOOM",
    category: "styling",
    description: "Extrait Cactus",
    variants: ["Normale", "Forte", "XXL", "Titanium", "Shark"],
    imageUrl: "/pictures/boom/2.jpg",
  },
  {
    id: "boom-gel-multivitaminé",
    name: "BOOM Cire Wax",
    brand: "BOOM",
    category: "styling",
    description: "Multivitaminé",
    variants: ["Normale", "Forte", "XXL", "Titanium", "Shark"],
    imageUrl: "/pictures/boom/3.jpg",
  },
   {
    id: "boom-gel-xxl",
    name: "BOOM Gel 3en1",
    brand: "BOOM",
    category: "styling",
    description: "Fixation XXL: Effet Invisible",
    variants: ["Normale", "Forte", "XXL", "Titanium", "Shark"],
    imageUrl: "/pictures/boom/4.jpg",
  },
  {
    id: "boom-gel-Normale",
    name: "BOOM Gel 3en1",
    brand: "BOOM",
    category: "styling",
    description: "Fixation normale: Antipelliculaire",
    variants: ["Normale", "Forte", "XXL", "Titanium", "Shark"],
    imageUrl: "/pictures/boom/5.jpg",
  },
  {
    id: "boom-gel-shark",
    name: "BOOM Gel 3en1",
    brand: "BOOM",
    category: "styling",
    description: "Fixation Shark : Water Proof",
    variants: ["Normale", "Forte", "XXL", "Titanium", "Shark"],
    imageUrl: "/pictures/boom/6.jpg",
  },
  {
    id: "boom-gel-forte",
    name: "BOOM Gel 3en1",
    brand: "BOOM",
    category: "styling",
    description: "Fixation Forte: Effet Invisible",
    variants: ["Normale", "Forte", "XXL", "Titanium", "Shark"],
    imageUrl: "/pictures/boom/7.jpg",
  },
  {
    id: "boom-gel-titanium",
    name: "BOOM Gel 3en1",
    brand: "BOOM",
    category: "styling",
    description: "Fixation Titanium: Look Diamant",
    variants: ["Normale", "Forte", "XXL", "Titanium", "Shark"],
    imageUrl: "/pictures/boom/8.jpg",
  },

  ////////////LYS INTENSE///////////
  // :::::::::: Masques Capillaires::::::::
  {
    id: "masque-avocado",
    name: "Masque Capillaire Avocado & Coco",
    brand: "LYS INTENSE",
    category: "masques-capillaires",
    description: "Pour cheveux secs et abîmés",
    imageUrl: "/pictures/masque/1.jpg",
  },
  {
    id: "masque-boucle",
    name: "Masque Capillaire",
    brand: "LYS INTENSE",
    category: "masques-capillaires",
    description: "Cheveux bouclés et ternes",
    imageUrl: "/pictures/masque/2.jpg",
  },
  
  {
    id: "masque-amande",
    name: "Masque Capillaire Amande & Figue de Barbarie",
    brand: "LYS INTENSE",
    category: "masques-capillaires",
    description: "Cheveux fins et cassants",
    imageUrl: "/pictures/masque/3.jpg",
  },
  {
    id: "masque-argan",
    name: "Masque Capillaire Argan & Aloe Vera",
    brand: "LYS INTENSE",
    category: "masques-capillaires",
    description: "Pour tous types de cheveux",
    imageUrl: "/pictures/masque/4.jpg",
  },
  // ::::::::::::balsams:::::::::
  {
    id: "balsam-familial-anti-chute",
    name: "Balsam Familial",
    brand: "LYS INTENSE",
    category: "shampoing",
    description: "Soin après-shampoing",
    variants: ["Anti-chute", "Tous types"],
    imageUrl: "/pictures/balsam-familial/1.png",
  },
  {
    id: "balsam-familial-fins",
    name: "Balsam Familial",
    brand: "LYS INTENSE",
    category: "shampoing",
    description: "Cheveux fins et cassants",
    variants: ["Anti-chute", "Tous types"],
    imageUrl: "/pictures/balsam-familial/2.png",
  },
  {
    id: "balsam-familial-tous",
    name: "Balsam Familial",
    brand: "LYS INTENSE",
    category: "shampoing",
    description: "Tous types de cheveux",
    variants: ["Anti-chute", "Tous types"],
    imageUrl: "/pictures/balsam-familial/3.png",
  },
  {
    id: "balsam-familial-secs",
    name: "Balsam Familial",
    brand: "LYS INTENSE",
    category: "shampoing",
    description: "Cheveux secs et abîmés",
    variants: ["Anti-chute", "Tous types"],
    imageUrl: "/pictures/balsam-familial/4.png",
  },
  // :::::::::shampoing baby:::::::
  {
    id: "shampoing-bebe",
    name: "Shampoing & Gel Douche Bébé",
    brand: "LYS INTENSE",
    category: "soins-enfants-bebe",
    description: "Cheveux et Corps – Formule douce",
    imageUrl: "/pictures/2en1baby/1.jpg",
  },
  
  // {
  //   id: "deo-kiss-me",
  //   name: "Déodorant Kiss Me",
  //   brand: "LYS INTENSE",
  //   category: "deodorant",
  //   description: "Revigorant – Excitant",
  //   variants: ["Kiss Me", "La Vie en Rose", "Macaron Gourmand", "Macha3ir Oriental"],
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // {
  //   id: "deo-mojito",
  //   name: "Déodorant Mojito Cocktail",
  //   brand: "LYS INTENSE",
  //   category: "deodorant",
  //   description: "Relaxant – Fruité – Apaisant",
  //   variants: ["Mojito Cocktail", "Montagne & Neige", "Sidi Bou-Saïd Voyage", "Tahiti Voyage"],
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // {
  //   id: "roll-gelee",
  //   name: "Roll-On Gelée Royale & Argan",
  //   brand: "LYS INTENSE",
  //   category: "roll-on",
  //   description: "48H Protection",
  //   variants: ["Gelée Royale & Argan", "Fleur de Lotus", "Algues Marines"],
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // {
  //   id: "roll-orchidee",
  //   name: "Roll-On Orchidée & Vanille",
  //   brand: "LYS INTENSE",
  //   category: "roll-on",
  //   description: "48H Protection",
  //   variants: ["Orchidée & Vanille", "Fruits Rouges", "Mangue & Ananas"],
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // 
  // {
  //   id: "shampoing-2en1",
  //   name: "Shampoing 2en1",
  //   brand: "LYS INTENSE",
  //   category: "shampoing",
  //   description: "Pour tous types de cheveux",
  //   variants: ["Tous types", "Anti-chute", "Anti-pelliculaire", "Pour hommes"],
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // {
  //   id: "shampoing-familial",
  //   name: "Shampoing Familial",
  //   brand: "LYS INTENSE",
  //   category: "shampoing",
  //   description: "Formule douce pour toute la famille",
  //   variants: ["Pomme Verte", "Riz & Blé"],
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // {
  //   id: "shampoing-kids",
  //   name: "Shampoing & Gel Douche Kids",
  //   brand: "LYS INTENSE",
  //   category: "soins-enfants-bebe",
  //   description: "Parfums fruités pour enfants",
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // {
  //   id: "huile-avocado",
  //   name: "Huile Précieuse Avocat & Coco",
  //   brand: "LYS INTENSE",
  //   category: "huiles",
  //   description: "Nutrition intense",
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // {
  //   id: "huile-cobra",
  //   name: "Huile Précieuse Cobra",
  //   brand: "LYS INTENSE",
  //   category: "huiles",
  //   description: "Force et brillance",
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // {
  //   id: "huile-amande",
  //   name: "Huile Amande & Figue de Barbarie",
  //   brand: "LYS INTENSE",
  //   category: "huiles",
  //   description: "Hydratation profonde",
  //   imageUrl: "/pictures/affiches/1.jpg ",
  // },
  // {
  //   id: "huile-argan",
  //   name: "Huile Argan & Blé",
  //   brand: "LYS INTENSE",
  //   category: "huiles",
  //   description: "Réparation capillaire",
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // {
  //   id: "huile-ail",
  //   name: "Huile à l'Ail",
  //   brand: "LYS INTENSE",
  //   category: "huiles",
  //   description: "Anti-chute – Fortifiant",
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // {
  //   id: "huile-escargot",
  //   name: "Huile à l'Escargot",
  //   brand: "LYS INTENSE",
  //   category: "huiles",
  //   description: "Régénération cellulaire",
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // {
  //   id: "gel-hydro-80",
  //   name: "Gel Hydro Alcoolique 80ml",
  //   brand: "LYS INTENSE",
  //   category: "gel-hydro-alcoolique",
  //   description: "Désinfectant mains",
  //   variants: ["80ml", "100ml", "250ml", "500ml", "1L", "5L"],
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // {
  //   id: "gel-lavant",
  //   name: "Gel Lavant Mains Antibactérien",
  //   brand: "LYS INTENSE",
  //   category: "gel-hydro-alcoolique",
  //   description: "Protection antibactérienne",
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // {
  //   id: "vaseline",
  //   name: "Pure Vaseline",
  //   brand: "LYS INTENSE",
  //   category: "cremes-vaselines",
  //   description: "Protection et hydratation",
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // {
  //   id: "glycerine",
  //   name: "Pure Glycérine",
  //   brand: "LYS INTENSE",
  //   category: "cremes-vaselines",
  //   description: "Hydratation intense",
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // {
  //   id: "body-butter",
  //   name: "Body Butter",
  //   brand: "LYS INTENSE",
  //   category: "cremes-vaselines",
  //   description: "Beurre corporel nourrissant",
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // {
  //   id: "petroleum-jelly",
  //   name: "Pure Vaseline Petroleum Jelly",
  //   brand: "LYS INTENSE",
  //   category: "cremes-vaselines",
  //   description: "Formule originale",
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
  // {
  //   id: "serum",
  //   name: "Sérum Cheveux Anti-Frizz",
  //   brand: "LYS INTENSE",
  //   category: "autres",
  //   description: "Lisse et protège",
  //   imageUrl: "/pictures/affiches/1.jpg",
  // },
];

export const featuredProducts = products.slice(0, 8);

export const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
