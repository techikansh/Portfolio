"use client";
import React from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, setActiveSection }) => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-teal-400">Devansh Kumar</div>
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => setActiveTab('home')}
            className={`${activeTab === 'home' ? 'text-teal-400' : 'text-slate-300'} hover:text-teal-300 transition`}>
            Home
          </button>
          <button 
            onClick={() => setActiveTab('contact')}
            className={`${activeTab === 'contact' ? 'text-teal-400' : 'text-slate-300'} hover:text-teal-300 transition`}>
            Contact
          </button>
        </div>
        <button 
          onClick={() => {
            setActiveTab('home');
            setActiveSection('projects');
            setTimeout(() => {
              const element = document.getElementById('experience-projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
          className="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-md transition">
          Projects
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

