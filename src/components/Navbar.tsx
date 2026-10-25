import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setIsScrolled(currentScroll > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(35,31,32,0.05)] border-b border-[#E8DFD3]' 
          : 'bg-[#FAF7F2] border-b border-[#E8DFD3]/60'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="h-[2px] bg-[#C41E3A] transition-all duration-100 ease-out origin-left"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-3 whitespace-nowrap shrink-0 transition-transform hover:scale-[1.01]"
        >
          <span className="w-10 h-10 rounded-lg bg-[#C41E3A] text-[#FAF7F2] flex items-center justify-center font-bold text-base tracking-wider shadow-sm transition-transform group-hover:rotate-3">
            {PORTFOLIO_DATA.personal.monogram}
          </span>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#231F20] font-display">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-[11px] uppercase tracking-wider text-[#C41E3A] font-medium hidden sm:inline">
              Portfolio
            </span>
          </div>
        </a>

        {/* Zone 2: Single-line Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#635B54]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 transition-colors hover:text-[#C41E3A] whitespace-nowrap shrink-0 ${
                  isActive ? 'text-[#C41E3A] font-semibold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C41E3A] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-[#FAF7F2] bg-[#C41E3A] rounded-lg hover:bg-[#A81830] active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-[0_4px_14px_rgba(196,30,58,0.25)] whitespace-nowrap shrink-0"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#231F20] hover:text-[#C41E3A] hover:bg-[#F3ECE2] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8DFD3] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-[#231F20] hover:text-[#C41E3A] hover:bg-[#F3ECE2] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#C41E3A] rounded-lg hover:bg-[#A81830] transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
