
import HeroSection from '@/components/HeroSection';
import FeatureHighlights from '@/components/FeatureHighlights';
import BlogForm from '@/components/BlogForm';
import HowItWorks from '@/components/HowItWorks';

const Index = () => {
  return (
    <div className="min-h-screen bg-pure-black">
      <HeroSection />
      <FeatureHighlights />
      <HowItWorks />
      <BlogForm />
    </div>
  );
};

export default Index;
