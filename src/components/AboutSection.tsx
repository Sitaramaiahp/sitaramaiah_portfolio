
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const techStack = [
    { name: 'Python', color: 'text-yellow-400' },
    { name: 'Django', color: 'text-green-400' },
    { name: 'JavaScript', color: 'text-yellow-300' },
    { name: 'React', color: 'text-blue-400' },
    { name: 'Node.js', color: 'text-green-400' },
    { name: 'SQL', color: 'text-blue-300' },
    { name: 'TypeScript', color: 'text-blue-400' },
    { name: 'MongoDB', color: 'text-green-400' },
  ];

  const experience = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      description: 'Leading development of scalable web applications',
    },
    {
      year: '2023',
      title: 'Full Stack Developer',
      description: 'Built multiple client projects using modern tech stack',
    },
    {
      year: '2022',
      title: 'Frontend Developer',
      description: 'Specialized in React and modern JavaScript frameworks',
    },
    {
      year: '2021',
      title: 'Junior Developer',
      description: 'Started my journey in web development',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient slide-up">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-up" style={{ animationDelay: '0.2s' }}>
            I'm a passionate Full Stack Developer with expertise in building modern, scalable web applications. 
            I love turning complex problems into simple, beautiful solutions that make a real impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="glass slide-up" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Tech Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="glass-hover p-4 rounded-xl text-center transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <div className={`text-lg font-mono font-semibold ${tech.color}`}>
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass slide-up" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Experience Timeline</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={exp.year} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-20 text-sm font-mono text-primary font-semibold">
                      {exp.year}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-muted-foreground text-sm">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
