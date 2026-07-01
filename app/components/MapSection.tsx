'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Clock, Copy, MapPin, Navigation, Phone, Sparkles, Check } from 'lucide-react'
import {
  DIRECTIONS,
  MAP_EMBED_URL,
  VENUE,
  isVenueOpenNow,
} from '@/lib/site-location'
import styles from './MapSection.module.css'

export default function MapSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [copied, setCopied] = useState(false)
  const [openNow, setOpenNow] = useState(true)

  useEffect(() => {
    setOpenNow(isVenueOpenNow())
    const tick = window.setInterval(() => setOpenNow(isVenueOpenNow()), 60_000)
    return () => window.clearInterval(tick)
  }, [])

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const copyAddress = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(VENUE.fullAddress)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      /* clipboard unavailable */
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="map"
      className={styles.section}
      aria-labelledby="map-heading"
    >
      <div className={styles.container}>
        <header
          className={`${styles.header} ${visible ? styles.headerVisible : ''}`}
        >
          <p className={styles.eyebrow}>Itinéraire</p>
          <h2 id="map-heading" className={styles.title}>
            Où Nous Trouver
          </h2>
          <div className={styles.titleLine} aria-hidden="true" />
          <p className={styles.subtitle}>
            Venez nous rendre visite au cœur de Beni Khalled — itinéraire,
            horaires et accès en un clin d&apos;œil.
          </p>
        </header>

        <div className={styles.grid}>
          <div
            className={`${styles.mapWrap} ${visible ? styles.mapWrapVisible : ''}`}
          >
            <div className={styles.mapFrame}>
              <div className={styles.mapInner}>
                {!mapLoaded && <div className={styles.mapSkeleton} aria-hidden="true" />}

                {visible && (
                  <iframe
                    title={`Carte — ${VENUE.name}, ${VENUE.fullAddress}`}
                    src={MAP_EMBED_URL}
                    className={`${styles.mapIframe} ${mapLoaded ? styles.mapIframeLoaded : ''}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    onLoad={() => setMapLoaded(true)}
                  />
                )}

                <div className={styles.mapVignette} aria-hidden="true" />

                <div className={styles.pinLayer} aria-hidden="true">
                  <div className={styles.pinPulse} />
                  <div className={styles.pinPulse} />
                  <div className={styles.pin}>
                    <div className={styles.pinHead}>
                      <Image
                        src="/logo.png"
                        alt=""
                        width={22}
                        height={22}
                        className={styles.pinLogo}
                      />
                    </div>
                    <div className={styles.pinStem} />
                  </div>
                </div>

                <div className={styles.mapFloatCard}>
                  <div>
                    <p className={styles.mapFloatName}>{VENUE.name}</p>
                    <p className={styles.mapFloatMeta}>{VENUE.landmark}</p>
                  </div>
                  <span
                    className={`${styles.statusPill} ${openNow ? styles.statusOpen : styles.statusClosed}`}
                  >
                    <span className={styles.statusDot} />
                    {openNow ? 'Ouvert' : 'Fermé'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <aside
            className={`${styles.panel} ${visible ? styles.panelVisible : ''}`}
            aria-label="Informations pratiques"
          >
            <div className={styles.infoCard}>
              <div className={styles.infoCardTop}>
                <div className={styles.infoIcon}>
                  <MapPin size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <p className={styles.infoLabel}>Adresse</p>
                  <p className={styles.infoValue}>
                    {VENUE.addressLine1}
                    <br />
                    {VENUE.addressLine2}
                  </p>
                  <p className={styles.infoSub}>{VENUE.parking}</p>
                  <div className={styles.copyRow}>
                    <button
                      type="button"
                      className={`${styles.copyBtn} ${copied ? styles.copyBtnCopied : ''}`}
                      onClick={copyAddress}
                      aria-live="polite"
                    >
                      {copied ? (
                        <>
                          <Check size={13} />
                          Copié !
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          Copier l&apos;adresse
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoCardTop}>
                <div className={styles.infoIcon}>
                  <Clock size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <p className={styles.infoLabel}>Horaires</p>
                  <p className={styles.infoValue}>{VENUE.hours.label}</p>
                  <p className={styles.infoSub}>{VENUE.hours.detail}</p>
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoCardTop}>
                <div className={styles.infoIcon}>
                  <Phone size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <p className={styles.infoLabel}>Téléphone</p>
                  <a href={VENUE.phoneHref} className={styles.infoValue}>
                    {VENUE.phone}
                  </a>
                  <p className={styles.infoSub}>Réservations &amp; renseignements</p>
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <p className={styles.directionsTitle}>
                <Navigation size={13} style={{ display: 'inline', verticalAlign: '-2px', marginRight: 4 }} />
                Lancer la navigation
              </p>
              <div className={styles.directionsGrid}>
                <a
                  href={DIRECTIONS.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.dirBtn}
                >
                  <span className={`${styles.dirIcon} ${styles.dirGoogle}`}>G</span>
                  Google Maps
                </a>
                <a
                  href={DIRECTIONS.waze}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.dirBtn}
                >
                  <span className={`${styles.dirIcon} ${styles.dirWaze}`}>W</span>
                  Waze
                </a>
                <a href={DIRECTIONS.apple} className={styles.dirBtn}>
                  <span className={`${styles.dirIcon} ${styles.dirApple}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </span>
                  Plans
                </a>
              </div>
            </div>

            <div className={styles.tips}>
              <p className={styles.tipsTitle}>
                <Sparkles size={14} />
                Bon à savoir
              </p>
              <p className={styles.tipsText}>
                Situé en plein centre de Beni Khalled, facilement accessible en
                voiture. Utilisez Waze ou Google Maps pour un itinéraire en temps
                réel jusqu&apos;à notre porte.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
