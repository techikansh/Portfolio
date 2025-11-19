import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 mb-4 md:mb-0">
            © 2025 Devansh Kumar. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/techikansh" className="text-slate-400 hover:text-teal-400 transition">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/devansh-kumar-aa1588254/" className="text-slate-400 hover:text-teal-400 transition">
              <Linkedin size={20} />
            </a>
            <a href="mailto:kumar.devansh.cse@gmail.com" className="text-slate-400 hover:text-teal-400 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

