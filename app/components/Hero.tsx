'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useSwipeElement } from '@/lib/use-swipe'
import { HERO_SLIDES } from '@/lib/site-images'
import styles from './Hero.module.css'

const SLIDE_COUNT = HERO_SLIDES.length
const LOOP_SLIDES = [
  HERO_SLIDES[SLIDE_COUNT - 1],
  ...HERO_SLIDES,
  HERO_SLIDES[0],
]
const LOOP_STEP = 100 / LOOP_SLIDES.length
const AUTO_PLAY_MS = 4500
const AUTO_PAUSE_MS = 9000

export default function Hero() {
  const [loopIndex, setLoopIndex] = useState(1)
  const [animate, setAnimate] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const watchRef = useRef<HTMLDivElement>(null)
  const pauseUntilRef = useRef(0)

  const bumpAutoPause = useCallback(() => {
    pauseUntilRef.current = Date.now() + AUTO_PAUSE_MS
  }, [])

  const nextSlide = useCallback(() => {
    bumpAutoPause()
    setAnimate(true)
    setLoopIndex((prev) => prev + 1)
  }, [bumpAutoPause])

  const prevSlide = useCallback(() => {
    bumpAutoPause()
    setAnimate(true)
    setLoopIndex((prev) => prev - 1)
  }, [bumpAutoPause])

  const handleTrackTransitionEnd = useCallback(() => {
    if (loopIndex === LOOP_SLIDES.length - 1) {
      setAnimate(false)
      setLoopIndex(1)
    } else if (loopIndex === 0) {
      setAnimate(false)
      setLoopIndex(SLIDE_COUNT)
    }
  }, [loopIndex])

  useEffect(() => {
    if (animate) return
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimate(true))
    })
    return () => cancelAnimationFrame(id)
  }, [animate])

  useSwipeElement(watchRef, {
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
    threshold: 30,
  })

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (Date.now() < pauseUntilRef.current) return
      nextSlide()
    }, AUTO_PLAY_MS)

    return () => window.clearInterval(timer)
  }, [nextSlide])

  return (
    <section className={styles.heroShell}>
      <div className={styles.hero}>
      {/* Food carousel — behind the PNG, shows through transparent watch hole */}
      <div className={styles.watchCarousel}>
        <div
          className={`${styles.carouselTrack} ${animate ? '' : styles.carouselTrackInstant}`}
          style={{
            width: `${LOOP_SLIDES.length * 100}%`,
            transform: `translateX(-${loopIndex * LOOP_STEP}%)`,
          }}
          onTransitionEnd={handleTrackTransitionEnd}
        >
          {LOOP_SLIDES.map((slide, i) => (
            <div
              key={`${slide.src}-${i}`}
              className={styles.slide}
              style={{ flex: `0 0 ${LOOP_STEP}%` }}
            >
              <div className={styles.imageWrap}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className={styles.slideImg}
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full mobile background — decorative only, never blocks touches */}
      <div className={styles.bgLayer} aria-hidden="true">
        <Image
          src="/bg-mobile.png"
          alt=""
          fill
          priority
          className={styles.mobileBg}
          draggable={false}
        />
      </div>

      {/* Transparent touch layer on top of watch — receives swipes on mobile */}
      <div
        ref={watchRef}
        className={styles.watchTouchZone}
        aria-hidden="true"
      />

      <button
        type="button"
        className={`${styles.navArrow} ${styles.navArrowLeft}`}
        onClick={prevSlide}
        aria-label="Précédent"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        type="button"
        className={`${styles.navArrow} ${styles.navArrowRight}`}
        onClick={nextSlide}
        aria-label="Suivant"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Top content overlay */}
      <div className={styles.content}>
        <header className={styles.topbar}>
          <div className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Just In Time"
              width={64}
              height={64}
              className={styles.logoImg}
              priority
            />
          </div>

          <div className={styles.topbarRight}>
            <div className={styles.location}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Beni Khalled, Tunisie</span>
            </div>
            <button
              type="button"
              className={styles.menuBtn}
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </header>

        {menuOpen && (
          <nav className={styles.mobileMenu}>
            <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Galerie</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>À propos</a>
            <a href="#map" onClick={() => setMenuOpen(false)}>Carte</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        )}

        <div className={styles.heroIntro}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>JUST IN TIME</p>
            <h1 className={styles.title}>Le bon moment</h1>
            <p className={styles.subtitle}>à chaque instant.</p>
            <p className={styles.tagline}>Café – Restaurant à Beni Khalled, Tunisie</p>
          </div>

          <div className={styles.ctaRow}>
            <a href="#menu" className={styles.ctaPrimary}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="2" x2="6" y2="4" />
                <line x1="10" y1="2" x2="10" y2="4" />
                <line x1="14" y1="2" x2="14" y2="4" />
              </svg>
              Découvrir le menu
            </a>
            <a href="#contact" className={styles.ctaSecondary}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Réserver
            </a>
          </div>
        </div>

        {/* Empty zone — keeps copy above the watch */}
        <div className={styles.watchSpacer} aria-hidden="true" />
      </div>

      {/* Swipe hint + icons — on the image, directly below the watch */}
      <div className={styles.bottomContent}>
          <div className={styles.swipeHint}>
            <svg
              width="34"
              height="20"
              viewBox="0 0 34 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.swipeIcon}
            >
              <line x1="4" y1="6" x2="30" y2="6" />
              <polyline points="9 1 4 6 9 11" />
              <polyline points="25 1 30 6 25 11" />
              <path d="M14 14 a4 4 0 0 1 6 0 v3 a3 3 0 0 1 -6 0 z" />
            </svg>
            <p>Faites glisser pour découvrir</p>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 15 14" />
              </svg>
              <p>Toujours<br />à l&apos;heure</p>
            </div>
            <div className={styles.feature}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 14h16" />
                <path d="M6 14V9a6 6 0 0 1 12 0v5" />
                <path d="M8 18h8" />
                <circle cx="12" cy="7" r="1" fill="currentColor" stroke="none" />
              </svg>
              <p>Fait Maison<br />avec passion</p>
            </div>
            <div className={styles.feature}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
                <path d="M8 1c0 2-1 3-2 4" opacity="0.7" />
                <path d="M12 0c0 2-1 3-2 4" opacity="0.7" />
                <path d="M16 1c0 2-1 3-2 4" opacity="0.7" />
              </svg>
              <p>Café de qualité<br />supérieure</p>
            </div>
          </div>

          <a href="#menu" className={styles.scrollDown} aria-label="Défiler vers le menu">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
