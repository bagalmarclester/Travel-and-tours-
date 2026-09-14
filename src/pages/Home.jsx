import { MoveRight, Compass, ShieldCheck, BadgePercent, MapPin, Headphones, Star, Clock } from 'lucide-react'
import './Home.css'

const WHY_US_ITEMS = [
  {
    icon: BadgePercent,
    title: 'Affordable Packages',
    description: 'Competitive and transparent rates with no hidden costs, giving you the best value for your budget.'
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Certified',
    description: 'Accredited tour operators, licensed local guides, and vetted accommodations for worry-free travel.'
  },
  {
    icon: MapPin,
    title: 'Customized Itineraries',
    description: 'Tailored travel schedules crafted specifically for your family, friends, or corporate team.'
  },
  {
    icon: Headphones,
    title: '24/7 Dedicated Support',
    description: 'Friendly round-the-clock customer assistance before, during, and after your journey.'
  }
]

const BASE_URL = import.meta.env.BASE_URL

const FEATURED_DESTINATIONS = [
  {
    id: 1,
    title: 'El Nido Lagoon Expedition',
    location: 'Palawan, Philippines',
    image: `${BASE_URL}destinations/palawan.jpg`,
    duration: '4D3N Tour',
    price: '₱8,499',
    rating: '4.9',
    badge: 'Best Seller'
  },
  {
    id: 2,
    title: 'Boracay Sunset & Sands',
    location: 'Aklan, Philippines',
    image: `${BASE_URL}destinations/boracay.jpg`,
    duration: '3D2N Tour',
    price: '₱6,999',
    rating: '4.8',
    badge: 'Popular'
  },
  {
    id: 3,
    title: 'Batanes Rolling Hills & Heritage',
    location: 'Batanes, Philippines',
    image: `${BASE_URL}destinations/batanes.jpg`,
    duration: '4D3N Tour',
    price: '₱12,500',
    rating: '5.0',
    badge: 'Exclusive'
  },
  {
    id: 4,
    title: 'Siargao Surf & Lagoon Escape',
    location: 'Surigao del Norte, Philippines',
    image: `${BASE_URL}destinations/siargao.jpg`,
    duration: '3D2N Tour',
    price: '₱7,899',
    rating: '4.9',
    badge: 'Trending'
  }
]

export default function Home() {
  return (
    <main className="page-home" id="home">
      <header className="hero-header">
        <div className="hero-container">
          <h1 className="hero-title">
            Explore, Experience and Remember
          </h1>

          <p className="hero-description">
            Affordable, safe, and memorable tour packages carefully planned just for you, your family, and your corporate team.
          </p>

          <div className="hero-actions">
            <button type="button" className="btn-hero-primary">
              <span>Start Your Journey</span>
              <MoveRight className="btn-hero-icon" size={20} aria-hidden="true" />
            </button>
            <button type="button" className="btn-hero-secondary">
              <Compass className="btn-hero-icon" size={20} aria-hidden="true" />
              <span>View Packages</span>
            </button>
          </div>
        </div>
      </header>

      {/* Why Travel With Us Section */}
      <section className="why-us-section" id="why-us">
        <div className="why-us-container">
          <div className="why-us-header">
            <span className="why-us-subtitle">WHY CHOOSE US</span>
            <h2 className="why-us-title">Why Travel With Us</h2>
            <p className="why-us-description">
              Your comfort, safety, and unforgettable memories are at the heart of everything we do.
            </p>
          </div>

          <div className="why-us-grid">
            {WHY_US_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="why-us-card">
                  <div className="why-us-icon-wrapper" aria-hidden="true">
                    <Icon size={26} />
                  </div>
                  <h3 className="why-us-card-title">{item.title}</h3>
                  <p className="why-us-card-desc">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="destinations-section" id="destinations">
        <div className="destinations-container">
          <div className="destinations-header">
            <span className="destinations-subtitle">FEATURED GETAWAYS</span>
            <h2 className="destinations-title">Featured Destinations</h2>
            <p className="destinations-description">
              Your comfort, safety, and unforgettable memories are at the heart of everything we do.
            </p>
          </div>

          <div className="destinations-grid">
            {FEATURED_DESTINATIONS.map((dest) => (
              <article key={dest.id} className="destination-card">
                <div className="destination-image-container">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="destination-image"
                    loading="lazy"
                  />
                  <span className="destination-badge">{dest.badge}</span>
                  <div className="destination-rating" aria-label={`Rating: ${dest.rating} stars`}>
                    <Star size={14} className="star-icon" fill="#F59E0B" stroke="#F59E0B" aria-hidden="true" />
                    <span>{dest.rating}</span>
                  </div>
                </div>

                <div className="destination-card-body">
                  <div className="destination-location">
                    <MapPin size={15} aria-hidden="true" />
                    <span>{dest.location}</span>
                  </div>

                  <h3 className="destination-card-title">{dest.title}</h3>

                  <div className="destination-duration">
                    <Clock size={15} aria-hidden="true" />
                    <span>{dest.duration}</span>
                  </div>

                  <div className="destination-card-footer">
                    <div className="destination-price-wrapper">
                      <span className="price-label">Starts at</span>
                      <span className="destination-price">{dest.price}</span>
                    </div>

                    <button
                      type="button"
                      className="btn-destination"
                      aria-label={`Book tour package for ${dest.title}`}
                    >
                      <span>Book Tour</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
