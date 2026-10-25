import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { about, personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 bg-[#F3ECE2]/40 border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C41E3A]">
            <span>About {personal.name}</span>
            <span aria-hidden="true">·</span>
            <span>Background & Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#231F20] font-display text-balance">
            Crafting software that solves practical daily problems.
          </h2>
          <p className="text-base sm:text-lg text-[#635B54] leading-relaxed">
            {about.lead}
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait Frame without any taglines or core principles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden bg-[#FFFDF9] border border-[#E8DFD3] p-3 shadow-sm group">
              <div className="relative aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden bg-[#F3ECE2]">
                <img
                  src={personal.avatarImage}
                  alt={personal.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Clean Narrative and Quick Facts */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-[#635B54] leading-relaxed text-base">
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="first-of-type:text-[#231F20] first-of-type:font-medium">
                  {p}
                </p>
              ))}
            </div>

            {/* Quick Facts Card */}
            <div className="rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] overflow-hidden shadow-sm">
              <div className="px-6 py-4 bg-[#FAF7F2] border-b border-[#E8DFD3]">
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#C41E3A]">
                  Overview & Credentials
                </h3>
              </div>
              <div className="divide-y divide-[#E8DFD3]">
                {about.facts.map((fact) => (
                  <div key={fact.label} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 hover:bg-[#FAF7F2] transition-colors">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#C41E3A]">
                      {fact.label}
                    </span>
                    <span className="text-sm font-medium text-[#231F20]">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
