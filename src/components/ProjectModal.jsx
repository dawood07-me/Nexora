import React, { useEffect } from 'react';
import { X, ExternalLink, Check, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import AetherMockup from './mockups/AetherMockup';
import AtelierMockup from './mockups/AtelierMockup';
import OrbitMockup from './mockups/OrbitMockup';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0B1220] border border-white/15 rounded-2xl shadow-2xl overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#111A2B]/80 text-[#9AA8BC] hover:text-white hover:bg-[#162238] border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 bg-gradient-to-r from-[#0B1220] via-[#111A2B] to-[#0B1220]">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded-full border ${project.badgeColor}`}>
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#9AA8BC] bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
              CONCEPT STUDY #{project.number}
            </span>
          </div>

          <h2 id="modal-project-title" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="mt-2 text-base text-[#9AA8BC] max-w-2xl">
            {project.tagline}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Interactive Live Mockup Preview */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#70D6FF] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> High-Fidelity Interface Architecture
              </span>
              <span className="text-[11px] text-[#9AA8BC] font-mono">Fictional Concept</span>
            </div>
            
            <div className="p-2 sm:p-4 rounded-xl bg-[#070B14] border border-white/10">
              {renderMockup()}
            </div>
          </div>

          {/* Project Rationale Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Design & Engineering Approach
              </h3>
              <p className="text-sm sm:text-base text-[#9AA8BC] leading-relaxed">
                {project.fullOverview}
              </p>
              
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-3 font-semibold">
                  Key Technical Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-[#F5F7FB]">
                      <Check className="w-4 h-4 text-[#4F8CFF] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Specifications */}
            <div className="space-y-6 bg-[#111A2B]/60 p-5 rounded-xl border border-white/5">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#9AA8BC] block mb-2 font-medium">
                  Concept Deliverables
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.deliverables.map((deliv, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded bg-[#070B14] text-white border border-white/5">
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#9AA8BC] block mb-2 font-medium">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded bg-[#4F8CFF]/10 text-[#70D6FF] border border-[#4F8CFF]/20 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-white/5">
                <span className="text-[10px] text-[#9AA8BC] block font-mono">
                  Concept Created by NEXORA DIGITAL
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 sm:px-8 bg-[#070B14] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#9AA8BC] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#4F8CFF]" />
            <span>Honest Showcase: Fictional concept designed for creative demonstration.</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-lg bg-[#111A2B] text-white hover:bg-[#162238] border border-white/10 transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
