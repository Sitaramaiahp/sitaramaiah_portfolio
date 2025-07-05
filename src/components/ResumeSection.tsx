
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const ResumeSection = () => {
  const handleDownload = () => {
    // This would trigger the actual resume download
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

        <Card className="glass slide-up" style={{ animationDelay: '0.4s' }}>
          <CardContent className="p-8">
            <div className="aspect-[8.5/11] bg-white/5 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gradient">Resume Preview</h3>
                <p className="text-muted-foreground">
                  Resume viewer will be embedded here
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Click the download button above to get the PDF version
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResumeSection;
