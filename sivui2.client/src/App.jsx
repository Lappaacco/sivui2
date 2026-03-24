import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Etusivu from './components/Etusivu'
import Palvelut from './components/Palvelut'
import Hinnasto from './components/Hinnasto'
import Ajanvaraus from './components/Ajanvaraus'
import Yhteystiedot from './components/Yhteystiedot'
import Footer from './components/Footer'
import Tietosuojaseloste from './components/Tietosuojaseloste'

function MainPage() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Etusivu />
        <Palvelut />
        <Hinnasto />
        <Ajanvaraus />
        <Yhteystiedot />
        <Footer />
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/tietosuojaseloste" element={<Tietosuojaseloste />} />
    </Routes>
  )
}

export default App
