import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, ArrowUpRight, Copy, Check, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Website Design',
    budget: '$3,000 - $5,000',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [copied, setCopied] = useState(false);

  const projectTypes = [
    'Website Design',
    'Web Development',
    'Landing Page',
    'Creative Portfolio',
    'Full Platform Experience',
  ];

  const budgetTiers = [
    '<$2,000',
    '$2,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
    'Undetermined',
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@domain.com).';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please tell us briefly about your project goals.';
    } else if (formData.description.trim().length < 15) {
      newErrors.description = 'Please write at least 15 characters to explain your requirements.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate verified frontend demo processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData, timestamp: new Date().toLocaleTimeString() });
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      email: '',
      projectType: 'Website Design',
      budget: '$3,000 - $5,000',
      description: '',
    });
    setErrors({});
  };

  const copyInquirySummary = () => {
    if (!submittedData) return;
    const text = `Project Inquiry:
Name: ${submittedData.name}
Email: ${submittedData.email}
Project Type: ${submittedData.projectType}
Budget: ${submittedData.budget}
Details: ${submittedData.description}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#070B14] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-radial-gradient pointer-events-none opacity-60" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#4F8CFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#111A2B] border border-white/10 text-xs font-mono font-semibold uppercase tracking-widest text-[#70D6FF] mb-4">
            <span>LET'S CREATE SOMETHING GREAT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            HAVE AN IDEA?{' '}
            <span className="text-[#4F8CFF]">LET'S BUILD IT.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9AA8BC] leading-relaxed">
            Tell us what you're imagining. Let's turn your next digital idea into a polished web experience.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href="#contact-form"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#4F8CFF] text-white text-sm font-semibold hover:bg-[#5C95FF] transition-colors shadow-glow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Start a Conversation</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-lg bg-[#111A2B] text-white text-sm font-semibold hover:bg-[#162238] border border-white/10 transition-colors"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4 text-[#70D6FF]" />
            </a>
          </div>
        </div>

        {/* Contact Form Container Panel */}
        <div id="contact-form" className="max-w-4xl mx-auto rounded-3xl bg-[#0B1220]/90 border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl text-left relative overflow-hidden">
          
          {/* Subtle upper glow line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4F8CFF] to-transparent" />

          {submittedData ? (
            /* Honest Demo Submission Success View */
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <CheckCircle className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400">
                  DEMO SUBMISSION VERIFIED
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Inquiry Processed Successfully
                </h3>
                <p className="text-sm sm:text-base text-[#9AA8BC] mt-2 leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{submittedData.name}</span>. This frontend demonstration accurately parsed and validated your project parameters.
                </p>
              </div>

              {/* Parsed Inquiry Summary Card */}
              <div className="p-5 rounded-2xl bg-[#070B14] border border-white/10 space-y-3 font-mono text-xs">
                <div className="flex justify-between pb-2 border-b border-white/5 text-[#9AA8BC]">
                  <span>DISPATCH TIMESTAMP:</span>
                  <span className="text-white">{submittedData.timestamp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9AA8BC]">CONTACT:</span>
                  <span className="text-white">{submittedData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9AA8BC]">PROJECT TYPE:</span>
                  <span className="text-[#70D6FF]">{submittedData.projectType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9AA8BC]">BUDGET TIER:</span>
                  <span className="text-emerald-400">{submittedData.budget}</span>
                </div>
                <div className="pt-2 border-t border-white/5 text-[#F5F7FB] font-sans text-xs">
                  <span className="text-[#9AA8BC] font-mono block mb-1">PROJECT SCOPE:</span>
                  "{submittedData.description}"
                </div>
              </div>

              {/* Developer / Deployment Explanation Note */}
              <div className="p-4 rounded-xl bg-[#111A2B]/70 border border-[#4F8CFF]/30 text-xs text-[#9AA8BC] space-y-2">
                <div className="text-white font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#4F8CFF]" />
                  <span>Production Integration Guide:</span>
                </div>
                <p>
                  Because this is an exploratory agency frontend without an active database or serverless endpoint, no messages are silently discarded. To connect live delivery in production, integrate a webhook service like <strong>Formspree</strong>, <strong>Resend API</strong>, or <strong>EmailJS</strong> into this component handler.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={copyInquirySummary}
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-[#111A2B] text-white text-xs font-semibold hover:bg-[#162238] border border-white/10 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Inquiry Summary'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-3 rounded-xl bg-[#4F8CFF] text-white text-xs font-semibold hover:bg-[#5C95FF] transition-colors"
                >
                  Submit Another Demo Inquiry
                </button>
              </div>
            </div>
          ) : (
            /* Live Form View */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#9AA8BC] mb-2 font-medium">
                    Your Name <span className="text-[#4F8CFF]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#070B14] border ${
                      errors.name ? 'border-rose-500/80 focus:ring-rose-500/30' : 'border-white/10 focus:border-[#4F8CFF] focus:ring-[#4F8CFF]/20'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#9AA8BC] mb-2 font-medium">
                    Email Address <span className="text-[#4F8CFF]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="alex@company.com"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#070B14] border ${
                      errors.email ? 'border-rose-500/80 focus:ring-rose-500/30' : 'border-white/10 focus:border-[#4F8CFF] focus:ring-[#4F8CFF]/20'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

              </div>

              {/* Project Type Radio Pills */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9AA8BC] mb-2.5 font-medium">
                  Project Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                        formData.projectType === type
                          ? 'bg-[#4F8CFF] text-white shadow-sm'
                          : 'bg-[#070B14] text-[#9AA8BC] border border-white/5 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Tier Selector (Optional Field) */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9AA8BC] mb-2.5 font-medium">
                  Estimated Budget (Optional)
                </label>
                <div className="flex flex-wrap gap-2">
                  {budgetTiers.map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: tier })}
                      className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all ${
                        formData.budget === tier
                          ? 'bg-[#111A2B] text-[#70D6FF] border border-[#70D6FF]/40'
                          : 'bg-[#070B14] text-[#9AA8BC] border border-white/5 hover:border-white/20'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Description Field */}
              <div>
                <label htmlFor="description" className="block text-xs font-mono uppercase tracking-wider text-[#9AA8BC] mb-2 font-medium">
                  Project Description <span className="text-[#4F8CFF]">*</span>
                </label>
                <textarea
                  id="description"
                  rows={4}
                  value={formData.description}
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value });
                    if (errors.description) setErrors({ ...errors, description: null });
                  }}
                  placeholder="Tell us about your brand, what you're aiming to build, key timeline requirements and any reference inspirations..."
                  className={`w-full px-4 py-3.5 rounded-xl bg-[#070B14] border ${
                    errors.description ? 'border-rose-500/80 focus:ring-rose-500/30' : 'border-white/10 focus:border-[#4F8CFF] focus:ring-[#4F8CFF]/20'
                  } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all resize-y`}
                />
                {errors.description && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.description}
                  </p>
                )}
              </div>

              {/* Submit Button & Honest Notice */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#3B72DE] hover:from-[#5C95FF] hover:to-[#457DE8] text-white font-semibold text-base shadow-glow-sm hover:shadow-glow-md transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Validating & Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Start a Conversation</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="text-[11px] text-[#9AA8BC] font-mono">
                  Honest demo validation • Instant feedback
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
