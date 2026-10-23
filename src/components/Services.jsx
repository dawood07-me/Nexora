import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Code, Rocket, Briefcase, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const iconMap = {
  'website-design': Layout,
  'web-development': Code,
  'landing-pages': Rocket,
  'portfolio-websites': Briefcase,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden bg-[#070B14]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#4F8CFF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#70D6FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#111A2B] border border-white/10 text-xs font-mono font-semibold uppercase tracking-widest text-[#70D6FF] mb-4">
            <span>WHAT WE DO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Digital solutions,{' '}
            <span className="text-[#4F8CFF]">thoughtfully crafted.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9AA8BC] leading-relaxed">
            We combine design thinking and practical development to create websites that look exceptional and work beautifully.
          </p>
        </div>

        {/* 4 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.id] || Layout;
            return (
              <Link
                key={service.id}
                to={service.path}
                className="group relative rounded-2xl bg-gradient-to-b from-[#111A2B]/80 to-[#0B1220]/90 p-8 border border-white/10 hover:border-[#4F8CFF]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-md flex flex-col justify-between text-left block"
              >
                {/* Ambient Card Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#4F8CFF]/0 via-[#70D6FF]/0 to-[#4F8CFF]/0 group-hover:from-[#4F8CFF]/5 group-hover:via-transparent group-hover:to-[#70D6FF]/5 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Card Header with Icon & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0B1220] border border-white/10 flex items-center justify-center text-[#4F8CFF] group-hover:text-[#70D6FF] group-hover:border-[#4F8CFF]/40 transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono text-[#9AA8BC] tracking-wider">
                        0{index + 1}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#9AA8BC] group-hover:text-white group-hover:bg-[#4F8CFF] transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-[#70D6FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#9AA8BC] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Scope Checklist Items */}
                <div className="pt-6 border-t border-white/5 space-y-2.5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#70D6FF] font-semibold">
                      Core Capabilities
                    </span>
                    <span className="text-xs font-mono text-[#9AA8BC] group-hover:text-white transition-colors flex items-center gap-1">
                      Explore service <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-center space-x-2 text-xs text-[#F5F7FB]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4F8CFF] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
