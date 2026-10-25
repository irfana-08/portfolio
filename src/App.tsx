import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeTuner, AntiqueThemeMode } from './components/ThemeTuner';
import confetti from 'canvas-confetti';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [themeMode, setThemeMode] = useState<AntiqueThemeMode>('linen');

  // Track active section for top bar indicator
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'resume', 'contact'];
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const buffer = 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - buffer;
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    const resumeEl = document.getElementById('resume');
    if (resumeEl) {
      resumeEl.scrollIntoView({ behavior: 'smooth' });
    }
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#C41E3A', '#FAF7F2', '#231F20']
      });
    } catch (e) {
      // safe fallback
    }
  };

  // Theme dynamic background tints
  const themeStyles = {
    linen: 'bg-[#FAF7F2]',
    ivory: 'bg-[#FDFBF7]',
    brocade: 'bg-[#F5EBE1]',
  }[themeMode];

  return (
    <div className={`min-h-screen ${themeStyles} text-[#231F20] transition-colors duration-300 selection:bg-[#C41E3A] selection:text-white`}>
      {/* Navigation Top Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        {/* Header / Hero Section */}
        <Hero onDownloadResume={handleDownloadResume} />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Resume Section */}
        <Resume onTriggerDownload={handleDownloadResume} />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Theme Nuance Tuner */}
      <ThemeTuner currentTheme={themeMode} onThemeChange={setThemeMode} />
    </div>
  );
}
