import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import Services from '../components/Services';
import FeaturedWork from '../components/FeaturedWork';
import Process from '../components/Process';
import WhyDesignMatters from '../components/WhyDesignMatters';
import Contact from '../components/Contact';

export default function HomePage() {
  useEffect(() => {
    document.title = 'NEXORA DIGITAL — We Build Digital Experiences';
  }, []);

  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <FeaturedWork />
      <Process />
      <WhyDesignMatters />
      <Contact />
    </>
  );
}
