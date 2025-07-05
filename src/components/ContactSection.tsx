
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient slide-up">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground slide-up" style={{ animationDelay: '0.2s' }}>
            Let's discuss your next project or just say hello
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="glass slide-up" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gradient">
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="glass border-primary/30 focus:border-primary bg-background/50"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="glass border-primary/30 focus:border-primary bg-background/50"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="glass border-primary/30 focus:border-primary bg-background/50 min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg glow"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="glass slide-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gradient">
                Alternative Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 glass-hover p-4 rounded-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">your.email@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 glass-hover p-4 rounded-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">Response Time</h4>
                <p className="text-muted-foreground text-sm">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  please feel free to call directly.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
