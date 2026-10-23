import React from 'react';
import { ShoppingBag, ArrowUpRight, Sparkles } from 'lucide-react';

export default function AtelierMockup() {
  return (
    <div className="w-full bg-[#181614] rounded-xl overflow-hidden border border-white/10 shadow-2xl text-left select-none group-hover:border-[#E2D9CC]/50 transition-all duration-300 font-serif">
      {/* Editorial Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#121110] border-b border-white/5">
        <div className="flex items-center space-x-2">
          <span className="text-[11px] tracking-[0.25em] text-[#E2D9CC] font-normal uppercase">
            ATELIER NOIR
          </span>
        </div>
        <div className="flex items-center space-x-3 text-[10px] text-[#A69F94] font-sans">
          <span className="hidden sm:inline tracking-wider uppercase">EDITION 04 / WINTER</span>
          <div className="flex items-center space-x-1 text-[#E2D9CC]">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="font-mono">BAG (0)</span>
          </div>
        </div>
      </div>

      {/* Main Editorial Presentation */}
      <div className="p-4 md:p-5 bg-gradient-to-br from-[#1C1A17] via-[#161413] to-[#0F0E0D]">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center">
          {/* Main Visual Column */}
          <div className="sm:col-span-7 bg-[#23201C] rounded-lg p-3.5 border border-[#3A352F] relative overflow-hidden">
            {/* Visual Art Box simulating High Fashion Editorial Lookbook */}
            <div className="h-36 sm:h-44 rounded bg-gradient-to-tr from-[#121110] via-[#2D2824] to-[#423C36] relative flex flex-col justify-between p-3 overflow-hidden">
              <div className="flex justify-between items-start">
                <span className="text-[9px] uppercase tracking-widest text-[#E2D9CC]/70 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm font-sans">
                  LOOK 08 • SILHOUETTE
                </span>
                <span className="w-2 h-2 rounded-full bg-[#E2D9CC]/80" />
              </div>
              
              {/* Silhouette Vector Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                <svg viewBox="0 0 100 120" className="h-full w-auto">
                  <path d="M50 10 C35 25 30 50 25 80 C20 110 35 115 50 115 C65 115 80 110 75 80 C70 50 65 25 50 10 Z" fill="#E2D9CC" />
                </svg>
              </div>

              <div className="relative z-10">
                <h4 className="text-base text-[#FAF7F2] tracking-wide italic font-normal">
                  The Structured Trench
                </h4>
                <div className="text-[11px] text-[#A69F94] font-sans flex items-center justify-between mt-1">
                  <span>Double-woven Virgin Wool</span>
                  <span className="text-[#FAF7F2] font-mono">€1,450</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Editorial Column */}
          <div className="sm:col-span-5 space-y-2.5 font-sans">
            <div className="p-3 bg-[#23201C]/80 rounded-lg border border-[#3A352F]/70 flex items-center justify-between">
              <div>
                <span className="text-[9px] tracking-wider uppercase text-[#A69F94] block">COLLECTION</span>
                <span className="text-xs text-[#E2D9CC] font-serif">Minimalist Outerwear</span>
              </div>
              <span className="text-[11px] font-mono text-[#FAF7F2]">€890</span>
            </div>

            <div className="p-3 bg-[#23201C]/80 rounded-lg border border-[#3A352F]/70 flex items-center justify-between">
              <div>
                <span className="text-[9px] tracking-wider uppercase text-[#A69F94] block">MATERIAL</span>
                <span className="text-xs text-[#E2D9CC] font-serif">Raw Silk Georgette</span>
              </div>
              <span className="text-[11px] font-mono text-[#FAF7F2]">€620</span>
            </div>

            <div className="pt-1 flex items-center justify-between text-[10px] text-[#A69F94]">
              <span className="tracking-widest uppercase">CURATED RUN: 300 PIECES</span>
              <span className="text-[#E2D9CC] flex items-center gap-0.5">
                LOOKBOOK <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
