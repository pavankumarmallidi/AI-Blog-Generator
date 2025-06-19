
const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">AI Blog Generator</h3>
            <p className="text-gray-400 max-w-md">
              Create professional, SEO-optimized blog content in seconds with the power of artificial intelligence.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-neon-blue transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-neon-blue transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AI Blog Generator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
