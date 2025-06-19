
import { Linkedin, Github, Mail } from 'lucide-react';

const ContactSection = () => {
  const contactCards = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Connect with me professionally',
      link: 'https://www.linkedin.com/in/pavankumarreddymallidi',
      hoverColor: 'hover:text-blue-400'
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Check out my projects',
      link: 'https://github.com/pavankumarmallidi',
      hoverColor: 'hover:text-gray-400'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send me a message',
      link: 'mailto:m.pavankumar255@gmail.com',
      hoverColor: 'hover:text-green-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-pure-black relative overflow-hidden">
      {/* Background lighting effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:drop-shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-500">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions or want to collaborate? Feel free to reach out through any of these channels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactCards.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="info-card text-center group cursor-pointer hover:shadow-primary/20 hover:border-primary/30 hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:scale-105 transition-all duration-300"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                <contact.icon className={`h-8 w-8 text-primary ${contact.hoverColor} transition-colors duration-300`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">{contact.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{contact.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
