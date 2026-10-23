import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Sparkles, 
  Layers, 
  UserCheck, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ArrowUpRight 
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { projectsData } from '../../data/projectsData';
import OrbitMockup from '../../components/mockups/OrbitMockup';
import AtelierMockup from '../../components/mockups/AtelierMockup';

export default function PortfolioWebsitesPage() {
  const service = servicesData.find(s => s.id === 'portfolio-websites');
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = 'Portfolio Website Design & Development — NEXORA DIGITAL';
  }, []);

  const related = projectsData.filter(p => service.relatedProjects.includes(p.id));

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const audienceTypes = [
    { title: "Creative Directors & Designers", desc: "Editorial visual rhythm, high-resolution galleries and custom cursor/hover treatments that highlight taste." },
    { title: "Engineers & Developers", desc: "Interactive architecture blueprints, clean live demos, GitHub/repo integrations and performance indicators." },
    { title: "Independent Studios & Founders", desc: "Bespoke agency branding, case study deep-dives and frictionless client inquiry pipelines." }
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-24 text-left overflow-hidden bg-grid-pattern min-h-screen">
      
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial-gradient pointer-events-none opacity-80" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#70D6FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs font-mono text-[#9AA8BC] mb-8">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#70D6FF]">Services</span>
          <span>/</span>
          <span className="text-white">Portfolio Websites</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#111A2B]/80 border border-white/10 backdrop-blur-md">
              <Briefcase className="w-4 h-4 text-[#70D6FF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#70D6FF] font-mono">
                BESPOKE PORTFOLIO SHOWCASES
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Your Work Deserves a{' '}
              <span className="bg-gradient-to-r from-[#4F8CFF] via-[#70D6FF] to-[#3B72DE] bg-clip-text text-transparent">
                Better Showcase.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#9AA8BC] max-w-2xl font-normal leading-relaxed">
              Personal and professional portfolio experiences that present your work with clarity, confidence and bespoke art direction.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#3B72DE] hover:from-[#5C95FF] hover:to-[#457DE8] text-white font-semibold text-base shadow-glow-sm hover:shadow-glow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>Create Your Portfolio</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-[#111A2B]/80 hover:bg-[#162238] text-white font-semibold text-base border border-white/10 hover:border-[#4F8CFF]/40 transition-all backdrop-blur-md"
              >
                <span>View Portfolio Studies</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl p-2 bg-[#0B1220]/80 border border-white/10 shadow-2xl backdrop-blur-xl">
              <OrbitMockup />
            </div>
          </div>
        </div>

        {/* Tailored For Specialists */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#70D6FF] block mb-2">
              AUDIENCE PROFILES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Crafted for professionals who take their craft seriously.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audienceTypes.map((aud, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-[#0B1220]/80 border border-white/10 hover:border-[#4F8CFF]/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#111A2B] border border-white/10 flex items-center justify-center text-[#70D6FF] mb-5">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{aud.title}</h3>
                <p className="text-xs sm:text-sm text-[#9AA8BC] leading-relaxed">{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Capabilities Grid */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#70D6FF] block mb-2">
              PORTFOLIO FEATURES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Everything needed to win high-caliber clients.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-[#0B1220]/80 border border-white/10 hover:border-[#4F8CFF]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-[#111A2B] border border-white/10 flex items-center justify-center text-[#4F8CFF] mb-5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-[#9AA8BC] leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#70D6FF] block mb-2">
              PORTFOLIO CREATION CYCLE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How we build your custom portfolio experience.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-[#0B1220]/60 border border-white/10 relative"
              >
                <div className="text-2xl font-black font-mono text-[#70D6FF]/30 mb-4">{step.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.name}</h3>
                <p className="text-xs sm:text-sm text-[#9AA8BC] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Concept Examples */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#70D6FF] block mb-2">
                REPRESENTATIVE CONCEPT SHOWCASE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Case studies exploring portfolio storytelling.
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#70D6FF] hover:text-white transition-colors"
            >
              <span>Explore All Concepts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((project) => (
              <Link
                key={project.id}
                to={project.path}
                className="group block rounded-2xl bg-[#0B1220]/80 border border-white/10 hover:border-[#4F8CFF]/50 p-6 transition-all hover:-translate-y-1"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${project.badgeColor}`}>
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#70D6FF] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#70D6FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9AA8BC] mb-5">{project.description}</p>
                <div className="p-2 rounded-xl bg-[#070B14] border border-white/5 overflow-hidden pointer-events-none">
                  {project.id === 'orbit-creative' ? <OrbitMockup /> : <AtelierMockup />}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#70D6FF] block mb-2">
              FREQUENT QUESTIONS
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Questions about portfolio design?
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0B1220]/80 border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="text-base font-bold text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#4F8CFF] transition-transform duration-200 ${
                      openFaq === idx ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-0 text-sm text-[#9AA8BC] leading-relaxed border-t border-white/5 mt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0B1220] via-[#111A2B] to-[#0B1220] border border-[#4F8CFF]/30 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4F8CFF] to-transparent" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Let's build a portfolio you are proud to share.
          </h2>
          <p className="text-base text-[#9AA8BC] max-w-xl mx-auto mb-8">
            Whether launching as an independent consultant or seeking world-class creative roles, present your work with confidence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#3B72DE] hover:from-[#5C95FF] hover:to-[#457DE8] text-white font-semibold text-base shadow-glow-sm hover:shadow-glow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Create Your Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
