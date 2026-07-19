export type MenuTag = 'signature' | 'new' | 'veggie' | 'spicy'

export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  tags?: MenuTag[]
  image?: string
  allergens?: string
}

export type MenuSubGroup = {
  label: string
  items: MenuItem[]
}

export type MenuCategory = {
  id: string
  label: string
  icon: 'coffee' | 'glass' | 'croissant' | 'salad' | 'utensils' | 'cake' | 'sparkles'
  teaser: string
  items?: MenuItem[]
  subGroups?: MenuSubGroup[]
}

export type BookPageItem = {
  name: string
  price?: number
  note?: string
}

export type BookPage = {
  id: string
  title: string
  emoji: string
  subtitle: string
  items: BookPageItem[]
}

/** Format Tunisian dinar prices (e.g. 15 → "15.000 TND") */
export function formatPrice(price: number): string {
  const whole = Math.round(price * 1000)
  const formatted = whole.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return `${formatted} TND`
}

export const MENU_BOOK_PAGES: BookPage[] = [
  {
    id: 'cafe',
    title: 'Café',
    emoji: '☕',
    subtitle: 'The first sip of coffee… the start of a beautiful day',
    items: [
      { name: 'EXPRESSE', price: 2.4, note: 'Classique · Spécial Nestlé 3.400 · Spécial Aromé 3.400' },
      { name: 'CAPPUCIN', price: 2.6, note: 'Classique · Spécial Nestlé 3.600 · Spécial Aromé 3.600' },
      { name: 'DIRECT', price: 2.8, note: 'Classique · Spécial Nestlé 3.800 · Spécial Aromé 3.800' },
    ],
  },
  {
    id: 'jus-glaces',
    title: 'Jus & Glaces',
    emoji: '🧃',
    subtitle: 'Drinks & crêpes — taste happiness in every bite',
    items: [
      { name: 'EAU 1L', price: 2 },
      { name: 'GAZEUSES', price: 2.6 },
      { name: 'CITRONADE', price: 2.5 },
      { name: 'JUS DE FRAISE', price: 4 },
      { name: 'JUS DE FRUITS', price: 4.5 },
      { name: 'LAIT DE POULE', price: 4.5 },
      { name: '1 BOULE', price: 1.7, note: 'Glace artisanale' },
      { name: '2 BOULES', price: 3 },
      { name: '3 BOULES', price: 4 },
      { name: 'ICE COFFEE', price: 7 },
      { name: 'JOEJIM', price: 8 },
    ],
  },
  {
    id: 'smoothies',
    title: 'Smoothies & Shakes',
    emoji: '🥤',
    subtitle: 'More than a drink… it\'s refreshment',
    items: [
      { name: 'TROPICAL', price: 9, note: 'Smoothie' },
      { name: 'FRUITS ROUGES', price: 9, note: 'Smoothie' },
      { name: 'YELLOW', price: 9, note: 'Smoothie' },
      { name: 'MELON-APPLE', price: 9, note: 'Smoothie' },
      { name: 'MILK-SHAKE', price: 7 },
      { name: 'NUTELLA', price: 9, note: 'Milk-shake' },
      { name: 'PISTACHIO', price: 9, note: 'Milk-shake' },
      { name: 'OREO', price: 9, note: 'Milk-shake' },
      { name: 'VIRGIN', price: 6, note: 'Mojito' },
      { name: 'FRUITS ROUGES', price: 7, note: 'Mojito' },
      { name: 'BLEU', price: 7, note: 'Mojito' },
      { name: 'PINA COLADA', price: 7, note: 'Mojito' },
    ],
  },
  {
    id: 'sandwich',
    title: 'Sandwich & Makloub',
    emoji: '🥪',
    subtitle: 'Fresh, fast & delicious — your daily craving solved',
    items: [
      { name: 'THON', price: 7, note: 'Sandwich' },
      { name: 'ESCALOPE', price: 7, note: 'Sandwich' },
      { name: 'CHAWARMA', price: 7, note: 'Sandwich' },
      { name: 'KABEB', price: 7, note: 'Sandwich' },
      { name: 'THON', price: 9, note: 'Makloub' },
      { name: 'ESCALOPE', price: 10, note: 'Makloub' },
      { name: 'CHAWARMA', price: 10, note: 'Makloub' },
      { name: 'KABEB', price: 10, note: 'Makloub' },
    ],
  },
  {
    id: 'tacos',
    title: 'Tacos & Baguette',
    emoji: '🌮',
    subtitle: 'Crafted for true taste lovers',
    items: [
      { name: 'THON', price: 8, note: 'Tacos · XL 14.000' },
      { name: 'ESCALOPE', price: 8, note: 'Tacos · XL 14.000' },
      { name: 'CHAWARMA', price: 8, note: 'Tacos · XL 14.000' },
      { name: 'KABEB', price: 8, note: 'Tacos · XL 14.000' },
      { name: 'ESCALOPE PANÉE', price: 9, note: 'Tacos · XL 16.000' },
      { name: 'PORTION SAUCE BLANCHE', price: 3 },
      { name: 'ESCALOPE', price: 12, note: 'Baguette farcie' },
      { name: 'CHAWARMA', price: 12, note: 'Baguette farcie' },
      { name: 'KABEB', price: 12, note: 'Baguette farcie' },
      { name: 'PORTION DE FRITES', price: 3 },
      { name: 'ESCALOPE', price: 11, note: 'Soufflet' },
      { name: 'CHAWARMA', price: 11, note: 'Soufflet' },
    ],
  },
  {
    id: 'pizza',
    title: 'Pizza',
    emoji: '🍕',
    subtitle: 'Hot & cheesy — just for you',
    items: [
      { name: 'MARGHERITA', price: 10, note: 'Tomate, mozzarella, olive · Moy 10 / Maxi 12' },
      { name: 'NEPTUNE', price: 11, note: 'Tomate, mozzarella, thon · Mini 6 / Moy 11 / Maxi 14' },
      { name: 'PEPPERONI', price: 11, note: 'Tomate, mozzarella, pepperoni · Mini 6 / Moy 11 / Maxi 14' },
      { name: 'GREC', price: 13, note: 'Tomate, mozzarella, escalope · Mini 7 / Moy 13 / Maxi 16' },
      { name: 'GREC SAUCE BLANCHE', price: 15, note: 'Sauce blanche, mozzarella, escalope · Mini 9 / Moy 15 / Maxi 18' },
      { name: '4 SAISON', price: 13, note: 'Tomate, mozzarella, champignons, jambon · Mini 7 / Moy 13 / Maxi 16' },
      { name: '4 SAISON SAUCE BLANCHE', price: 15, note: 'Sauce blanche, mozzarella, champignons, jambon' },
      { name: 'TURQUE', price: 16, note: 'Sauce blanche, mozzarella, escalope, jambon · Moy 16 / Maxi 22' },
    ],
  },
  {
    id: 'spaghetti',
    title: 'Spaghetti',
    emoji: '🍝',
    subtitle: 'Pâtes fraîches — classiques & fruits de mer',
    items: [
      { name: 'BOLOGNAISE', price: 20 },
      { name: 'FRUITS DE MER', price: 30 },
      { name: 'LASAGNE BOLOGNAISE', price: 20 },
      { name: 'CARBONARA', price: 20 },
      { name: 'PUTTANESCA', price: 15 },
      { name: 'ARRABIATA', price: 15 },
    ],
  },
  {
    id: 'plats',
    title: 'Nos Plats',
    emoji: '🍽️',
    subtitle: 'Experience real cuisine — a meal you\'ll remember',
    items: [
      { name: 'ESCALOPE GRILLÉ', price: 15 },
      { name: 'ESCALOPE PANÉE', price: 15 },
      { name: 'CORDON BLEU', price: 18 },
      { name: 'CHAWARMA', price: 18 },
      { name: 'KABEB', price: 15 },
      { name: 'ESCALOPE AU CHAMPIGNON', price: 18 },
      { name: 'SYMPHONIE DE DINDE', price: 25 },
    ],
  },
  {
    id: 'ojja',
    title: 'Ojja',
    emoji: '🍳',
    subtitle: 'A world of flavors in one place',
    items: [
      { name: 'ESCALOPE', price: 18 },
      { name: 'MERGUEZ', price: 20 },
      { name: 'FRUITS DE MER', price: 22 },
    ],
  },
  {
    id: 'grillades',
    title: 'Grillades',
    emoji: '🥩',
    subtitle: 'One slice is never enough',
    items: [
      { name: 'POULET RÔTI', price: 15 },
      { name: 'POULET PANÉ', price: 15 },
      { name: 'COTLET D\'AGNEAU', price: 38 },
      { name: 'FILET DE BŒUF', price: 35 },
      { name: 'FOIE GRILLÉ', price: 38 },
      { name: 'ENTRECÔTE', price: 35 },
      { name: 'GRILLADE MIXTE', price: 45 },
    ],
  },
  {
    id: 'poisson',
    title: 'Poisson',
    emoji: '🐟',
    subtitle: 'Fraîcheur du jour',
    items: [
      { name: 'DAURADE', price: 24 },
      { name: 'LOUPE', price: 28 },
      { name: 'FILET DE POISSON', price: 28 },
      { name: 'L\'ACHAT DU JOUR', note: 'Prix selon arrivage · *****' },
    ],
  },
  {
    id: 'crepes',
    title: 'Crêpes & Gaufres',
    emoji: '🧇',
    subtitle: 'Where flavor meets elegance',
    items: [
      { name: 'CHOCOLAT', price: 8, note: 'Crêpe sucrée' },
      { name: 'NUTELLA OU FRUITS SECS', price: 10, note: 'Crêpe sucrée' },
      { name: 'PISTACHIO', price: 10, note: 'Crêpe sucrée' },
      { name: 'NUTELLA + FRUITS SECS', price: 12, note: 'Crêpe sucrée' },
      { name: 'DUBAI', price: 15, note: 'Crêpe sucrée' },
      { name: 'THON', price: 8, note: 'Crêpe salée' },
      { name: 'ESCALOPE', price: 9, note: 'Crêpe salée' },
      { name: 'SPÉCIALE (OEUF + THON)', price: 9, note: 'Crêpe salée' },
      { name: 'CHOCOLAT', price: 9, note: 'Gaufre' },
      { name: 'NUTELLA OU FRUITS SECS', price: 11, note: 'Gaufre' },
      { name: 'PISTACHIO', price: 11, note: 'Gaufre' },
      { name: 'NUTELLA + FRUITS SECS', price: 13, note: 'Gaufre' },
      { name: 'DUBAI', price: 16, note: 'Gaufre' },
    ],
  },
]

/** Legacy category export — derived from book pages for any future use */
export const MENU_CATEGORIES: MenuCategory[] = MENU_BOOK_PAGES.map((page) => ({
  id: page.id,
  label: page.title,
  icon: 'utensils' as const,
  teaser: page.subtitle,
  items: page.items
    .filter((item): item is BookPageItem & { price: number } => item.price !== undefined)
    .map((item, i) => ({
      id: `${page.id}-${i}`,
      name: item.name,
      description: item.note ?? '',
      price: item.price,
    })),
}))

export function getAllMenuItems(): MenuItem[] {
  return MENU_CATEGORIES.flatMap((cat) => cat.items ?? [])
}

export const TAG_LABELS: Record<MenuTag, string> = {
  signature: 'Signature',
  new: 'Nouveau',
  veggie: 'Végétarien',
  spicy: 'Épicé',
}
