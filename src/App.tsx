import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Advantages from './components/Advantages'
import Managers from './components/Managers'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Advantages />
        <Managers />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
