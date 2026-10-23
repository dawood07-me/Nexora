import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, ArrowUpRight } from 'lucide-react';
import HeroMockup from './mockups/HeroMockup';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden bg-grid-pattern"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-radial-gradient pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#4F8CFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#70D6FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#111A2B]/80 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#70D6FF] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#70D6FF] font-mono">
                INDEPENDENT DIGITAL STUDIO
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-extrabold tracking-tight text-white leading-[1.08]">
              WE BUILD{' '}
              <span className="bg-gradient-to-r from-[#4F8CFF] via-[#70D6FF] to-[#3B72DE] bg-clip-text text-transparent inline-block pb-1">
                DIGITAL EXPERIENCES
              </span>{' '}
              THAT MOVE BRANDS FORWARD.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-[#9AA8BC] max-w-2xl font-normal leading-relaxed">
              From bold landing pages to complete digital platforms, we turn ambitious ideas into beautiful, intuitive and high-performing web experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/work"
                className="inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#3B72DE] hover:from-[#5C95FF] hover:to-[#457DE8] text-white font-semibold text-base shadow-glow-sm hover:shadow-glow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-[#111A2B]/80 hover:bg-[#162238] text-white font-semibold text-base border border-white/10 hover:border-[#4F8CFF]/40 transition-all duration-300 backdrop-blur-md"
              >
                <MessageSquare className="w-4 h-4 text-[#70D6FF]" />
                <span>Let's Talk</span>
              </Link>
            </div>

            {/* Trust-Style Line */}
            <div className="pt-4 border-t border-white/10 flex items-center space-x-3 text-xs sm:text-sm font-mono tracking-wider text-[#9AA8BC] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF]" />
              <span>DESIGN-LED. DEVELOPMENT-DRIVEN. DETAIL-OBSESSED.</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <HeroMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
