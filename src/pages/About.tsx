import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Target, 
  Award, 
  Users,
  ArrowRight,
  Leaf,
  Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const team = [
    {
      name: "Dr. Sarah Martinez",
      role: "Founder & Wellness Director",
      experience: "15+ years",
      specialization: "Holistic Detox & Nutrition",
      image: "👩‍⚕️"
    },
    {
      name: "Michael Thompson",
      role: "Senior Detox Specialist",
      experience: "10+ years",
      specialization: "Lymphatic Drainage & Massage",
      image: "👨‍⚕️"
    },
    {
      name: "Emma Rodriguez",
      role: "Nutritionist & Coach",
      experience: "8+ years",
      specialization: "Juice Cleansing & Meal Planning",
      image: "👩‍🔬"
    },
    {
      name: "James Wilson",
      role: "Hydrotherapy Expert",
      experience: "12+ years",
      specialization: "Colon Hydrotherapy & Wellness",
      image: "👨‍⚕️"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassionate Care",
      description: "We treat every client with genuine care, understanding, and respect for their wellness journey."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Natural Healing",
      description: "We believe in the power of natural detox methods and organic solutions for optimal health."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized Approach",
      description: "Every treatment plan is customized to meet your unique needs and wellness goals."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence Standards",
      description: "We maintain the highest standards in all our services, equipment, and treatment protocols."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 wellness-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-4 h-4 mr-2" />
              About PureVibe Detox
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Dedicated to Your
              <span className="block text-primary">Wellness Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Founded on the belief that everyone deserves to feel their best, PureVibe Detox has been 
              helping people transform their health and reclaim their vitality for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Leaf className="w-4 h-4 mr-2" />
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Born from Personal Transformation
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                PureVibe Detox was founded by Dr. Sarah Martinez after her own transformative detox 
                journey helped her overcome chronic fatigue and digestive issues. Frustrated by 
                conventional medicine's limitations, she discovered the power of natural detoxification.
              </p>
              <p className="text-muted-foreground mb-8 text-lg">
                What started as a personal healing journey became a mission to help others experience 
                the same life-changing benefits. Today, we've helped over 5,000 clients reclaim their 
                health and vitality through our proven natural detox methods.
              </p>
              <Button onClick={()=>navigate("/contact")} size="lg" className="wellness-shadow">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="text-8xl opacity-20 font-bold text-primary absolute -top-8 -left-4">
                "
              </div>
              <Card className="card-shadow relative z-10">
                <CardContent className="p-8">
                  <p className="text-lg italic mb-6">
                    "Every person who walks through our doors has the potential for incredible 
                    transformation. Our job is to provide the guidance, support, and natural 
                    tools to help them achieve it."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">👩‍⚕️</div>
                    <div>
                      <p className="font-semibold">Dr. Sarah Martinez</p>
                      <p className="text-sm text-muted-foreground">Founder & Wellness Director</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 wellness-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="card-shadow">
              <CardContent className="p-8 text-center">
                <Target className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To empower individuals to achieve optimal health through natural detox methods, 
                  personalized care, and holistic wellness programs that address the root causes 
                  of health challenges.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-shadow">
              <CardContent className="p-8 text-center">
                <Star className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  To be the leading wellness center where people discover their body's natural 
                  ability to heal, creating a community of vibrant, healthy individuals living 
                  their best lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Drives Us Every Day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="text-center space-y-4">
                <div className="flex justify-center text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 wellness-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              Our Expert Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our Wellness Professionals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team of certified professionals brings decades of combined experience 
              in natural healing, detox therapy, and holistic wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className="card-shadow hover:scale-105 transition-spring">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{member.specialization}</p>
                  <Badge variant="outline" className="text-xs">
                    {member.experience}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">5,000+</div>
              <p className="text-muted-foreground">Clients Transformed</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">10+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">25+</div>
              <p className="text-muted-foreground">Wellness Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 wellness-gradient text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the PureVibe Difference?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of satisfied clients who have transformed their health with our expert guidance.
          </p>
          <Button onClick={()=>navigate("/book-now")} size="lg" variant="secondary" className="text-lg px-8 py-6">
            Book Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;