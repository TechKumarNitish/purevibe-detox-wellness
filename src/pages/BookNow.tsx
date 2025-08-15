
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const BookNow = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setForm({ ...form, service: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add logic to send form data to a backend or API
  };

  return (
    <div className="min-h-screen flex flex-col wellness-bg">
      <Navigation />
      <main className="flex-1 flex items-center justify-center py-16 px-4 mt-3">
        <Card className="w-full max-w-xl mx-auto wellness-shadow">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Book Now</CardTitle>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-green-600 text-center font-semibold py-8">Thank you for booking! We will contact you soon.</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service</Label>
                  <Select value={form.service} onValueChange={handleServiceChange} required>
                    <SelectTrigger id="service" name="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Colon Hydrotherapy">Colon Hydrotherapy</SelectItem>
                      <SelectItem value="Detox Skincare Kit">Detox Skincare Kit</SelectItem>
                      <SelectItem value="Detox Tea Collection">Detox Tea Collection</SelectItem>
                      <SelectItem value="Full Body Detox">Full Body Detox</SelectItem>
                      <SelectItem value="Infrared Sauna">Infrared Sauna</SelectItem>
                      <SelectItem value="Lymphatic Massage">Lymphatic Massage</SelectItem>
                      <SelectItem value="Juice Cleansing">Juice Cleansing</SelectItem>
                      <SelectItem value="Herbal Steam">Herbal Steam</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message (optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Let us know anything special..."
                    rows={3}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full wellness-shadow font-semibold text-lg">
                  Book Now
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default BookNow;
