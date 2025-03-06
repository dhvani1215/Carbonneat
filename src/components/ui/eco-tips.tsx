
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Home, Car, ShoppingBag, Lightbulb, Trash, Droplet, Factory, Recycle, PlaneTakeoff } from "lucide-react";
import { cn } from "@/lib/utils";

interface EcoTip {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: "transport" | "home" | "food" | "general" | "waste" | "water" | "energy" | "products";
  impact: "high" | "medium" | "low";
  detailedDescription?: string;
  actionItems?: string[];
  source?: string;
}

export const ecoTips: EcoTip[] = [
  {
    id: "tip-1",
    title: "Reduce meat consumption",
    description: "Eating less meat, especially beef, can significantly reduce your carbon footprint.",
    icon: <ShoppingBag />,
    category: "food",
    impact: "high",
    detailedDescription: "Livestock production is responsible for about 14.5% of global greenhouse gas emissions. Beef production requires 20 times more land and emits 20 times more greenhouse gas emissions than plant-based proteins.",
    actionItems: [
      "Start with Meatless Mondays",
      "Explore plant-based alternatives like tofu, tempeh, and legumes",
      "When eating meat, choose chicken or pork over beef or lamb",
      "Try vegetarian or vegan recipes for 2-3 meals per week"
    ],
    source: "Food and Agriculture Organization of the United Nations"
  },
  {
    id: "tip-2",
    title: "Use public transportation",
    description: "Taking buses, trains, or carpooling reduces emissions compared to driving alone.",
    icon: <Car />,
    category: "transport",
    impact: "high",
    detailedDescription: "A fully occupied bus can replace 40-50 single-occupancy vehicles on the road, significantly reducing carbon emissions. Trains can be even more efficient on a per-passenger basis.",
    actionItems: [
      "Use public transit for your daily commute if available",
      "Try carpooling with colleagues or neighbors",
      "Consider biking or walking for short distances",
      "Combine errands to reduce the number of trips"
    ],
    source: "U.S. Department of Transportation"
  },
  {
    id: "tip-3",
    title: "Install LED bulbs",
    description: "LED bulbs use up to 90% less energy than incandescent bulbs and last much longer.",
    icon: <Lightbulb />,
    category: "home",
    impact: "medium",
    detailedDescription: "LED lighting uses at least 75% less energy and lasts 25 times longer than incandescent lighting. Switching to LEDs is one of the easiest and most effective ways to reduce energy use at home.",
    actionItems: [
      "Replace most frequently used bulbs first",
      "Look for ENERGY STAR rated LED bulbs",
      "Choose the right color temperature for each room (warm for living spaces, cool for work areas)",
      "Dispose of old CFLs properly as they contain mercury"
    ],
    source: "U.S. Department of Energy"
  },
  {
    id: "tip-4",
    title: "Buy local produce",
    description: "Food transported long distances has a higher carbon footprint. Buy locally when possible.",
    icon: <ShoppingBag />,
    category: "food",
    impact: "medium",
    detailedDescription: "The average meal travels 1,500 miles from farm to plate in the United States. Locally grown food doesn't need to be transported as far, reducing fossil fuel consumption and carbon emissions.",
    actionItems: [
      "Shop at farmers' markets",
      "Join a Community Supported Agriculture (CSA) program",
      "Grow your own herbs or vegetables if possible",
      "Choose seasonal produce that doesn't need to be imported"
    ],
    source: "Natural Resources Defense Council"
  },
  {
    id: "tip-5",
    title: "Reduce home heating",
    description: "Lowering your thermostat by just 1°C can reduce heating bills by up to 10%.",
    icon: <Home />,
    category: "home",
    impact: "medium",
    detailedDescription: "Heating and cooling account for about 50% of energy use in the average home. Proper insulation and temperature management can significantly reduce your carbon footprint.",
    actionItems: [
      "Install a programmable thermostat",
      "Seal drafts around windows and doors",
      "Add insulation in attics and walls",
      "Use ceiling fans to circulate air efficiently"
    ],
    source: "U.S. Environmental Protection Agency"
  },
  {
    id: "tip-6",
    title: "Choose renewable energy",
    description: "Switch to a renewable energy provider or install solar panels if possible.",
    icon: <Lightbulb />,
    category: "energy",
    impact: "high",
    detailedDescription: "Renewable energy sources like solar, wind, and hydroelectric power produce minimal greenhouse gas emissions compared to fossil fuels. Many utility companies now offer renewable energy options.",
    actionItems: [
      "Research green energy providers in your area",
      "Consider community solar projects if direct installation isn't feasible",
      "Look into government incentives for renewable energy",
      "Start with small solar installations like outdoor lighting"
    ],
    source: "U.S. Department of Energy"
  },
  {
    id: "tip-7",
    title: "Reduce water waste",
    description: "Saving water also saves energy used to pump, heat, and treat water.",
    icon: <Droplet />,
    category: "water",
    impact: "medium",
    detailedDescription: "It takes energy to pump, heat, and treat water, so using less water also means using less energy. Hot water is especially energy-intensive.",
    actionItems: [
      "Fix leaky faucets and toilets",
      "Install low-flow showerheads and faucet aerators",
      "Take shorter showers",
      "Only run full loads in dishwashers and washing machines"
    ],
    source: "Water Footprint Network"
  },
  {
    id: "tip-8",
    title: "Reduce air travel",
    description: "Air travel has a high carbon footprint. Consider alternatives when possible.",
    icon: <PlaneTakeoff />,
    category: "transport",
    impact: "high",
    detailedDescription: "A single round-trip flight from New York to London emits about 1 metric ton of CO2 per passenger, which is equivalent to about 11% of the average American's annual carbon footprint.",
    actionItems: [
      "Use video conferencing for business meetings",
      "Take trains for shorter distances when possible",
      "Combine trips to reduce the number of flights",
      "If flying is necessary, consider carbon offset programs"
    ],
    source: "International Council on Clean Transportation"
  },
  {
    id: "tip-9",
    title: "Reduce, reuse, recycle",
    description: "Follow the waste hierarchy to minimize environmental impact.",
    icon: <Recycle />,
    category: "waste",
    impact: "medium",
    detailedDescription: "The waste hierarchy prioritizes preventing waste first, then reusing materials, recycling what can't be reused, and only as a last resort, disposing of waste in landfills.",
    actionItems: [
      "Avoid single-use products",
      "Repair items instead of replacing them",
      "Buy second-hand when possible",
      "Learn local recycling guidelines to recycle correctly"
    ],
    source: "U.S. Environmental Protection Agency"
  },
  {
    id: "tip-10",
    title: "Buy energy-efficient appliances",
    description: "ENERGY STAR appliances use less electricity and reduce your carbon footprint.",
    icon: <Home />,
    category: "home",
    impact: "medium",
    detailedDescription: "ENERGY STAR certified appliances use 10-50% less energy than standard models. They may cost more upfront but save money and reduce emissions over their lifetime.",
    actionItems: [
      "Look for the ENERGY STAR label when purchasing new appliances",
      "Replace oldest, least efficient appliances first",
      "Consider the energy usage over the lifetime of the product, not just the purchase price",
      "Properly recycle old appliances"
    ],
    source: "ENERGY STAR Program"
  },
  {
    id: "tip-11",
    title: "Compost food waste",
    description: "Composting reduces methane emissions from landfills and creates valuable soil.",
    icon: <Trash />,
    category: "waste",
    impact: "medium",
    detailedDescription: "When food waste decomposes in landfills, it produces methane, a greenhouse gas 25 times more potent than CO2. Composting prevents these emissions and produces nutrient-rich soil.",
    actionItems: [
      "Start a home compost bin for fruit and vegetable scraps",
      "Use a countertop compost collector for convenience",
      "If home composting isn't possible, look for community composting programs",
      "Use compost in your garden or donate it to community gardens"
    ],
    source: "U.S. Composting Council"
  },
  {
    id: "tip-12",
    title: "Choose sustainable products",
    description: "Look for eco-friendly certifications and minimal packaging.",
    icon: <ShoppingBag />,
    category: "products",
    impact: "medium",
    detailedDescription: "The production, transportation, use, and disposal of consumer goods accounts for 60% of global greenhouse gas emissions. Choosing sustainable products reduces these impacts.",
    actionItems: [
      "Look for credible certifications like ENERGY STAR, Forest Stewardship Council (FSC), and Fair Trade",
      "Choose products with minimal or recyclable packaging",
      "Support companies with strong environmental commitments",
      "Consider the entire lifecycle of products, from production to disposal"
    ],
    source: "World Economic Forum"
  },
];

interface EcoTipsProps {
  filter?: "transport" | "home" | "food" | "general" | "all" | "waste" | "water" | "energy" | "products";
  maxItems?: number;
  className?: string;
  showDetailed?: boolean;
}

export function EcoTips({ filter = "all", maxItems, className, showDetailed = false }: EcoTipsProps) {
  const filteredTips = filter === "all" 
    ? ecoTips 
    : ecoTips.filter(tip => tip.category === filter);
  
  const displayTips = maxItems ? filteredTips.slice(0, maxItems) : filteredTips;

  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {displayTips.map((tip, index) => (
        <motion.div
          key={tip.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden group">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div 
                  className={cn(
                    "p-2 rounded-full",
                    tip.impact === "high" 
                      ? "bg-nature-100 text-nature-600 dark:bg-nature-900 dark:text-nature-300" 
                      : tip.impact === "medium"
                      ? "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300"
                      : "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                  )}
                >
                  {React.cloneElement(tip.icon as React.ReactElement, { 
                    className: "h-5 w-5 transition-transform duration-300 group-hover:scale-110" 
                  })}
                </div>
                <span 
                  className={cn(
                    "text-xs font-medium px-2 py-1 rounded-full",
                    tip.impact === "high" 
                      ? "bg-nature-100 text-nature-700 dark:bg-nature-900 dark:text-nature-300" 
                      : tip.impact === "medium"
                      ? "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
                      : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                  )}
                >
                  {tip.impact.charAt(0).toUpperCase() + tip.impact.slice(1)} Impact
                </span>
              </div>
              <CardTitle className="text-lg font-medium mt-3">{tip.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground">
                {tip.description}
              </CardDescription>
              
              {showDetailed && tip.detailedDescription && (
                <div className="mt-4">
                  <p className="text-sm text-foreground/80 mb-3">{tip.detailedDescription}</p>
                  
                  {tip.actionItems && tip.actionItems.length > 0 && (
                    <div className="mt-2">
                      <h4 className="text-sm font-medium mb-2">Actions you can take:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
                        {tip.actionItems.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {tip.source && (
                    <p className="text-xs text-muted-foreground mt-3">
                      Source: {tip.source}
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
