"use client";
import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [activeSection, setActiveSection] = useState('experience');

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 to-neutral-900 text-white flex flex-col">
      {/* Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} setActiveSection={setActiveSection} />

      {/* Content */}
      <main className="container mx-auto px-4 py-16 flex-grow">
        {/* Home Page with Hero, Skills, Experience, and Projects */}
        {activeTab === 'home' && (
          <div className="space-y-24">
            <HeroSection setActiveTab={setActiveTab} setActiveSection={setActiveSection} />
            <EducationSection />
            <SkillsSection />

            {/* Experience and Projects Tabs Section */}
            <section className="py-12" id="experience-projects">
              {/* Tab Navigation */}
              <div className="flex justify-center mb-12 border-b border-neutral-700">
                <button 
                  onClick={() => setActiveSection('experience')}
                  className={`px-6 py-3 font-medium text-lg ${activeSection === 'experience' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-neutral-300 hover:text-teal-300'} transition`}>
                  Professional Experience
                </button>
                <button 
                  onClick={() => setActiveSection('projects')}
                  className={`px-6 py-3 font-medium text-lg ${activeSection === 'projects' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-neutral-300 hover:text-teal-300'} transition`}>
                  My Projects
                </button>
              </div>
              
              {/* Experience Content */}
              {activeSection === 'experience' && <ExperienceSection />}
              
              {/* Projects Content */}
              {activeSection === 'projects' && <ProjectsSection />}
            </section>
          </div>
        )}
        
        {/* Contact Page */}
        {activeTab === 'contact' && <ContactSection />}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
