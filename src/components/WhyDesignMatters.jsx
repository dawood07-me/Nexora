import React, { useState } from 'react';
import { Eye, Cpu, Smartphone, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export default function WhyDesignMatters() {
  const [activeInspector, setActiveInspector] = useState('hierarchy');

  const valueStatements = [
    {
      id: 'communication',
      title: 'Clear communication',
      description: 'Interfaces that explain value instantly. Information is structured so visitors immediately understand what you do and why it matters.',
      icon: Eye,
    },
    {
      id: 'experience',
      title: 'Thoughtful user experience',
      description: 'Intuitive navigation paths, predictable feedback and accessible interaction states that build user trust from the first click.',
      icon: Cpu,
    },
    {
      id: 'implementation',
      title: 'Responsive, maintainable implementation',
      description: 'Clean modern codebases built to adapt smoothly from mobile viewports to ultra-wide displays without degradation.',
      icon: Smartphone,
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0B1220]/40 overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#4F8CFF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and 3 Value Statements */}
          <div className="lg:col-span-6 text-left space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#111A2B] border border-white/10 text-xs font-mono font-semibold uppercase tracking-widest text-[#70D6FF] mb-4">
                <span>DESIGN PHILOSOPHY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                More than a{' '}
                <span className="text-[#4F8CFF]">beautiful interface.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#9AA8BC] leading-relaxed">
                A great website connects visual clarity with useful functionality. Every detail should help visitors understand your brand and take the next step.
              </p>
            </div>

            {/* 3 Value Statements */}
            <div className="space-y-6">
              {valueStatements.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-[#0B1220]/70 border border-white/5 hover:border-[#4F8CFF]/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#111A2B] border border-white/10 flex items-center justify-center text-[#4F8CFF] flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white tracking-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#9AA8BC] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Animated Interactive Interface Inspector */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#0B1220] border border-white/15 p-6 sm:p-7 shadow-2xl backdrop-blur-md text-left">
              
              {/* Header with Inspector Mode Selector */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#70D6FF] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Interface Structural Anatomy
                  </span>
                </div>

                <div className="flex bg-[#111A2B] p-1 rounded-lg border border-white/5 text-xs font-mono">
                  <button
                    onClick={() => setActiveInspector('hierarchy')}
                    className={`px-3 py-1 rounded transition-all ${activeInspector === 'hierarchy' ? 'bg-[#4F8CFF] text-white' : 'text-[#9AA8BC] hover:text-white'}`}
                  >
                    Hierarchy
                  </button>
                  <button
                    onClick={() => setActiveInspector('responsive')}
                    className={`px-3 py-1 rounded transition-all ${activeInspector === 'responsive' ? 'bg-[#4F8CFF] text-white' : 'text-[#9AA8BC] hover:text-white'}`}
                  >
                    Responsive
                  </button>
                </div>
              </div>

              {/* Dynamic Visualization Window */}
              <div className="mt-6 space-y-4">
                {activeInspector === 'hierarchy' ? (
                  <div className="space-y-3">
                    {/* Simulated visual hierarchy blocks */}
                    <div className="p-4 rounded-xl bg-[#111A2B]/80 border border-[#4F8CFF]/30 relative overflow-hidden transition-all duration-300">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-mono text-[#70D6FF] uppercase">Level 1 • High Priority Anchor</span>
                        <span className="text-[10px] font-mono text-emerald-400">Immediate Clarity</span>
                      </div>
                      <div className="h-4 w-3/4 bg-white/90 rounded mb-2" />
                      <div className="h-2 w-1/2 bg-[#9AA8BC]/50 rounded" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-[#111A2B]/60 border border-white/5">
                        <span className="text-[9px] font-mono text-[#9AA8BC] block mb-2">Level 2 • Value Proof</span>
                        <div className="h-2.5 w-full bg-white/40 rounded mb-1.5" />
                        <div className="h-2 w-4/5 bg-white/20 rounded" />
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#111A2B]/60 border border-white/5">
                        <span className="text-[9px] font-mono text-[#9AA8BC] block mb-2">Level 2 • Action Path</span>
                        <div className="h-6 w-full bg-[#4F8CFF]/30 border border-[#4F8CFF]/50 rounded flex items-center justify-center text-[10px] text-white font-mono font-semibold">
                          Interactive CTA
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#070B14] border border-white/5 text-[11px] text-[#9AA8BC] flex items-center justify-between">
                      <span className="font-mono">F-Pattern Eyetrack Alignment</span>
                      <span className="text-[#70D6FF] font-mono">Calibrated</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {/* Responsive Breakdown simulation */}
                    <div className="p-4 rounded-xl bg-[#111A2B]/80 border border-white/10 space-y-3">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                        <span>Viewport Grid System</span>
                        <span className="text-[#70D6FF]">12-Col Dynamic Fluid</span>
                      </div>
                      
                      <div className="grid grid-cols-6 gap-1.5 py-1">
                        {[1, 2, 3, 4, 5, 6].map((col) => (
                          <div key={col} className="h-12 rounded bg-[#070B14] border border-white/10 flex items-center justify-center text-[9px] font-mono text-[#9AA8BC]">
                            c.{col}
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between items-center text-[10px] font-mono text-[#9AA8BC] pt-1">
                        <span>Touch Target Standards: 44px+</span>
                        <span className="text-emerald-400">WCAG 2.1 Compliant</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2.5 bg-[#070B14] rounded-lg border border-white/5">
                        <span className="text-[9px] text-[#9AA8BC] font-mono block">Mobile</span>
                        <span className="text-xs text-white font-bold font-mono">360px - 480px</span>
                      </div>
                      <div className="p-2.5 bg-[#070B14] rounded-lg border border-white/5">
                        <span className="text-[9px] text-[#9AA8BC] font-mono block">Tablet</span>
                        <span className="text-xs text-white font-bold font-mono">768px - 1024px</span>
                      </div>
                      <div className="p-2.5 bg-[#070B14] rounded-lg border border-white/5">
                        <span className="text-[9px] text-[#9AA8BC] font-mono block">Desktop</span>
                        <span className="text-xs text-white font-bold font-mono">1440px - 1920px</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
