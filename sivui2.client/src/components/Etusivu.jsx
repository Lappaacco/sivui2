import './Section.css'
import './Etusivu.css'

export default function Etusivu() {
  return (
    <section id="etusivu" className="section section--hero">
      <div className="section-inner etusivu-inner">
        <div className="etusivu-logo-wrap">
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="Hiusstudio Merinellis Oy"
            className="etusivu-logo"
          />
        </div>
        <h1 className="etusivu-slogan">Merinellis sinua varten!</h1>
        <p className="etusivu-kuvaus">
          Meillä saat ammattitaitoista ja asiakas lähtöistä palvelua.
        </p>
        <br/>
        <p className="etusivu-kuvaus">
          Salon sydämessä sijaitsevassa parturi-kampaamossa loihdimme hiukset, meikit, ripset sekä hiustenpidennykset ja ripsienpidennykset kuntoon.
          </p>
        <br/>
        <p className="etusivu-kuvaus">
          Kouluttaudumme säännöllisesti, jolla kehitämme ammattitaitoa ja pystymme esittelemään asiakkaillemme uusimmat trendit ja tuotteet, sekä toteuttamaan parhaan mahdollisen lopputuloksen juuri sinulle.
        </p>
        <br/>
        <p className="etusivu-kuvaus">
          Sijaintimme kauppakeskus Plazassa mahdollistaa esteettömän kulkemisen ja auton saa helposti parkkiin.
        </p>
        <br/>
        <div className="etusivu-huom">
          <p><strong>Huom!</strong> Palvelemme myös ilman ajanvarausta.</p>
        </div>
        <a
          href="https://avoinna24.fi/salonmerinell/reservation?branch_id=c6592d8a-b4c0-11e3-818a-db4dafeedfdb"
          target="_blank"
          rel="noopener noreferrer"
          className="varaa-nappi"
        >
          Varaa aika!
        </a>
      </div>
    </section>
  )
}
