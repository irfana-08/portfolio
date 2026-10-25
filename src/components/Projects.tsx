import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Github, Eye, CheckCircle2, ShieldCheck, Database, Calendar } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const project = PORTFOLIO_DATA.projects[0];

  if (!project) return null;

  return (
    <section id="projects" className="py-24 bg-[#F3ECE2]/30 border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C41E3A]">
            <span>Featured Production Project</span>
            <span aria-hidden="true">·</span>
            <span>Web Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#231F20] font-display text-balance">
            TaskFlow — Google Auth & Deadline Urgency
          </h2>
          <p className="text-base sm:text-lg text-[#635B54] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Featured Showcase Card */}
        <div className="rounded-3xl overflow-hidden bg-[#FFFDF9] border border-[#E8DFD3] shadow-[0_12px_40px_rgba(35,31,32,0.06)] hover:border-[#C41E3A]/60 transition-all duration-300">
          
          {/* Main Visual Display */}
          <div 
            className="relative aspect-[16/9] w-full overflow-hidden bg-[#F3ECE2] cursor-pointer group"
            onClick={() => setActiveModalProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
            
            {/* Scrim Overlay on Hover */}
            <div className="absolute inset-0 bg-[#231F20]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF7F2]/95 backdrop-blur-md text-[#231F20] text-xs font-semibold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <Eye className="w-4 h-4 text-[#C41E3A]" />
                <span>Explore Full Details & Architecture</span>
              </span>
            </div>

            {/* Corner Badges */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="bg-[#FAF7F2]/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#E8DFD3] text-xs font-semibold text-[#C41E3A] uppercase tracking-wider">
                Full Stack Web App
              </span>
              <span className="bg-[#FAF7F2]/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#E8DFD3] text-xs font-medium text-[#231F20] hidden sm:inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                Google OAuth
              </span>
            </div>
          </div>

          {/* Interactive Information & Highlights */}
          <div className="p-8 sm:p-10 space-y-8">
            
            {/* Title & Tagline */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#635B54]">
                {project.tags.map((tag, tIdx) => (
                  <React.Fragment key={tag}>
                    <span className="font-semibold text-[#231F20]">{tag}</span>
                    {tIdx < project.tags.length - 1 && (
                      <span className="text-[#C41E3A]" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <h3 
                onClick={() => setActiveModalProject(project)}
                className="text-2xl sm:text-3xl font-bold text-[#231F20] font-display hover:text-[#C41E3A] cursor-pointer transition-colors"
              >
                {project.title}
              </h3>

              <p className="text-sm sm:text-base text-[#635B54] leading-relaxed max-w-4xl">
                {project.longDescription}
              </p>
            </div>

            {/* Urgency Rules Strip matching project screenshot */}
            <div className="p-5 rounded-2xl bg-[#FAF0E6]/60 border border-[#E8DFD3] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C41E3A]">
                <span>⚡ Urgency Highlighting Rules</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium">
                <div className="flex items-center gap-2 bg-[#FFFDF9] p-3 rounded-xl border border-[#E8DFD3]">
                  <span className="w-3 h-3 rounded-full bg-red-500 shrink-0" />
                  <span>&lt; 3 Days: <strong>Urgent (Red)</strong></span>
                </div>
                <div className="flex items-center gap-2 bg-[#FFFDF9] p-3 rounded-xl border border-[#E8DFD3]">
                  <span className="w-3 h-3 rounded-full bg-blue-500 shrink-0" />
                  <span>3-10 Days: <strong>Upcoming (Blue)</strong></span>
                </div>
                <div className="flex items-center gap-2 bg-[#FFFDF9] p-3 rounded-xl border border-[#E8DFD3]">
                  <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0" />
                  <span>&gt; 10 Days: <strong>Later (Yellow)</strong></span>
                </div>
                <div className="flex items-center gap-2 bg-[#FFFDF9] p-3 rounded-xl border border-[#E8DFD3]">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
                  <span>Done: <strong>Completed (Green)</strong></span>
                </div>
              </div>
            </div>

            {/* Key Capabilities List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD3]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#C41E3A] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#231F20] font-medium">{feat}</span>
                </div>
              ))}
            </div>

            {/* Bottom Actions Bar */}
            <div className="pt-6 border-t border-[#E8DFD3] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#C41E3A] rounded-xl hover:bg-[#A81830] transition-colors shadow-sm flex items-center gap-2"
                >
                  <span>Open Deep Dive & Specs</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 text-xs font-semibold text-[#231F20] bg-[#FFFDF9] border border-[#E8DFD3] rounded-xl hover:border-[#C41E3A] hover:text-[#C41E3A] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              </div>

              <span className="text-xs text-[#A39B92] font-mono">
                Running locally on http://localhost:8000
              </span>
            </div>

          </div>

        </div>

        {/* Project Modal Component */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};
