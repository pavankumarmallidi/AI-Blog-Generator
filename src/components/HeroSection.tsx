
import { ArrowDown, Clock, Mail, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const infoCards = [
    {
      icon: Clock,
      title: '10 Minutes',
      description: 'Fast delivery'
    },
    {
      icon: Mail,
      title: 'Email Ready',
      description: 'Direct to inbox'
    },
    {
      icon: Shield,
      title: 'SEO Optimized',
      description: 'Search friendly'
    },
    {
      icon: Zap,
      title: 'AI Powered',
      description: 'Smart content'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Generate Your Blog Content in{' '}
            <span className="text-primary">Minutes</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Craft SEO-optimized blogs using AI. Delivered to your inbox in minutes.
          </p>
          
          {/* Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
            {infoCards.map((card, index) => (
              <div 
                key={index}
                className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-card/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/20 p-2 rounded-lg mb-2">
                    <card.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{card.title}</h3>
                  <p className="text-xs text-gray-400">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <Button 
            onClick={scrollToForm}
            className="clean-button bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 text-lg rounded-xl group"
          >
            Start Writing
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-200" />
          </Button>
          
          {/* Developer Credit */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500">
              Developed by{' '}
              <span className="text-primary font-medium">Pavan Kumar Mallidi</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
