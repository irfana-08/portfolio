import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E8DFD3] text-[#635B54]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#E8DFD3]">
          
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-[#C41E3A] text-[#FAF7F2] flex items-center justify-center font-bold text-sm">
              {personal.monogram}
            </span>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#231F20] font-display">
                {personal.name}
              </span>
              <span className="text-[11px] text-[#A39B92] uppercase tracking-wider">
                {personal.role}
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#C41E3A] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#231F20] bg-[#FFFDF9] border border-[#E8DFD3] rounded-xl hover:border-[#C41E3A] hover:text-[#C41E3A] transition-colors shadow-sm"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C41E3A]" />
          </button>
        </div>

        {/* Bottom Sub-Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A39B92]">
          <p>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a 
              href={personal.social.github} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#C41E3A] transition-colors p-1"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href={personal.social.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#C41E3A] transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href={`mailto:${personal.email}`}
              className="hover:text-[#C41E3A] transition-colors p-1"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#635B54]">
            <span className="w-2 h-2 rounded-full bg-[#C41E3A]" />
            <span>AntiqueWhite · Cherry Red Palette</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
