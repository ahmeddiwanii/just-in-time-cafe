'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { WHATSAPP } from '@/lib/site-location'
import styles from './SiteNav.module.css'

const LINKS = [
  { href: '#', label: 'Accueil', home: true },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'À propos' },
  { href: '#gallery', label: 'Galerie' },
  { href: '#contact', label: 'Contact' },
]

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
      data-scrolled={scrolled ? 'true' : 'false'}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="" width={56} height={56} className={styles.logo} />
          <span>Just In Time</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Navigation principale">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`${styles.navLink} ${link.home ? styles.navLinkActive : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.desktopActions}>
          <span className={styles.locationPill}>
            <MapPin size={14} strokeWidth={2} />
            Beni Khalled, Tunisie
          </span>
          <a
            href={WHATSAPP.reserve}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Réserver une table
          </a>
        </div>

        <button
          type="button"
          className={styles.menuBtn}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.menuIcon} data-open={open} />
        </button>
      </div>

      {open && (
        <nav className={styles.mobileNav} aria-label="Navigation mobile tablette">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP.reserve}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCta}
            onClick={() => setOpen(false)}
          >
            Réserver une table
          </a>
        </nav>
      )}
    </header>
  )
}
