
import { Brain, Zap, Mail, Shield, Target, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Smart Input',
    description: 'AI understands your topic and creates engaging content automatically'
  },
  {
    icon: Target,
    title: 'SEO-Friendly',
    description: 'Optimized for search engines with proper keywords and structure'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Get your complete blog post delivered in under 10 minutes'
  },
  {
    icon: Shield,
    title: 'Private & Secure',
    description: 'Your content ideas and data are completely confidential'
  },
  {
    icon: Mail,
    title: 'Email Delivery',
    description: 'Receive your formatted blog post directly in your inbox'
  },
  {
    icon: Sparkles,
    title: 'Multiple Formats',
    description: 'Choose from how-to guides, listicles, reviews, and more'
  }
];

const FeatureHighlights = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Why Choose Our AI Blog Generator?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to create professional content effortlessly
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-neon-blue/20 p-3 rounded-lg mr-4 group-hover:bg-neon-blue/30 transition-colors duration-200">
                  <feature.icon className="h-6 w-6 text-neon-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
