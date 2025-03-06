
import React from "react";
import { QuestionCard } from "./question-card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Beef, Fish, Leaf, ShoppingBag } from "lucide-react";

interface DietData {
  dietType: string;
  localFoodPercentage: number;
  foodWaste: number;
}

interface StepDietProps {
  data: DietData;
  updateData: (data: Partial<DietData>) => void;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
}

export function StepDiet({
  data,
  updateData,
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
}: StepDietProps) {
  const [dietType, setDietType] = React.useState(data.dietType);
  const [localFoodPercentage, setLocalFoodPercentage] = React.useState(data.localFoodPercentage);
  const [foodWaste, setFoodWaste] = React.useState(data.foodWaste);

  // Update parent state on change
  React.useEffect(() => {
    updateData({ dietType, localFoodPercentage, foodWaste });
  }, [dietType, localFoodPercentage, foodWaste, updateData]);

  return (
    <QuestionCard
      title="Diet & Consumption"
      description="Your food choices and consumption habits"
      currentStep={currentStep}
      totalSteps={totalSteps}
      onNext={onNext}
      onPrevious={onPrevious}
    >
      <div className="space-y-8">
        <div className="space-y-3">
          <Label className="text-base">Diet type</Label>
          <RadioGroup
            value={dietType}
            onValueChange={setDietType}
            className="grid grid-cols-2 gap-3"
          >
            <DietOption
              value="meat_heavy"
              label="Meat Heavy"
              description="Daily meat consumption"
              icon={<Beef className="h-4 w-4" />}
              checked={dietType === "meat_heavy"}
            />
            <DietOption
              value="omnivore"
              label="Omnivore"
              description="Moderate meat consumption"
              icon={<Fish className="h-4 w-4" />}
              checked={dietType === "omnivore"}
            />
            <DietOption
              value="vegetarian"
              label="Vegetarian"
              description="No meat, has dairy/eggs"
              icon={<Leaf className="h-4 w-4" />}
              checked={dietType === "vegetarian"}
            />
            <DietOption
              value="vegan"
              label="Vegan"
              description="Plant-based only"
              icon={<Leaf className="h-4 w-4" />}
              checked={dietType === "vegan"}
            />
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="localFood" className="text-base">Local food purchases</Label>
            <span className="text-xl font-medium text-foreground">{localFoodPercentage}%</span>
          </div>
          <Slider
            id="localFood"
            min={0}
            max={100}
            step={5}
            value={[localFoodPercentage]}
            onValueChange={(value) => setLocalFoodPercentage(value[0])}
            className="py-1"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="foodWaste" className="text-base">
              <div className="flex items-center">
                <ShoppingBag className="h-4 w-4 mr-1" />
                <span>Food waste (% of purchases)</span>
              </div>
            </Label>
            <span className="text-xl font-medium text-foreground">{foodWaste}%</span>
          </div>
          <Slider
            id="foodWaste"
            min={0}
            max={50}
            step={5}
            value={[foodWaste]}
            onValueChange={(value) => setFoodWaste(value[0])}
            className="py-1"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0%</span>
            <span>25%</span>
            <span>50%</span>
          </div>
        </div>
      </div>
    </QuestionCard>
  );
}

interface DietOptionProps {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  checked: boolean;
}

function DietOption({
  value,
  label,
  description,
  icon,
  checked,
}: DietOptionProps) {
  return (
    <Label
      htmlFor={`diet-${value}`}
      className={`flex flex-col items-center justify-center p-4 rounded-lg border border-border/60 transition-all cursor-pointer ${
        checked
          ? "bg-primary/10 border-primary ring-1 ring-primary"
          : "hover:bg-secondary/50"
      }`}
    >
      <RadioGroupItem
        value={value}
        id={`diet-${value}`}
        className="sr-only"
      />
      <div className="mb-2">{icon}</div>
      <span className="font-medium text-sm">{label}</span>
      <span className="text-xs text-muted-foreground">{description}</span>
    </Label>
  );
}
