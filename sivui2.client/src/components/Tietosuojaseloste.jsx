import { useNavigate } from 'react-router-dom'
import './Tietosuojaseloste.css'

export default function Tietosuojaseloste() {
  const navigate = useNavigate()

  return (
    <div className="ts-page">
      <button className="ts-back" onClick={() => navigate(-1)} aria-label="Takaisin">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        Takaisin
      </button>

      <article className="ts-content">
        <h1>Hiusstudio Merinellis | Tietosuojalauseke</h1>

        <h2>1. Johdanto</h2>
        <p>Tässä tietosuojalausekkeessa kerromme, kuinka keräämme ja käsittelemme henkilötietoja Hiusstudio Merinellis palveluita (sisältäen, mutta ei rajoittuen, seuraavan internetsivuston www.merinellis.fi, sekä kaikki siihen liittyvät keskustelufoorumit, hakemistot ja tietokannat sekä Hiusstudio Merinellis tarjoamat palvelut) ("Palvelu") tarjotessa.</p>
        <p>Olemme sitoutuneet suojaamaan Palveluiden käyttäjien yksityisyyttä soveltuvan lainsäädännön mukaisesti.</p>

        <h2>2. Käsittelyn tarkoitukset ja oikeusperuste</h2>
        <h3>Henkilötietojen käsittelyn tarkoitukset</h3>
        <p>Keräämme ja käsittelemme henkilötietoja, jotta:</p>
        <ul>
          <li>käyttäjä voidaan rekisteröidä tiettyihin meidän sivustolla oleviin palveluihin;</li>
          <li>käyttäjä voi käyttää tiettyjä meidän sivustolla olevia palveluita;</li>
          <li>käyttäjälle voidaan käyttäjän hyväksynnän mukaisesti markkinoida meidän tai valittujen kolmansien osapuolten palveluita;</li>
          <li>voimme parantaa käyttäjän Palvelun käyttökokemusta keräämällä sivuston käyttötietoa evästeitä ja muita analyysitekniikoita hyväksikäyttäen;</li>
          <li>sivustoamme voidaan hallinnoida.</li>
        </ul>
        <h3>Henkilötietojen käsittelyn oikeusperuste</h3>
        <p>Keräämme ja käsittelemme henkilötietoja hoitaaksemme sopimuksesta johtuvat velvollisuutemme sekä täyttääksemme lainsäädännöstä johtuvat velvoitteemme. Lisäksi käsittelemme henkilötietoja oikeutetun edun perusteella ylläpitääksemme ja kehittääksemme liiketoimintaamme ja palveluamme.</p>

        <h2>3. Mitä henkilötietoja keräämme?</h2>
        <p>Keräämme palvelumme käyttäjistä tässä tietosuojalausekkeessa määriteltyjen käyttötarkoitusten kannalta tarpeellisia henkilötietoja:</p>

        <h3>a) Hiusstudio Merinellis:lle antamasi tiedot</h3>
        <ul>
          <li>Yhteys- ja rekisteröitymistiedot</li>
          <li>Demografiatiedot, kuten ikä ja sukupuoli</li>
          <li>Sopimussuhteeseen liittyvät tiedot, kuten tuotteiden tai palveluiden kuvailutiedot, laskutus- ja maksutiedot, asiakaspalautteet ja yhteydenotot</li>
          <li>Tallennetut asiakaspuhelut</li>
          <li>Käyttäjän antamat profilointi- ja kiinnostustiedot</li>
          <li>Luvat ja suostumukset</li>
          <li>Muut mahdolliset käyttäjän antamat tiedot, joita tarvitsemme tietosuojalausekkeessa määriteltyihin tarkoituksiin</li>
        </ul>

        <h3>b) Mahdolliset julkisista rekistereistä kerätyt tiedot</h3>

        <h3>c) Palveluiden käytöstä havainnoidut tiedot</h3>
        <p>Palveluiden käytön havainnointiin käytetään evästeitä ja muita analyysiteknologioita. Evästeiden käyttö on yleistä ja useat sivustot hyödyntävät niitä. Eväste on pienimuotoinen tiedontallennusohjelma, jonka tietokoneen selain asentaa käyttäjän tietokoneen kovalevylle. Aina kun käyttäjän selain hakee sivuston Yhtiön serveriltä, viesti lähetetään takaisin käyttäjän tietokoneelle. Lähetetty viesti nopeuttaa sivustoa ja yksinkertaistaa kirjautumista, tallentaa käyttäjän käyttötietoja ja kohdentaa sivuston käyttäjälle.</p>
        <p>Evästeiden ja muiden mahdollisten analyysiteknologioiden avulla kerätään esimerkiksi seuraavia tietoja:</p>
        <ul>
          <li>Palvelun ominaisuuksien käyttö- ja selaustiedot, kuten mainokset, jotka on näytetty sekä tiedot mainosten klikkaamisesta</li>
          <li>Sivu, jolta käyttäjä on siirtynyt sivuillemme, laitteen malli, yksilöllinen laite ja/tai evästetunniste, tiedonkeruun kanava, selaimen versio, IP-osoite, istuntotunniste, istunnon aika ja kesto sekä näytön tarkkuus ja käyttöjärjestelmä</li>
          <li>Sijaintitiedot, jos käyttäjä on tätä varten antanut nimenomaisen luvan</li>
          <li>Muut käyttäjän suostumuksella kerätyt tiedot</li>
        </ul>

        <h3>d) Palveluiden käytöstä johdetut tiedot</h3>
        <p>Johdettu tieto on päätelty analytiikan avulla Palvelun havaitusta käytöstä ja/tai asiakkaan itse antamista tiedoista esimerkiksi käyttäjän mahdolliset kiinnostuksen kohteet tai segmentointi tietynlaisten käyttäjien ryhmään.</p>
        <p>Kaikkea keräämäämme tietoa voidaan käyttää Palvelun kohdentamiseen käyttäjälle. Käytämme evästeitä seurataksemme tietoa, jonka sivustomme eväste on asentanut käyttäjän tietokoneelle. Useimpien selainten valikossa on Help menu -kohta, joka kertoo kuinka evästeiden hyväksyntä voidaan estää, kuinka selain ilmoittaa evästeiden vastaanottamisesta ja kuinka evästeet voidaan sulkea. Jos evästeet suljetaan, sivuston käyttö voi rajoittua tai estyä.</p>

        <h2>4. Kuinka kauan käyttäjien tietoja säilytetään?</h2>
        <p>Säilytämme käyttäjien henkilötietoja vain niin kauan kuin niitä tarvitaan sitä tarkoitusta varten, jota ne kerättiin tai lain salliman enimmäisajan. Henkilötietojen säilytysjakson pituus vaihtelee siis tiedoista riippuen. Tämä tarkoittaa myös sitä, että saatamme säilyttää henkilötietojasi, vaikka sopimussuhteesi meihin olisi päättynyt, mutta vain niin kauan kuin meillä on syy tehdä niin.</p>

        <h2>5. Henkilötietojen siirto</h2>
        <h3>Hiusstudio Merinellis palvelun tarjoamiseksi</h3>
        <p>Siirrämme henkilötietoja ainoastaan siinä laajuudessa kuin kolmannet osapuolet tarvitsevat pääsyn käsittelemiimme henkilötietoihin Palvelun tarjoamiseksi tämän tietosuojalausekkeen määrittelemissä tarkoituksissa.</p>
        <h3>Kolmansien osapuolten markkinointi ja mainonta</h3>
        <p>Emme jaa markkinoinnin tai mainonnan osapuolille käyttäjien henkilö- tai tunnistetietoja. Jotta viestintää tai markkinointia kohdennetaan oikein, saatamme siirtää kolmansille osapuolille anonymisoidut demografiatiedot, kiinnostuksenkohteet tai esimerkiksi sijaintiin perustuvat kohdentamisarvot.</p>
        <h3>Suostumuksesi</h3>
        <p>Mikäli käyttäjä on antanut suostumuksensa, saatamme jakaa käyttäjän tietoja valittujen kolmansien osapuolten kanssa, jotta ne voivat ottaa yhteyttä käyttäjään.</p>
        <h3>Tieteellinen tutkimus</h3>
        <p>Voimme luovuttaa tietoja tieteellistä tai historiallista tutkimusta varten edellyttäen, että tiedot on muutettu sellaiseen muotoon, että tiedon kohde ei ole enää niistä tunnistettavissa.</p>
        <h3>Oikeudellisista syistä</h3>
        <p>Henkilötietojasi voidaan luovuttaa toimivaltaisen viranomaisen esittämien vaatimusten ja lakiin perustuvien edellytysten mukaisesti. Jos myymme, ostamme, fuusioimme tai muutoin järjestelemme liiketoimintaamme, käyttäjän henkilötietoja voidaan luovuttaa ostajille ja näiden neuvonantajille.</p>

        <h2>6. Kansainväliset tietojen siirrot</h2>
        <p>Hiusstudio Merinellis pyrkii toteuttamaan palvelut ja käsittelemään henkilötietoja EU- tai ETA-alueella sijaitsevia toimijoita ja palveluita hyödyntäen.</p>
        <p>Jotkin alihankkijoistamme, jakelijoistamme ja kumppaneistamme sijaitsevat Euroopan talousalueen ulkopuolella. Tällöin henkilötietojasi saatetaan siirtää eri maiden välillä. Tällaiset siirrot voivat sisältää henkilötietojen luovutuksia EU- tai ETA-alueen ulkopuolelle sellaisiin maihin, joiden henkilötietojen käsittelyä koskeva lainsäädäntö poikkeaa Suomen lain vaatimuksista. Hiusstudio Merinellis huolehtii tällöin henkilötietojen suojan riittävästä tasosta esimerkiksi sopimalla asiasta henkilötietojen käsittelijän kanssa käyttäen mallisopimuslausekkeita tai muita tietosuojalainsäädännön mukaisia keinoja henkilötietojen siirtoon kolmansiin maihin.</p>

        <h2>7. Henkilötietojen suojaus</h2>
        <p>Hiusstudio Merinellis käyttää ajantasaisia käytäntöjä henkilötietojen suojelemiseksi. Tämä tarkoittaa sitä, että käytämme fyysisiä, hallinnollisia ja teknisiä suojaustoimenpiteitä pienentääksemme henkilötietojen hävikin riskiä ja vähentääksemme väärinkäytöksiä sekä luvatonta käyttöä, julkaisua tai muokkausta. Tallennamme henkilökohtaiset tietosi suojatuille palvelimille, jolloin vain valtuutetut henkilöt voivat käyttää näissä palvelimessa olevia tietoja.</p>

        <h2>8. Kolmansien sivustot</h2>
        <p>Tämä tietosuojalauseke soveltuu vain meidän Palveluihin emmekä ole vastuussa muiden sivustojen tietosuojakäytännöistä. Suosittelemme käyttäjää tarkistamaan käyttämiensä sivustojen tietosuojalausekkeet.</p>

        <h2>9. Tietosuojaselosteen muutokset</h2>
        <p>Voimme muuttaa tätä tietosuojalauseketta. Muutettu tietosuojaseloste on saatavilla Yrityksen sivustolta, jotta käyttäjät ovat aina tietoisia siitä, miten heidän henkilötietojaan käsitellään.</p>

        <h2>10. Sinun oikeutesi</h2>
        <h3>Tarkastusoikeus</h3>
        <p>Sinulla on oikeus tarkastaa, mitä sinua koskevia tietoja rekisteriin on talletettu. Toimitamme tiedot lain edellyttämässä muodossa.</p>
        <h3>Oikeus vaatia tiedon oikaisemista</h3>
        <p>Sinulla on oikeus vaatia väärän, epätarkan, epätäydellisen, vanhentuneen tai tarpeettoman tiedon korjaamista tai täydentämistä.</p>
        <h3>Oikeus vaatia tiedon poistamista</h3>
        <p>Voit pyytää meitä poistamaan henkilötietosi järjestelmistämme. Suoritamme pyyntösi mukaiset toimenpiteet, mikäli meillä ei ole oikeutettua syytä olla poistamatta tietoa. Tiedot eivät välttämättä poistu välittömästi kaikista varmuuskopio- tai muista vastaavista järjestelmistämme.</p>
        <h3>Oikeus rajoittaa tiedon käsittelyä</h3>
        <p>Voit pyytää meitä rajoittamaan tiettyjen henkilötietojesi käsittelyjä. Tietojen käsittelyn rajoittamista koskeva pyyntö saattaa johtaa rajoitetumpiin mahdollisuuksiin käyttää internetsivujamme sekä palveluitamme.</p>
        <h3>Oikeus vastustaa tiedon käsittelyä</h3>
        <p>Voit myös pyytää rajoituksia henkilötietojesi käsittelyyn, mikäli tietojasi käsitellään muihin tarkoituksiin kuin palvelumme suorittamiseksi tai laista aiheutuvan velvollisuuden täyttämiseksi. Henkilötietojen käsittelyn vastustaminen saattaa johtaa rajoitetumpiin mahdollisuuksiin käyttää internetsivujamme. Sinulla on oikeus kieltäytyä sähköisestä suoramarkkinoinnista seuraamalla ohjeita, jotka on sisällytetty kaikkiin lähettämiimme markkinointiviesteihin.</p>
        <h3>Oikeus siirtää tiedot järjestelmästä toiseen</h3>
        <p>Sinulla on oikeus saada henkilötietosi meiltä jäsennellyssä ja yleisesti käytetyssä muodossa, jotta voit välittää tiedot toiselle rekisterinpitäjälle.</p>
        <h3>Oikeus peruuttaa suostumus</h3>
        <p>Jos tietojesi käsittely perustuu suostumukseen, sinulla on oikeus peruuttaa suostumus milloin tahansa.</p>

        <h2>11. Oikeuksiesi käyttäminen</h2>
        <p>Voit käyttää oikeuksiasi lähettämällä kirjeen tai sähköpostin sisältäen nimesi, osoitteesi, puhelinnumerosi ja kopion voimassaolevasta henkilöllisyystodistuksesta. Jos pyyntösi koskee evästeessä olevaa henkilötietoa, on sinun liitettävä pyyntöösi kopio kyseisestä evästeestä. Voimme pyytää lisätietoja, jotka ovat tarpeen henkilöllisyytesi varmentamiseksi. Voimme hylätä pyynnöt, jotka toistuvat kohtuuttoman usein, ovat liiallisia tai jotka ovat perusteettomia.</p>
        <p>Jos koet henkilötietojesi käsittelyn olevan ristiriidassa voimassaolevan lainsäädännön kanssa, voit tehdä valituksen paikalliselle tietosuojavalvontaviranomaiselle.</p>

        <h2>12. Kuka on rekisterinpitäjä ja kehen voin ottaa yhteyttä?</h2>
        <p>Rekisterinpitäjä on:<br />Henna Heino ja Janina Leino</p>
      </article>
    </div>
  )
}
