import React from 'react';

const EducationSection: React.FC = () => {
  return (
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
  );
};

export default EducationSection;

