import React from 'react';
import { FileCode, Palette, Code2, Atom } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const SKILL_ICONS: Record<string, React.ReactNode> = {
  HTML: <FileCode className="w-6 h-6 text-[#C41E3A]" />,
  CSS: <Palette className="w-6 h-6 text-[#C41E3A]" />,
  JavaScript: <Code2 className="w-6 h-6 text-[#C41E3A]" />,
  React: <Atom className="w-6 h-6 text-[#C41E3A]" />,
};

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-24 bg-[#FAF7F2] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C41E3A]">
            <span>Technical Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Core Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#231F20] font-display text-balance">
            Skills & Core Technologies
          </h2>
          <p className="text-base sm:text-lg text-[#635B54] leading-relaxed">
            Focused expertise in building modern, responsive, and interactive web applications.
          </p>
        </div>

        {/* 4 Core Skills Grid: HTML, CSS, JavaScript, React */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-6 rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] hover:border-[#C41E3A]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(35,31,32,0.06)] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAF0E6] flex items-center justify-center transition-colors group-hover:bg-[#C41E3A] group-hover:text-white">
                  <span className="group-hover:text-white transition-colors">
                    {SKILL_ICONS[skill.name] || <Code2 className="w-6 h-6 text-[#C41E3A]" />}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#231F20] font-display group-hover:text-[#C41E3A] transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#635B54] leading-relaxed mt-2">
                    {skill.description}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="pt-4 border-t border-[#E8DFD3]/60 space-y-2">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-[#A39B92] uppercase tracking-wider text-[11px]">Proficiency</span>
                  <span className="font-mono font-semibold text-[#C41E3A]">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#F3ECE2] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C41E3A] rounded-full transition-all duration-700 ease-out origin-left group-hover:bg-[#A81830]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
