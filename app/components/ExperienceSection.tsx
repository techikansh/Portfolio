import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* KFW */}
      <div className="relative overflow-hidden rounded-lg border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(600px 200px at 0% 0%, rgba(45, 212, 191, 0.08), transparent 60%), radial-gradient(600px 200px at 100% 100%, rgba(168, 85, 247, 0.07), transparent 60%)' }}></div>
        <div className="relative p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                <Briefcase className="text-teal-400" size={18} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-teal-400">KFW</h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="px-2 py-0.5 text-xs rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300">Software Engineer</span>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">Intern</span>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">Working Student</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <Calendar size={16} />
              <span>08/2023 – 07/2024</span>
            </div>
          </div>
          <ul className="space-y-2 text-neutral-300 pl-5 list-disc marker:text-teal-400">
            <li>Collaborated closely with business units to gather requirements and translate them into technical solutions.</li>
            <li>Designed and developed a complete REST API in C# with secure JWT authentication, implementing full CRUD operations and optimizing the service layer for higher performance.</li>
            <li>Leveraged asynchrony and paging to improve performance with large datasets.</li>
            <li>Built PowerShell scripts to automate SharePoint processes and file operations (e.g., data synchronization, data encryption).</li>
            <li>Fixed frontend bugs in React + TypeScript and wrote unit tests to ensure functionality.</li>
            <li>Conducted code reviews to ensure code quality and adherence to best practices.</li>
            <li>Created and executed test cases in HP-ALM to ensure quality of new features during release preparations.</li>
            <li>Documented architecture and testing processes to ensure transparency, traceability, and release quality.</li>
          </ul>
          <div className="space-y-3 mt-5">
            <h4 className="font-semibold flex items-center gap-2"><CheckCircle size={16} className="text-teal-400" /> Tools</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">PowerShell</span>
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">C#</span>
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">.NET</span>
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">REST API</span>
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">JWT</span>
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">React.js</span>
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">TypeScript</span>
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">Swagger</span>
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">Postman</span>
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">HP ALM</span>
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">Jira</span>
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">Confluence</span>
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">Git</span>
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">Scrum</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* TCS */}
      <div className="relative overflow-hidden rounded-lg border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(600px 200px at 0% 0%, rgba(16, 185, 129, 0.08), transparent 60%), radial-gradient(600px 200px at 100% 100%, rgba(168, 85, 247, 0.07), transparent 60%)' }}></div>
        <div className="relative p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                <Briefcase className="text-teal-400" size={18} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-teal-400">TCS - Tata Consultancy Services</h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="px-2 py-0.5 text-xs rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">Desktop Administrator</span>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">Working Student</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <Calendar size={16} />
              <span>12/2022 – 06/2023</span>
            </div>
          </div>
          <ul className="space-y-2 text-neutral-300 pl-5 list-disc marker:text-teal-400">
            <li>Installed, configured, and maintained hardware and software components, including operating systems, networks, and peripherals.</li>
            <li>Diagnosed and resolved technical issues and handled support requests.</li>
            <li>Provided technical support and consulting to employees on IT-related questions.</li>
          </ul>
          <div className="space-y-3 mt-5">
            <h4 className="font-semibold flex items-center gap-2"><CheckCircle size={16} className="text-teal-400" /> Tools</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">Python</span>
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">PowerShell</span>
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">Windows</span>
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">Linux</span>
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">Hardware/Software Installation</span>
              <span className="px-2 py-1 bg-neutral-700/70 border border-neutral-600 rounded-md text-xs">Troubleshooting</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
