import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Heroine = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/899757/pexels-photo-899757.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Professional headshot"
              className="w-32 h-32 rounded-full mx-auto object-cover shadow-xl border-4 border-white"
            />
          </div>

          {/* Heroine Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
             Padma Sunanda
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Full-Stack Developer & web Developer passionate about creating 
            beautiful Websites, functional digital experiences that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              View My Work
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            <a
              href="#"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-700 hover:text-blue-600"
            >
              <Github size={24} />
            </a>
            <a
              href="https://github.com/padmasunanda"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-700 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/padma-sunanda-6651872b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-700 hover:text-blue-600"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </button>
    </section>
  );
};

export default Heroine;