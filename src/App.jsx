import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Products from './components/Products/Products'
import Differentials from './components/Differentials/Differentials'
import Gallery from './components/Gallery/Gallery'
import HowToBuy from './components/HowToBuy/HowToBuy'
import Location from './components/Location/Location'
import FinalCta from './components/FinalCta/FinalCta'
import Footer from './components/Footer/Footer'
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat'

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Products />
                <Differentials />
                <Gallery />
                <HowToBuy />
                <Location />
                <FinalCta />
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    )
}
