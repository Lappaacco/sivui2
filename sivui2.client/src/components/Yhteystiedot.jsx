import './Section.css'
import './Yhteystiedot.css'

export default function Yhteystiedot() {
  return (
    <section id="yhteystiedot" className="section section--alt">
      <div className="section-inner">
        <h2>Yhteystiedot</h2>
        <div className="yhteystiedot-content">
          <div className="yht-top">
            <div className="osoite-block">
              <p className="osoite-nimi">Hiusstudio Merinellis Oy</p>
              <div className="yhteystiedot-rivi">
                <span className="yhteystiedot-label">Osoite</span>
                <span>Vilhonkatu 8, 24100 Salo</span>
              </div>
              <div className="yhteystiedot-rivi">
                <span className="yhteystiedot-label">Puhelin</span>
                <a href="tel:+35827332158" className="yht-linkki">(02) 733 2158</a>
              </div>
              <div className="yhteystiedot-rivi">
                <span className="yhteystiedot-label">Sähköposti</span>
                <a href="mailto:kampaamo@merinellis.fi" className="yht-linkki">kampaamo@merinellis.fi</a>
              </div>
              <div className="yhteystiedot-rivi">
                <span className="yhteystiedot-label">Y-tunnus</span>
                <span>3606837-3</span>
              </div>
            </div>

            <div className="aukiolo-block">
              <p className="aukiolo-otsikko">Avoinna</p>
              <div className="aukiolo-ajat">
                <div className="aukiolo-rivi">
                  <span className="aukiolo-paiva">Ma–pe</span>
                  <span>10–19</span>
                </div>
                <div className="aukiolo-rivi">
                  <span className="aukiolo-paiva">La</span>
                  <span>10–16</span>
                </div>
              </div>
              <div className="aukiolo-huom">
                <strong>Huom!</strong> Ajanvarauksella myös arkisin 9–20 ja lauantaisin 9–17!
              </div>
              <p className="aukiolo-poikkeus">
                Poikkeusaukioloajoista{' '}
                <a
                  href="https://kauppakeskusplaza.fi/info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aukiolo-linkki"
                >
                  kauppakeskus Plazan sivuilta
                </a>
              </p>
            </div>
          </div>
          <div className="some-linkit">
            <a
              href="https://www.instagram.com/merinellis/"
              target="_blank"
              rel="noopener noreferrer"
              className="some-nappi some-instagram"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://www.facebook.com/people/Hiusstudio-Merinellis/61589537331998/"
              target="_blank"
              rel="noopener noreferrer"
              className="some-nappi some-facebook"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@hiusstudio.merinellis"
              target="_blank"
              rel="noopener noreferrer"
              className="some-nappi some-tiktok"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.26 8.26 0 004.83 1.54V6.77a4.85 4.85 0 01-1.06-.08z"/>
              </svg>
              TikTok
            </a>
          </div>
          <div className="kartta-wrapper">
            <iframe
              title="Hiusstudio Merinellis sijainti kartalla"
              src="https://maps.google.com/maps?q=Vilhonkatu+8,+24100+Salo,+Finland&output=embed"
              className="kartta-iframe"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
