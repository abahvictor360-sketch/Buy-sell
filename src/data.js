export const properties = [
  { id: 1, title: 'Lamborghini Row Villa', city: 'Boston', price: 14500, type: 'Home', mode: 'Rent', beds: 4, baths: 4, area: 3200, rating: 5.0, reviews: 128, img: 1 },
  { id: 2, title: 'Glow Terrace Residence', city: 'Miami', price: 2450000, type: 'Home', mode: 'Buy', beds: 5, baths: 5, area: 4100, rating: 4.9, reviews: 96, img: 2 },
  { id: 3, title: 'Azure Cube House', city: 'San Diego', price: 1280000, type: 'Home', mode: 'Buy', beds: 4, baths: 3, area: 2800, rating: 4.8, reviews: 74, img: 3 },
  { id: 4, title: 'Reflection Pool Villa', city: 'Los Angeles', price: 3150000, type: 'Home', mode: 'Buy', beds: 5, baths: 6, area: 4800, rating: 5.0, reviews: 61, img: 4 },
  { id: 5, title: 'Rainlight Townhouse', city: 'Seattle', price: 9800, type: 'Apartment', mode: 'Rent', beds: 3, baths: 3, area: 2100, rating: 4.7, reviews: 52, img: 5 },
  { id: 6, title: 'Sunset Timber Home', city: 'Austin', price: 890000, type: 'Home', mode: 'Buy', beds: 3, baths: 3, area: 2300, rating: 4.9, reviews: 88, img: 6 },
  { id: 7, title: 'Halo Curve Studio', city: 'New York', price: 12900, type: 'Office', mode: 'Rent', beds: 0, baths: 2, area: 3600, rating: 4.8, reviews: 40, img: 7 },
  { id: 8, title: 'Sandstone Garden Villa', city: 'Palm Beach', price: 4200000, type: 'Home', mode: 'Buy', beds: 6, baths: 7, area: 6200, rating: 5.0, reviews: 33, img: 8 },
  { id: 9, title: 'Green Bank Pavilion', city: 'Boston', price: 11200, type: 'Apartment', mode: 'Rent', beds: 4, baths: 4, area: 3500, rating: 5.0, reviews: 142, img: 9 },
  { id: 10, title: 'Triple-Garage Mansion', city: 'Dallas', price: 5600000, type: 'Home', mode: 'Buy', beds: 7, baths: 8, area: 7400, rating: 4.9, reviews: 27, img: 10 },
  { id: 11, title: 'Corner Duplex (APT 1 & 2)', city: 'Chicago', price: 4800, type: 'Apartment', mode: 'Rent', beds: 2, baths: 2, area: 1400, rating: 4.6, reviews: 90, img: 11 },
  { id: 12, title: 'Supercar Estate', city: 'Beverly Hills', price: 7900000, type: 'Home', mode: 'Buy', beds: 6, baths: 7, area: 6800, rating: 5.0, reviews: 19, img: 12 },
  { id: 13, title: 'Rotunda Modern House', city: 'Denver', price: 1650000, type: 'Home', mode: 'Buy', beds: 4, baths: 4, area: 3300, rating: 4.8, reviews: 58, img: 13 },
]
export const src = (n) => `/img/h${n}.webp`
export const fmt = (p) =>
  p.mode === 'Rent' ? `$${(p.price / 1000).toFixed(1)}k` : p.price >= 1e6 ? `$${(p.price / 1e6).toFixed(2)}M` : `$${Math.round(p.price / 1000)}k`
export const unit = (p) => (p.mode === 'Rent' ? '/month' : '')
