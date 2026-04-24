import { useEffect } from 'react'
import './Section.css'
import './Ajanvaraus.css'

export default function Ajanvaraus() {
  useEffect(() => {
    const scriptUrl = 'https://avoinna24.fi/js/a24.iframe.js'
    if (document.querySelector(`script[src="${scriptUrl}"]`)) return
    const script = document.createElement('script')
    script.src = scriptUrl
    script.async = true
    document.body.appendChild(script)
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
    </section>
  )
}
