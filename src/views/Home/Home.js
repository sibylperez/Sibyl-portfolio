import React from 'react';
import Landing from '../../components/Landing/LandingPhoto';
import AboutSection from '../../components/SectionHomeAbout/AboutSection';
import ServicesSection from '../../components/SectionHomeServices/ServicesSection';

export default function Home() {
  return (
    <div>
      <Landing />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
