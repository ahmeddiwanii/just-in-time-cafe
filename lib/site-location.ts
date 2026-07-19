export const VENUE = {
  name: 'Just In Time',
  googleName: 'Restaurant In Time',
  tagline: 'Café – Restaurant',
  addressLine1: 'JHXR+HG7, Beni Khalled',
  addressLine2: '8021 Nabeul, Tunisie',
  fullAddress: 'Restaurant In Time, JHXR+HG7, 8021 Beni Khalled, Tunisie',
  phone: '+216 53 999 084',
  phoneHref: 'tel:+21653999084',
  phoneDigits: '21653999084',
  email: 'contact@justintime.tn',
  googleMapsUrl: 'https://maps.app.goo.gl/qznqa7bYv3HP8ZQ67',
  coordinates: {
    lat: 36.6488888,
    lng: 10.5912503,
  },
  hours: {
    label: '8h – 00h',
    detail: 'Tous les jours',
    openHour: 8,
    closeHour: 24,
    timezone: 'Africa/Tunis',
  },
  parking: 'Parking gratuit à proximité',
  landmark: 'JHXR+HG7 · Centre de Beni Khalled',
} as const

const RESERVATION_MESSAGE =
  'Bonjour Just In Time 👋\nJe souhaite réserver une table.\n\nNom :\nDate :\nHeure :\nNombre de personnes :\nMerci !'

export const WHATSAPP = {
  chat: `https://wa.me/${VENUE.phoneDigits}`,
  reserve: `https://wa.me/${VENUE.phoneDigits}?text=${encodeURIComponent(RESERVATION_MESSAGE)}`,
} as const

export const SOCIAL = {
  instagram: 'https://www.instagram.com/i_n_t_i_m_e/?hl=fr',
  facebook: 'https://www.facebook.com/profile.php?id=100063530920188&locale=fr_FR',
} as const

export const MAP_EMBED_URL =
  `https://maps.google.com/maps?q=${VENUE.coordinates.lat},${VENUE.coordinates.lng}` +
  `&hl=fr&z=17&ie=UTF8&iwloc=&output=embed`

export const DIRECTIONS = {
  google: VENUE.googleMapsUrl,
  googleDir: `https://www.google.com/maps/dir/?api=1&destination=${VENUE.coordinates.lat},${VENUE.coordinates.lng}&travelmode=driving`,
  waze: `https://www.waze.com/ul?ll=${VENUE.coordinates.lat},${VENUE.coordinates.lng}&navigate=yes`,
  apple: `maps://maps.apple.com/?daddr=${VENUE.coordinates.lat},${VENUE.coordinates.lng}`,
  googlePlace: `https://www.google.com/maps/search/?api=1&query=${VENUE.coordinates.lat},${VENUE.coordinates.lng}`,
} as const

export function isVenueOpenNow(date = new Date()): boolean {
  const local = new Date(
    date.toLocaleString('en-US', { timeZone: VENUE.hours.timezone })
  )
  const hour = local.getHours()
  return hour >= VENUE.hours.openHour && hour < VENUE.hours.closeHour
}
