import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { ContactFormData } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
        variant: "default",
      });
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your technology needs?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="mt-6 space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="mt-6 space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="mt-6 space-y-2">
                <Label htmlFor="service">Service of Interest</Label>
                <Select
                  value={formData.service}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Select a service</SelectItem>
                    <SelectItem value="software_development">Software Development</SelectItem>
                    <SelectItem value="cloud_solutions">Cloud Solutions</SelectItem>
                    <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                    <SelectItem value="it_consulting">IT Consulting</SelectItem>
                    <SelectItem value="it_support">IT Support</SelectItem>
                    <SelectItem value="data_analytics">Data Analytics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mt-6 space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="mt-8">
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-primary">
                      <i className="fas fa-envelope"></i>
                    </div>
                  </div>
                  <p className="text-gray-600">info@techcoresolutions.com</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-primary">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                  </div>
                  <p className="text-gray-600">(800) 123-4567</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-primary">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                  </div>
                  <p className="text-gray-600">123 Tech Avenue, San Francisco, CA</p>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-6">
                <p className="text-gray-700 font-medium mb-4">Connect With Us</p>
                <div className="flex space-x-4">
                  <a href="#" className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-primary hover:bg-blue-200 transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-primary hover:bg-blue-200 transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-primary hover:bg-blue-200 transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
