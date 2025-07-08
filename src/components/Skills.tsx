import React from 'react';
import { Code, Server, Database, Wrench, GitBranch, Globe } from 'lucide-react';

interface SkillsProps {
  isVisible: Record<string, boolean>;
}

const Skills = ({ isVisible }: SkillsProps) => {
  const skills = [
    { name: 'Python', level: 90, icon: <Code className="text-blue-400" size={24} /> },
    { name: 'JavaScript', level: 85, icon: <Globe className="text-yellow-400" size={24} /> },
    { name: 'HTML/CSS', level: 95, icon: <Globe className="text-orange-400" size={24} /> },
    { name: 'Flask', level: 80, icon: <Server className="text-green-400" size={24} /> },
    { name: 'Linux/Shell', level: 85, icon: <Wrench className="text-gray-400" size={24} /> },
    { name: 'Git/GitHub', level: 90, icon: <GitBranch className="text-purple-400" size={24} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Technical Skills</h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                id={`skill-${index}`}
                data-animate
                className={`bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-700 transform ${
                  isVisible[`skill-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <span className="ml-3 text-xl font-semibold text-white">{skill.name}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-teal-400 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible[`skill-${index}`] ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100 + 200}ms`
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400 mt-2 block">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;