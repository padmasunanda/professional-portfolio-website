import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">PADMA SUNANDA</h3>
            <p className="text-gray-400">Full-Stack Developer</p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © 2025 Padma sunanda. Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;