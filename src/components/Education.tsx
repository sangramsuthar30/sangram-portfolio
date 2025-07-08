import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

interface EducationProps {
  isVisible: Record<string, boolean>;
}

const Education = ({ isVisible }: EducationProps) => {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Education</h2>
          <p className="text-gray-400 text-lg">My academic background</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div
            id="education-card"
            data-animate
            className={`bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg shadow-2xl border border-teal-500/20 
                       transition-all duration-700 transform hover:scale-105 ${
                         isVisible['education-card'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                       }`}
          >
            <div className="flex items-start space-x-4">
              <div className="bg-teal-500/20 p-3 rounded-full">
                <GraduationCap className="text-teal-400" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Master of Computer Applications</h3>
                <p className="text-teal-400 font-semibold mb-4">MCA (General)</p>
                
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <MapPin className="text-gray-400 mr-2" size={16} />
                    <span>Poornima University, Jaipur</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="text-gray-400 mr-2" size={16} />
                    <span>Graduation: 2026</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-700/50 rounded-lg">
                  <p className="text-gray-300 text-sm">
                    Pursuing advanced studies in computer applications with focus on full-stack development, 
                    software engineering principles, and modern web technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;