import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  fullName: string;
  email: string;
  blogTopic: string;
  description: string;
  writingFormat: string;
  writingTone: string;
  targetAudience: string;
  sectionsToInclude: string;
  sectionsToExclude: string;
  additionalInstructions: string;
}

const BlogForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    blogTopic: '',
    description: '',
    writingFormat: '',
    writingTone: '',
    targetAudience: '',
    sectionsToInclude: '',
    sectionsToExclude: '',
    additionalInstructions: ''
  });

  // Forbidden special characters regex (now includes @)
  const forbiddenChars = /['"@#$%^*{}\[\]()!`~]/g;

  // Validate all fields for forbidden characters
  const hasForbiddenChars = (data: FormData) => {
    return Object.entries(data).some(([key, value]) => {
      // Allow email field to contain @ and .
      if (key === 'email') return false;
      return forbiddenChars.test(value);
    });
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    // Allow email field to contain @ and .
    if (field !== 'email' && forbiddenChars.test(value)) {
      toast({
        title: "Special Characters Not Allowed",
        description: "Please avoid using ' \" # $ % ^ * { } [ ] ( ) ! ` ~ in your input.",
        variant: "destructive",
      });
      return;
    }
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hasForbiddenChars(formData)) {
      toast({
        title: "Invalid Input",
        description: "Please remove special characters like ' \" # $ % ^ * { } [ ] ( ) ! ` ~ from your entries.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('https://pavan.every-ai.com/webhook/BlogGenerate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setIsSubmitted(true);
        
        toast({
          title: "Blog Generation Started",
          description: "Your SEO-optimized blog is being created and will be emailed to you shortly.",
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="form-section" className="py-20 relative">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm border-neon-blue/30 shadow-[0_0_40px_#00f0ff20]">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-neon-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Blog Generation Request Received Successfully
              </h3>
              <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                <p>
                  Thank you for your submission. Your blog request has been received and is currently being processed by our AI system.
                </p>
                <p>
                  Your personalized, SEO-optimized blog content will be delivered to your email address within the next 10 minutes.
                </p>
                <p>
                  Our advanced AI technology is now crafting high-quality content tailored specifically to your requirements and target audience.
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  Please check your inbox, including your spam folder, for the completed blog content.
                </p>
              </div>
              <div className="mt-8">
                <Button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      blogTopic: '',
                      description: '',
                      writingFormat: '',
                      writingTone: '',
                      targetAudience: '',
                      sectionsToInclude: '',
                      sectionsToExclude: '',
                      additionalInstructions: ''
                    });
                  }}
                  variant="outline"
                  className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10"
                >
                  Generate Another Blog
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="form-section" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Create Your Perfect Blog
          </h2>
          <p className="text-xl text-gray-400">
            Fill out the form below and let our AI craft your content
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm border-white/10 shadow-[0_0_40px_#00000040]">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white flex items-center justify-center gap-2">
              <Sparkles className="h-6 w-6 text-neon-blue" />
              Blog Generation Form
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="fullName" className="text-white font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="email" className="text-white font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="form-input"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="blogTopic" className="text-white font-medium">
                  Blog Topic/Title *
                </Label>
                <Input
                  id="blogTopic"
                  type="text"
                  required
                  value={formData.blogTopic}
                  onChange={(e) => handleInputChange('blogTopic', e.target.value)}
                  className="form-input"
                  placeholder="e.g., How to Start a Successful Online Business"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="description" className="text-white font-medium">
                  Brief Description or Purpose *
                </Label>
                <Textarea
                  id="description"
                  required
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="form-input min-h-[80px]"
                  placeholder="Describe what you want your blog to cover and its main purpose"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label className="text-white font-medium">
                    Writing Format *
                  </Label>
                  <Select
                    required
                    value={formData.writingFormat}
                    onValueChange={(value) => handleInputChange('writingFormat', value)}
                  >
                    <SelectTrigger className="form-input">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent className="bg-card/90 backdrop-blur-sm border-white/20">
                      <SelectItem value="how-to">How-To Guide</SelectItem>
                      <SelectItem value="listicle">Listicle</SelectItem>
                      <SelectItem value="opinion">Opinion</SelectItem>
                      <SelectItem value="faq">FAQ</SelectItem>
                      <SelectItem value="case-study">Case Study</SelectItem>
                      <SelectItem value="product-review">Product Review</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Label className="text-white font-medium">
                    Writing Tone *
                  </Label>
                  <Select
                    required
                    value={formData.writingTone}
                    onValueChange={(value) => handleInputChange('writingTone', value)}
                  >
                    <SelectTrigger className="form-input">
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent className="bg-card/90 backdrop-blur-sm border-white/20">
                      <SelectItem value="informative">Informative</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="humorous">Humorous</SelectItem>
                      <SelectItem value="inspirational">Inspirational</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="targetAudience" className="text-white font-medium">
                  Target Audience *
                </Label>
                <Input
                  id="targetAudience"
                  type="text"
                  required
                  value={formData.targetAudience}
                  onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                  className="form-input"
                  placeholder="e.g., Small business owners, Marketing professionals, Beginners"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="sectionsToInclude" className="text-white font-medium">
                    Sections to Include *
                  </Label>
                  <Textarea
                    id="sectionsToInclude"
                    required
                    value={formData.sectionsToInclude}
                    onChange={(e) => handleInputChange('sectionsToInclude', e.target.value)}
                    className="form-input min-h-[80px]"
                    placeholder="e.g., Introduction, Benefits, Step-by-step guide, Conclusion"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="sectionsToExclude" className="text-white font-medium">
                    Sections to Exclude *
                  </Label>
                  <Textarea
                    id="sectionsToExclude"
                    required
                    value={formData.sectionsToExclude}
                    onChange={(e) => handleInputChange('sectionsToExclude', e.target.value)}
                    className="form-input min-h-[80px]"
                    placeholder="Any sections you don't want included"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="additionalInstructions" className="text-white font-medium">
                  Additional Instructions *
                </Label>
                <Textarea
                  id="additionalInstructions"
                  required
                  value={formData.additionalInstructions}
                  onChange={(e) => handleInputChange('additionalInstructions', e.target.value)}
                  className="form-input min-h-[80px]"
                  placeholder="Any specific requirements, keywords to include, or special instructions"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glow-button bg-neon-blue hover:bg-neon-blue/90 text-black font-semibold py-4 text-lg rounded-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent mr-2"></div>
                      Generating Blog...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Generate Blog
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BlogForm;
