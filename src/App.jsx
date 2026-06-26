import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import CursorGlow from './components/CursorGlow';
import Particles from './components/Particles';

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="page-loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="page-loader-inner">
              <div className="page-loader-logo">Qurat</div>
              <div className="page-loader-bar">
                <div className="page-loader-bar-fill" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Particles />
          <CursorGlow />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Process />
            <Contact />
          </main>
          <Footer />
          <FloatingActions />
          <button
            className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </>
      )}
    </>
  );
}

export default App;
