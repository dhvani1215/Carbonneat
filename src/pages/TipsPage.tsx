
import React, { useState } from "react";
import { Layout } from "@/components/layout/layout";
import { EcoTips, ecoTips } from "@/components/ui/eco-tips";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Car, Droplet, Home, Leaf, ShoppingBag, Trash } from "lucide-react";

type CategoryFilter = "all" | "transport" | "home" | "food" | "waste" | "water" | "energy" | "products" | "general";

const TipsPage = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  // Get unique categories from tips
  const categories = ["all", ...new Set(ecoTips.map(tip => tip.category))];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "transport":
        return <Car className="h-4 w-4" />;
      case "home":
        return <Home className="h-4 w-4" />;
      case "food":
        return <ShoppingBag className="h-4 w-4" />;
      case "waste":
        return <Trash className="h-4 w-4" />;
      case "water":
        return <Droplet className="h-4 w-4" />;
      default:
        return <Leaf className="h-4 w-4" />;
    }
  };

  return (
    <Layout>
      <div className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 mb-12">
          <div className="container mx-auto text-center max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-medium mb-4"
            >
              Eco-Friendly Tips & <span className="text-primary">Practices</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Discover practical ways to reduce your carbon footprint through simple
              everyday actions. Every small change contributes to a healthier planet.
            </motion.p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-4 mb-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  className="flex items-center gap-2 capitalize"
                  onClick={() => setActiveCategory(category as CategoryFilter)}
                >
                  {getCategoryIcon(category)}
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Grid */}
        <section className="px-4">
          <div className="container mx-auto">
            <EcoTips filter={activeCategory} showDetailed={true} />
          </div>
        </section>

        {/* Additional Resources */}
        <section className="px-4 mt-16">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-medium mb-6 text-center"
            >
              Additional Resources
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ResourceCard
                title="EPA Climate Change Resources"
                description="Access comprehensive guides and scientific data about climate change from the Environmental Protection Agency."
                link="https://www.epa.gov/climate-change"
              />
              <ResourceCard
                title="Carbon Footprint Reduction Guide"
                description="A detailed guide to understanding and reducing your carbon footprint in everyday life."
                link="https://www.nature.org/en-us/get-involved/how-to-help/carbon-footprint-calculator/"
              />
              <ResourceCard
                title="Sustainable Living Blog"
                description="Practical tips and inspiration for sustainable living from real people making a difference."
                link="https://www.treehugger.com/"
              />
              <ResourceCard
                title="Climate Action Toolkit"
                description="Resources and tools to help you take meaningful action against climate change in your community."
                link="https://climatecommunication.yale.edu/resources/"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
}

const ResourceCard = ({ title, description, link }: ResourceCardProps) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="block p-6 rounded-lg border border-border/50 bg-card hover:border-primary/30 transition-all duration-300"
  >
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground mb-4">{description}</p>
    <span className="text-primary text-sm font-medium">Learn more →</span>
  </motion.a>
);

export default TipsPage;
