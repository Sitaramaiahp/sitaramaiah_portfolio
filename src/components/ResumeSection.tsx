
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const ResumeSection = () => {
  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf"; // Path to your resume in the public folder
  link.download = "Sitaramaiah_Resume.pdf"; // Optional: filename for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  console.log('Downloading resume...');
};

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient slide-up">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground slide-up" style={{ animationDelay: '0.2s' }}>
            Download my resume or view it below
          </p>
        </div>

        <div className="mb-8 text-center slide-up" style={{ animationDelay: '0.3s' }}>
          <Button 
            size="lg" 
            onClick={handleDownload}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg glow"
          >
            <ArrowDown className="w-5 h-5 mr-2" />
            Download Resume PDF
          </Button>
        </div>
        
        <Card className="glass slide-up w-full" style={{ animationDelay: '0.4s' }}>
          <CardContent className="p-8">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-4 text-gradient text-center">
                Resume Preview
              </h3>
              <iframe
              src="/resume.pdf"
              width="100%"
              height="700px"
              title="Resume Preview"
              className="rounded-lg shadow-lg border border-gray-200"
            />
              <p className="text-sm text-muted-foreground mt-2 px-4 text-center">
                Click the download button above to get the PDF version
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResumeSection;
