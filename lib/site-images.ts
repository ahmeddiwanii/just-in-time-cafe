export type SiteImage = {
  src: string
  alt: string
  caption?: string
}

export const SITE_IMAGES = {
  pizza: {
    src: '/pizza-thon.png',
    alt: 'Pizza au thon et olives — Just In Time',
    caption: 'Pizza au thon & olives',
  },
  dessert: {
    src: '/dessert-glace.png',
    alt: 'Glace artisanale servie en terrasse',
    caption: 'Glace artisanale',
  },
  poulet: {
    src: '/buffet-poulet.png',
    alt: 'Poulet frit croustillant du buffet',
    caption: 'Poulet frit maison',
  },
  paella: {
    src: '/paella-fruits-mer.png',
    alt: 'Paella aux fruits de mer et poissons grillés',
    caption: 'Paella fruits de mer',
  },
  buffet: {
    src: '/buffet-gratin.png',
    alt: 'Buffet varié — gratin, brochettes et quiches',
    caption: 'Notre buffet',
  },
  salle: {
    src: '/salle.png',
    alt: 'Salle du restaurant Just In Time à Beni Khalled',
    caption: 'Notre espace',
  },
  facade: {
    src: '/facade.png',
    alt: 'Façade du restaurant Just In Time à Beni Khalled',
    caption: 'Notre façade',
  },
} as const satisfies Record<string, SiteImage>

/**
 * Hero watch carousel — tight, centered food shots that crop well in a circle.
 * Avoid wide interiors, façades, and busy buffet lines.
 */
export const HERO_SLIDES: SiteImage[] = [
  SITE_IMAGES.poulet,
  SITE_IMAGES.pizza,
  SITE_IMAGES.dessert,
  SITE_IMAGES.paella,
]

/** Gallery — full venue story: food variety + ambiance + exterior */
export const GALLERY_IMAGES: SiteImage[] = [
  SITE_IMAGES.facade,
  SITE_IMAGES.salle,
  SITE_IMAGES.buffet,
  SITE_IMAGES.poulet,
  SITE_IMAGES.paella,
  SITE_IMAGES.pizza,
  SITE_IMAGES.dessert,
]
