import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadResume }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Decorative subtle background accents */}
      <div 
        className="absolute top-12 right-[-5%] w-[450px] h-[450px] rounded-full bg-[#C41E3A]/5 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-[-5%] w-[350px] h-[350px] rounded-full bg-[#FAF0E6]/80 blur-2xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Split Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Academic Kicker */}
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#C41E3A]">
              <span className="w-2 h-2 rounded-full bg-[#C41E3A]" />
              <span>Computer Science & Engineering Student</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#231F20] leading-[1.1] font-display text-balance">
              Building interactive web applications with{' '}
              <span className="text-[#C41E3A] italic font-serif">precision</span>{' '}
              and purposeful design.
            </h1>

            {/* Bio */}
            <p className="text-lg sm:text-xl text-[#635B54] font-normal leading-relaxed max-w-2xl">
              Hello, I am <strong className="text-[#231F20] font-semibold">{personal.name}</strong> — a {personal.role}.
              {personal.shortBio}
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#FAF7F2] bg-[#C41E3A] rounded-xl hover:bg-[#A81830] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_16px_rgba(196,30,58,0.22)] hover:shadow-[0_6px_22px_rgba(196,30,58,0.32)]"
              >
                <span>View Featured Project</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="/IRFANA_RESUME.pdf"
                download="IRFANA_S_RESUME.pdf"
                onClick={onDownloadResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#231F20] bg-[#FFFDF9] border border-[#E8DFD3] rounded-xl hover:border-[#C41E3A] hover:text-[#C41E3A] active:scale-[0.98] transition-all duration-200 shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#C41E3A]" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Social & Direct Contact Links */}
            <div className="pt-4 flex items-center gap-6 text-sm text-[#635B54]">
              <span className="text-xs uppercase tracking-wider text-[#A39B92] font-medium">Connect:</span>
              <div className="flex items-center gap-4">
                <a 
                  href={personal.social.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 text-[#231F20] hover:text-[#C41E3A] transition-colors rounded-lg hover:bg-[#F3ECE2]"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={personal.social.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 text-[#231F20] hover:text-[#C41E3A] transition-colors rounded-lg hover:bg-[#F3ECE2]"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={`mailto:${personal.email}`}
                  className="p-2 text-[#231F20] hover:text-[#C41E3A] transition-colors rounded-lg hover:bg-[#F3ECE2]"
                  aria-label="Direct Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Portrait Frame without taglines under picture */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Border Frame */}
              <div className="absolute -inset-2 rounded-3xl border border-[#C41E3A]/20 transform rotate-1 pointer-events-none" />
              
              {/* Main Clean Card Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-[#FFFDF9] border border-[#E8DFD3] shadow-[0_12px_40px_rgba(35,31,32,0.08)] p-3 group">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#F3ECE2]">
                  <img
                    src={personal.avatarImage}
                    alt={personal.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
