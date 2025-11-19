"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  const handleProjectsClick = () => {
    setActiveTab('home');
    setActiveSection('projects');
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById('experience-projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-teal-400">Devansh Kumar</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => setActiveTab('home')}
            className={`${activeTab === 'home' ? 'text-teal-400' : 'text-neutral-300'} hover:text-teal-300 transition`}>
            Home
          </button>
          <button 
            onClick={() => setActiveTab('contact')}
            className={`${activeTab === 'contact' ? 'text-teal-400' : 'text-neutral-300'} hover:text-teal-300 transition`}>
            Contact
          </button>
        </div>

        {/* Desktop Projects Button */}
        <button 
          onClick={handleProjectsClick}
          className="hidden md:block px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-md transition">
          Projects
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-300 hover:text-teal-400 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-700 px-4 py-4 space-y-4 shadow-xl">
          <button 
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left ${activeTab === 'home' ? 'text-teal-400' : 'text-neutral-300'} hover:text-teal-300 transition`}>
            Home
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className={`block w-full text-left ${activeTab === 'contact' ? 'text-teal-400' : 'text-neutral-300'} hover:text-teal-300 transition`}>
            Contact
          </button>
          <button 
            onClick={handleProjectsClick}
            className="block w-full text-center px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-md transition text-white font-medium">
            Projects
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
