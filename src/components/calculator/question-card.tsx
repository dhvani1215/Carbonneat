
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  isValid?: boolean;
  className?: string;
}

export function QuestionCard({
  title,
  description,
  children,
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  isValid = true,
  className,
}: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={cn("w-full max-w-xl mx-auto", className)}
    >
      <Card className="border border-border/50 shadow-soft backdrop-blur-sm bg-background/95">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </p>
            <div className="flex items-center space-x-1">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i < currentStep ? "w-6 bg-primary" : "w-3 bg-muted"
                  )}
                />
              ))}
            </div>
          </div>
          <CardTitle className="text-2xl font-medium">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent className="pt-2 pb-6">{children}</CardContent>
        <CardFooter className="flex justify-between border-t border-border/50 pt-4">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={currentStep === 1}
            className="transition-all hover:translate-x-[-2px]"
          >
            Previous
          </Button>
          <Button
            onClick={onNext}
            disabled={!isValid}
            className="transition-all hover:translate-x-[2px]"
          >
            {currentStep === totalSteps ? "Calculate" : "Next"}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
