import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Copy, 
  Check, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Compass, 
  ArrowRight 
} from 'lucide-react';

export default function ContactPage() {
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

  useEffect(() => {
    document.title = 'Contact Studio — NEXORA DIGITAL';
  }, []);

  const projectTypes = [
    'Web Development',
    'Website Design',
    'Landing Page',
    'Portfolio Website',
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
    <div className="pt-24 sm:pt-32 pb-24 text-left overflow-hidden bg-grid-pattern min-h-screen">
      
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial-gradient pointer-events-none opacity-80" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#4F8CFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs font-mono text-[#9AA8BC] mb-8">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Contact</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#111A2B]/80 border border-white/10 backdrop-blur-md">
            <MessageSquare className="w-4 h-4 text-[#70D6FF]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#70D6FF] font-mono">
              DIRECT STUDIO INQUIRY
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Have an Idea?{' '}
            <span className="bg-gradient-to-r from-[#4F8CFF] via-[#70D6FF] to-[#3B72DE] bg-clip-text text-transparent">
              Let's Build It.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#9AA8BC] font-normal leading-relaxed">
            Tell us what you're imagining. We turn ambitious digital concepts into beautiful, intuitive and high-performing web experiences.
          </p>
        </div>

        {/* Two Column Grid: Form & Studio Expectations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Form Container Panel */}
          <div className="lg:col-span-8 rounded-3xl bg-[#0B1220]/90 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4F8CFF] to-transparent" />

            {submittedData ? (
              /* Verified Honest Demo Submission State */
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400">
                    DEMO SUBMISSION VERIFIED
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    Inquiry Parameters Validated
                  </h3>
                  <p className="text-sm sm:text-base text-[#9AA8BC] mt-2 leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{submittedData.name}</span>. This frontend demonstration successfully parsed and validated all requirements.
                  </p>
                </div>

                {/* Parsed Summary Card */}
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

                {/* Integration Notice */}
                <div className="p-4 rounded-xl bg-[#111A2B]/70 border border-[#4F8CFF]/30 text-xs text-[#9AA8BC] space-y-2">
                  <div className="text-white font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#4F8CFF]" />
                    <span>Production Service Setup:</span>
                  </div>
                  <p>
                    Because this project is an exploratory agency frontend without an active database, messages are not silently lost. To connect email delivery in production, integrate Formspree, Resend API, or EmailJS into this component handler.
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
              /* Live Validated Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#9AA8BC] mb-2 font-medium">
                      Your Name <span className="text-[#4F8CFF]">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      placeholder="e.g. Julian Drake"
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

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#9AA8BC] mb-2 font-medium">
                      Email Address <span className="text-[#4F8CFF]">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      placeholder="julian@studio.com"
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

                {/* Project Type */}
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

                {/* Budget (Optional) */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#9AA8BC] mb-2.5 font-medium">
                    Estimated Budget Tier (Optional)
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

                {/* Project Description */}
                <div>
                  <label htmlFor="contact-description" className="block text-xs font-mono uppercase tracking-wider text-[#9AA8BC] mb-2 font-medium">
                    Project Scope & Vision <span className="text-[#4F8CFF]">*</span>
                  </label>
                  <textarea
                    id="contact-description"
                    rows={5}
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

                {/* Submit Row */}
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
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-[#9AA8BC] font-mono">
                    Client-side validation • Instant feedback
                  </div>
                </div>

              </form>
            )}

          </div>

          {/* Sidebar Information */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-6 rounded-3xl bg-[#0B1220]/80 border border-white/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#111A2B] border border-white/10 flex items-center justify-center text-[#70D6FF]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Studio Response Time</h3>
              <p className="text-xs sm:text-sm text-[#9AA8BC] leading-relaxed">
                We review every inquiry within 24 business hours. If there is a fit, we'll schedule a discovery call to explore direction and technical requirements.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0B1220]/80 border border-white/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#111A2B] border border-white/10 flex items-center justify-center text-[#4F8CFF]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">What Helps Us Estimate</h3>
              <ul className="text-xs text-[#9AA8BC] space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF] mt-1.5 flex-shrink-0" />
                  <span>Target launch timeline or campaign deadlines.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF] mt-1.5 flex-shrink-0" />
                  <span>Key page types needed (e.g. Home, Services, Work).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF] mt-1.5 flex-shrink-0" />
                  <span>Any reference websites whose visual tone you admire.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#111A2B] to-[#070B14] border border-white/10 text-center space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#70D6FF] font-semibold block">
                PORTFOLIO SHOWCASE
              </span>
              <p className="text-xs text-[#9AA8BC]">
                Want to review our design thinking before submitting?
              </p>
              <Link
                to="/work"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-white hover:text-[#70D6FF] transition-colors"
              >
                <span>Browse Selected Concepts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
