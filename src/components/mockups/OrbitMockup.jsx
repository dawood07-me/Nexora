import React from 'react';
import { ArrowUpRight, Disc, Layers, Play } from 'lucide-react';

export default function OrbitMockup() {
  return (
    <div className="w-full bg-[#080B14] rounded-xl overflow-hidden border border-white/10 shadow-2xl text-left select-none group-hover:border-[#70D6FF]/50 transition-all duration-300">
      {/* Studio Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#05070D] border-b border-white/5 font-mono text-[10px]">
        <div className="flex items-center space-x-2 text-[#70D6FF]">
          <Disc className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
          <span className="font-bold tracking-widest text-white">ORBIT CREATIVE</span>
        </div>
        <div className="flex items-center space-x-2 text-[#9AA8BC]">
          <span>TOKYO / BERLIN / NY</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#70D6FF]" />
        </div>
      </div>

      {/* Avant-Garde Visual Space */}
      <div className="p-4 md:p-5 bg-gradient-to-br from-[#080B14] via-[#0D1424] to-[#050811] relative overflow-hidden">
        {/* Background typographic aura */}
        <div className="absolute right-2 top-2 text-[52px] font-black text-white/[0.03] select-none tracking-tighter leading-none pointer-events-none">
          REVEAL
        </div>

        {/* Headline Row */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-[10px] text-[#70D6FF] font-mono tracking-widest uppercase mb-1">
              ARCHIVE VOL. 26
            </div>
            <h4 className="text-xl md:text-2xl font-black text-white tracking-tighter leading-none">
              SYNTHETIC VISIONS.
            </h4>
          </div>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-[#70D6FF] group-hover:text-black transition-colors duration-300">
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          </div>
        </div>

        {/* Asymmetric Gallery Preview Blocks */}
        <div className="grid grid-cols-12 gap-2.5">
          {/* Main Visual Block with Generative Art simulation */}
          <div className="col-span-8 h-32 rounded-lg bg-gradient-to-tr from-[#1E1B4B] via-[#0F2027] to-[#203A43] p-3 relative overflow-hidden border border-white/10 flex flex-col justify-between">
            {/* Abstract geometric sphere lines */}
            <div className="absolute -right-4 -bottom-6 w-24 h-24 rounded-full border border-[#70D6FF]/30 border-dashed" />
            <div className="absolute -right-8 -bottom-10 w-32 h-32 rounded-full border border-[#4F8CFF]/20" />
            
            <div className="flex justify-between items-center z-10">
              <span className="text-[9px] font-mono uppercase bg-black/50 text-[#70D6FF] px-2 py-0.5 rounded border border-[#70D6FF]/30">
                Spatial Audio UI
              </span>
            </div>

            <div className="z-10">
              <div className="text-xs font-bold text-white tracking-tight">Kuroshio Resonance</div>
              <div className="text-[10px] text-slate-300 font-mono">Interactive WebGL / 2026</div>
            </div>
          </div>

          {/* Secondary Stack */}
          <div className="col-span-4 space-y-2">
            <div className="h-15 p-2 bg-[#111A2B]/80 rounded-lg border border-white/5 flex flex-col justify-between">
              <span className="text-[9px] font-mono text-[#9AA8BC]">CASE 04</span>
              <span className="text-[11px] font-semibold text-white leading-tight">Hyperion Brand</span>
            </div>
            <div className="h-15 p-2 bg-[#111A2B]/80 rounded-lg border border-white/5 flex flex-col justify-between">
              <span className="text-[9px] font-mono text-[#9AA8BC]">CASE 05</span>
              <span className="text-[11px] font-semibold text-white leading-tight">Neon Pulse</span>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] text-[#9AA8BC] font-mono">
          <span>CREATIVE DIRECTION & CODE</span>
          <span className="text-[#70D6FF] flex items-center gap-1">
            EXPLORE ARCHIVE <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
