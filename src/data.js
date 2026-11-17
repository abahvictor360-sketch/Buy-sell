export const properties = [
  { id: 1, title: 'Lekki Supercar Villa', city: 'Lekki, Lagos', price: 15000000, type: 'Home', mode: 'Rent', beds: 4, baths: 4, area: 3200, rating: 5.0, reviews: 128, img: 1 },
  { id: 2, title: 'Ikoyi Glow Terrace', city: 'Ikoyi, Lagos', price: 450000000, type: 'Home', mode: 'Buy', beds: 5, baths: 5, area: 4100, rating: 4.9, reviews: 96, img: 2 },
  { id: 3, title: 'Maitama Azure House', city: 'Maitama, Abuja', price: 280000000, type: 'Home', mode: 'Buy', beds: 4, baths: 3, area: 2800, rating: 4.8, reviews: 74, img: 3 },
  { id: 4, title: 'Banana Island Pool Villa', city: 'Banana Island, Lagos', price: 1200000000, type: 'Home', mode: 'Buy', beds: 5, baths: 6, area: 4800, rating: 5.0, reviews: 61, img: 4 },
  { id: 5, title: 'Rainlight Townhouse', city: 'GRA, Port Harcourt', price: 6500000, type: 'Apartment', mode: 'Rent', beds: 3, baths: 3, area: 2100, rating: 4.7, reviews: 52, img: 5 },
  { id: 6, title: 'Sunset Timber Home', city: 'Bodija, Ibadan', price: 120000000, type: 'Home', mode: 'Buy', beds: 3, baths: 3, area: 2300, rating: 4.9, reviews: 88, img: 6 },
  { id: 7, title: 'Halo Curve Office', city: 'Victoria Island, Lagos', price: 18000000, type: 'Office', mode: 'Rent', beds: 0, baths: 2, area: 3600, rating: 4.8, reviews: 40, img: 7 },
  { id: 8, title: 'Asokoro Garden Villa', city: 'Asokoro, Abuja', price: 650000000, type: 'Home', mode: 'Buy', beds: 6, baths: 7, area: 6200, rating: 5.0, reviews: 33, img: 8 },
  { id: 9, title: 'Lekki Green Pavilion', city: 'Lekki, Lagos', price: 9000000, type: 'Apartment', mode: 'Rent', beds: 4, baths: 4, area: 3500, rating: 5.0, reviews: 142, img: 9 },
  { id: 10, title: 'Eko Atlantic Mansion', city: 'Eko Atlantic, Lagos', price: 900000000, type: 'Home', mode: 'Buy', beds: 7, baths: 8, area: 7400, rating: 4.9, reviews: 27, img: 10 },
  { id: 11, title: 'Corner Duplex (APT 1 & 2)', city: 'Independence Layout, Enugu', price: 3500000, type: 'Apartment', mode: 'Rent', beds: 2, baths: 2, area: 1400, rating: 4.6, reviews: 90, img: 11 },
  { id: 12, title: 'Supercar Estate', city: 'Maitama, Abuja', price: 1500000000, type: 'Home', mode: 'Buy', beds: 6, baths: 7, area: 6800, rating: 5.0, reviews: 19, img: 12 },
  { id: 13, title: 'Rotunda Modern House', city: 'New Owerri, Imo', price: 210000000, type: 'Home', mode: 'Buy', beds: 4, baths: 4, area: 3300, rating: 4.8, reviews: 58, img: 13 },
]
export const src = (n) => `/img/h${n}.webp`
export const fmt = (p) => {
  const n = p.price
  const s = n >= 1e9 ? `${+(n / 1e9).toFixed(2)}B` : n >= 1e6 ? `${+(n / 1e6).toFixed(1)}M` : n.toLocaleString('en-NG')
  return `₦${s}`
}
export const unit = (p) => (p.mode === 'Rent' ? '/year' : '')
