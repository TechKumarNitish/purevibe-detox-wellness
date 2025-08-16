import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  DollarSign, 
  Star, 
  CheckCircle,
  ArrowRight,
  Leaf,
  Heart,
  Sparkles
} from "lucide-react";

import juiceCleansingImage from "@/assets/juice-cleansing.jpg";
import herbalSteamImage from "@/assets/herbal-steam.jpg";
import colonHydrotherapyImage from "@/assets/colon-hydrotherapy.jpg";
import lymphaticMassageImage from "@/assets/lymphatic-massage.jpg";
import fullBodyDetoxImage from "@/assets/full-body-detox.jpg";
import infraredSaunaImage from "@/assets/infrared-sauna.jpg";
import { WHATSAPP_PHONE, PHONE_NUMBER } from "@/config";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate=useNavigate()
  const services = [
    {
      title: "Juice Cleansing Program",
      description: "A comprehensive juice cleanse using organic, cold-pressed juices designed to flush toxins and boost energy levels naturally.",
      duration: "3-7 days",
      price: "From ₹199",
      rating: 4.9,
      reviews: 234,
      image: juiceCleansingImage,
      benefits: [
        "Increased energy levels",
        "Improved digestion",
        "Enhanced mental clarity",
        "Natural weight loss",
        "Glowing skin"
      ],
      includes: [
        "Daily organic juice delivery",
        "Personalized cleanse plan",
        "24/7 support hotline",
        "Nutrition consultation",
        "Post-cleanse meal guide"
      ],
      popular: true
    },
    {
      title: "Herbal Steam Bath",
      description: "Therapeutic steam therapy infused with carefully selected herbs to promote deep detoxification through the skin.",
      duration: "45 minutes",
      price: "₹89",
      rating: 4.8,
      reviews: 189,
      image: herbalSteamImage,
      benefits: [
        "Deep pore cleansing",
        "Stress relief",
        "Improved circulation",
        "Respiratory health",
        "Muscle relaxation"
      ],
      includes: [
        "Private steam room session",
        "Custom herbal blend",
        "Pre-session consultation",
        "Refreshing shower access",
        "Organic tea service"
      ]
    },
    {
      title: "Colon Hydrotherapy",
      description: "Gentle, safe colon cleansing therapy that removes waste buildup and promotes optimal digestive health.",
      duration: "60 minutes",
      price: "₹149",
      rating: 4.9,
      reviews: 156,
      image: colonHydrotherapyImage,
      benefits: [
        "Improved digestive health",
        "Enhanced nutrient absorption",
        "Reduced bloating",
        "Increased energy",
        "Better bowel function"
      ],
      includes: [
        "Certified therapist session",
        "Medical-grade equipment",
        "Pre and post consultation",
        "Probiotic supplement",
        "Dietary guidelines"
      ]
    },
    {
      title: "Lymphatic Drainage Massage",
      description: "Specialized massage technique designed to stimulate lymph flow and eliminate toxins from the body naturally.",
      duration: "90 minutes",
      price: "₹129",
      rating: 4.9,
      reviews: 298,
      image: lymphaticMassageImage,
      benefits: [
        "Reduced swelling",
        "Boosted immune system",
        "Improved circulation",
        "Faster healing",
        "Stress reduction"
      ],
      includes: [
        "Full body lymphatic massage",
        "Aromatic essential oils",
        "Relaxation time",
        "Herbal tea service",
        "Home care instructions"
      ]
    },
    {
      title: "Full-Body Detox Program",
      description: "Comprehensive 3-hour detox experience combining multiple therapies for maximum cleansing and rejuvenation.",
      duration: "3 hours",
      price: "₹299",
      rating: 5.0,
      reviews: 87,
      image: fullBodyDetoxImage,
      benefits: [
        "Complete body detox",
        "Maximum results",
        "Full relaxation",
        "Expert guidance",
        "Lasting wellness"
      ],
      includes: [
        "Colon hydrotherapy session",
        "Lymphatic drainage massage",
        "Herbal steam bath",
        "Organic juice selection",
        "Wellness consultation"
      ],
      featured: true
    },
    {
      title: "Infrared Sauna Therapy",
      description: "Advanced infrared sauna sessions that penetrate deep into tissues for enhanced detoxification and healing.",
      duration: "45 minutes",
      price: "₹79",
      rating: 4.7,
      reviews: 145,
      image: infraredSaunaImage,
      benefits: [
        "Deep tissue detox",
        "Pain relief",
        "Improved sleep",
        "Cardiovascular health",
        "Skin purification"
      ],
      includes: [
        "Private infrared sauna",
        "Chromotherapy lighting",
        "Essential oil aromatherapy",
        "Cool towel service",
        "Electrolyte drink"
      ]
    }
  ];

  const addOns = [
    { name: "Nutritional Consultation", price: "₹49", duration: "30 min" },
    { name: "Wellness Coaching Session", price: "₹69", duration: "45 min" },
    { name: "Organic Supplement Package", price: "₹89", duration: "1 month supply" },
    { name: "Home Detox Kit", price: "₹129", duration: "7 days" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 wellness-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <Leaf className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Transformative Wellness
              <span className="block text-primary">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Discover our comprehensive range of detox and wellness services, each designed 
              to cleanse, rejuvenate, and restore your natural vitality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className={`card-shadow hover:scale-[1.02] transition-spring overflow-hidden ₹{
                  service.popular ? 'ring-2 ring-primary' : ''
                } ₹{service.featured ? 'ring-2 ring-wellness-green-dark' : ''}`}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {service.popular && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                  {service.featured && (
                    <Badge className="absolute top-4 right-4 bg-wellness-green-dark text-white">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </div>
                        <div className="flex items-center">
                          {/* <DollarSign className="w-4 h-4 mr-1" /> */}
                          {service.price}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                          {service.rating} ({service.reviews})
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Heart className="w-4 h-4 mr-2 text-primary" />
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-primary" />
                      What's Included
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 mr-2 text-wellness-sage flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-3">
                    <Button onClick={()=>navigate("/book-now")} className="flex-1 wellness-shadow">
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 wellness-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Enhance Your Experience
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Additional Services & Add-ons
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complement your detox journey with our additional wellness services for optimal results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={addon.name} className="card-shadow hover:scale-105 transition-spring">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-1">{addon.price}</div>
                  <p className="text-sm text-muted-foreground mb-4">{addon.duration}</p>
                  <Button variant="outline" className="w-full">
                    Add to Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Flexible Pricing Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Single Session</h3>
                <p className="text-muted-foreground mb-4">Perfect for trying our services</p>
                <div className="text-2xl font-bold text-primary">Regular Pricing</div>
              </CardContent>
            </Card>
            
            <Card className="card-shadow ring-2 ring-primary">
              <CardContent className="p-6">
                <Badge className="mb-2">Most Popular</Badge>
                <h3 className="text-xl font-bold mb-2">3-Session Package</h3>
                <p className="text-muted-foreground mb-4">Save 15% with our package deal</p>
                <div className="text-2xl font-bold text-primary">15% Off</div>
              </CardContent>
            </Card>
            
            <Card className="card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Monthly Membership</h3>
                <p className="text-muted-foreground mb-4">Unlimited access to all services</p>
                <div className="text-2xl font-bold text-primary">₹499/month</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 wellness-gradient text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Book your first session today and discover why thousands trust PureVibe Detox 
            for their wellness transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={()=>navigate("/book-now")} size="lg" variant="secondary" className="text-lg px-8 py-6">
              Book Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground bg-primary-foreground text-primary">
              <a href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, "")}`}>
              Call: (555) 123-4567
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;