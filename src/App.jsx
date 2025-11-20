import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Instruments from './components/Instruments'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <Hero />
      <Instruments />
      <BookingForm />
      <Footer />
    </div>
  )
}

export default App
