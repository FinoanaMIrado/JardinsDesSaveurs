export const restaurant = {
  name: 'Le Jardin des Saveurs',
  tagline: 'Une cuisine du marché, entre terroir malgache et savoir-faire français.',
  address: '12 Rue Ramelina, Isoraka',
  city: 'Antananarivo 101, Madagascar',
  phone: '+261 34 13 567 89',
  phoneHref: '+261341234567',
  email: 'bonjour@jardin-des-saveurs.mg',
  mapSrc:
    'https://www.google.com/maps?q=Isoraka%2C%20Antananarivo%2C%20Madagascar&z=16&output=embed',
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
}

export const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/menu', label: 'Menu' },
  { href: '/reservation', label: 'Réservation' },
  { href: '/contact', label: 'Contact' },
]

export const openingHours = [
  { days: 'Lundi – Jeudi', hours: '11h30 – 14h30 · 18h30 – 22h00' },
  { days: 'Vendredi – Samedi', hours: '11h30 – 15h00 · 18h30 – 23h00' },
  { days: 'Dimanche', hours: '11h30 – 15h30 (déjeuner uniquement)' },
]

export const lunchSlots = ['12:00', '12:30', '13:00', '13:30', '14:00']
export const dinnerSlots = ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30']

export function formatPrice(price: number) {
  return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} Ar`
}

export type MenuBadge = 'Végétarien' | 'Épicé' | 'Nouveau'
export type MenuCategory = 'entrees' | 'plats' | 'desserts' | 'boissons'

export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  category: MenuCategory
  image?: string
  badges?: MenuBadge[]
  signature?: boolean
}

export const menuCategories: { value: MenuCategory; label: string; intro: string }[] = [
  { value: 'entrees', label: 'Entrées', intro: 'Pour ouvrir l’appétit, des assiettes fraîches et parfumées.' },
  { value: 'plats', label: 'Plats', intro: 'Viandes, poissons et légumes du marché, cuisinés avec soin.' },
  { value: 'desserts', label: 'Desserts', intro: 'Une touche sucrée, souvent vanillée, toujours maison.' },
  { value: 'boissons', label: 'Boissons', intro: 'Jus pressés, cocktails maison et sélection de vins.' },
]

export const menuItems: MenuItem[] = [
  {
    id: 'salade-chevre',
    name: 'Salade du jardin au chèvre',
    description: 'Betterave rôtie, chèvre frais d’Antsirabe, miel de litchi et herbes du potager.',
    price: 18000,
    category: 'entrees',
    image: '/images/salade.png',
    badges: ['Végétarien'],
    signature: true,
  },
  {
    id: 'samoussas',
    name: 'Samoussas croustillants',
    description: 'Farce de légumes au curry doux, chutney de tamarin maison.',
    price: 12000,
    category: 'entrees',
    image: '/images/samoussas.png',
    badges: ['Végétarien', 'Épicé'],
  },
  {
    id: 'tartare-thon',
    name: 'Tartare de thon au citron vert',
    description: 'Thon de Nosy Be, avocat, gingembre frais et tuile de sésame.',
    price: 24000,
    category: 'entrees',
    badges: ['Nouveau'],
  },
  {
    id: 'veloute-potiron',
    name: 'Velouté de potiron',
    description: 'Crème de coco, graines torréfiées et huile de baie rose.',
    price: 14000,
    category: 'entrees',
    badges: ['Végétarien'],
  },
  {
    id: 'filet-zebu',
    name: 'Filet de zébu au poivre vert',
    description: 'Poivre vert de Madagascar, gratin dauphinois et légumes glacés.',
    price: 45000,
    category: 'plats',
    image: '/images/zebu.png',
    signature: true,
  },
  {
    id: 'poisson-vanille',
    name: 'Poisson du jour à la vanille',
    description: 'Sauce coco-vanille de Sambava, riz parfumé et brèdes sautées.',
    price: 38000,
    category: 'plats',
    image: '/images/poisson.png',
    signature: true,
  },
  {
    id: 'romazava',
    name: 'Romazava revisité',
    description: 'Bouillon de brèdes mafana, émincé de zébu fondant, riz blanc.',
    price: 32000,
    category: 'plats',
    badges: ['Épicé'],
  },
  {
    id: 'risotto-champignons',
    name: 'Risotto aux champignons',
    description: 'Champignons de saison, parmesan affiné et huile de truffe.',
    price: 34000,
    category: 'plats',
    badges: ['Végétarien', 'Nouveau'],
  },
  {
    id: 'canard-letchi',
    name: 'Magret de canard aux litchis',
    description: 'Jus réduit aux litchis, purée de patate douce et pak choï.',
    price: 48000,
    category: 'plats',
  },
  {
    id: 'fondant-chocolat',
    name: 'Fondant au chocolat',
    description: 'Cacao de la Sambirano, glace vanille Bourbon et fruits rouges.',
    price: 16000,
    category: 'desserts',
    image: '/images/dessert.png',
    signature: true,
  },
  {
    id: 'tarte-coco',
    name: 'Tarte fine coco-passion',
    description: 'Pâte sablée, crémeux passion et noix de coco râpée toastée.',
    price: 14000,
    category: 'desserts',
    image: '/images/tarte.png',
    badges: ['Nouveau'],
  },
  {
    id: 'creme-brulee',
    name: 'Crème brûlée à la vanille',
    description: 'Gousse de vanille de Sambava, caramel craquant.',
    price: 12000,
    category: 'desserts',
    badges: ['Végétarien'],
  },
  {
    id: 'cocktail-passion',
    name: 'Cocktail du Jardin',
    description: 'Rhum arrangé maison, fruit de la passion, menthe fraîche.',
    price: 18000,
    category: 'boissons',
    image: '/images/cocktail.png',
  },
  {
    id: 'jus-frais',
    name: 'Jus frais pressé',
    description: 'Selon le marché : mangue, ananas, corossol ou citron-gingembre.',
    price: 8000,
    category: 'boissons',
    image: '/images/jus.png',
    badges: ['Végétarien'],
  },
  {
    id: 'vin-verre',
    name: 'Verre de vin',
    description: 'Rouge, blanc ou rosé, sélection du sommelier.',
    price: 15000,
    category: 'boissons',
  },
  {
    id: 'the-vanille',
    name: 'Thé ou café de Madagascar',
    description: 'Thé noir à la vanille ou café arabica des hauts plateaux.',
    price: 6000,
    category: 'boissons',
  },
]

export const testimonials = [
  {
    name: 'Hanta R.',
    role: 'Dîner d’anniversaire',
    rating: 5,
    quote:
      'Un cadre magnifique et un filet de zébu d’une tendresse rare. L’équipe a même préparé une petite surprise pour l’anniversaire de mon mari.',
  },
  {
    name: 'Julien M.',
    role: 'Déjeuner d’affaires',
    rating: 5,
    quote:
      'Réservation en deux minutes, table prête à l’heure, service impeccable. Le poisson à la vanille est devenu mon incontournable.',
  },
  {
    name: 'Sitraka A.',
    role: 'Repas en famille',
    rating: 4,
    quote:
      'Ambiance chaleureuse, plats généreux et une vraie attention pour les enfants. Nous reviendrons pour les desserts !',
  },
]
