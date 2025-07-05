
import React from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gradient">
              Portfolio
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary/20 text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
            
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
