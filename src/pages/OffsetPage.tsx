
import React from "react";
import { Layout } from "@/components/layout/layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Globe, Leaf, TreeDeciduous, Wind } from "lucide-react";
import { Link } from "react-router-dom";

// Project types
interface OffsetProject {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  image: string;
  icon: React.ReactNode;
  tags: string[];
  popular?: boolean;
}

const offsetProjects: OffsetProject[] = [
  {
    id: "forest-1",
    title: "Reforestation Project",
    description: "Support the planting of native trees in deforested areas, creating new carbon sinks and habitats for wildlife.",
    location: "Brazil",
    price: 15,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=600&h=400",
    icon: <TreeDeciduous />,
    tags: ["Reforestation", "Biodiversity"],
    popular: true,
  },
  {
    id: "wind-1",
    title: "Wind Farm Development",
    description: "Help finance new wind energy farms that replace fossil fuel electricity generation.",
    location: "India",
    price: 20,
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=600&h=400",
    icon: <Wind />,
    tags: ["Renewable Energy", "Community"],
  },
  {
    id: "solar-1",
    title: "Solar Power Initiative",
    description: "Fund solar panel installations for rural communities, providing clean energy access.",
    location: "Kenya",
    price: 18,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600&h=400",
    icon: <Leaf />,
    tags: ["Solar", "Community Development"],
  },
];

const OffsetPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-28 pb-20">
        {/* Header */}
        <div className="mb-12">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4 -ml-2 gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-medium mb-3">Carbon Offset Programs</h1>
          <p className="text-muted-foreground max-w-2xl">
            Offset your unavoidable carbon emissions by supporting verified climate projects that reduce or remove greenhouse gases from the atmosphere.
          </p>
        </div>

        <Separator className="mb-10" />

        {/* How it works section */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-6">How Carbon Offsetting Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background/60 border border-border/60">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-lg font-semibold text-primary">1</span>
                </div>
                <CardTitle className="text-lg">Calculate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Determine your carbon footprint to understand your impact on the environment.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-background/60 border border-border/60">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-lg font-semibold text-primary">2</span>
                </div>
                <CardTitle className="text-lg">Choose</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Select from verified carbon offset projects that align with your values and interests.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-background/60 border border-border/60">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-lg font-semibold text-primary">3</span>
                </div>
                <CardTitle className="text-lg">Contribute</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Support projects that reduce or remove greenhouse gases equivalent to your emissions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Projects section */}
        <div>
          <h2 className="text-2xl font-medium mb-6">Featured Offset Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offsetProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden border border-border/70 hover:border-primary/30 transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    {project.popular && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-primary/90 text-white hover:bg-primary">
                          Popular
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="bg-background/80 backdrop-blur-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                          <Globe className="h-4 w-4" />
                          <span>{project.location}</span>
                        </div>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                      </div>
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        {React.cloneElement(project.icon as React.ReactElement, { className: "h-5 w-5" })}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="border-t border-border/50 pt-4 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-muted-foreground">Price per ton CO₂</p>
                      <p className="text-lg font-medium">${project.price}</p>
                    </div>
                    <Button>
                      Support
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits section */}
        <div className="mt-20 bg-muted/30 rounded-lg p-8 border border-border/50">
          <h2 className="text-2xl font-medium mb-6">Benefits of Offsetting</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-primary/10 text-primary mr-3 mt-0.5">
                <Check className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Support Sustainable Development</h3>
                <p className="text-sm text-muted-foreground">
                  Many offset projects provide additional benefits like job creation, improved air quality, and biodiversity protection.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-primary/10 text-primary mr-3 mt-0.5">
                <Check className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Take Immediate Climate Action</h3>
                <p className="text-sm text-muted-foreground">
                  While reducing your own emissions is crucial, offsetting lets you make a positive impact right now.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-primary/10 text-primary mr-3 mt-0.5">
                <Check className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Verified and Transparent</h3>
                <p className="text-sm text-muted-foreground">
                  All projects are verified by independent standards to ensure they deliver real, measurable climate benefits.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-primary/10 text-primary mr-3 mt-0.5">
                <Check className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Balance Unavoidable Emissions</h3>
                <p className="text-sm text-muted-foreground">
                  Some emissions can't be eliminated in our modern lives. Offsetting helps balance what you can't reduce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OffsetPage;
