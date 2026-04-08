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
