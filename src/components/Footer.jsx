import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Website Design', href: '/services/website-design' },
    { name: 'Selected Work', href: '/work' },
    { name: 'Contact Studio', href: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Website Design', href: '/services/website-design' },
    { name: 'Landing Pages', href: '/services/landing-pages' },
    { name: 'Portfolio Websites', href: '/services/portfolio-websites' },
  ];

  const conceptProjects = [
    { name: 'Aether Finance (Fintech)', href: '/work/aether-finance' },
    { name: 'Atelier Noir (Luxury E-Com)', href: '/work/atelier-noir' },
    { name: 'Orbit Creative (Studio Portfolio)', href: '/work/orbit-creative' },
  ];

  return (
    <footer className="relative bg-[#05080F] border-t border-white/10 pt-16 pb-12 overflow-hidden text-left">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#4F8CFF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center space-x-3 group"
              aria-label="NEXORA DIGITAL Homepage"
            >
              <div className="w-8 h-8 rounded-lg bg-[#111A2B] border border-white/15 flex items-center justify-center text-[#4F8CFF] group-hover:text-[#70D6FF] transition-colors">
                <svg viewBox="0 0 28 28" className="w-5 h-5" fill="none">
                  <path
                    d="M7 21V7L14 17V7L21 17V21L14 11V21L7 21Z"
                    fill="currentColor"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M7 21V7L14 17V7L21 17V21"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="21" cy="7" r="2" fill="#70D6FF" />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                NEXORA<span className="text-[#4F8CFF] font-light">DIGITAL</span>
              </span>
            </Link>

            <p className="text-sm text-[#9AA8BC] max-w-sm leading-relaxed">
              Thoughtful design. Modern development. Better digital experiences.
            </p>

            <div className="pt-2 text-xs font-mono text-[#70D6FF]/80">
              "WE BUILD DIGITAL EXPERIENCES."
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm text-[#9AA8BC] hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Concept Works */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Selected Concepts
            </h4>
            <ul className="space-y-2">
              {conceptProjects.map((project) => (
                <li key={project.name}>
                  <Link
                    to={project.href}
                    className="text-sm text-[#9AA8BC] hover:text-white transition-colors"
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#9AA8BC] hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#9AA8BC]">
            &copy; {new Date().getFullYear()} NEXORA DIGITAL. Creative agency concept project designed for web development showcasing.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 text-xs text-[#9AA8BC] hover:text-white bg-[#111A2B] px-3.5 py-2 rounded-full border border-white/5 hover:border-white/20 transition-all group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
