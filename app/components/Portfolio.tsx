"use client";
import React, { useState } from 'react';
import { Database, Layout, Server, Mail, FileText, ExternalLink, GitBranch, Linkedin, Github, Briefcase, Calendar, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [activeSection, setActiveSection] = useState('experience');

  // Skills data for Technical Expertise section
  const skillGroups = {
    backend: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JPA',
      'JUnit',
      'C# (.NET)',
      'Python (FastAPI)',
      'Node.js',
      'Express.js',
      'Jakarta EE',
    ],
    frontend: [
      'React',
      'React Router',
      'Redux Toolkit',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
    ],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite'],
    devtest: ['REST API', 'Swagger/OpenAPI', 'Postman', 'Unit Testing', 'CI/CD', 'GitHub Actions'],
    tools: [
      'Git',
      'Jira',
      'Agile-Scrum',
      'MS Office',
      'Visual Studio',
      'Cursor',
      'Claude',
      'IntelliJ',
      'PyCharm',
    ],
    languages: ['Deutsch – C1', 'Englisch – C1'],
  } as const;

  const SkillCard: React.FC<{ title: string; icon: React.ReactNode; items: readonly string[] }> = ({ title, icon, items }) => (
    <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(600px 200px at 0% 0%, rgba(45, 212, 191, 0.08), transparent 60%), radial-gradient(600px 200px at 100% 100%, rgba(59, 130, 246, 0.07), transparent 60%)',
        }}
      />
      <div className="relative p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">{icon}</div>
          <h3 className="text-lg font-semibold text-teal-300">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map((label) => (
            <span
              key={label}
              className="px-3 py-1 rounded-full text-sm bg-slate-800/70 border border-slate-700 text-slate-200 hover:border-teal-500/40 hover:text-teal-200 transition"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col">
      {/* Navigation */}
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

      {/* Content */}
      <main className="container mx-auto px-4 py-16 flex-grow">
        {/* Home Page with Hero, Skills, Experience, and Projects */}
        {activeTab === 'home' && (
          <div className="space-y-24">

{/* Hero Section - Reimagined Design */}
<section className="relative py-16 md:py-24">
  {/* Background Elements */}
  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-teal-500/10 to-transparent"></div>
  <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full"></div>
  
  {/* Content Container */}
  <div className="container mx-auto relative z-10">
    <div className="flex flex-col-reverse md:flex-row items-center gap-12">
      {/* Left Content - Text and CTA */}
      <div className="md:w-7/12 space-y-8 pl-2">
        <div className="inline-block px-4 py-2 bg-slate-800 rounded-full mb-2">
          <span className="text-teal-400 font-medium">Full-Stack Developer</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
          Crafting <span className="text-teal-400">modern</span> digital experiences
        </h1>
        
        <p className="text-xl text-slate-300 max-w-2xl">
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
            className="px-8 py-4 border border-slate-600 hover:border-teal-400 rounded-lg text-slate-200 font-medium transition flex items-center justify-center gap-2">
            Get In Touch
          </button>
        </div>
        
        {/* Tech Stack Pills */}
        <div className="pt-4">
          <p className="text-slate-400 mb-3">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">Java</span>
            <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">Spring Boot</span>
            <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">C# / CSOM</span>
            <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">PowerShell</span>
            <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">Express</span>
            <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">MySQL</span>
            <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">MongoDB</span>
            <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">TypeScript</span>
          </div>
        </div>
      </div>
      
      {/* Right Content - Profile Image + Decorative Elements */}
      <div className="md:w-5/12 relative">
        <div className="relative z-10">
          {/* Outer Border with Gradient */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 p-1 mx-auto">
            {/* Inner Content */}
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 p-2">
              {/* Image */}
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image src="/me.jpg" alt="Devansh Kumar" className="w-full h-full object-cover" width={300} height={300} />
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-teal-500/20 rounded-full blur-xl"></div>
          
          {/* Professional Experience Badge */}
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 shadow-lg">
            <div className="text-center">
              <span className="text-xl font-bold text-teal-400">Professional</span>
              <p className="text-sm text-slate-300">Development<br />Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            {/* Education Timeline Section */}
            <section className="py-12">
              <h2 className="text-3xl font-bold mb-12">Education</h2>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-slate-700"></div>
                
                {/* Timeline Items */}
                <div className="space-y-12">
                  {/* FH Frankfurt */}
                  <div className="relative flex flex-col md:flex-row items-center">
                    <div className="flex flex-col md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                      <h3 className="text-xl font-bold text-teal-400">B.Sc. Informatik</h3>
                      <p className="text-slate-300">FH Frankfurt</p>
                      <p className="text-slate-300">Note: 1.6</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center z-10 order-1 md:order-2">
                      <div className="w-4 h-4 rounded-full bg-slate-900"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 order-3">
                      <div className="text-slate-400 font-medium">03/2021 – 04/2025</div>
                      <p className="text-slate-300 mt-2">Pursuing a Bachelor&apos;s degree in Computer Science with focus on software development and system architecture.</p>
                    </div>
                  </div>
                  
                  {/* FH Darmstadt */}
                  <div className="relative flex flex-col md:flex-row items-center">
                    <div className="flex flex-col md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                      <h3 className="text-xl font-bold text-teal-400">B.Sc. Informatik (Überbrückungssemester)</h3>
                      <p className="text-slate-300">FH Darmstadt</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center z-10 order-1 md:order-2">
                      <div className="w-4 h-4 rounded-full bg-slate-900"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 order-3">
                      <div className="text-slate-400 font-medium">10/2020 – 02/2021</div>
                      <p className="text-slate-300 mt-2">Completed a bridging semester in Computer Science to prepare for full degree program.</p>
                    </div>
                  </div>
                  
                  {/* FH Anhalt */}
                  <div className="relative flex flex-col md:flex-row items-center">
                    <div className="flex flex-col md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                      <h3 className="text-xl font-bold text-teal-400">Studienkolleg (T-Kurs)</h3>
                      <p className="text-slate-300">FH Anhalt, Köthen</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center z-10 order-1 md:order-2">
                      <div className="w-4 h-4 rounded-full bg-slate-900"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 order-3">
                      <div className="text-slate-400 font-medium">08/2019 – 07/2020</div>
                      <p className="text-slate-300 mt-2">Completed technical preparatory course for international students focusing on mathematics, physics, and computer science.</p>
                    </div>
                  </div>
                  
                  {/* F+U Academy */}
                  <div className="relative flex flex-col md:flex-row items-center">
                    <div className="flex flex-col md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                      <h3 className="text-xl font-bold text-teal-400">Sprachschule</h3>
                      <p className="text-slate-300">F+U Academy of Languages, Heidelberg</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center z-10 order-1 md:order-2">
                      <div className="w-4 h-4 rounded-full bg-slate-900"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 order-3">
                      <div className="text-slate-400 font-medium">01/2019 – 07/2019</div>
                      <p className="text-slate-300 mt-2">Intensive German language program achieving C1 proficiency level.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="py-12">
              <div className="mb-8 flex items-end justify-between">
                <h2 className="text-3xl font-bold">Technical Expertise</h2>
                <div className="text-sm text-slate-400">A snapshot of my daily toolbox</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <SkillCard title="Backend" icon={<Server className="text-teal-400" size={18} />} items={skillGroups.backend} />
                <SkillCard title="Frontend" icon={<Layout className="text-teal-400" size={18} />} items={skillGroups.frontend} />
                <SkillCard title="Databases" icon={<Database className="text-teal-400" size={18} />} items={skillGroups.databases} />
                <SkillCard title="Development & Test" icon={<CheckCircle className="text-teal-400" size={18} />} items={skillGroups.devtest} />
                <SkillCard title="Tools" icon={<GitBranch className="text-teal-400" size={18} />} items={skillGroups.tools} />
                <SkillCard title="Languages" icon={<FileText className="text-teal-400" size={18} />} items={skillGroups.languages} />
              </div>
            </section>

            {/* Experience and Projects Tabs Section */}
            <section className="py-12" id="experience-projects">
              {/* Tab Navigation */}
              <div className="flex justify-center mb-12 border-b border-slate-700">
                <button 
                  onClick={() => setActiveSection('experience')}
                  className={`px-6 py-3 font-medium text-lg ${activeSection === 'experience' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-slate-300 hover:text-teal-300'} transition`}>
                  Professional Experience
                </button>
                <button 
                  onClick={() => setActiveSection('projects')}
                  className={`px-6 py-3 font-medium text-lg ${activeSection === 'projects' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-slate-300 hover:text-teal-300'} transition`}>
                  My Projects
                </button>
              </div>
              
              {/* Experience Content */}
              {activeSection === 'experience' && (
                <div className="space-y-12">
                  {/* KFW */}
                  <div className="relative overflow-hidden rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900">
                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(600px 200px at 0% 0%, rgba(45, 212, 191, 0.08), transparent 60%), radial-gradient(600px 200px at 100% 100%, rgba(59, 130, 246, 0.07), transparent 60%)' }}></div>
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
                              <span className="px-2 py-0.5 text-xs rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">Intern</span>
                              <span className="px-2 py-0.5 text-xs rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">Working Student</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Calendar size={16} />
                          <span>08/2023 – 07/2024</span>
                        </div>
                      </div>
                      <ul className="space-y-2 text-slate-300 pl-5 list-disc marker:text-teal-400">
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
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">PowerShell</span>
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">C#</span>
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">.NET</span>
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">REST API</span>
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">JWT</span>
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">React.js</span>
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">TypeScript</span>
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">Swagger</span>
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">Postman</span>
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">HP ALM</span>
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">Jira</span>
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">Confluence</span>
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">Git</span>
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">Scrum</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* TCS */}
                  <div className="relative overflow-hidden rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900">
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
                              <span className="px-2 py-0.5 text-xs rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">Desktop Administrator</span>
                              <span className="px-2 py-0.5 text-xs rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">Working Student</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Calendar size={16} />
                          <span>12/2022 – 06/2023</span>
                        </div>
                      </div>
                      <ul className="space-y-2 text-slate-300 pl-5 list-disc marker:text-teal-400">
                        <li>Installed, configured, and maintained hardware and software components, including operating systems, networks, and peripherals.</li>
                        <li>Diagnosed and resolved technical issues and handled support requests.</li>
                        <li>Provided technical support and consulting to employees on IT-related questions.</li>
                      </ul>
                      <div className="space-y-3 mt-5">
                        <h4 className="font-semibold flex items-center gap-2"><CheckCircle size={16} className="text-teal-400" /> Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">Python</span>
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">PowerShell</span>
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">Windows</span>
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">Linux</span>
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">Hardware/Software Installation</span>
                          <span className="px-2 py-1 bg-slate-700/70 border border-slate-600 rounded-md text-xs">Troubleshooting</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Projects Content */}
              {activeSection === 'projects' && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Project 1 */}
                  <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-teal-500 transition">
                    <div className="h-48 bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                      <h3 className="text-xl font-bold">ProjectFlow - Project Management System</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-slate-700 rounded-md text-xs">React</span>
                        <span className="px-2 py-1 bg-slate-700 rounded-md text-xs">Java</span>
                        <span className="px-2 py-1 bg-slate-700 rounded-md text-xs">Spring Boot</span>
                        <span className="px-2 py-1 bg-slate-700 rounded-md text-xs">MySQL</span>
                        <span className="px-2 py-1 bg-slate-700 rounded-md text-xs">JWT</span>
                      </div>
                      <p className="text-slate-300">Project Management & Kanban Board Application with role-based access control and real-time tracking.</p>
                      
                      <p className="text-slate-300 mt-2">Inspired by Trello and Jira, this application allows teams to create & organize projects, assign tasks / tickets to these projects. Users can create boards, manage tasks with drag-and-drop functionality, assign team members with different roles, and monitor project progress through visual analytics.</p>
                      
                      <div className="space-y-3 mt-4">
                        <h4 className="font-semibold">Key Features:</h4>
                        <ul className="space-y-1 text-slate-300 pl-5 list-disc">
                          <li>RESTful API with Java Spring Boot</li>
                          <li>JWT Authentication & Role-based access</li>
                          <li>Interactive Kanban boards with drag-and-drop</li>
                          <li>Real-time search & date-based filtering</li>
                          <li>Project analytics with Nivo Charts</li>
                        </ul>
                      </div>
                      <div className="flex gap-4">
                        <a href="https://github.com/techikansh/Project-Management-System-API" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-teal-400 hover:text-teal-300">
                          <GitBranch size={16} /> Code
                        </a>
                        <a href="https://kanban-board-opal-three.vercel.app/" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-teal-400 hover:text-teal-300">
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project 2 */}
                  <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-teal-500 transition">
                    <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <h3 className="text-xl font-bold">Multilingual Chat App</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-slate-700 rounded-md text-xs">React</span>
                        <span className="px-2 py-1 bg-slate-700 rounded-md text-xs">Node.js</span>
                        <span className="px-2 py-1 bg-slate-700 rounded-md text-xs">Socket.IO</span>
                        <span className="px-2 py-1 bg-slate-700 rounded-md text-xs">MongoDB</span>
                      </div>
                      <p className="text-slate-300">Real-time chat application with automatic message translation using AI language models.</p>
                      
                      <p className="text-slate-300 mt-2">This multilingual chat application breaks down language barriers by providing real-time translation between users speaking different languages. The app detects the language of incoming messages and automatically translates them to the recipient&apos;s preferred language, with an option to view the original text. Users can create chat rooms, upload pictures, and see when messages are read.</p>
                      
                      <div className="space-y-3 mt-4">
                        <h4 className="font-semibold">Key Features:</h4>
                        <ul className="space-y-1 text-slate-300 pl-5 list-disc">
                          <li>WebSocket-based real-time messaging with Socket.IO</li>
                          <li>AI-powered translation pipeline with GPT-4o & DeepL APIs</li>
                          <li>Direct & group chat with admin controls</li>
                          <li>File sharing & read receipts</li>
                          <li>User status updates & typing indicators</li>
                        </ul>
                      </div>
                      <div className="flex gap-4">
                        <a href="https://github.com/techikansh/Mehrsprachige-Chat-App" 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             className="flex items-center gap-2 text-teal-400 hover:text-teal-300">
                            <GitBranch size={16} /> Code
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project 3 */}
                  <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-teal-500 transition">
                    <div className="h-48 bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                      <h3 className="text-xl font-bold">Real Estate Platform</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-slate-700 rounded-md text-xs">React</span>
                        <span className="px-2 py-1 bg-slate-700 rounded-md text-xs">Node.js</span>
                        <span className="px-2 py-1 bg-slate-700 rounded-md text-xs">MongoDB</span>
                        <span className="px-2 py-1 bg-slate-700 rounded-md text-xs">OAuth2.0</span>
                      </div>
                      <p className="text-slate-300">Immobilienplattform with comprehensive property search, management, and user authentication.</p>
                      
                      <p className="text-slate-300 mt-2">Inspired by ImmoScout24, this platform allows users to list properties for rent or sale, upload property images, and find available listings through an advanced search functionality with filters for location, price range, property type, and more.</p>
                      
                      <div className="space-y-3 mt-4">
                        <h4 className="font-semibold">Key Features:</h4>
                        <ul className="space-y-1 text-slate-300 pl-5 list-disc">
                          <li>RESTful API with Express.js</li>
                          <li>Advanced search & filtering (price, location, property type)</li>
                          <li>JWT & OAuth2.0 authentication</li>
                          <li>MongoDB with Mongoose</li>
                          <li>Firebase Cloud Storage for property images</li>
                        </ul>
                      </div>
                      <div className="flex gap-4">
                        <a href="https://github.com/techikansh/Real-Estate-Marketplace" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-teal-400 hover:text-teal-300">
                          <GitBranch size={16} /> Code
                        </a>
                        <a href="https://real-estate-marketplace-client.onrender.com/" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-teal-400 hover:text-teal-300">
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project 4 */}
                  <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-teal-500 transition">
                    <div className="h-48 bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <h3 className="text-xl font-bold">Blogging API</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-slate-700 rounded-md text-xs">Spring Boot 3</span>
                        <span className="px-2 py-1 bg-slate-700 rounded-md text-xs">MySQL</span>
                        <span className="px-2 py-1 bg-slate-700 rounded-md text-xs">JPA</span>
                        <span className="px-2 py-1 bg-slate-700 rounded-md text-xs">Postman</span>
                      </div>
                      <p className="text-slate-300">RESTful API for a blogging application with comprehensive CRUD operations.</p>
                      
                      <p className="text-slate-300 mt-2">This backend service provides the foundation for a blogging application with RESTful CRUD operations for blog posts. Built with Spring Boot 3 and MySQL with JPA, it follows best practices for API design, ensuring secure and efficient data management.</p>
                      
                      <div className="space-y-3 mt-4">
                        <h4 className="font-semibold">Key Features:</h4>
                        <ul className="space-y-1 text-slate-300 pl-5 list-disc">
                          <li>Spring Boot 3 architecture with layered design</li>
                          <li>Complete CRUD functionality for posts and comments</li>
                          <li>MySQL with Spring Data JPA for efficient data access</li>
                          <li>Comprehensive API documentation and testing with Postman</li>
                          <li>Data validation and error handling</li>
                        </ul>
                      </div>
                      <div className="flex gap-4">
                        <a href="https://github.com/techikansh/Blogging.App.API" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-teal-400 hover:text-teal-300">
                          <GitBranch size={16} /> Code
                        </a>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href="https://github.com/techikansh?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium shadow-lg hover:shadow-teal-500/30 transition"
                    >
                      <span>View more projects</span>
                      <ExternalLink size={18} className="transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              )}
            </section>
          </div>
        )}
        
        {/* Contact Page */}
        {activeTab === 'contact' && (
          <div className="space-y-12">
            <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <p className="text-xl text-slate-300">
                  I&apos;m currently open to new opportunities in full-stack development roles. Feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="text-teal-400" size={24} />
                    <a href="mailto:kumar.devansh.cse@gmail.com" className="text-slate-300 hover:text-teal-400 transition">
                      kumar.devansh.cse@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <FileText className="text-teal-400" size={24} />
                    <a href="#" className="text-slate-300 hover:text-teal-400 transition">
                      Download Resume
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Linkedin className="text-teal-400" size={24} />
                    <a href="https://www.linkedin.com/in/devansh-kumar-aa1588254/" className="text-slate-300 hover:text-teal-400 transition">
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Github className="text-teal-400" size={24} />
                    <a href="https://github.com/techikansh" className="text-slate-300 hover:text-teal-400 transition">
                      github.com/techikansh
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <p className="text-slate-300">
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
                  
                  <p className="text-slate-400 text-sm mt-4">
                    This will open your default email client with my email address and a subject line already filled in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer */}
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
    </div>
  );
};

export default Portfolio;