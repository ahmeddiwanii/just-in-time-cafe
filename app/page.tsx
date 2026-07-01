'use client';

import Image from 'next/image';
import Hero from './components/Hero';
import SiteNav from './components/SiteNav';
import MenuSection from './components/MenuSection';
import MapSection from './components/MapSection';
import { GALLERY_IMAGES, SITE_IMAGES } from '@/lib/site-images';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />

      <MenuSection />

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Galerie
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((photo) => (
              <div
                key={photo.src}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-12">
                  <p className="font-serif text-lg text-white">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              À Propos
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-border">
              <Image
                src={SITE_IMAGES.salle.src}
                alt={SITE_IMAGES.salle.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Just In Time est bien plus qu&apos;un café — c&apos;est un sanctuaire pour ceux qui comprennent que le temps est précieux. Fondé sur les principes du luxe, de la qualité et de l&apos;hospitalité authentique.
                </p>
                <p>
                  Chaque détail, de notre sélection de cafés à nos plats préparés par notre chef, est conçu pour sublimer votre expérience culinaire. Nous croyons en prendre son temps et savourer chaque instant.
                </p>
                <p>
                  Situé dans le cadre magnifique de Beni Khalled, notre espace élégant vous invite à ralentir, vous connecter et vous adonner aux plus belles choses.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Années d\'expérience', value: '8+' },
                  { label: 'Plats au menu', value: '60+' },
                  { label: 'Membres d\'équipe', value: '25+' },
                  { label: 'Note clients', value: '4.9/5' },
                ].map((stat, i) => (
                  <div key={i} className="bg-card border border-border p-6 rounded-lg text-center hover:border-accent transition-all">
                    <div className="text-3xl font-serif font-bold text-accent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Ce Que Disent Nos Clients
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', text: 'Une expérience extraordinaire. Chaque détail est une perfection.' },
              { name: 'Jean P.', text: 'Le café seul vaut le détour. Simplement magnifique.' },
              { name: 'Hassan B.', text: 'Un véritable joyau à Beni Khalled. Je recommande vivement.' },
            ].map((testimonial, i) => (
              <div key={i} className="bg-background border border-border p-8 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {Array(5).fill(0).map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-serif font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MapSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Nous Contacter
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Une question, une réservation ou un événement ? Écrivez-nous — nous vous répondrons rapidement.
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="bg-background border border-border px-4 py-3 rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition"
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="bg-background border border-border px-4 py-3 rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition"
                />
              </div>
              <textarea
                placeholder="Votre message"
                rows={5}
                className="w-full bg-background border border-border px-4 py-3 rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
              >
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif font-bold text-accent mb-4">Just In Time</h3>
              <p className="text-sm text-muted-foreground">Café et restaurant premium à Beni Khalled.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Menu</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#menu" className="hover:text-accent transition">Café</a></li>
                <li><a href="#menu" className="hover:text-accent transition">Petit-déjeuner</a></li>
                <li><a href="#menu" className="hover:text-accent transition">Plats</a></li>
                <li><a href="#menu" className="hover:text-accent transition">Desserts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Entreprise</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-accent transition">À propos</a></li>
                <li><a href="#" className="hover:text-accent transition">Carrières</a></li>
                <li><a href="#" className="hover:text-accent transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Légal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">Confidentialité</a></li>
                <li><a href="#" className="hover:text-accent transition">Conditions</a></li>
                <li><a href="#map" className="hover:text-accent transition">Nous trouver</a></li>
                <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 Just In Time. Tous droits réservés.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition">Instagram</a>
              <a href="#" className="hover:text-accent transition">Facebook</a>
              <a href="#" className="hover:text-accent transition">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
