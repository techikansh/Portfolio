import React from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 hover:border-teal-500 transition">
          <div className="h-48 bg-gradient-to-r from-purple-500 to-teal-500 flex items-center justify-center">
            <h3 className="text-xl font-bold">ProjectFlow - Project Management System</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-neutral-700 rounded-md text-xs">React</span>
              <span className="px-2 py-1 bg-neutral-700 rounded-md text-xs">Java</span>
              <span className="px-2 py-1 bg-neutral-700 rounded-md text-xs">Spring Boot</span>
              <span className="px-2 py-1 bg-neutral-700 rounded-md text-xs">MySQL</span>
              <span className="px-2 py-1 bg-neutral-700 rounded-md text-xs">JWT</span>
            </div>
            <p className="text-neutral-300">Project Management & Kanban Board Application with role-based access control and real-time tracking.</p>
            
            <p className="text-neutral-300 mt-2">Inspired by Trello and Jira, this application allows teams to create & organize projects, assign tasks / tickets to these projects. Users can create boards, manage tasks with drag-and-drop functionality, assign team members with different roles, and monitor project progress through visual analytics.</p>
            
            <div className="space-y-3 mt-4">
              <h4 className="font-semibold">Key Features:</h4>
              <ul className="space-y-1 text-neutral-300 pl-5 list-disc">
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
        <div className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 hover:border-teal-500 transition">
          <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <h3 className="text-xl font-bold">Multilingual Chat App</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-neutral-700 rounded-md text-xs">React</span>
              <span className="px-2 py-1 bg-neutral-700 rounded-md text-xs">Node.js</span>
              <span className="px-2 py-1 bg-neutral-700 rounded-md text-xs">Socket.IO</span>
              <span className="px-2 py-1 bg-neutral-700 rounded-md text-xs">MongoDB</span>
            </div>
            <p className="text-neutral-300">Real-time chat application with automatic message translation using AI language models.</p>
            
            <p className="text-neutral-300 mt-2">This multilingual chat application breaks down language barriers by providing real-time translation between users speaking different languages. The app detects the language of incoming messages and automatically translates them to the recipient&apos;s preferred language, with an option to view the original text. Users can create chat rooms, upload pictures, and see when messages are read.</p>
            
            <div className="space-y-3 mt-4">
              <h4 className="font-semibold">Key Features:</h4>
              <ul className="space-y-1 text-neutral-300 pl-5 list-disc">
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
        <div className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 hover:border-teal-500 transition">
          <div className="h-48 bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
            <h3 className="text-xl font-bold">Real Estate Platform</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-neutral-700 rounded-md text-xs">React</span>
              <span className="px-2 py-1 bg-neutral-700 rounded-md text-xs">Node.js</span>
              <span className="px-2 py-1 bg-neutral-700 rounded-md text-xs">MongoDB</span>
              <span className="px-2 py-1 bg-neutral-700 rounded-md text-xs">OAuth2.0</span>
            </div>
            <p className="text-neutral-300">Immobilienplattform with comprehensive property search, management, and user authentication.</p>
            
            <p className="text-neutral-300 mt-2">Inspired by ImmoScout24, this platform allows users to list properties for rent or sale, upload property images, and find available listings through an advanced search functionality with filters for location, price range, property type, and more.</p>
            
            <div className="space-y-3 mt-4">
              <h4 className="font-semibold">Key Features:</h4>
              <ul className="space-y-1 text-neutral-300 pl-5 list-disc">
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
        <div className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 hover:border-teal-500 transition">
          <div className="h-48 bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
            <h3 className="text-xl font-bold">Blogging API</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-neutral-700 rounded-md text-xs">Spring Boot 3</span>
              <span className="px-2 py-1 bg-neutral-700 rounded-md text-xs">MySQL</span>
              <span className="px-2 py-1 bg-neutral-700 rounded-md text-xs">JPA</span>
              <span className="px-2 py-1 bg-neutral-700 rounded-md text-xs">Postman</span>
            </div>
            <p className="text-neutral-300">RESTful API for a blogging application with comprehensive CRUD operations.</p>
            
            <p className="text-neutral-300 mt-2">This backend service provides the foundation for a blogging application with RESTful CRUD operations for blog posts. Built with Spring Boot 3 and MySQL with JPA, it follows best practices for API design, ensuring secure and efficient data management.</p>
            
            <div className="space-y-3 mt-4">
              <h4 className="font-semibold">Key Features:</h4>
              <ul className="space-y-1 text-neutral-300 pl-5 list-disc">
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
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-purple-500 text-white font-medium shadow-lg hover:shadow-teal-500/30 transition"
        >
          <span>View more projects</span>
          <ExternalLink size={18} className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
};

export default ProjectsSection;
