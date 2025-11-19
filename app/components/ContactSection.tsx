"use client";
import React from 'react';
import { Mail, FileText, Linkedin, Github } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-xl text-neutral-300">
            I&apos;m currently open to new opportunities in full-stack development roles. Feel free to reach out!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="text-teal-400" size={24} />
              <a href="mailto:kumar.devansh.cse@gmail.com" className="text-neutral-300 hover:text-teal-400 transition">
                kumar.devansh.cse@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FileText className="text-teal-400" size={24} />
              <a href="#" className="text-neutral-300 hover:text-teal-400 transition">
                Download Resume
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin className="text-teal-400" size={24} />
              <a href="https://www.linkedin.com/in/devansh-kumar-aa1588254/" className="text-neutral-300 hover:text-teal-400 transition">
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Github className="text-teal-400" size={24} />
              <a href="https://github.com/techikansh" className="text-neutral-300 hover:text-teal-400 transition">
                github.com/techikansh
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <div className="space-y-6">
            <p className="text-neutral-300">
              I&apos;m always interested in hearing about new projects and opportunities. If you&apos;d like to connect, click the button below to send me an email directly.
            </p>
            
            <button 
              onClick={() => {
                const email = 'kumar.devansh.cse@gmail.com';
                const subject = 'Inquiry from Portfolio Website';
                const body = 'Hello Devansh,\n\nI visited your portfolio website and would like to connect with you regarding...';
                
                window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}
              className="px-6 py-4 bg-teal-500 hover:bg-teal-600 rounded-md transition w-full flex justify-center items-center gap-3"
            >
              <Mail size={20} />
              Send Me an Email
            </button>
            
            <p className="text-neutral-400 text-sm mt-4">
              This will open your default email client with my email address and a subject line already filled in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
