import { Analytics } from '@vercel/analytics/react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import CTA from './components/sections/CTA';
import ContactForm from './components/sections/ContactForm';
import './styles/theme.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
