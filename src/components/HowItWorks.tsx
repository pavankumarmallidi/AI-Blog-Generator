
import { FileText, Sparkles, Mail } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Fill the Form',
    description: 'Provide your blog topic, target audience, and preferences in our simple form'
  },
  {
    icon: Sparkles,
    title: 'AI Creates Content',
    description: 'Our advanced AI analyzes your requirements and generates SEO-optimized content'
  },
  {
    icon: Mail,
    title: 'Receive via Email',
    description: 'Get your complete, formatted blog post delivered to your inbox within 10 minutes'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three simple steps to get your professional blog content
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-neon-blue/50 to-transparent z-0"></div>
                )}
                
                <div className="relative z-10 bg-pure-black">
                  <div className="w-24 h-24 bg-gradient-to-br from-neon-blue/20 to-neon-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-neon-blue/30">
                    <step.icon className="h-10 w-10 text-neon-blue" />
                  </div>
                  
                  <div className="bg-neon-blue/5 rounded-full px-4 py-1 inline-block mb-4">
                    <span className="text-neon-blue font-semibold text-sm">Step {index + 1}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
