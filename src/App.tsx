import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { AboutMe } from './sections/AboutMe';
import { FeaturedPortfolio } from './sections/FeaturedPortfolio';
import { Services } from './sections/Services';
import { Impact } from './sections/Impact';
import { Experience } from './sections/Experience';
import { Brands } from './sections/Brands';
import { Education } from './sections/Education';
import { Languages } from './sections/Languages';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { FloatingHireMe } from './components/FloatingHireMe';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Paper Grain overlay globally applied */}
      <div className="grain-overlay" />

      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen bg-bg-primary text-text-primary selection:bg-accent/20 selection:text-text-primary">
          <Navbar />

          <main>
            <Hero />
            <AboutMe />
            <FeaturedPortfolio />
            <Services />
            <Impact />
            <Experience />
            <Brands />
            <Education />
            <Languages />
            <Contact />
          </main>

          <Footer />
          <FloatingHireMe />
        </div>
      )}
    </>
  );
}

export default App;
