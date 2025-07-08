import React from 'react';
import { ExternalLink, Github, Code, Server, Database, Smartphone } from 'lucide-react';

interface ProjectsProps {
  isVisible: Record<string, boolean>;
}

const Projects = ({ isVisible }: ProjectsProps) => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: <Server className="text-blue-400" size={24} />,
      github: "https://github.com/UttkarshK15"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "PWA"],
      icon: <Smartphone className="text-green-400" size={24} />,
      github: "https://github.com/UttkarshK15"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Automated deployment pipeline with Docker containerization and cloud infrastructure management.",
      technologies: ["Docker", "Jenkins", "AWS", "Python"],
      icon: <Code className="text-purple-400" size={24} />,
      github: "https://github.com/UttkarshK15"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analytics with real-time chart updates.",
      technologies: ["Python", "Flask", "D3.js", "PostgreSQL"],
      icon: <Database className="text-orange-400" size={24} />,
      github: "https://github.com/UttkarshK15"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with WebSocket integration and file sharing capabilities.",
      technologies: ["Socket.io", "React", "Express", "Redis"],
      icon: <Server className="text-teal-400" size={24} />,
      github: "https://github.com/UttkarshK15"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website showcasing projects and skills with modern design principles.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      icon: <Code className="text-pink-400" size={24} />,
      github: "https://github.com/UttkarshK15"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Projects</h2>
          <p className="text-gray-400 text-lg">Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              id={`project-${index}`}
              data-animate
              className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-cyan-500/20 
                         transition-all duration-700 transform hover:scale-105 hover:shadow-2xl 
                         hover:border-cyan-500/50 ${
                           isVisible[`project-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                         }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-teal-500/20 text-teal-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={16} className="mr-1" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-teal-400 transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;