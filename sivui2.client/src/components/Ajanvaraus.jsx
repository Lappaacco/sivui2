import { useEffect } from 'react'
import './Section.css'
import './Ajanvaraus.css'

export default function Ajanvaraus() {
  useEffect(() => {
    const scriptUrl = 'https://avoinna24.fi/js/a24.iframe.js'

    const reinitA24 = () => {
      const old = document.querySelector(`script[src="${scriptUrl}"]`)
      if (old) old.remove()
      const script = document.createElement('script')
      script.src = scriptUrl
      script.async = true
      document.body.appendChild(script)
    }

    reinitA24()

    let timer
    let lastWidth = window.innerWidth
    const onResize = () => {
      const currentWidth = window.innerWidth
      if (currentWidth === lastWidth) return
      lastWidth = currentWidth
      clearTimeout(timer)
      timer = setTimeout(reinitA24, 300)
    }

    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      clearTimeout(timer)
    }
  }, [])

  return (
    <section id="ajanvaraus" className="section">
      <div className="section-inner ajanvaraus-inner">
        <h2>Ajanvaraus</h2>
        <div className="ajanvaraus-peruutus">
          <p>
            Hyvä asiakas. Ellet pääse tulemaan sovittuna aikana, pyydämme sinua
            ilmoittamaan siitä viimeistään 24h aikaisemmin.
          </p>
          <p>
            Muussa tapauksessa joudumme veloittamaan 75&#xA0;% varaamasi palvelun arvosta.
          </p>
        </div>
        <div className="ajanvaraus-embed">
          <div className="ajanvaraus-embed-header">
            <span className="ajanvaraus-embed-dot" />
            <span className="ajanvaraus-embed-label">Avoinna24 – Verkkoajanvaraus</span>
            <a
              className="ajanvaraus-embed-link"
              href="https://avoinna24.fi/merinellis/reservation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Avaa uudessa välilehdessä ↗
            </a>
          </div>
          <div className="ajanvaraus-embed-body">
            <iframe
              src="https://avoinna24.fi/merinellis/reservation"
              allowTransparency="true"
              className="a24-iframe"
              frameBorder="0"
              scrolling="no"
              style={{ background: 'none transparent', width: '100%' }}
              title="Ajanvaraus – Hiusstudio Merinellis"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
