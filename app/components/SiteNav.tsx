'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './SiteNav.module.css'

const LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Galerie' },
  { href: '#about', label: 'À propos' },
  { href: '#contact', label: 'Contact' },
]

export default function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="" width={40} height={40} className={styles.logo} />
          <span>Just In Time</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Navigation principale">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={styles.cta}>
            Réserver
          </a>
        </nav>

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
            <a key={link.href} href={link.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={styles.mobileCta} onClick={() => setOpen(false)}>
            Réserver une table
          </a>
        </nav>
      )}
    </header>
  )
}
