
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">
              Let's Build Something Amazing
            </h3>
            <p className="text-muted-foreground">
              Full Stack Developer • 2024
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  className="glass glass-hover w-10 h-10 p-0 rounded-full"
                  asChild
                >
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 All rights reserved. Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
