import { Users, Star, Zap, Target } from 'lucide-react';

const InfoCards = () => {
  const cards = [
    {
      icon: Users,
      title: "10,000+ Users",
      description: "Trusted by content creators worldwide",
      stat: "10K+"
    },
    {
      icon: Star,
      title: "4.9/5 Rating",
      description: "Excellent user satisfaction score",
      stat: "4.9★"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate content in under 10 minutes",
      stat: "<10min"
    },
    {
      icon: Target,
      title: "SEO Optimized",
      description: "Built-in SEO best practices",
      stat: "100%"
    }
  ];

  return (
    <section id="about" className="py-20 bg-pure-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of content creators who trust our platform for their blogging needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="info-card text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <card.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{card.stat}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
