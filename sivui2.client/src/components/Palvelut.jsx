import './Section.css'
import './Palvelut.css'

const palvelut = [
  {
    nimi: 'Hiukset',
    kuvaus:
      'Monipuoliset parturi-kampaamopalvelut, värjäykset, kiharakäsittelyt, pidennykset ja leikkaukset eri tekniikoilla — mm. veitsileikkaus.',
  },
  {
    nimi: 'Ripset & kulmat',
    kuvaus:
      'Ripsien ja kulmien kestovärjäykset sekä kasvojen alueen vahaukset.',
  },
  {
    nimi: 'Ripsienpidennykset',
    kuvaus:
      'Klassiset sekä volyymiripsienpidennykset, niiden huollot ja pikafiksaukset.',
  },
  {
    nimi: 'Meikit',
    kuvaus:
      'Asiakkaan persoonaa korostavat meikit juhlaan ja arkeen. Teemme myös juhlaseurueita.',
  },
]

export default function Palvelut() {
  return (
    <section id="palvelut" className="section">
      <div className="section-inner palvelut-inner">
        <h2 className="palvelut-heading">Palvelut</h2>
        <div className="palvelut-kortit">
          {palvelut.map(p => (
            <div className="palvelu-kortti" key={p.nimi}>
              <h3 className="palvelu-nimi">{p.nimi}</h3>
              <p className="palvelu-kuvaus">{p.kuvaus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

