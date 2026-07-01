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
  salle: {
    src: '/salle.png',
    alt: 'Salle du restaurant Just In Time à Beni Khalled',
    caption: 'Notre espace',
  },
} as const satisfies Record<string, SiteImage>

/** Food & ambiance slides for the hero watch carousel */
export const HERO_SLIDES: SiteImage[] = [
  SITE_IMAGES.salle,
  SITE_IMAGES.pizza,
  SITE_IMAGES.dessert,
]

/** Gallery grid — all venue photos */
export const GALLERY_IMAGES: SiteImage[] = [
  SITE_IMAGES.salle,
  SITE_IMAGES.pizza,
  SITE_IMAGES.dessert,
]
