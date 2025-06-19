
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: Linkedin, 
      href: '#', 
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-400'
    },
    { 
      icon: Twitter, 
      href: '#', 
      label: 'Twitter',
      hoverColor: 'hover:text-blue-400'
    },
    { 
      icon: Github, 
      href: '#', 
      label: 'GitHub',
      hoverColor: 'hover:text-gray-400'
    },
    { 
      icon: Instagram, 
      href: '#', 
      label: 'Instagram',
      hoverColor: 'hover:text-pink-400'
    }
  ];

  return (
    <footer className="bg-pure-black border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Media Icons */}
          <div className="flex items-center justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={`text-gray-400 ${social.hoverColor} transition-all duration-300 hover:scale-110`}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2024 AI Blog Generator. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
