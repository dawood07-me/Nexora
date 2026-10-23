import React from 'react';
import { Search, PenTool, Code2, CheckCircle } from 'lucide-react';
import { processData } from '../data/processData';

const stepIcons = [Search, PenTool, Code2, CheckCircle];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#070B14] overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-radial-gradient pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#111A2B] border border-white/10 text-xs font-mono font-semibold uppercase tracking-widest text-[#70D6FF] mb-4">
            <span>HOW WE WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            From first idea{' '}
            <span className="text-[#4F8CFF]">to final launch.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9AA8BC] leading-relaxed">
            A structured, transparent engineering and design cycle built to ensure quality, performance and alignment at every milestone.
          </p>
        </div>

        {/* Connected Process Steps Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4F8CFF]/20 via-[#70D6FF]/40 to-[#4F8CFF]/20 -translate-y-12 z-0" />

          {/* Grid of Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {processData.map((item, index) => {
              const Icon = stepIcons[index] || Search;
              return (
                <div
                  key={item.step}
                  className="group relative rounded-2xl bg-[#0B1220]/90 border border-white/10 p-6 sm:p-7 hover:border-[#4F8CFF]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm flex flex-col justify-between text-left"
                >
                  <div>
                    {/* Step Indicator Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#111A2B] border border-white/10 flex items-center justify-center text-[#4F8CFF] group-hover:text-[#70D6FF] group-hover:border-[#4F8CFF]/40 transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-black font-mono text-white/20 group-hover:text-[#4F8CFF]/50 transition-colors">
                        {item.step}
                      </span>
                    </div>

                    {/* Step Phase & Title */}
                    <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#70D6FF] mb-1">
                      {item.phase}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#9AA8BC] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Deliverables list */}
                  <div className="pt-4 border-t border-white/5 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#9AA8BC] block font-medium">
                      Stage Deliverables
                    </span>
                    {item.deliverables.map((deliv, idx) => (
                      <div key={idx} className="text-xs text-slate-300 flex items-center space-x-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#4F8CFF]" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
