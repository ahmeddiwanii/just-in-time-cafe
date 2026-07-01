'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { MENU_BOOK_PAGES, formatPrice } from '@/lib/menu-data'
import { useSwipeElement } from '@/lib/use-swipe'
import styles from './MenuSection.module.css'

export default function MenuSection() {
  const [pageIndex, setPageIndex] = useState(0)
  const [flip, setFlip] = useState<'next' | 'prev' | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const tabsRef = useRef<HTMLDivElement>(null)
  const bookStageRef = useRef<HTMLDivElement>(null)
  const total = MENU_BOOK_PAGES.length
  const page = MENU_BOOK_PAGES[pageIndex]

  const goTo = useCallback(
    (dir: 'next' | 'prev') => {
      if (isAnimating) return
      if (dir === 'next' && pageIndex >= total - 1) return
      if (dir === 'prev' && pageIndex <= 0) return

      setFlip(dir)
      setIsAnimating(true)

      window.setTimeout(() => {
        setPageIndex((i) => (dir === 'next' ? i + 1 : i - 1))
        setFlip(null)
        setIsAnimating(false)
      }, 520)
    },
    [isAnimating, pageIndex, total]
  )

  const jumpTo = useCallback(
    (index: number) => {
      if (isAnimating || index === pageIndex) return
      if (index > pageIndex) {
        setFlip('next')
        setIsAnimating(true)
        window.setTimeout(() => {
          setPageIndex(index)
          setFlip(null)
          setIsAnimating(false)
        }, 520)
      } else if (index < pageIndex) {
        setFlip('prev')
        setIsAnimating(true)
        window.setTimeout(() => {
          setPageIndex(index)
          setFlip(null)
          setIsAnimating(false)
        }, 520)
      }
    },
    [isAnimating, pageIndex]
  )

  useSwipeElement(bookStageRef, {
    onSwipeLeft: () => goTo('next'),
    onSwipeRight: () => goTo('prev'),
  })

  useEffect(() => {
    const container = tabsRef.current
    const active = container?.querySelector(`[data-index="${pageIndex}"]`) as HTMLElement | null
    active?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [pageIndex])

  const flipClass = flip === 'next' ? styles.pageFlipNext : flip === 'prev' ? styles.pageFlipPrev : ''
  const mountClass = flip === null ? styles.pageMounted : ''

  return (
    <section id="menu" className={`section-fade-in ${styles.section}`} aria-label="Notre menu">
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Just In Time</p>
          <h2 className={styles.title}>Notre Menu</h2>
          <div className={styles.titleLine} />
          <p className={styles.hint}>Glissez votre doigt sur la page pour feuilleter le menu</p>
        </header>

        <nav className={styles.categoryStrip} ref={tabsRef} aria-label="Catégories du menu">
          {MENU_BOOK_PAGES.map((p, i) => (
            <button
              key={p.id}
              type="button"
              data-index={i}
              className={`${styles.categoryTab} ${i === pageIndex ? styles.categoryTabActive : ''}`}
              onClick={() => jumpTo(i)}
              disabled={isAnimating}
              aria-current={i === pageIndex ? 'page' : undefined}
            >
              <span className={styles.tabEmoji} aria-hidden="true">
                {p.emoji}
              </span>
              <span className={styles.tabLabel}>{p.title}</span>
            </button>
          ))}
        </nav>

        <div className={styles.bookStage} ref={bookStageRef}>
          <div className={styles.bookShadow} aria-hidden="true" />
          <div className={styles.swipeCue} aria-hidden="true">
            <span>←</span>
            <span>Glissez n&apos;importe où sur la page</span>
            <span>→</span>
          </div>

          <div className={styles.book}>
            <div className={styles.bookSpine} aria-hidden="true" />
            <div className={styles.bookInner}>
              <article className={`${styles.page} ${flipClass} ${mountClass}`} key={pageIndex}>
                <div className={styles.pageTexture} aria-hidden="true" />
                <header className={styles.pageHeader}>
                  <span className={styles.pageEmoji} aria-hidden="true">
                    {page.emoji}
                  </span>
                  <div>
                    <h3 className={styles.pageTitle}>{page.title}</h3>
                    <p className={styles.pageSubtitle}>{page.subtitle}</p>
                  </div>
                </header>

                <ul className={styles.itemList}>
                  {page.items.map((item) => (
                    <li key={item.name} className={styles.item}>
                      <div className={styles.itemRow}>
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.itemDots} aria-hidden="true" />
                        <span className={styles.itemPrice}>{formatPrice(item.price)}</span>
                      </div>
                      {item.note && <p className={styles.itemNote}>{item.note}</p>}
                    </li>
                  ))}
                </ul>

                <footer className={styles.pageFooter}>
                  <span>Just In Time · Beni Khalled</span>
                  <span>
                    {pageIndex + 1} / {total}
                  </span>
                </footer>
              </article>
            </div>
          </div>
        </div>

        <p className={styles.progress} role="status" aria-live="polite">
          <strong>
            {page.emoji} {page.title}
          </strong>
          <span>
            Page {pageIndex + 1} sur {total}
          </span>
        </p>
      </div>
    </section>
  )
}
