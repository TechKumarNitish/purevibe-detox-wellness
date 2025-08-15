import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Heart, 
  Sparkles, 
  Star, 
  ArrowRight,
  CheckCircle,
  Users,
  Clock
} from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

const Index = () => {
  const services = [
    {
      title: "Juice Cleansing",
      description: "Organic cold-pressed juices to cleanse and energize your body naturally.",
      duration: "3-7 days",
      price: "From $199",
      image: "🥤"
    },
    {
      title: "Herbal Steam Bath",
      description: "Detoxify through your skin with our therapeutic herbal steam treatments.",
      duration: "45 min",
      price: "$89",
      image: "🌿"
    },
    {
      title: "Lymphatic Drainage",
      description: "Gentle massage technique to boost circulation and eliminate toxins.",
      duration: "60 min",
      price: "$129",
      image: "💆‍♀️"
    },
    {
      title: "Full-Body Detox",
      description: "Comprehensive detox program combining multiple therapies for optimal results.",
      duration: "3 hours",
      price: "$299",
      image: "✨"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "PureVibe Detox transformed my health! I feel more energetic and balanced than ever before.",
      location: "Beverly Hills, CA"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "The lymphatic drainage massage was incredible. The staff is professional and caring.",
      location: "Santa Monica, CA"
    },
    {
      name: "Emma Wilson",
      rating: 5,
      text: "Amazing juice cleanse program! Lost 8 pounds and gained so much energy. Highly recommend!",
      location: "West Hollywood, CA"
    }
  ];

  const benefits = [
    "Boost Energy Levels",
    "Improve Digestion",
    "Enhanced Mental Clarity",
    "Better Sleep Quality",
    "Glowing Skin",
    "Weight Management"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            Premium Wellness Center
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in text-balance">
            Purify Your Body,
            <span className="block text-wellness-green-light">Elevate Your Spirit</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in text-balance">
            Experience the ultimate detox and wellness journey at PureVibe. 
            Natural healing, expert care, transformative results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="wellness-shadow text-lg px-8 py-6">
              Book Your Session
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white hover:text-foreground">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 wellness-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-4 h-4 mr-2" />
              About PureVibe
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Your Wellness Journey Starts Here
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              At PureVibe Detox, we believe in the body's natural ability to heal and renew itself. 
              Our expert-guided detox programs combine ancient wisdom with modern science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit} className="flex items-center space-x-3 animate-fade-in">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Users className="w-12 h-12 text-primary mx-auto" />
              <div className="text-3xl font-bold text-primary">5,000+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <Clock className="w-12 h-12 text-primary mx-auto" />
              <div className="text-3xl font-bold text-primary">10+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-2">
              <Star className="w-12 h-12 text-primary mx-auto" />
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <p className="text-muted-foreground">Client Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Leaf className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Transformative Wellness Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Discover our carefully curated range of detox and wellness services, 
              designed to cleanse, rejuvenate, and restore your natural vitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="card-shadow hover:scale-105 transition-spring overflow-hidden group">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.image}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                  
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-muted-foreground">Duration: {service.duration}</span>
                    <span className="font-bold text-primary">{service.price}</span>
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 wellness-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Client Stories
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="card-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 wellness-gradient text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 text-balance">
            Take the first step towards a healthier, more vibrant you. 
            Book your consultation today and discover the PureVibe difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Call Us: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
