import React from 'react';
import { ArrowUpRight, TrendingUp, Shield, Wallet, ArrowDownLeft, ChevronRight } from 'lucide-react';

export default function AetherMockup() {
  return (
    <div className="w-full bg-[#0F172A] rounded-xl overflow-hidden border border-white/10 shadow-2xl text-left select-none group-hover:border-[#4F8CFF]/50 transition-all duration-300">
      {/* Top App Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0A0F1D] border-b border-white/5">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 rounded bg-[#4F8CFF] flex items-center justify-center text-[10px] font-bold text-white">
            Æ
          </div>
          <span className="text-xs font-semibold text-slate-200 tracking-tight font-mono">
            AETHER CAPITAL
          </span>
        </div>
        <div className="flex items-center space-x-2 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>NETWORK ONLINE</span>
        </div>
      </div>

      {/* Main App Content Area */}
      <div className="p-4 md:p-5 bg-gradient-to-br from-[#0F172A] via-[#111C35] to-[#0A0F1D]">
        {/* Balance Card */}
        <div className="flex flex-wrap items-end justify-between gap-3 pb-3 border-b border-white/5">
          <div>
            <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
              Total Liquidity Reserve
            </span>
            <div className="text-xl md:text-2xl font-bold text-white tracking-tight font-mono mt-0.5">
              $842,910<span className="text-slate-400">.42</span>
            </div>
          </div>
          <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+14.8% YTD</span>
          </div>
        </div>

        {/* SVG Interactive Financial Chart */}
        <div className="my-4 bg-[#0A0F1D]/70 p-3 rounded-lg border border-white/5">
          <div className="flex justify-between text-[10px] text-slate-400 font-mono mb-1">
            <span>YIELD VELOCITY (90D)</span>
            <span className="text-[#4F8CFF]">PEAK: $890K</span>
          </div>
          <div className="h-24 w-full">
            <svg viewBox="0 0 360 80" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="aetherAreaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F8CFF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#4F8CFF" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0,65 C40,60 70,45 110,48 C150,52 180,30 220,35 C260,40 300,18 360,12 L360,80 L0,80 Z"
                fill="url(#aetherAreaGrad)"
              />
              <path
                d="M0,65 C40,60 70,45 110,48 C150,52 180,30 220,35 C260,40 300,18 360,12"
                fill="none"
                stroke="#4F8CFF"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="360" cy="12" r="4" fill="#70D6FF" />
            </svg>
          </div>
        </div>

        {/* Mini Ledger Row */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 bg-[#0A0F1D]/60 rounded-lg border border-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-blue-500/10 flex items-center justify-center text-[#4F8CFF]">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-white font-medium text-[11px]">Treasury Vault</div>
                <div className="text-[9px] text-slate-400 font-mono">Tier 1 Secured</div>
              </div>
            </div>
            <span className="text-[11px] font-mono font-semibold text-slate-200">$520.4K</span>
          </div>

          <div className="p-2.5 bg-[#0A0F1D]/60 rounded-lg border border-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Wallet className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-white font-medium text-[11px]">Active Staking</div>
                <div className="text-[9px] text-slate-400 font-mono">6.4% APY</div>
              </div>
            </div>
            <span className="text-[11px] font-mono font-semibold text-slate-200">$322.5K</span>
          </div>
        </div>
      </div>
    </div>
  );
}
