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
 * Hero watch carousel — square, center-cropped slides tuned for the circular hole.
 */
export const HERO_SLIDES: SiteImage[] = [
  {
    src: '/watch-slides/poulet.png',
    alt: SITE_IMAGES.poulet.alt,
    caption: SITE_IMAGES.poulet.caption,
  },
  {
    src: '/watch-slides/pizza.png',
    alt: SITE_IMAGES.pizza.alt,
    caption: SITE_IMAGES.pizza.caption,
  },
  {
    src: '/watch-slides/dessert.png',
    alt: SITE_IMAGES.dessert.alt,
    caption: SITE_IMAGES.dessert.caption,
  },
  {
    src: '/watch-slides/paella.png',
    alt: SITE_IMAGES.paella.alt,
    caption: SITE_IMAGES.paella.caption,
  },
]

/**
 * Gallery uses compressed WebP under /gallery for scroll performance
 * (next/image is unoptimized in this project).
 */
export const GALLERY_IMAGES: SiteImage[] = [
  {
    src: '/gallery/collage.webp',
    alt: 'Collage Just In Time — brunch en photo, brochettes et escalopes dorées',
    caption: 'Autour de la table',
  },
  {
    src: '/gallery/lantern.webp',
    alt: 'Lanterne vintage allumée sur le mur en bois — ambiance Just In Time',
    caption: 'Ambiance du soir',
  },
  {
    src: '/gallery/salle.webp',
    alt: SITE_IMAGES.salle.alt,
    caption: SITE_IMAGES.salle.caption,
  },
  {
    src: '/gallery/buffet.webp',
    alt: SITE_IMAGES.buffet.alt,
    caption: SITE_IMAGES.buffet.caption,
  },
  {
    src: '/gallery/poulet.webp',
    alt: SITE_IMAGES.poulet.alt,
    caption: SITE_IMAGES.poulet.caption,
  },
  {
    src: '/gallery/paella.webp',
    alt: SITE_IMAGES.paella.alt,
    caption: SITE_IMAGES.paella.caption,
  },
  {
    src: '/gallery/pizza.webp',
    alt: SITE_IMAGES.pizza.alt,
    caption: SITE_IMAGES.pizza.caption,
  },
  {
    src: '/gallery/dessert.webp',
    alt: SITE_IMAGES.dessert.alt,
    caption: SITE_IMAGES.dessert.caption,
  },
  {
    src: '/gallery/facade.webp',
    alt: SITE_IMAGES.facade.alt,
    caption: SITE_IMAGES.facade.caption,
  },
]
