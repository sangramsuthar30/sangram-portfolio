import React from 'react';
import { Download, User, Briefcase } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent">
              Sangram Suthar
            </h1>
            <h2 className="text-2xl md:text-3xl text-teal-400 mb-6 font-semibold">
              Fullstack Engineer
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Fullstack Engineer passionate about automating infrastructure and scalable CI/CD pipelines. 
              Building modern web applications with cutting-edge technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fadeInUp delay-300">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold 
                         hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 
                         shadow-lg hover:shadow-xl animate-pulse"
            >
              🔥 Hire Me
            </button>
            <a
              href="#resume"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold 
                         hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 
                         shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Download size={20} />
              Resume
            </a>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-3 rounded-full font-semibold 
                         hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 
                         shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <User size={20} />
              About Me
            </button>
          </div>

          <div className="animate-fadeInUp delay-500">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-teal-500 text-white px-12 py-4 rounded-full font-semibold text-lg 
                         hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 
                         shadow-lg hover:shadow-2xl animate-bounce"
            >
              <Briefcase className="inline mr-2" size={20} />
              Explore Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;