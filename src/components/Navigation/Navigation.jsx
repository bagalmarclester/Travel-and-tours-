import { useState, useEffect, useRef } from 'react'
import logoImg from '../../assets/logo.png'
import './Navigation.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Destination', href: '#destination' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Contact', href: '#contact' }
]

export default function Navigation({ onBookNow, onProfileClick }) {
  const [activeItem, setActiveItem] = useState('Home')
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const profileRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false)
      }
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsProfileOpen(false)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleNavClick = (label) => {
    setActiveItem(label)
    setIsMobileMenuOpen(false)
  }

  const handleBookNowClick = () => {
    if (onBookNow) {
      onBookNow()
    }
  }

  return (
    <header className={`topbar ${isScrolled ? 'topbar-scrolled' : ''}`}>
      <div className="topbar-container">
        
        {/* Brand */}
        <div className="topbar-column topbar-left">
          <a href="#home" className="topbar-brand" onClick={() => handleNavClick('Home')}>
            <img
              src={logoImg}
              alt="THEZMARC Travel and Tours Logo"
              className="topbar-logo-img"
            />
            <div className="topbar-brand-text">
              <span className="brand-title">THEZMARC</span>
              <span className="brand-badge">Travel and Tours</span>
            </div>
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="topbar-column topbar-middle" aria-label="Main Navigation">
          <ul className="topbar-nav-list">
            {NAV_LINKS.map((link) => {
              const isActive = activeItem === link.label
              return (
                <li key={link.label} className="topbar-nav-item">
                  <a
                    href={link.href}
                    className={`topbar-nav-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => handleNavClick(link.label)}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Actions */}
        <div className="topbar-column topbar-right">
          <button 
            type="button" 
            className="btn-book-now"
            onClick={handleBookNowClick}
          >
            <span>Book Now</span>
          </button>

          {/* Profile Menu */}
          <div className="topbar-profile-wrapper" ref={profileRef}>
            <button
              type="button"
              className={`topbar-profile-btn ${isProfileOpen ? 'active' : ''}`}
              onClick={() => {
                setIsProfileOpen(!isProfileOpen)
                if (onProfileClick) onProfileClick()
              }}
              aria-label="User profile menu"
              aria-expanded={isProfileOpen}
              aria-haspopup="true"
            >
              <div className="profile-avatar-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <svg className={`chevron-icon ${isProfileOpen ? 'rotate' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {isProfileOpen && (
              <div className="profile-dropdown-menu" role="menu">
                <div className="profile-dropdown-header">
                  <div className="user-avatar-large" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="user-info">
                    <p className="user-name">Guest Explorer</p>
                    <span className="user-status">THEZMARC Member</span>
                  </div>
                </div>

                <div className="dropdown-divider" />

                <ul className="profile-dropdown-links" role="none">
                  <li role="none">
                    <a href="#my-bookings" role="menuitem" onClick={() => setIsProfileOpen(false)}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      My Bookings
                    </a>
                  </li>
                  <li role="none">
                    <a href="#saved-trips" role="menuitem" onClick={() => setIsProfileOpen(false)}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
                      Saved Trips
                    </a>
                  </li>
                  <li role="none">
                    <a href="#settings" role="menuitem" onClick={() => setIsProfileOpen(false)}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                      Account Settings
                    </a>
                  </li>
                  <li role="none" className="dropdown-signout">
                    <a href="#signout" role="menuitem" onClick={() => setIsProfileOpen(false)}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                      </svg>
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`topbar-mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="topbar-mobile-drawer">
          <ul className="mobile-nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeItem === link.label ? 'active' : ''}`}
                  aria-current={activeItem === link.label ? 'page' : undefined}
                  onClick={() => handleNavClick(link.label)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-footer">
            <button 
              type="button" 
              className="btn-book-now mobile-btn-book"
              onClick={() => {
                setIsMobileMenuOpen(false)
                handleBookNowClick()
              }}
            >
              <span>Book Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
