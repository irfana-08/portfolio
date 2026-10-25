import React, { useState } from 'react';
import { Download, GraduationCap, Briefcase, Award, Sparkles, ExternalLink, Eye, X, CheckCircle2, FileText, UserCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeProps {
  onTriggerDownload?: () => void;
}

export const Resume: React.FC<ResumeProps> = () => {
  const { education, experience, softSkills, personal, achievements } = PORTFOLIO_DATA;
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<{ title: string; image: string; pdf: string } | null>(null);

  const handleDownloadPDF = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#C41E3A', '#FAF7F2', '#231F20']
      });
    } catch (e) {
      // safe fallback
    }

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 5000);
  };

  return (
    <section id="resume" className="py-24 bg-[#FAF7F2] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C41E3A]">
              <span>Official Resume</span>
              <span aria-hidden="true">·</span>
              <span>Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#231F20] font-display text-balance">
              Resume & Academic Profile
            </h2>
            <p className="text-base sm:text-lg text-[#635B54] leading-relaxed">
              Computer Science and Engineering Student at Nadar Saraswathi College of Engineering and Technology (Anna University, 8.41 CGPA) & Web Developer at SAM AI Technologies.
            </p>
          </div>

          {/* Action Download Button - Direct PDF Download */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-end no-print">
            <a
              href="/IRFANA_RESUME.pdf"
              download="IRFANA_S_RESUME.pdf"
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wide uppercase text-[#FAF7F2] bg-[#C41E3A] rounded-xl hover:bg-[#A81830] active:scale-[0.98] transition-all shadow-sm hover:shadow-[0_4px_16px_rgba(196,30,58,0.25)] whitespace-nowrap cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            <button
              type="button"
              onClick={() => setSelectedDoc({
                title: 'Official Resume — Irfana S',
                image: personal.resumePreviewImage,
                pdf: personal.resumePdfUrl
              })}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold text-[#231F20] bg-[#FFFDF9] border border-[#E8DFD3] rounded-xl hover:border-[#C41E3A] hover:text-[#C41E3A] transition-all shadow-sm cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#C41E3A]" />
              <span>Preview Document</span>
            </button>
          </div>
        </div>

        {/* Success Alert Banner on Download */}
        {downloadSuccess && (
          <div className="mb-8 p-4 rounded-xl bg-[#FAF0E6] border border-[#C41E3A]/40 text-xs text-[#231F20] flex items-center justify-between animate-in fade-in slide-in-from-top-2 no-print">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C41E3A]" />
              <span>Downloading official resume <strong>IRFANA_S_RESUME.pdf</strong>!</span>
            </div>
            <a 
              href="/IRFANA_RESUME.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[11px] font-mono text-[#C41E3A] underline"
            >
              Click to open directly
            </a>
          </div>
        )}

        {/* Resume Content Blocks */}
        <div className="space-y-12 max-w-5xl">
          
          {/* Experience Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#E8DFD3] pb-4">
              <Briefcase className="w-5 h-5 text-[#C41E3A]" />
              <h3 className="text-xl font-bold text-[#231F20] font-display">
                Experience
              </h3>
            </div>

            <div className="space-y-4">
              {(experience || []).map((exp) => (
                <div
                  key={exp.company}
                  className="p-8 sm:p-10 rounded-3xl bg-[#FFFDF9] border border-[#E8DFD3] space-y-4 shadow-sm hover:border-[#C41E3A]/40 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <h4 className="text-xl font-bold text-[#231F20] font-display">
                        {exp.company}
                      </h4>
                      <p className="text-base font-semibold text-[#C41E3A] mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                    <span className="inline-flex text-xs font-semibold text-[#231F20] bg-[#FAF0E6] px-3.5 py-1.5 rounded-lg border border-[#E8DFD3] shrink-0 self-start">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-[#635B54] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#E8DFD3] pb-4">
              <GraduationCap className="w-5 h-5 text-[#C41E3A]" />
              <h3 className="text-xl font-bold text-[#231F20] font-display">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {(education || []).map((edu) => (
                <div
                  key={edu.degree}
                  className="p-8 sm:p-10 rounded-3xl bg-[#FFFDF9] border border-[#E8DFD3] space-y-4 shadow-sm hover:border-[#C41E3A]/40 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-[#231F20] font-display">
                        {edu.degree}
                      </h4>
                      <p className="text-sm sm:text-base font-semibold text-[#C41E3A]">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {edu.cgpa && (
                        <span className="inline-flex text-xs font-bold text-white bg-[#C41E3A] px-3.5 py-1.5 rounded-lg shadow-sm">
                          {edu.cgpa}
                        </span>
                      )}
                      <span className="inline-flex text-xs font-semibold text-[#231F20] bg-[#FAF0E6] px-3.5 py-1.5 rounded-lg border border-[#E8DFD3]">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#635B54] leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#E8DFD3] pb-4">
              <UserCheck className="w-5 h-5 text-[#C41E3A]" />
              <h3 className="text-xl font-bold text-[#231F20] font-display">
                Soft Skills
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {(softSkills || []).map((skill, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] hover:border-[#C41E3A]/40 transition-all flex items-center gap-2.5 shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C41E3A] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#231F20]">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications (NPTEL) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#E8DFD3] pb-4">
              <Award className="w-5 h-5 text-[#C41E3A]" />
              <h3 className="text-xl font-bold text-[#231F20] font-display">
                Certifications & Achievements
              </h3>
            </div>

            <div className="space-y-6">
              {(achievements || []).map((ach) => (
                <div
                  key={ach.id}
                  className="p-8 sm:p-10 rounded-3xl bg-[#FFFDF9] border border-[#E8DFD3] space-y-5 shadow-sm hover:border-[#C41E3A]/40 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-[#231F20] font-display">
                        {ach.title} — {ach.course}
                      </h4>
                      <p className="text-sm font-semibold text-[#635B54]">
                        {ach.partner} <span className="text-[#A39B92] font-normal">· {ach.issuedBy}</span>
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex text-xs font-bold text-white bg-[#C41E3A] px-3.5 py-1.5 rounded-lg shadow-sm">
                        Score: {ach.score}
                      </span>
                      <span className="inline-flex text-xs font-mono font-medium text-[#231F20] bg-[#FAF0E6] px-3 py-1.5 rounded-lg border border-[#E8DFD3]">
                        {ach.rollNo}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#635B54] leading-relaxed">
                    {ach.description}
                  </p>

                  <div className="pt-4 border-t border-[#E8DFD3]/60 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedDoc({
                        title: 'NPTEL Certificate — Introduction to Operating Systems',
                        image: ach.certificateImage,
                        pdf: ach.certificatePdf
                      })}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FAF7F2] bg-[#C41E3A] rounded-xl hover:bg-[#A81830] transition-colors shadow-sm cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View NPTEL Certificate</span>
                    </button>

                    <span className="text-xs text-[#A39B92]">
                      Issued by IIT Madras & NPTEL
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Document Lightbox Preview Modal */}
        {selectedDoc && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedDoc(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#FFFDF9] rounded-2xl border border-[#E8DFD3] shadow-2xl p-4 sm:p-6 overflow-hidden max-h-[95vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD3] mb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C41E3A]">
                  <FileText className="w-4 h-4" />
                  <span>{selectedDoc.title}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedDoc(null)}
                  className="p-1.5 text-[#635B54] hover:text-[#C41E3A] hover:bg-[#F3ECE2] rounded-lg transition-colors cursor-pointer"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-xl overflow-y-auto border border-[#E8DFD3] bg-[#F3ECE2] flex-1 flex items-center justify-center p-2">
                <img
                  src={selectedDoc.image}
                  alt={selectedDoc.title}
                  className="w-full h-auto object-contain max-h-[75vh] shadow-sm rounded-lg"
                />
              </div>

              <div className="pt-4 border-t border-[#E8DFD3] mt-4 flex items-center justify-between text-xs text-[#635B54]">
                <span>Irfana S · Computer Science and Engineering</span>
                <a
                  href={selectedDoc.pdf}
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#C41E3A] text-white rounded-lg font-semibold hover:bg-[#A81830] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF Document</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
