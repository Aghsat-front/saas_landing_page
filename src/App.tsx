import Download from './components/Download'
import Faq from './components/Faq'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'

function App() {

  return (
    <>
      <main className='overflow-hidden'>
        <Header/>
        <Hero/>
        <Features/>
        <Pricing/>
        <Faq/>
        <Download/>
        <Footer/>
      </main>
    </>
  )
}

export default App
