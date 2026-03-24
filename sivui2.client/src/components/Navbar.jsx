import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Etusivu', target: 'etusivu' },
  { label: 'Palvelut', target: 'palvelut' },
  { label: 'Hinnasto', target: 'hinnasto' },
  { label: 'Ajanvaraus', target: 'ajanvaraus' },
  { label: 'Yhteystiedot', target: 'yhteystiedot' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function NavLogo({ imgClassName }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}images/logo.png`}
      alt="Hiusstudio Merinellis Oy"
      className={imgClassName}
    />
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('etusivu')

  useEffect(() => {
    function onScroll() {
      const trigger = window.innerHeight * 0.35
      let active = null
      for (const link of navLinks) {
        const el = document.getElementById(link.target)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top <= trigger) active = link.target
      }
      if (active) setActiveSection(active)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNav(target) {
    setActiveSection(target)
    scrollTo(target)
  }

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="sidebar" aria-label="Sivunavigaatio">
        <div className="sidebar-brand" onClick={() => handleNav('etusivu')} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && handleNav('etusivu')}>
          <NavLogo imgClassName="sidebar-logo-img" />
        </div>
        <ul className="sidebar-links">
          {navLinks.map(link => (
            <li key={link.target}>
              <button
                onClick={() => handleNav(link.target)}
                className={activeSection === link.target ? 'active' : ''}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile top navbar */}
      <nav className="topbar" aria-label="Päänavigaatio">
        <div className="topbar-brand" onClick={() => handleNav('etusivu')} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && handleNav('etusivu')}>
          <NavLogo imgClassName="topbar-logo-img" />
          <span className="company-name">Hiusstudio Merinellis</span>
        </div>
        <button
          className="hamburger"
          aria-label="Avaa valikko"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        {menuOpen && (
          <ul className="topbar-dropdown">
            {navLinks.map(link => (
              <li key={link.target}>
                <button
                  onClick={() => { handleNav(link.target); setMenuOpen(false) }}
                  className={activeSection === link.target ? 'active' : ''}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  )
}
