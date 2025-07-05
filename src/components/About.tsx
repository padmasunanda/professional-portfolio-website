import React from 'react';
import { Code, Palette, Users, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "5+ Years Experience",
      description: "Building scalable web applications with modern technologies"
    },
    {
      icon: <Palette className="w-8 h-8 text-emerald-600" />,
      title: "Design-First Approach",
      description: "Creating intuitive user experiences that delight users"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Team Leadership",
      description: "Leading cross-functional teams to deliver exceptional results"
    },
    {
      icon: <Trophy className="w-8 h-8 text-orange-600" />,
      title: "Award Winner",
      description: "Recognized for innovation and technical excellence"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600">
              Passionate about Creating Websites experience that makes difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a full-stack developer and Web Developer with a passion for creating beautiful websites, 
                functional web applications. I specialize 
                in React, Node.js, and modern web technologies.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                My journey started with a Computer Science(AI) degree and has evolved through 
                various roles where I've learned to bridge the gap between design and 
                development. I believe great software is not just about code—it's about 
                understanding users and solving their problems elegantly.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or hiking in the mountains.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Working on laptop"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;