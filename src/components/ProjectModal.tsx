import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Zap, Layers, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'architecture' | 'features'>('preview');
  const [demoState, setDemoState] = useState<{ activeTheme: 'antique' | 'contrast'; quantity: number }>({
    activeTheme: 'antique',
    quantity: 1,
  });

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#231F20]/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#FAF7F2] rounded-2xl border border-[#E8DFD3] shadow-2xl flex flex-col text-[#231F20]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD3]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C41E3A]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C41E3A]">
              Project Deep Dive · {project.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-[#635B54] hover:text-[#C41E3A] hover:bg-[#F3ECE2] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Project Title and Overview */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#231F20]">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[#635B54] leading-relaxed max-w-3xl">
              {project.longDescription}
            </p>

            {/* Tags strip */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-[#635B54]">
              {project.tags.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <span className="font-medium text-[#231F20]">{tag}</span>
                  {idx < project.tags.length - 1 && <span className="text-[#C41E3A]" aria-hidden="true">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-[#FFFDF9] border border-[#E8DFD3]">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="text-center space-y-0.5">
                <span className="text-xl sm:text-2xl font-bold text-[#C41E3A] font-display tabular-nums">
                  {metric.value}
                </span>
                <p className="text-[11px] uppercase tracking-wider text-[#635B54] font-medium">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 p-1 bg-[#F3ECE2]/80 rounded-xl border border-[#E8DFD3] max-w-md">
            <button
              type="button"
              onClick={() => setActiveTab('preview')}
              className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'preview'
                  ? 'bg-[#C41E3A] text-white shadow-sm'
                  : 'text-[#635B54] hover:text-[#231F20]'
              }`}
            >
              Interactive Preview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('features')}
              className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'features'
                  ? 'bg-[#C41E3A] text-white shadow-sm'
                  : 'text-[#635B54] hover:text-[#231F20]'
              }`}
            >
              Key Features
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('architecture')}
              className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'architecture'
                  ? 'bg-[#C41E3A] text-white shadow-sm'
                  : 'text-[#635B54] hover:text-[#231F20]'
              }`}
            >
              Tech Architecture
            </button>
          </div>

          {/* Tab 1: Interactive Preview & Simulated Browser Chrome */}
          {activeTab === 'preview' && (
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-[#E8DFD3] bg-[#231F20] shadow-md">
                {/* Browser Title Bar */}
                <div className="px-4 py-2.5 bg-[#1F1B18] border-b border-white/10 flex items-center justify-between text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-[11px] text-white/50">{project.liveUrl}</span>
                  </div>
                  <span className="text-[10px] uppercase font-mono text-[#C41E3A]">Live Simulator</span>
                </div>

                {/* Screenshot Visual */}
                <div className="relative aspect-[16/9] w-full bg-[#FAF7F2] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  {/* Interactive floating control simulator */}
                  <div className="absolute bottom-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-md p-3 rounded-xl border border-[#E8DFD3] shadow-lg flex items-center gap-3 text-xs">
                    <span className="text-[#635B54] font-medium">Demo Simulator:</span>
                    <button
                      type="button"
                      onClick={() => setDemoState(prev => ({ ...prev, quantity: prev.quantity + 1 }))}
                      className="px-2.5 py-1 bg-[#C41E3A] text-white rounded-md font-semibold hover:bg-[#A81830] transition-colors"
                    >
                      Interactive Click ({demoState.quantity})
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Key Features */}
          {activeTab === 'features' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FFFDF9] border border-[#E8DFD3] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#C41E3A]">
                    <CheckCircle2 className="w-4 h-4 text-[#C41E3A]" />
                    <span>Capability 0{idx + 1}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#231F20] font-medium leading-relaxed">
                    {feat}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Tech Architecture */}
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.techStack.map((stack) => (
                  <div key={stack.category} className="p-4 rounded-xl bg-[#FFFDF9] border border-[#E8DFD3] space-y-2">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-[#C41E3A]">
                      {stack.category}
                    </h4>
                    <ul className="space-y-1 text-xs text-[#231F20]">
                      {stack.items.map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#635B54]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Links Bar */}
          <div className="pt-4 border-t border-[#E8DFD3] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#C41E3A] rounded-xl hover:bg-[#A81830] transition-colors shadow-sm"
              >
                <span>Visit Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#231F20] bg-[#FFFDF9] border border-[#E8DFD3] rounded-xl hover:border-[#C41E3A] hover:text-[#C41E3A] transition-colors shadow-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs text-[#635B54] hover:text-[#231F20] font-medium"
            >
              Back to Portfolio
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
