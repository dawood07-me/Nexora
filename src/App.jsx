import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import WebDevelopmentPage from './pages/services/WebDevelopmentPage';
import WebsiteDesignPage from './pages/services/WebsiteDesignPage';
import LandingPagesPage from './pages/services/LandingPagesPage';
import PortfolioWebsitesPage from './pages/services/PortfolioWebsitesPage';
import WorkPage from './pages/WorkPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#070B14] text-[#F5F7FB] selection:bg-[#4F8CFF]/30 selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Homepage */}
            <Route path="/" element={<HomePage />} />

            {/* Service Pages */}
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/website-design" element={<WebsiteDesignPage />} />
            <Route path="/services/landing-pages" element={<LandingPagesPage />} />
            <Route path="/services/portfolio-websites" element={<PortfolioWebsitesPage />} />

            {/* Work Pages */}
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:id" element={<ProjectDetailPage />} />

            {/* Contact Page */}
            <Route path="/contact" element={<ContactPage />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
