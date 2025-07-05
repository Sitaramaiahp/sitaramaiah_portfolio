
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      name: 'Weather Analytics Dashboard',
      description: 'Data visualization dashboard for weather patterns with interactive charts and forecasting.',
      tech: ['Vue.js', 'Python', 'FastAPI', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      name: 'Social Media Platform',
      description: 'Modern social networking platform with real-time messaging and content sharing.',
      tech: ['React', 'Express', 'MongoDB', 'AWS'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient slide-up">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-up" style={{ animationDelay: '0.2s' }}>
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.name} 
              className="glass glass-hover group transition-all duration-500 hover:scale-[1.02] slide-up overflow-hidden"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gradient">
                  {project.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full glass font-mono text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="glass border-primary/50 text-primary hover:bg-primary/10 flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1">
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
