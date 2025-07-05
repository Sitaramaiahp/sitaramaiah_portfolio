
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm a{' '}
            <span className="text-gradient">
              Full Stack Developer
            </span>
          </h1>
        </div>
        
        <div className="fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Building scalable web applications with modern technologies
          </p>
        </div>
        
        <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" 
             style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="glass-hover bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="glass glass-hover border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 text-lg"
            onClick={() => scrollToSection('resume')}
          >
            Download Resume
          </Button>
        </div>
        
        <div className="fade-in" style={{ animationDelay: '0.8s' }}>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
