import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Layers, Info, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import AetherMockup from './mockups/AetherMockup';
import AtelierMockup from './mockups/AtelierMockup';
import OrbitMockup from './mockups/OrbitMockup';

export default function FeaturedWork() {
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

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-[#0B1220]/50 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#4F8CFF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#70D6FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 text-left gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#111A2B] border border-white/10 text-xs font-mono font-semibold uppercase tracking-widest text-[#70D6FF] mb-4">
              <span>SELECTED CONCEPTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Good design deserves{' '}
              <span className="text-[#4F8CFF]">the spotlight.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#9AA8BC] leading-relaxed">
              A collection of concept projects exploring different digital experiences.
            </p>
          </div>

          {/* Honest Disclaimer Callout & Portfolio Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 self-start md:self-end">
            <div className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#111A2B]/60 border border-white/10 text-xs text-[#9AA8BC]">
              <Info className="w-4 h-4 text-[#70D6FF] flex-shrink-0" />
              <span>Fictional concept explorations.</span>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-[#4F8CFF]/10 hover:bg-[#4F8CFF]/20 text-[#70D6FF] border border-[#4F8CFF]/30 text-xs font-semibold transition-colors"
            >
              <span>View All Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3 Rich Concept Project Cards */}
        <div className="space-y-12 lg:space-y-16">
          {projectsData.map((project) => (
            <Link
              key={project.id}
              to={project.path}
              className="group block rounded-2xl bg-gradient-to-b from-[#111A2B]/90 via-[#0E1626]/80 to-[#070B14] border border-white/10 hover:border-[#4F8CFF]/50 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-glow-md text-left relative overflow-hidden"
            >
              {/* Card top banner */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-mono text-[#9AA8BC]">
                    {project.number}
                  </span>
                  <span className={`text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded-full border ${project.badgeColor}`}>
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#70D6FF] group-hover:text-white transition-colors">
                  <span>Explore concept study</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Two-Column Card Interior */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Description Column */}
                <div className="lg:col-span-5 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#70D6FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#9AA8BC] leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Visual direction tag */}
                  <div className="p-3 rounded-xl bg-[#070B14]/60 border border-white/5 text-xs text-[#9AA8BC] space-y-1">
                    <span className="font-mono text-[10px] uppercase text-[#70D6FF] block font-semibold">
                      Visual Direction
                    </span>
                    <p>{project.visualDirection}</p>
                  </div>

                  {/* Deliverables tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.deliverables.map((deliv) => (
                      <span
                        key={deliv}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#111A2B] text-slate-300 border border-white/5"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 text-xs font-semibold text-[#4F8CFF] flex items-center gap-1.5 group-hover:text-white transition-colors">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Mockup Preview Column */}
                <div className="lg:col-span-7 transition-transform duration-500 transform group-hover:scale-[1.015]">
                  <div className="rounded-xl overflow-hidden p-1 sm:p-2 bg-[#070B14]/50 border border-white/5">
                    {getMockup(project.id)}
                  </div>
                </div>

              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
