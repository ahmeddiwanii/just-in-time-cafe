import Image from 'next/image'
import { GALLERY_IMAGES, type SiteImage } from '@/lib/site-images'
import { SOCIAL } from '@/lib/site-location'
import styles from './GallerySection.module.css'

type GalleryItem = SiteImage & {
  layout: 'featured' | 'tall' | 'wide' | 'mid' | 'sq'
  tag?: string
  note?: string
}

const LAYOUTS: GalleryItem['layout'][] = [
  'featured',
  'tall',
  'wide',
  'mid',
  'sq',
  'mid',
  'sq',
  'sq',
  'sq',
]

export default function GallerySection() {
  const items: GalleryItem[] = GALLERY_IMAGES.map((photo, i) => ({
    ...photo,
    layout: LAYOUTS[i] ?? 'sq',
    tag: i === 0 ? 'À la une' : undefined,
    note:
      i === 0
        ? "Table, grillades et fritures — l'esprit Just In Time en un regard."
        : undefined,
  }))

  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Instants capturés</p>
          <h2 className={styles.title}>Galerie</h2>
          <p className={styles.lead}>
            Assiettes, ambiance et moments autour de la table — le café vu de près.
          </p>
        </header>

        <div className={styles.grid}>
          {items.map((photo, i) => (
            <figure
              key={photo.src}
              className={`${styles.cell} ${styles[photo.layout]}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={
                  photo.layout === 'featured'
                    ? '(max-width: 720px) 100vw, 700px'
                    : '(max-width: 720px) 100vw, 360px'
                }
                quality={75}
                priority={i === 0}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className={styles.image}
              />
              <div className={styles.veil} aria-hidden="true" />
              <div className={styles.rim} aria-hidden="true" />
              <figcaption className={styles.meta}>
                {photo.tag ? <span className={styles.tag}>{photo.tag}</span> : null}
                <p className={styles.caption}>{photo.caption}</p>
                {photo.note ? <p className={styles.featuredNote}>{photo.note}</p> : null}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className={styles.more}>
          <p className={styles.moreText}>Envie d&apos;en voir plus au quotidien ?</p>
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.moreLink}
          >
            Voir plus sur Instagram
            <span className={styles.moreArrow} aria-hidden="true">
              →
            </span>
          </a>
          <a
            href={SOCIAL.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.fbLink}
          >
            Suivez-nous aussi sur Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
