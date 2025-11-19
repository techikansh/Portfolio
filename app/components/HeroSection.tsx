"use client";
import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  setActiveTab: (tab: string) => void;
  setActiveSection: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setActiveTab, setActiveSection }) => {
  return (
    <section className="relative py-16 md:py-24">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-gradient-to-bl from-teal-500/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full md:w-1/4 h-2/3 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-full pointer-events-none"></div>
      
      {/* Content Container */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left Content - Text and CTA */}
          <div className="md:w-7/12 space-y-8 pl-2">
            <div className="inline-block px-4 py-2 bg-neutral-800 rounded-full mb-2">
              <span className="text-teal-400 font-medium">Full-Stack Developer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Crafting <span className="text-teal-400">modern</span> digital experiences
            </h1>
            
            <p className="text-xl text-neutral-300 max-w-2xl">
              I build scalable applications with Java, Spring Boot, React, and cloud technologies, 
              focusing on clean architecture and exceptional user experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={() => {
                  setActiveSection('experience');
                  const element = document.getElementById('experience-projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 bg-teal-500 hover:bg-teal-600 rounded-lg text-white font-medium transition flex items-center justify-center gap-2">
                Explore My Work
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                className="px-8 py-4 border border-neutral-600 hover:border-teal-400 rounded-lg text-neutral-200 font-medium transition flex items-center justify-center gap-2">
                Get In Touch
              </button>
            </div>
            
            {/* Tech Stack Pills */}
            <div className="pt-4">
              <p className="text-neutral-400 mb-3">Tech Stack:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-sm">C# / CSOM</span>
                <span className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-sm">PowerShell</span>
                <span className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-sm">Express</span>
                <span className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-sm">MySQL</span>
                <span className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-sm">TypeScript</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Image + Decorative Elements */}
          <div className="md:w-5/12 relative mt-8 mb-16 md:mt-0 md:mb-0">
            <div className="relative z-10 flex justify-center">
              {/* Outer Border with Gradient */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-teal-400 via-purple-500 to-purple-600 p-1 relative">
                {/* Inner Content */}
                <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 p-2">
                  {/* Image */}
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image src="/me.jpg" alt="Devansh Kumar" className="w-full h-full object-cover" width={300} height={300} />
                  </div>
                </div>
                
                {/* Professional Experience Badge - Mobile: Bottom Center, Desktop: Right Side */}
                <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 md:left-auto md:right-[-2rem] md:top-1/2 md:bottom-auto md:-translate-x-0 md:-translate-y-1/2 bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 shadow-lg whitespace-nowrap z-20">
                  <div className="text-center">
                    <span className="text-xl font-bold text-teal-400">Professional</span>
                    <p className="text-sm text-neutral-300">Development<br />Experience</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl hidden md:block"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-teal-500/20 rounded-full blur-xl hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
