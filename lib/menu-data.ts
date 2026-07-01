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

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'cafe',
    label: 'Café & Chaud',
    icon: 'coffee',
    teaser: 'Grains sélectionnés, torréfaction artisanale',
    items: [
      { id: 'espresso', name: 'Espresso', description: 'Court, intense, crema dorée', price: 4.5, tags: ['signature'] },
      { id: 'espresso-doppio', name: 'Espresso Doppio', description: 'Double shot, puissance aromatique', price: 6.5 },
      { id: 'americano', name: 'Américano', description: 'Espresso allongé à l\'eau chaude', price: 5.5 },
      { id: 'cappuccino', name: 'Cappuccino', description: 'Mousse onctueuse, cacao saupoudré', price: 7.5, tags: ['signature'] },
      { id: 'latte', name: 'Latte', description: 'Lait velouté, espresso double', price: 8.5, tags: ['signature'] },
      { id: 'flat-white', name: 'Flat White', description: 'Micro-mousse soyeuse, équilibre parfait', price: 9 },
      { id: 'mocha', name: 'Mocha', description: 'Chocolat belge, espresso, crème fouettée', price: 9.5 },
      { id: 'caramel-macchiato', name: 'Caramel Macchiato', description: 'Vanille, caramel, espresso marbré', price: 10, tags: ['new'] },
      { id: 'the-menthe', name: 'Thé à la Menthe', description: 'Feuilles fraîches, service traditionnel', price: 5 },
      { id: 'chocolat-chaud', name: 'Chocolat Chaud', description: 'Cacao pur, lait chaud, chantilly', price: 8 },
    ],
  },
  {
    id: 'froides',
    label: 'Boissons Fraîches',
    icon: 'glass',
    teaser: 'Rafraîchissantes et maison',
    items: [
      { id: 'citronnade', name: 'Citronnade Maison', description: 'Citrons pressés, menthe fraîche', price: 6 },
      { id: 'jus-orange', name: 'Jus d\'Orange Pressé', description: '100% frais, sans sucre ajouté', price: 7 },
      { id: 'smoothie-fraise', name: 'Smoothie Fraise-Banane', description: 'Fruits frais, yaourt, miel', price: 9.5 },
      { id: 'iced-latte', name: 'Iced Latte', description: 'Espresso, lait froid, glaçons', price: 9, tags: ['signature'] },
      { id: 'frappe-cafe', name: 'Frappé Café', description: 'Café blendé, glace pilée, crème', price: 10.5 },
      { id: 'mojito-virgin', name: 'Mojito Virgin', description: 'Citron vert, menthe, eau gazeuse', price: 8.5, tags: ['veggie'] },
      { id: 'eau-minerale', name: 'Eau Minérale', description: '50cl / 1L', price: 3 },
      { id: 'soda', name: 'Sodas', description: 'Coca, Fanta, Sprite', price: 4.5 },
    ],
  },
  {
    id: 'petit-dejeuner',
    label: 'Petit-déjeuner',
    icon: 'croissant',
    teaser: 'Du matin jusqu\'à 11h30',
    items: [
      { id: 'continental', name: 'Petit-déjeuner Continental', description: 'Croissant, pain, beurre, confiture, jus, café', price: 16, tags: ['signature'] },
      { id: 'tunisien', name: 'Petit-déjeuner Tunisien', description: 'Oeufs, merguez, harissa, olives, khobz', price: 18 },
      { id: 'omelette-herbes', name: 'Omelette aux Herbes', description: 'Oeufs fermiers, fines herbes, toast', price: 12, tags: ['veggie'] },
      { id: 'omelette-fromage', name: 'Omelette Fromage', description: 'Emmental, pain grillé, salade', price: 13 },
      { id: 'crepe-nutella', name: 'Crêpe Nutella', description: 'Pâte maison, banane, noisettes', price: 11 },
      { id: 'crepe-salee', name: 'Crêpe Salée Jambon-Fromage', description: 'Emmental, jambon, oeuf', price: 13 },
      { id: 'pancakes', name: 'Pancakes Stack', description: 'Sirop d\'érable, beurre, fruits rouges', price: 14, tags: ['new'] },
      { id: 'viennoiserie', name: 'Viennoiserie du Jour', description: 'Croissant, pain au chocolat ou chausson', price: 4.5 },
    ],
  },
  {
    id: 'entrees',
    label: 'Entrées & Salades',
    icon: 'salad',
    teaser: 'Fraîcheur et générosité',
    items: [
      { id: 'salade-cesar', name: 'Salade César', description: 'Poulet grillé, parmesan, croûtons, sauce maison', price: 19, tags: ['signature'] },
      { id: 'salade-mediterraneenne', name: 'Salade Méditerranéenne', description: 'Tomates, concombre, feta, olives, huile d\'olive', price: 16, tags: ['veggie'] },
      { id: 'salade-poulet', name: 'Salade Grillée au Poulet', description: 'Mesclun, avocat, tomates cerises, vinaigrette', price: 18 },
      { id: 'soupe-jour', name: 'Soupe du Jour', description: 'Recette du chef, pain artisanal', price: 9 },
      { id: 'bruschetta', name: 'Bruschetta Italienne', description: 'Tomates fraîches, basilic, huile d\'olive, pain grillé', price: 12, tags: ['veggie'] },
      { id: 'calamars', name: 'Calamars Frits', description: 'Citron, sauce aïoli maison', price: 17 },
    ],
  },
  {
    id: 'plats',
    label: 'Plats Principaux',
    icon: 'utensils',
    teaser: 'Cuisine maison, portions généreuses',
    subGroups: [
      {
        label: 'Burgers & Sandwiches',
        items: [
          { id: 'burger-classique', name: 'Burger Classique', description: 'Boeuf 180g, cheddar, salade, frites maison', price: 22, tags: ['signature'] },
          { id: 'burger-gourmet', name: 'Burger Gourmet', description: 'Boeuf, bacon, oignons caramélisés, sauce secrète', price: 26, tags: ['signature'] },
          { id: 'burger-poulet', name: 'Burger Poulet Pané', description: 'Poulet croustillant, coleslaw, frites', price: 20 },
          { id: 'club-sandwich', name: 'Club Sandwich', description: 'Triple étage, poulet, bacon, oeuf, frites', price: 19 },
          { id: 'panini', name: 'Panini Italien', description: 'Jambon, mozzarella, tomates, pesto', price: 15 },
        ],
      },
      {
        label: 'Pâtes & Risottos',
        items: [
          { id: 'pizza-tunisienne', name: 'Pizza Tunisienne', description: 'Thon, olives, sauce tomate, fromage fondant', price: 24, tags: ['signature'], image: '/pizza-thon.png' },
          { id: 'carbonara', name: 'Spaghetti Carbonara', description: 'Lardons, parmesan, jaune d\'oeuf, poivre noir', price: 21 },
          { id: 'bolo', name: 'Bolognaise Maison', description: 'Sauce mijotée 4h, parmesan, basilic', price: 20 },
          { id: 'pesto', name: 'Penne au Pesto', description: 'Basilic frais, pignons, parmesan', price: 19, tags: ['veggie'] },
          { id: 'risotto-mer', name: 'Risotto aux Fruits de Mer', description: 'Crevettes, calamars, moules, safran', price: 35, tags: ['signature'] },
        ],
      },
      {
        label: 'Grillades & Poissons',
        items: [
          { id: 'steak', name: 'Steak Grillé', description: '300g, sauce au poivre, légumes, purée', price: 38 },
          { id: 'poulet-grille', name: 'Poulet Grillé', description: 'Marinade aux herbes, riz pilaf, légumes', price: 24 },
          { id: 'poisson-jour', name: 'Poisson du Jour', description: 'Selon arrivage, légumes de saison', price: 32 },
          { id: 'calamar-grille', name: 'Calamars Grillés', description: 'Citron, persil, salade verte', price: 28 },
        ],
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    icon: 'cake',
    teaser: 'Douceurs faites maison',
    items: [
      { id: 'tiramisu', name: 'Tiramisu', description: 'Mascarpone, espresso, cacao amer', price: 12, tags: ['signature'] },
      { id: 'fondant', name: 'Fondant au Chocolat', description: 'Coeur coulant, glace vanille', price: 13, tags: ['signature'] },
      { id: 'cheesecake', name: 'Cheesecake New York', description: 'Coulis de fruits rouges', price: 12 },
      { id: 'creme-brulee', name: 'Crème Brûlée', description: 'Vanille de Madagascar, caramel croquant', price: 11 },
      { id: 'mousse-chocolat', name: 'Mousse au Chocolat', description: 'Chocolat noir 70%, chantilly', price: 10 },
      { id: 'glace', name: 'Glace Artisanale', description: '2 boules au choix, coulis', price: 8, image: '/dessert-glace.png' },
      { id: 'salade-fruits', name: 'Salade de Fruits', description: 'Fruits de saison, sirop léger', price: 9, tags: ['veggie'] },
    ],
  },
  {
    id: 'formules',
    label: 'Formules',
    icon: 'sparkles',
    teaser: 'Menus complets à prix avantageux',
    items: [
      { id: 'formule-midi', name: 'Formule Midi', description: 'Entrée ou soupe + plat + dessert — 12h à 15h', price: 28, tags: ['signature'] },
      { id: 'formule-soir', name: 'Formule Soir', description: 'Entrée + plat + dessert + café', price: 35 },
      { id: 'menu-enfant', name: 'Menu Enfant', description: 'Plat + dessert + jus — moins de 12 ans', price: 15 },
      { id: 'formule-cafe', name: 'Pause Café Gourmande', description: 'Café + assortiment mignardises', price: 14 },
    ],
  },
]

export function getAllMenuItems(): MenuItem[] {
  return MENU_CATEGORIES.flatMap((cat) => {
    if (cat.items) return cat.items
    if (cat.subGroups) return cat.subGroups.flatMap((g) => g.items)
    return []
  })
}

export function formatPrice(price: number): string {
  return `${price.toFixed(3).replace('.', ' ')} TND`
}

export type BookPage = {
  id: string
  title: string
  emoji: string
  subtitle: string
  items: { name: string; price: number; note?: string }[]
}

function toBookItems(items: MenuItem[], limit = 9): BookPage['items'] {
  return items.slice(0, limit).map((item) => ({
    name: item.name,
    price: item.price,
    note: item.description.length > 42 ? item.description.slice(0, 40) + '…' : item.description,
  }))
}

export const MENU_BOOK_PAGES: BookPage[] = [
  {
    id: 'cafe',
    title: 'Cafés',
    emoji: '☕',
    subtitle: 'Chauds & aromatiques',
    items: toBookItems(
      MENU_CATEGORIES.find((c) => c.id === 'cafe')!.items!
    ),
  },
  {
    id: 'boissons',
    title: 'Boissons',
    emoji: '🥤',
    subtitle: 'Fraîches & maison',
    items: toBookItems(
      MENU_CATEGORIES.find((c) => c.id === 'froides')!.items!
    ),
  },
  {
    id: 'petit-dej',
    title: 'Petit-déjeuner',
    emoji: '🥐',
    subtitle: 'Jusqu\'à 11h30',
    items: toBookItems(
      MENU_CATEGORIES.find((c) => c.id === 'petit-dejeuner')!.items!
    ),
  },
  {
    id: 'pizza',
    title: 'Pizza & Pâtes',
    emoji: '🍕',
    subtitle: 'Recettes italiennes',
    items: [
      { name: 'Margherita', price: 18, note: 'Tomate, mozzarella, basilic' },
      { name: '4 Fromages', price: 22, note: 'Mozzarella, gorgonzola, parmesan' },
      { name: 'Pizza Tunisiennne', price: 24, note: 'Thon, olives, harissa, câpres' },
      { name: 'Spaghetti Carbonara', price: 21, note: 'Lardons, parmesan, oeuf' },
      { name: 'Bolognaise Maison', price: 20, note: 'Sauce mijotée 4 heures' },
      { name: 'Penne au Pesto', price: 19, note: 'Basilic frais, pignons' },
      { name: 'Risotto Fruits de Mer', price: 35, note: 'Crevettes, calamars, safran' },
    ],
  },
  {
    id: 'burgers',
    title: 'Burgers',
    emoji: '🍔',
    subtitle: 'Généreux & croustillants',
    items: toBookItems(
      MENU_CATEGORIES.find((c) => c.id === 'plats')!.subGroups!.find((g) =>
        g.label.includes('Burger')
      )!.items
    ),
  },
  {
    id: 'plats',
    title: 'Plats & Grillades',
    emoji: '🥩',
    subtitle: 'Cuisine maison',
    items: toBookItems(
      MENU_CATEGORIES.find((c) => c.id === 'plats')!.subGroups!.find((g) =>
        g.label.includes('Grillades')
      )!.items
    ),
  },
  {
    id: 'salades',
    title: 'Salades & Entrées',
    emoji: '🥗',
    subtitle: 'Fraîcheur du jour',
    items: toBookItems(
      MENU_CATEGORIES.find((c) => c.id === 'entrees')!.items!
    ),
  },
  {
    id: 'desserts',
    title: 'Desserts',
    emoji: '🍰',
    subtitle: 'Fait maison',
    items: toBookItems(
      MENU_CATEGORIES.find((c) => c.id === 'desserts')!.items!
    ),
  },
  {
    id: 'formules',
    title: 'Formules',
    emoji: '✨',
    subtitle: 'Menus complets',
    items: toBookItems(
      MENU_CATEGORIES.find((c) => c.id === 'formules')!.items!
    ),
  },
]

export const TAG_LABELS: Record<MenuTag, string> = {
  signature: 'Signature',
  new: 'Nouveau',
  veggie: 'Végétarien',
  spicy: 'Épicé',
}
