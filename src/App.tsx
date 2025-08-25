import './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Vehicles from './components/Vehicles';
import Competitions from './components/Competitions';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from "./components/Gallery.tsx";
import Magazine from "./components/Magazine.tsx";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Team />
      <Gallery />
      <Magazine />
      <Vehicles />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;