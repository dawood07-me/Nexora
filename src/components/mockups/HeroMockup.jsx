import React, { useState } from 'react';
import { ShieldCheck, Activity, Zap, Sparkles, ExternalLink, ArrowUpRight, TrendingUp } from 'lucide-react';

export default function HeroMockup() {
  const [activeTab, setActiveTab] = useState('performance');

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none select-none">
      {/* Ambient gradient backdrops */}
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-[#4F8CFF]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#70D6FF]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Browser Window Mockup */}
      <div className="relative rounded-2xl bg-[#0B1220]/90 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-[#4F8CFF]/40">
        {/* Browser Top Navigation Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#070B14]/80 border-b border-white/5">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          
          {/* Address Bar */}
          <div className="flex items-center space-x-2 bg-[#111A2B]/80 px-4 py-1 rounded-full text-xs text-[#9AA8BC] border border-white/5 font-mono max-w-[240px] w-full justify-center">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="truncate">nexora.studio/showcase</span>
          </div>

          <div className="flex items-center space-x-2 text-xs text-[#9AA8BC]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="hidden sm:inline font-mono">LIVE</span>
          </div>
        </div>

        {/* Browser Viewport Content */}
        <div className="p-5 md:p-6 bg-gradient-to-b from-[#0B1220] via-[#0E1729] to-[#070B14]">
          {/* Mockup Internal Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/5">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-[#4F8CFF]/20 text-[#70D6FF] border border-[#4F8CFF]/30">
                  Concept Engine v3.2
                </span>
                <span className="text-xs text-[#9AA8BC] flex items-center gap-1">
                  <Activity className="w-3 h-3 text-[#4F8CFF]" /> 60 FPS
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mt-1 tracking-tight">
                Nexus Interactive Workspace
              </h4>
            </div>

            {/* Micro Tab Selector */}
            <div className="flex bg-[#111A2B] p-1 rounded-lg border border-white/10 text-xs">
              <button 
                onClick={() => setActiveTab('performance')}
                className={`px-3 py-1 rounded-md transition-all font-medium ${activeTab === 'performance' ? 'bg-[#4F8CFF] text-white shadow-sm' : 'text-[#9AA8BC] hover:text-white'}`}
              >
                Telemetry
              </button>
              <button 
                onClick={() => setActiveTab('architecture')}
                className={`px-3 py-1 rounded-md transition-all font-medium ${activeTab === 'architecture' ? 'bg-[#4F8CFF] text-white shadow-sm' : 'text-[#9AA8BC] hover:text-white'}`}
              >
                Layout
              </button>
            </div>
          </div>

          {/* Dynamic Content based on Tab */}
          {activeTab === 'performance' ? (
            <div className="mt-4 space-y-4">
              {/* Telemetry Visual Graph */}
              <div className="bg-[#111A2B]/80 p-4 rounded-xl border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-[#9AA8BC] flex items-center gap-1.5 font-medium">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Interaction Throughput
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">+184.2%</span>
                </div>
                
                {/* SVG Visual Waveform Chart */}
                <div className="h-20 w-full">
                  <svg viewBox="0 0 400 80" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4F8CFF" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#4F8CFF" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Area fill */}
                    <path
                      d="M0,60 Q40,40 80,55 T160,30 T240,45 T320,15 T400,20 L400,80 L0,80 Z"
                      fill="url(#heroChartGrad)"
                    />
                    {/* Line */}
                    <path
                      d="M0,60 Q40,40 80,55 T160,30 T240,45 T320,15 T400,20"
                      fill="none"
                      stroke="#4F8CFF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Dot */}
                    <circle cx="320" cy="15" r="4" fill="#70D6FF" className="animate-pulse" />
                    <circle cx="320" cy="15" r="8" fill="none" stroke="#70D6FF" strokeWidth="1.5" opacity="0.6" />
                  </svg>
                </div>
              </div>

              {/* Metric Cards Row */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="bg-[#111A2B]/60 p-3 rounded-xl border border-white/5">
                  <div className="text-[10px] text-[#9AA8BC] uppercase tracking-wider">Load Speed</div>
                  <div className="text-sm md:text-base font-bold text-white font-mono mt-0.5">0.68s</div>
                  <div className="text-[9px] text-emerald-400 mt-1">A+ Rating</div>
                </div>
                <div className="bg-[#111A2B]/60 p-3 rounded-xl border border-white/5">
                  <div className="text-[10px] text-[#9AA8BC] uppercase tracking-wider">Contrast</div>
                  <div className="text-sm md:text-base font-bold text-white font-mono mt-0.5">14.8:1</div>
                  <div className="text-[9px] text-[#70D6FF] mt-1">AAA Standard</div>
                </div>
                <div className="bg-[#111A2B]/60 p-3 rounded-xl border border-white/5">
                  <div className="text-[10px] text-[#9AA8BC] uppercase tracking-wider">Payload</div>
                  <div className="text-sm md:text-base font-bold text-white font-mono mt-0.5">42 KB</div>
                  <div className="text-[9px] text-emerald-400 mt-1">Gzipped</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-4 space-y-3">
              {/* Architecture Blueprint Mock */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-[#111A2B]/80 rounded-xl border border-[#4F8CFF]/20 space-y-2">
                  <div className="h-2 w-16 bg-[#4F8CFF] rounded-full" />
                  <div className="h-10 bg-[#070B14] rounded-lg border border-white/5 p-2 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#9AA8BC]">HeroView.jsx</span>
                    <span className="text-[9px] text-emerald-400">Reactive</span>
                  </div>
                  <div className="h-10 bg-[#070B14] rounded-lg border border-white/5 p-2 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#9AA8BC]">FluidGrid.css</span>
                    <span className="text-[9px] text-[#70D6FF]">Tailwind</span>
                  </div>
                </div>
                <div className="p-3 bg-[#111A2B]/80 rounded-xl border border-white/5 space-y-2 flex flex-col justify-between">
                  <div className="text-xs text-white font-medium">Design Token Mesh</div>
                  <div className="grid grid-cols-4 gap-1.5 py-1">
                    <div className="h-6 rounded bg-[#070B14] border border-white/10" title="Midnight" />
                    <div className="h-6 rounded bg-[#0B1220] border border-white/10" title="Deep Navy" />
                    <div className="h-6 rounded bg-[#4F8CFF]" title="Electric Blue" />
                    <div className="h-6 rounded bg-[#70D6FF]" title="Accent Blue" />
                  </div>
                  <div className="text-[10px] text-[#9AA8BC] flex items-center justify-between">
                    <span>Clean Strict Types</span>
                    <span className="text-emerald-400">100%</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Card 1: Top Right - Performance Badge */}
      <div className="hidden sm:flex absolute -top-6 -right-6 items-center space-x-3 bg-[#111A2B]/95 p-3.5 rounded-xl border border-white/10 shadow-2xl backdrop-blur-md animate-subtle-float">
        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold font-mono">
          99
        </div>
        <div>
          <div className="text-xs font-semibold text-white flex items-center gap-1">
            Lighthouse Performance
          </div>
          <div className="text-[11px] text-[#9AA8BC]">Sub-second execution</div>
        </div>
      </div>

      {/* Floating Card 2: Bottom Left - Craft Philosophy */}
      <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center space-x-3 bg-[#0B1220]/95 px-4 py-3 rounded-xl border border-[#4F8CFF]/30 shadow-2xl backdrop-blur-md animate-subtle-float-delay">
        <div className="w-8 h-8 rounded-lg bg-[#4F8CFF]/20 flex items-center justify-center text-[#70D6FF]">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-semibold text-white">Custom Engineering</div>
          <div className="text-[10px] text-[#70D6FF] font-mono">Zero Generic Templates</div>
        </div>
      </div>
    </div>
  );
}
