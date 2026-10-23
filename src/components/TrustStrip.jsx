import React from 'react';
import { Compass, Smartphone, Sparkles, Zap } from 'lucide-react';

export default function TrustStrip() {
  const pillars = [
    {
      title: 'Strategic Design',
      desc: 'Form shaped by intent & clarity',
      icon: Compass,
    },
    {
      title: 'Responsive Development',
      desc: 'Flawless across all viewports',
      icon: Smartphone,
    },
    {
      title: 'Thoughtful Interactions',
      desc: 'Micro-animations with purpose',
      icon: Sparkles,
    },
    {
      title: 'Performance Focus',
      desc: 'Lightning load times & clean code',
      icon: Zap,
    },
  ];

  return (
    <section className="relative z-20 border-y border-white/10 bg-[#0B1220]/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex items-center space-x-3.5 group text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-[#111A2B] border border-white/10 flex items-center justify-center text-[#4F8CFF] group-hover:text-[#70D6FF] group-hover:border-[#4F8CFF]/40 transition-colors duration-300 flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#9AA8BC] hidden sm:block">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
