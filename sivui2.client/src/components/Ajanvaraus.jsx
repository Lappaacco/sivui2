import './Section.css'
import './Ajanvaraus.css'

export default function Ajanvaraus() {
  return (
    <section id="ajanvaraus" className="section">
      <div className="section-inner">
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
        <p className="ajanvaraus-info">
          
        </p>
        {/* Placeholder – ajanvarausjärjestelmä integroidaan myöhemmin */}
        <div className="ajanvaraus-placeholder">
          Ajanvarausjärjestelmä placeholder
        </div>
      </div>
    </section>
  )
}
