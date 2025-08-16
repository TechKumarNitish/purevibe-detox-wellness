import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Heart,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WHATSAPP_PHONE, PHONE_NUMBER, EMAIL, LOCATION } from "@/config";


const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prefill WhatsApp message
    const { name, email, phone, service, message } = formData;
    const text =
      `Hello, I would like to inquire about your services.\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      (phone ? `Phone: ${phone}\n` : "") +
      (service ? `Service: ${service}\n` : "") +
      (message ? `Message: ${message}` : "");
    const url = `https://wa.me/${WHATSAPP_PHONE.replace(/[^\d]/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: [PHONE_NUMBER, "Available 7 days a week"],
      action: "Call Now"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: [EMAIL, "We respond within 24 hours"],
      action: "Send Email"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: [
        `${LOCATION.address}`,
        `${LOCATION.city}, ${LOCATION.state} ${LOCATION.zip}, ${LOCATION.country}`
      ],
      action: "Get Directions"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Mon-Fri: 8AM - 8PM", "Sat-Sun: 9AM - 6PM"],
      action: "Book Now"
    }
  ];

  const services = [
    "Juice Cleansing Program",
    "Herbal Steam Bath",
    "Colon Hydrotherapy",
    "Lymphatic Drainage Massage",
    "Full-Body Detox Program",
    "Infrared Sauna Therapy",
    "Consultation Only",
    "Other"
  ];

  const faqs = [
    {
      question: "Do I need to prepare for my first visit?",
      answer: "We recommend drinking plenty of water before your session and avoiding heavy meals 2-3 hours prior. We'll provide detailed preparation instructions when you book."
    },
    {
      question: "How often should I schedule detox sessions?",
      answer: "This varies based on your wellness goals and current health status. During your consultation, we'll create a personalized plan that works best for you."
    },
    {
      question: "Are your services covered by insurance?",
      answer: "Most of our services are wellness-focused and not typically covered by insurance. However, we offer flexible payment plans and package deals to make our services accessible."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "Your first visit includes a comprehensive wellness consultation where we discuss your health goals, medical history, and create a personalized treatment plan."
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
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Start Your Wellness
              <span className="block text-primary">Journey Today</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Ready to transform your health? Get in touch with our wellness experts to
              discuss your goals and find the perfect detox program for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <Card key={info.title} className="card-shadow hover:scale-105 transition-spring text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center text-primary mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className={idx === 0 ? "font-semibold" : "text-sm text-muted-foreground"}>
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.action === "Book Now" ?
                    <Button onClick={() => navigate("/book-now")} variant="outline" size="sm" className="w-full">
                      {info.action}
                    </Button> :
                    (info.action === "Call Now" ?
                      <Button variant="outline" size="sm" className="w-full">
                        <a href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, "")}`}>
                          {info.action}
                        </a>
                      </Button> :
                      <Button variant="outline" size="sm" className="w-full">
                        {info.action === "Send Email" ? (
                          <a href={`mailto:${EMAIL}`}>{info.action}</a>
                        ) : info.action === "Get Directions" ? (
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                              `${LOCATION.address}, ${LOCATION.city}, ${LOCATION.state} ${LOCATION.zip}, ${LOCATION.country}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.action}
                          </a>
                        ) : (
                          info.action
                        )}
                      </Button>
                    )
                  }
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service of Interest</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your wellness goals or any questions you have..."
                      rows={5}
                    />
                  </div>


                  <Button type="submit" className="w-full wellness-shadow mb-2">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full wellness-shadow text-green-600 border-green-500 hover:bg-green-50 mb-2"
                    title="Send WhatsApp Message"
                  >
                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE.replace(/[^\d]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Send WhatsApp Message"
                    >
                      Message on WhatsApp
                      <Heart className="w-4 h-4 ml-2 text-green-500" />
                    </a>
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and consent to being contacted.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="card-shadow">
                <CardContent className="p-0">
                  <div className="h-64 bg-wellness-green-light rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Visit Our Center</h3>
                      <p>{LOCATION.address}, {LOCATION.city}, {LOCATION.state} {LOCATION.zip}, {LOCATION.country}</p>
                      <Button variant="secondary" className="mt-4">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="card-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-primary" />
                    Why Choose PureVibe?
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Certified wellness professionals",
                      "Personalized treatment plans",
                      "State-of-the-art equipment",
                      "Proven track record of success",
                      "Comprehensive aftercare support"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 wellness-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <MessageSquare className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Common Questions About Our Services
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Have more questions? We're here to help!
            </p>
            <Button asChild variant="outline">
              <a href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, "")}`}>
                <Phone className="w-4 h-4 mr-2" />
                Call Us: {PHONE_NUMBER}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 wellness-gradient text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Don't wait to start your wellness journey. Book your consultation today
            and take the first step towards a healthier, more vibrant you.
          </p>
          <Button onClick={() => navigate("/book-now")} size="lg" variant="secondary" className="text-lg px-8 py-6">
            Book Now
            <Send className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;