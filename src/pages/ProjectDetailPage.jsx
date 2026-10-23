import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Layers, 
  Smartphone, 
  ShieldCheck, 
  Info, 
  ArrowUpRight 
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import AetherMockup from '../components/mockups/AetherMockup';
import AtelierMockup from '../components/mockups/AtelierMockup';
import OrbitMockup from '../components/mockups/OrbitMockup';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectIndex = projectsData.findIndex(p => p.id === id || p.slug === id);
  const project = projectsData[projectIndex];

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Concept Study | NEXORA DIGITAL`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen pt-36 pb-24 text-center px-4">
        <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
        <p className="text-[#9AA8BC] mb-8">The concept project you are looking for does not exist.</p>
        <Link
          to="/work"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#4F8CFF] text-white font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Work Archive</span>
        </Link>
      </div>
    );
  }

  // Next and previous project indices
  const prevProject = projectsData[(projectIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  const renderMockup = () => {
    switch (project.id) {
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
    <div className="pt-24 sm:pt-32 pb-24 text-left overflow-hidden bg-grid-pattern min-h-screen">
      
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial-gradient pointer-events-none opacity-80" />
      <div 
        className="absolute top-40 right-10 w-96 h-96 rounded-full blur-[160px] pointer-events-none opacity-20"
        style={{ backgroundColor: project.accentColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Navigation & Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-mono">
          <div className="flex items-center space-x-2 text-[#9AA8BC]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/work" className="hover:text-white transition-colors">Work</Link>
            <span>/</span>
            <span className="text-white">{project.title}</span>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center space-x-1.5 text-[#70D6FF] hover:text-white transition-colors bg-[#111A2B] px-3.5 py-1.5 rounded-full border border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Work Archive</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="max-w-4xl space-y-5 mb-14">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`text-xs font-mono font-semibold uppercase px-3 py-1 rounded-full border ${project.badgeColor}`}>
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#9AA8BC] bg-white/5 px-3 py-1 rounded-full border border-white/5">
              CONCEPT #{project.number}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-[#70D6FF] font-light leading-relaxed">
            {project.tagline}
          </p>

          <p className="text-base sm:text-lg text-[#9AA8BC] leading-relaxed max-w-3xl">
            {project.fullOverview}
          </p>
        </div>

        {/* Honest Concept Callout */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0B1220]/90 border border-white/10 flex items-start space-x-3.5 mb-14 text-xs text-[#9AA8BC]">
          <Info className="w-4 h-4 text-[#70D6FF] flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-white font-semibold block mb-0.5">Concept Study Transparency Notice</span>
            <span>
              This project is a fictional concept designed by NEXORA DIGITAL to demonstrate high-level design systems, layout architecture, and frontend capabilities. It is not an active commercial entity or client engagement.
            </span>
          </div>
        </div>

        {/* High-Fidelity Interface Preview */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#70D6FF] font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> High-Fidelity Interface Preview
            </span>
            <span className="text-xs font-mono text-[#9AA8BC]">Interactive Viewport</span>
          </div>
          
          <div className="rounded-2xl p-2 sm:p-4 bg-[#0B1220]/80 border border-white/10 shadow-2xl backdrop-blur-xl">
            {renderMockup()}
          </div>
        </div>

        {/* Specifications & Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {project.metrics.map((metric, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#0B1220]/80 border border-white/10 text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mb-1">
                {metric.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#9AA8BC]">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Deep Dive: Goals & Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Design Goals */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#70D6FF] block">
              DESIGN OBJECTIVES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Design goals behind {project.title}.
            </h2>
            <div className="space-y-4">
              {project.designGoals.map((goal, i) => (
                <div key={i} className="flex items-start space-x-3 p-4 rounded-xl bg-[#0B1220]/60 border border-white/5">
                  <Check className="w-4 h-4 text-[#4F8CFF] flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-200 leading-relaxed">{goal}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Specifications */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Direction & Palette */}
            <div className="p-6 rounded-2xl bg-[#0B1220]/90 border border-white/10 space-y-5">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#70D6FF] block">
                VISUAL DIRECTION & PALETTE
              </span>
              <p className="text-xs sm:text-sm text-[#9AA8BC] leading-relaxed">
                {project.visualDirection}
              </p>
              
              <div className="pt-2 border-t border-white/5">
                <span className="text-[10px] font-mono uppercase text-[#9AA8BC] block mb-2 font-medium">
                  Core Color Swatches
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {project.palette.map((color, i) => (
                    <div key={i} className="flex items-center space-x-2 p-2 rounded bg-[#070B14] border border-white/5 text-[11px] font-mono">
                      <span className="w-3.5 h-3.5 rounded-full flex-shrink-0 border border-white/20" style={{ backgroundColor: color.hex }} />
                      <div className="truncate">
                        <span className="text-white block truncate">{color.name}</span>
                        <span className="text-[#9AA8BC] text-[10px]">{color.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Stack & Deliverables */}
            <div className="p-6 rounded-2xl bg-[#0B1220]/90 border border-white/10 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#70D6FF] block">
                DELIVERABLES & STACK
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.deliverables.map((deliv, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-md bg-[#111A2B] text-slate-200 border border-white/5">
                    {deliv}
                  </span>
                ))}
              </div>
              <div className="pt-2 flex flex-wrap gap-1.5 border-t border-white/5">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#4F8CFF]/10 text-[#70D6FF] border border-[#4F8CFF]/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Implementation Decisions */}
        <div className="mb-20">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#70D6FF] block mb-2">
              TECHNICAL CRAFT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Key design & implementation decisions.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.decisions.map((dec, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-[#0B1220]/80 border border-white/10 space-y-3"
              >
                <div className="text-xs font-mono text-[#70D6FF]">0{i + 1} // DECISION</div>
                <h3 className="text-lg font-bold text-white">{dec.title}</h3>
                <p className="text-xs sm:text-sm text-[#9AA8BC] leading-relaxed">{dec.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Responsive Design Approach */}
        <div className="mb-20 p-8 rounded-3xl bg-gradient-to-br from-[#0B1220] via-[#111A2B] to-[#070B14] border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center text-[#70D6FF]">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#70D6FF] font-semibold block">
                  ADAPTIVE VIEWPORT STRATEGY
                </span>
                <h3 className="text-lg font-bold text-white">Responsive Touch Optimization</h3>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 self-start sm:self-auto">
              Fluid 360px - 1920px+
            </span>
          </div>
          <p className="text-sm text-[#9AA8BC] leading-relaxed max-w-3xl">
            {project.responsiveApproach}
          </p>
        </div>

        {/* Previous / Next Project Navigation Bar */}
        <div className="mb-20 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to={prevProject.path}
            className="p-6 rounded-2xl bg-[#0B1220]/80 border border-white/10 hover:border-[#4F8CFF]/40 transition-all text-left group"
          >
            <div className="flex items-center space-x-2 text-xs font-mono text-[#9AA8BC] mb-2 group-hover:text-[#70D6FF] transition-colors">
              <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
              <span>PREVIOUS CONCEPT</span>
            </div>
            <div className="text-lg font-bold text-white group-hover:text-[#70D6FF] transition-colors">
              {prevProject.title}
            </div>
            <div className="text-xs text-[#9AA8BC] font-mono">{prevProject.category}</div>
          </Link>

          <Link
            to={nextProject.path}
            className="p-6 rounded-2xl bg-[#0B1220]/80 border border-white/10 hover:border-[#4F8CFF]/40 transition-all text-right group"
          >
            <div className="flex items-center justify-end space-x-2 text-xs font-mono text-[#9AA8BC] mb-2 group-hover:text-[#70D6FF] transition-colors">
              <span>NEXT CONCEPT</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-lg font-bold text-white group-hover:text-[#70D6FF] transition-colors">
              {nextProject.title}
            </div>
            <div className="text-xs text-[#9AA8BC] font-mono">{nextProject.category}</div>
          </Link>
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0B1220] via-[#111A2B] to-[#0B1220] border border-[#4F8CFF]/30 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4F8CFF] to-transparent" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Inspired by {project.title}?
          </h2>
          <p className="text-base text-[#9AA8BC] max-w-xl mx-auto mb-8">
            Let's design and engineer an exceptional web experience tailored to your vision and goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#3B72DE] hover:from-[#5C95FF] hover:to-[#457DE8] text-white font-semibold text-base shadow-glow-sm hover:shadow-glow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center space-x-2 px-7 py-4 rounded-xl bg-[#111A2B] hover:bg-[#162238] text-white font-semibold text-base border border-white/10 transition-colors"
            >
              <span>Back to All Works</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
