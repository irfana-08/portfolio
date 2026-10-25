import React, { useState } from 'react';
import { SlidersHorizontal, Check, Sparkles } from 'lucide-react';

export type AntiqueThemeMode = 'linen' | 'ivory' | 'brocade';

interface ThemeTunerProps {
  currentTheme: AntiqueThemeMode;
  onThemeChange: (theme: AntiqueThemeMode) => void;
}

export const ThemeTuner: React.FC<ThemeTunerProps> = ({ currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const themeOptions: { id: AntiqueThemeMode; label: string; bgTone: string; cherryTone: string; desc: string }[] = [
    {
      id: 'linen',
      label: 'Antique Linen',
      bgTone: '#FAF7F2',
      cherryTone: '#C41E3A',
      desc: 'Balanced warm cream canvas with classic cherry red',
    },
    {
      id: 'ivory',
      label: 'Warm Ivory',
      bgTone: '#FDFBF7',
      cherryTone: '#D2042D',
      desc: 'Crisp bright antique white with vivid cherry accents',
    },
    {
      id: 'brocade',
      label: 'Vintage Brocade',
      bgTone: '#F5EBE1',
      cherryTone: '#990024',
      desc: 'Deep warm parchment tone with rich crimson wine',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 no-print">
      {isOpen ? (
        <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] shadow-[0_12px_36px_rgba(35,31,32,0.15)] w-72 space-y-3 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-[#E8DFD3]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C41E3A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#231F20]">
                Palette Nuances
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-xs text-[#A39B92] hover:text-[#C41E3A] p-1"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2">
            {themeOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  onThemeChange(opt.id);
                  setIsOpen(false);
                }}
                className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                  currentTheme === opt.id
                    ? 'border-[#C41E3A] bg-[#FAF0E6]/50 shadow-sm'
                    : 'border-[#E8DFD3] hover:border-[#C41E3A]/40 bg-white'
                }`}
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-inner"
                      style={{ backgroundColor: opt.bgTone }}
                    />
                    <span 
                      className="w-3.5 h-3.5 rounded-full shadow-sm"
                      style={{ backgroundColor: opt.cherryTone }}
                    />
                    <span className="text-xs font-semibold text-[#231F20]">
                      {opt.label}
                    </span>
                  </div>
                  <p className="text-[10px] text-[#635B54] pl-5">{opt.desc}</p>
                </div>
                {currentTheme === opt.id && <Check className="w-4 h-4 text-[#C41E3A]" />}
              </button>
            ))}
          </div>

          <p className="text-[10px] text-[#A39B92] text-center pt-1">
            AntiqueWhite & Cherry Red Edition
          </p>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#FFFDF9] border border-[#E8DFD3] text-xs font-semibold text-[#231F20] shadow-[0_4px_16px_rgba(35,31,32,0.08)] hover:border-[#C41E3A] hover:text-[#C41E3A] transition-all hover:scale-105 group"
          title="Customize antique nuance"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#C41E3A] group-hover:scale-125 transition-transform" />
          <span className="hidden sm:inline">Theme Palette</span>
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#C41E3A]" />
        </button>
      )}
    </div>
  );
};
