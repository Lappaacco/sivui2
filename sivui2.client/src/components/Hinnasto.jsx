import { useState } from 'react'
import hinnasto from '../data/hinnasto.json'
import './Section.css'
import './Hinnasto.css'

function PalveluRivi({ nimi, hinta }) {
  return (
    <div className="hinnasto-rivi">
      <span className="hinnasto-nimi">{nimi}</span>
      <span className="hinnasto-hinta">{hinta}</span>
    </div>
  )
}

function Osio({ osio }) {
  return (
    <div className="hinnasto-osio">
      <h3 className="hinnasto-osio-otsikko">{osio.otsikko}</h3>

      {Array.isArray(osio.palvelut) && osio.palvelut.map((p, i) => {
        if (p.alaotsikko) {
          return (
            <div key={i} className="hinnasto-alaryhmä">
              <p className="hinnasto-alaotsikko">{p.alaotsikko}</p>
              {p.rivit.map((r, j) => <PalveluRivi key={j} {...r} />)}
            </div>
          )
        }
        return (
          <div key={i}>
            <PalveluRivi nimi={p.nimi} hinta={p.hinta} />
            {p.huomio && <p className="hinnasto-huomio">{p.huomio}</p>}
          </div>
        )
      })}

      {osio.erikoispalvelut && osio.erikoispalvelut.map((p, i) => (
        <div key={i}>
          <PalveluRivi nimi={p.nimi} hinta={p.hinta} />
          {p.huomio && <p className="hinnasto-huomio">{p.huomio}</p>}
        </div>
      ))}

      {osio.huomiot && (
        <div className="hinnasto-huomiot-lista">
          {osio.huomiot.map((h, i) => (
            <p key={i} className="hinnasto-huomio hinnasto-huomio--bold">⚠ {h}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Hinnasto() {
  const [aktiiviTab, setAktiiviTab] = useState(hinnasto[0].id)
  const aktiivi = hinnasto.find(k => k.id === aktiiviTab)

  return (
    <section id="hinnasto" className="section section--alt">
      <div className="section-inner">
        <h2>Hinnasto</h2>

        <div className="hinnasto-tabs" role="tablist">
          {hinnasto.map(k => (
            <button
              key={k.id}
              role="tab"
              aria-selected={aktiiviTab === k.id}
              className={`hinnasto-tab${aktiiviTab === k.id ? ' hinnasto-tab--aktiivi' : ''}`}
              onClick={() => setAktiiviTab(k.id)}
            >
              {k.nimi}
            </button>
          ))}
        </div>

        <div className="hinnasto-sisalto" role="tabpanel">
          {aktiivi.osiot.map((osio, i) => <Osio key={i} osio={osio} />)}
        </div>
      </div>
    </section>
  )
}
