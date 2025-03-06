
import React, { useEffect } from "react";
import { Layout } from "@/components/layout/layout";
import { IntroSection } from "@/components/home/intro-section";
import { CarbonCalculator } from "@/components/calculator/calculator";
import { EcoTips } from "@/components/ui/eco-tips";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Info, Leaf } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Handle direct URL with hash for scrolling to calculator
    if (location.hash === '#calculator') {
      const calculatorSection = document.getElementById('calculator');
      if (calculatorSection) {
        setTimeout(() => {
          calculatorSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
    
    // Handle navigation state for scrolling to calculator
    if (location.state && location.state.scrollToCalculator) {
      const calculatorSection = document.getElementById('calculator');
      if (calculatorSection) {
        setTimeout(() => {
          calculatorSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Layout transparentHeader>
      {/* Hero section */}
      <IntroSection />
      
      {/* Calculator section */}
      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Calculate
            </span>
            <h2 className="text-3xl font-medium mb-4">
              Measure Your Carbon Footprint
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Answer a few simple questions about your lifestyle to get a personalized carbon footprint calculation.
            </p>
          </div>
          
          <CarbonCalculator />
        </div>
      </section>
      
      {/* Eco tips section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Eco Tips
            </span>
            <h2 className="text-3xl font-medium mb-4">
              Simple Ways to Reduce Your Impact
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Small changes to your daily habits can make a big difference to your carbon footprint.
            </p>
          </div>
          
          <EcoTips maxItems={3} />
          
          <div className="text-center mt-10">
            <Link to="/tips">
              <Button variant="outline" size="lg" className="gap-2">
                View All Tips
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to action section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <span className="inline-block p-2 bg-white dark:bg-card rounded-full shadow-sm mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </span>
                  <h2 className="text-2xl font-medium mb-3">
                    Make a Positive Impact
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Offset your unavoidable carbon emissions by supporting verified climate projects worldwide.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/offset">
                      <Button className="w-full sm:w-auto gap-2">
                        Offset Your Carbon
                        <Leaf className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/about">
                      <Button variant="outline" className="w-full sm:w-auto gap-2">
                        Learn More
                        <Info className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-1/3 aspect-square bg-primary/20 rounded-lg overflow-hidden flex items-center justify-center relative">
                  <div className="absolute inset-3 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Leaf className="h-16 w-16 text-primary animate-pulse-subtle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
