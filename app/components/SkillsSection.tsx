import React from 'react';
import { Database, Layout, Server, FileText, GitBranch, CheckCircle } from 'lucide-react';

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
  <div className="relative overflow-hidden rounded-xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(600px 200px at 0% 0%, rgba(45, 212, 191, 0.08), transparent 60%), radial-gradient(600px 200px at 100% 100%, rgba(168, 85, 247, 0.07), transparent 60%)',
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
            className="px-3 py-1 rounded-full text-sm bg-neutral-800/70 border border-neutral-700 text-neutral-200 hover:border-teal-500/40 hover:text-teal-200 transition"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const SkillsSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-bold">Technical Expertise</h2>
        <div className="text-sm text-neutral-400">A snapshot of my daily toolbox</div>
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
  );
};

export default SkillsSection;
