import React from 'react';
import Landing from '../../components/Landing/LandingPhoto';
import AboutSection from '../../components/SectionHomeAbout/AboutSection';
import ServicesSection from '../../components/SectionHomeServices/ServicesSection';
import ProjectsSection from '../../components/SectionHomeProjects/ProjectsSection';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Landing />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
