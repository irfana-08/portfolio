import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'New Project / Collaboration',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please write at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#C41E3A', '#FAF7F2', '#231F20']
        });
      } catch (err) {
        // safe fallback
      }
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'New Project / Collaboration',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#F3ECE2]/40 border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C41E3A]">
            <span>Initiate Dialogue</span>
            <span aria-hidden="true">·</span>
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#231F20] font-display text-balance">
            Let's build something exceptional together.
          </h2>
          <p className="text-base sm:text-lg text-[#635B54] leading-relaxed">
            Whether you have a breakthrough project in mind, require senior frontend engineering leadership, or wish to explore a collaboration — I would love to hear from you.
          </p>
        </div>

        {/* Contact Grid: Info Cards + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] space-y-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#231F20]">
                Direct Coordinates
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Email with copy */}
                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD3] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF0E6] text-[#C41E3A] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[10px] uppercase tracking-wider text-[#A39B92] font-semibold">Email Address</p>
                      <a href={`mailto:${personal.email}`} className="font-medium text-[#231F20] hover:text-[#C41E3A] truncate block">
                        {personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 text-[#635B54] hover:text-[#C41E3A] hover:bg-[#F3ECE2] rounded-lg transition-colors shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD3] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF0E6] text-[#C41E3A] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#A39B92] font-semibold">Phone / WhatsApp</p>
                    <a href={`tel:${personal.phone}`} className="font-medium text-[#231F20] hover:text-[#C41E3A]">
                      {personal.phone}
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] shadow-sm">
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#FAF0E6] text-[#C41E3A] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-display text-[#231F20]">
                      Message Received
                    </h3>
                    <p className="text-sm text-[#635B54] max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <strong className="text-[#231F20]">{formData.name}</strong>. {personal.name} will review your note and respond back to <strong className="text-[#231F20]">{formData.email}</strong> shortly.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD3] max-w-md mx-auto text-left text-xs text-[#635B54] space-y-1">
                    <p className="font-semibold text-[#231F20]">Subject: {formData.subject}</p>
                    <p className="italic">"{formData.message}"</p>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#231F20] bg-[#FAF7F2] border border-[#E8DFD3] rounded-xl hover:border-[#C41E3A] hover:text-[#C41E3A] transition-colors"
                  >
                    <span>Send Another Note</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold font-display text-[#231F20]">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs sm:text-sm text-[#635B54] mt-1">
                      Fill in the details below and I will get back to you promptly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs uppercase tracking-wider font-semibold text-[#231F20]">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-3 text-xs sm:text-sm bg-[#FAF7F2] border rounded-xl text-[#231F20] placeholder-[#A39B92] focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500 focus:border-red-500' : 'border-[#E8DFD3] focus:border-[#C41E3A]'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-600">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs uppercase tracking-wider font-semibold text-[#231F20]">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@company.com"
                        className={`w-full px-4 py-3 text-xs sm:text-sm bg-[#FAF7F2] border rounded-xl text-[#231F20] placeholder-[#A39B92] focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#E8DFD3] focus:border-[#C41E3A]'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-600">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject / Purpose */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs uppercase tracking-wider font-semibold text-[#231F20]">
                      Inquiry Focus
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-[#FAF7F2] border border-[#E8DFD3] rounded-xl text-[#231F20] focus:outline-none focus:border-[#C41E3A] transition-colors"
                    >
                      <option value="New Project / Collaboration">New Project / Web Application Build</option>
                      <option value="Full-Time Engineering Role">Full-Time Engineering Role / Leadership</option>
                      <option value="Design System Consulting">Design System & Architecture Advisory</option>
                      <option value="General Conversation">General Conversation & Tech Inquiries</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs uppercase tracking-wider font-semibold text-[#231F20]">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me a bit about your timeline, team, or project vision..."
                      className={`w-full px-4 py-3 text-xs sm:text-sm bg-[#FAF7F2] border rounded-xl text-[#231F20] placeholder-[#A39B92] focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500 focus:border-red-500' : 'border-[#E8DFD3] focus:border-[#C41E3A]'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-red-600">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#C41E3A] rounded-xl hover:bg-[#A81830] active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-[0_4px_16px_rgba(196,30,58,0.25)] disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Transmission...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Dispatch Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
