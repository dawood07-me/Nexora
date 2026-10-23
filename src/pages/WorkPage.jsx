import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Info, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import AetherMockup from '../components/mockups/AetherMockup';
import AtelierMockup from '../components/mockups/AtelierMockup';
import OrbitMockup from '../components/mockups/OrbitMockup';

export default function WorkPage() {
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    document.title = 'Selected Concepts & Work — NEXORA DIGITAL';
  }, []);

  const getMockup = (id) => {
    switch (id) {
      case 'aether-finance':
        return <AetherMockup />;
      case 'atelier-noir':
        return <AtelierMockup />;
      case 'orbit-creative':
        return <OrbitMockup />;
      default:
        return null;
    }
  };

  const categories = ['ALL', 'FINTECH', 'LUXURY E-COMMERCE', 'PORTFOLIO'];

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'ALL') return true;
    if (filter === 'FINTECH') return p.category.includes('FINTECH');
    if (filter === 'LUXURY E-COMMERCE') return p.category.includes('LUXURY');
    if (filter === 'PORTFOLIO') return p.category.includes('PORTFOLIO');
    return true;
  });

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
          <span className="text-white">Selected Work</span>
        </div>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#111A2B]/80 border border-white/10 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#70D6FF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#70D6FF] font-mono">
                CONCEPT WORK ARCHIVE
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Good Design Deserves{' '}
              <span className="bg-gradient-to-r from-[#4F8CFF] via-[#70D6FF] to-[#3B72DE] bg-clip-text text-transparent">
                the Spotlight.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#9AA8BC] font-normal leading-relaxed">
              A curated collection of fictional concept projects exploring modern aesthetics, intuitive interfaces and responsive frontend craftsmanship.
            </p>
          </div>

          {/* Honest Disclaimer Callout */}
          <div className="p-4 rounded-2xl bg-[#0B1220]/90 border border-white/10 max-w-sm self-start lg:self-end">
            <div className="flex items-start space-x-3 text-xs text-[#9AA8BC]">
              <Info className="w-4 h-4 text-[#70D6FF] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-semibold block mb-1">Exploratory Studio Showcase</span>
                <span>
                  These studies are fictional creative concept projects demonstrating frontend design and engineering standards.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12 pb-6 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                filter === cat
                  ? 'bg-[#4F8CFF] text-white font-semibold shadow-glow-sm'
                  : 'bg-[#111A2B]/80 text-[#9AA8BC] border border-white/5 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12 lg:space-y-16 mb-24">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={project.path}
              className="group block rounded-3xl bg-gradient-to-b from-[#111A2B]/90 via-[#0E1626]/80 to-[#070B14] border border-white/10 hover:border-[#4F8CFF]/50 p-6 sm:p-8 lg:p-12 transition-all duration-300 hover:shadow-glow-md text-left relative overflow-hidden"
            >
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <span className="text-base font-mono font-bold text-slate-400">
                    {project.number}
                  </span>
                  <span className={`text-xs font-mono font-semibold uppercase px-3 py-1 rounded-full border ${project.badgeColor}`}>
                    {project.category}
                  </span>
                </div>

                <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#70D6FF] group-hover:text-white transition-colors bg-[#111A2B] px-4 py-2 rounded-full border border-white/10 group-hover:bg-[#4F8CFF]">
                  <span>View Full Project Study</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Information Column */}
                <div className="lg:col-span-5 space-y-5">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-[#70D6FF] transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-base text-[#9AA8BC] leading-relaxed">
                    {project.description}
                  </p>

                  <div className="p-4 rounded-xl bg-[#070B14]/80 border border-white/5 space-y-1.5 text-xs text-[#9AA8BC]">
                    <span className="font-mono text-[10px] uppercase text-[#70D6FF] block font-semibold">
                      Design Rationale & Philosophy
                    </span>
                    <p className="line-clamp-3">{project.fullOverview}</p>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#9AA8BC] block mb-2 font-medium">
                      Project Deliverables
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.deliverables.map((deliv) => (
                        <span
                          key={deliv}
                          className="text-xs font-mono px-3 py-1 rounded-md bg-[#111A2B] text-slate-300 border border-white/5"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2 flex items-center space-x-2 text-sm font-semibold text-[#4F8CFF] group-hover:text-white transition-colors">
                    <span>Inspect Design & Implementation Decisions</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Mockup Preview Column */}
                <div className="lg:col-span-7 transition-transform duration-500 transform group-hover:scale-[1.015]">
                  <div className="rounded-2xl overflow-hidden p-2 bg-[#070B14]/60 border border-white/10 shadow-xl">
                    {getMockup(project.id)}
                  </div>
                </div>

              </div>

            </Link>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0B1220] via-[#111A2B] to-[#0B1220] border border-[#4F8CFF]/30 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4F8CFF] to-transparent" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Have a project concept in mind?
          </h2>
          <p className="text-base text-[#9AA8BC] max-w-xl mx-auto mb-8">
            Let's turn your next digital idea into a polished, high-performing web experience.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#3B72DE] hover:from-[#5C95FF] hover:to-[#457DE8] text-white font-semibold text-base shadow-glow-sm hover:shadow-glow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
