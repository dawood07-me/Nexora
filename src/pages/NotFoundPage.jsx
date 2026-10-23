import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = '404 Page Not Found — NEXORA DIGITAL';
  }, []);

  return (
    <div className="min-h-screen pt-36 pb-24 flex items-center justify-center px-4 bg-grid-pattern text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#111A2B] border border-white/10 flex items-center justify-center text-[#70D6FF] mx-auto shadow-glow-sm">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '12s' }} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#70D6FF] uppercase">
            ERROR 404
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-[#9AA8BC] leading-relaxed">
            The page you requested doesn't exist, has been moved, or the URL might be mistyped.
          </p>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#3B72DE] text-white font-semibold text-sm shadow-glow-sm hover:shadow-glow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
