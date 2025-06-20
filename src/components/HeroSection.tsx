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
      {/* Enhanced Animated Background lighting effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large pulsing backgrounds */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/7 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional large glows */}
        <div className="absolute top-10 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-88 h-88 bg-primary/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-2/3 right-10 w-56 h-56 bg-primary/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Moving light orbs - original */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/12 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-[float_8s_ease-in-out_infinite] animation-delay-3000"></div>
        
        {/* Additional moving orbs */}
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/15 rounded-full blur-xl animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-36 h-36 bg-primary/8 rounded-full blur-2xl animate-[float_9s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/5 left-2/3 w-28 h-28 bg-primary/11 rounded-full blur-xl animate-[float_5s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/5 right-1/3 w-44 h-44 bg-primary/9 rounded-full blur-2xl animate-[float_10s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Small moving particles */}
        <div className="absolute top-40 left-1/2 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-[float_4s_ease-in-out_infinite]" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute bottom-40 right-1/2 w-20 h-20 bg-primary/18 rounded-full blur-lg animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-2/3 left-10 w-12 h-12 bg-primary/25 rounded-full blur-md animate-[float_3s_ease-in-out_infinite]" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-2/3 right-10 w-18 h-18 bg-primary/22 rounded-full blur-lg animate-[float_5s_ease-in-out_infinite]" style={{ animationDelay: '0.8s' }}></div>
        
        {/* Gradient overlays for more depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/3 via-transparent to-primary/2 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-primary/2 via-transparent to-primary/4 animate-pulse" style={{ animationDelay: '1.8s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10 mt-24">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white hover:drop-shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-500">
            Generate Your Blog Content in{' '}
            <span className="text-primary hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.8)] transition-all duration-300">Minutes</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Craft SEO-optimized blogs using AI. Delivered to your inbox in minutes.
          </p>
          
          {/* Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
            {infoCards.map((card, index) => (
              <div 
                key={index}
                className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-card/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:shadow-primary/20 hover:border-primary/30"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/20 p-2 rounded-lg mb-2 hover:bg-primary/30 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.6)]">
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
            className="clean-button bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 text-lg rounded-xl group hover:drop-shadow-[0_0_20px_rgba(0,240,255,0.6)] hover:scale-105 transition-all duration-300"
          >
            Start Writing
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-200" />
          </Button>
          
          {/* Professional Team Credit */}
          <div className="mt-16 text-center">
            <div className="bg-card/20 backdrop-blur-sm border border-white/10 rounded-lg p-6 max-w-md mx-auto hover:bg-card/30 transition-all duration-300 hover:border-primary/20">
              <p className="text-sm text-gray-400 mb-2">
                Built with excellence by
              </p>
              <div className="space-y-1">
                <p className="text-primary font-semibold hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] transition-all duration-300">
                  EveryAI Team
                </p>
                <p className="text-xs text-gray-500">
                  Developer: Pavan Kumar Mallidi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
