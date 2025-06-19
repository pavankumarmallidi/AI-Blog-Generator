
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureHighlights from '@/components/FeatureHighlights';
import BlogForm from '@/components/BlogForm';
import HowItWorks from '@/components/HowItWorks';
import InfoCards from '@/components/InfoCards';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-pure-black">
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <InfoCards />
      <FeatureHighlights />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <BlogForm />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
