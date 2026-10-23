import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X, ChevronDown, Layout, Code2, Rocket, Briefcase } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const serviceSublinks = [
    { name: 'Web Development', href: '/services/web-development', icon: Code2, desc: 'Responsive, high-performance websites' },
    { name: 'Website Design', href: '/services/website-design', icon: Layout, desc: 'UI/UX and bespoke design systems' },
    { name: 'Landing Pages', href: '/services/landing-pages', icon: Rocket, desc: 'High-impact value communication' },
    { name: 'Portfolio Websites', href: '/services/portfolio-websites', icon: Briefcase, desc: 'Personal & professional showcases' },
  ];

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#0B1220]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Geometric Abstract Symbol */}
          <Link
            to="/"
            className="flex items-center space-x-3 group outline-none focus-visible:ring-2 focus-visible:ring-[#4F8CFF] rounded-lg p-1"
            aria-label="NEXORA DIGITAL Homepage"
          >
            {/* Custom Abstract Geometric Symbol */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#111A2B] to-[#070B14] border border-white/15 group-hover:border-[#4F8CFF]/60 transition-colors duration-300 shadow-md">
              <svg
                viewBox="0 0 28 28"
                className="w-5 h-5 text-[#4F8CFF] group-hover:text-[#70D6FF] transition-colors duration-300"
                fill="none"
              >
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
                <circle cx="21" cy="7" r="2" fill="#70D6FF" className="animate-pulse" />
              </svg>
            </div>

            {/* Wordmark */}
            <div className="flex flex-col text-left">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-white transition-colors leading-none font-sans">
                NEXORA<span className="text-[#4F8CFF] font-light">DIGITAL</span>
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#9AA8BC] font-mono mt-0.5">
                STUDIO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-[#111A2B]/70 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            
            {/* Home */}
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3.5 py-1.5 text-sm font-medium transition-colors rounded-full ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-[#9AA8BC] hover:text-white hover:bg-white/5'
                }`
              }
            >
              Home
            </NavLink>

            {/* Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/services/web-development"
                className={`px-3.5 py-1.5 text-sm font-medium transition-colors rounded-full flex items-center space-x-1 ${
                  isServicesActive
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-[#9AA8BC] hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </Link>

              {/* Services Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="rounded-2xl bg-[#0B1220] border border-white/15 p-2 shadow-2xl backdrop-blur-xl text-left">
                    {serviceSublinks.map((sub) => {
                      const Icon = sub.icon;
                      return (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-[#111A2B] transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#111A2B] border border-white/10 flex items-center justify-center text-[#4F8CFF] group-hover:text-[#70D6FF] group-hover:border-[#4F8CFF]/40 transition-colors flex-shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover:text-[#70D6FF] transition-colors">
                              {sub.name}
                            </div>
                            <div className="text-[10px] text-[#9AA8BC] leading-snug">
                              {sub.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Work */}
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `px-3.5 py-1.5 text-sm font-medium transition-colors rounded-full ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-[#9AA8BC] hover:text-white hover:bg-white/5'
                }`
              }
            >
              Work
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3.5 py-1.5 text-sm font-medium transition-colors rounded-full ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-[#9AA8BC] hover:text-white hover:bg-white/5'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#4F8CFF] to-[#3B72DE] hover:from-[#5C95FF] hover:to-[#457DE8] text-white text-sm font-semibold shadow-glow-sm hover:shadow-glow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#111A2B] border border-white/10 text-white hover:text-[#4F8CFF] focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#070B14]/98 border-b border-white/10 backdrop-blur-2xl p-6 shadow-2xl transition-all duration-200 animate-in fade-in slide-in-from-top-4 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-3 text-left">
            <Link
              to="/"
              className="px-4 py-2.5 text-base font-medium text-[#F5F7FB] hover:text-[#4F8CFF] hover:bg-[#111A2B] rounded-xl transition-colors"
            >
              Home
            </Link>

            {/* Mobile Services Section */}
            <div className="px-4 py-2 rounded-xl bg-[#111A2B]/40 border border-white/5 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#70D6FF] font-semibold block">
                Services
              </span>
              <div className="grid grid-cols-1 gap-1.5 pl-2">
                {serviceSublinks.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.href}
                    className="py-1.5 text-sm text-[#9AA8BC] hover:text-white transition-colors"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/work"
              className="px-4 py-2.5 text-base font-medium text-[#F5F7FB] hover:text-[#4F8CFF] hover:bg-[#111A2B] rounded-xl transition-colors"
            >
              Work & Selected Concepts
            </Link>

            <Link
              to="/contact"
              className="px-4 py-2.5 text-base font-medium text-[#F5F7FB] hover:text-[#4F8CFF] hover:bg-[#111A2B] rounded-xl transition-colors"
            >
              Contact
            </Link>

            <div className="pt-3">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#3B72DE] text-white font-semibold text-base shadow-glow-sm"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
