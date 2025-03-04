// src/App.tsx
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PlatformSection from './components/PlatformSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <AboutSection />
      <PlatformSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
