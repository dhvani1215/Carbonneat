
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProgressCircle } from "@/components/ui/progress-circle";
import { Separator } from "@/components/ui/separator";
import { Share2, BarChart, RefreshCw, Leaf } from "lucide-react";

interface ResultCardProps {
  score: number;
  breakdown: {
    category: string;
    value: number;
    percentage: number;
    icon: React.ReactNode;
  }[];
  onReset: () => void;
  className?: string;
}

export function ResultCard({ score, breakdown, onReset, className }: ResultCardProps) {
  // Determine score category
  let scoreCategory = "Average";
  let variant: "default" | "success" | "warning" | "danger" = "default";
  
  if (score < 5) {
    scoreCategory = "Excellent";
    variant = "success";
  } else if (score < 10) {
    scoreCategory = "Good";
    variant = "success";
  } else if (score < 15) {
    scoreCategory = "Average";
    variant = "warning";
  } else {
    scoreCategory = "High";
    variant = "danger";
  }

  // Helper function to get recommendation based on score
  const getRecommendation = () => {
    if (score < 5) {
      return "Your carbon footprint is minimal. Keep up the excellent work!";
    } else if (score < 10) {
      return "Your carbon footprint is good, but there's room for improvement in some areas.";
    } else if (score < 15) {
      return "Your carbon footprint is average. Consider adopting more sustainable habits.";
    } else {
      return "Your carbon footprint is higher than average. Consider significant lifestyle changes.";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn("w-full max-w-2xl mx-auto", className)}
    >
      <Card className="border border-border/50 shadow-medium overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl font-medium">Your Carbon Footprint</CardTitle>
              <CardDescription>Based on your lifestyle choices</CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" className="gap-1">
                <Share2 className="h-4 w-4" />
                <span className="hidden sm:inline">Share</span>
              </Button>
              <Button size="sm" variant="outline" className="gap-1">
                <BarChart className="h-4 w-4" />
                <span className="hidden sm:inline">Details</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pb-6">
          <div className="flex flex-col md:flex-row items-center justify-between pt-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <ProgressCircle 
                value={score} 
                max={25} 
                size="lg" 
                unit=" tons" 
                label="CO₂ per year" 
                variant={variant}
              />
              <div className="mt-3">
                <h3 className="text-lg font-medium">{scoreCategory}</h3>
                <p className="text-sm text-muted-foreground">Carbon Footprint</p>
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <Leaf className="h-5 w-5 text-primary mr-1" />
                Breakdown
              </h3>
              <div className="space-y-3">
                {breakdown.map((item) => (
                  <div key={item.category}>
                    <div className="flex justify-between text-sm mb-1">
                      <div className="flex items-center">
                        {item.icon}
                        <span className="ml-2">{item.category}</span>
                      </div>
                      <span className="font-medium">{item.value.toFixed(1)} tons</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        className={cn(
                          "h-full rounded-full",
                          item.percentage > 40 ? "bg-destructive" : 
                          item.percentage > 20 ? "bg-amber-500" : 
                          "bg-nature-500"
                        )}
                        initial={{ width: "0%" }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
            <h3 className="font-medium mb-2">Recommendation</h3>
            <p className="text-sm text-muted-foreground">{getRecommendation()}</p>
          </div>
        </CardContent>
        <CardFooter className="border-t border-border/50 pt-4">
          <Button variant="outline" onClick={onReset} className="w-full gap-2">
            <RefreshCw className="h-4 w-4" />
            Calculate Again
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
