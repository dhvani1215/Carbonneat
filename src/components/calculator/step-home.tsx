
import React from "react";
import { QuestionCard } from "./question-card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Home, Lightbulb, Thermometer, Users } from "lucide-react";

interface HomeData {
  homeSize: number;
  energySource: string;
  heatingUsage: number;
  householdSize: number;
}

interface StepHomeProps {
  data: HomeData;
  updateData: (data: Partial<HomeData>) => void;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
}

export function StepHome({
  data,
  updateData,
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
}: StepHomeProps) {
  const [homeSize, setHomeSize] = React.useState(data.homeSize);
  const [energySource, setEnergySource] = React.useState(data.energySource);
  const [heatingUsage, setHeatingUsage] = React.useState(data.heatingUsage);
  const [householdSize, setHouseholdSize] = React.useState(data.householdSize);

  // Update parent state on change
  React.useEffect(() => {
    updateData({ homeSize, energySource, heatingUsage, householdSize });
  }, [homeSize, energySource, heatingUsage, householdSize, updateData]);

  return (
    <QuestionCard
      title="Home Energy"
      description="About your home energy usage"
      currentStep={currentStep}
      totalSteps={totalSteps}
      onNext={onNext}
      onPrevious={onPrevious}
    >
      <div className="space-y-8">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="homeSize" className="text-base">Home size (m²)</Label>
            <span className="text-xl font-medium text-foreground">{homeSize} m²</span>
          </div>
          <Slider
            id="homeSize"
            min={20}
            max={300}
            step={10}
            value={[homeSize]}
            onValueChange={(value) => setHomeSize(value[0])}
            className="py-1"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>20 m²</span>
            <span>150 m²</span>
            <span>300 m²</span>
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-base">Primary energy source</Label>
          <RadioGroup
            value={energySource}
            onValueChange={setEnergySource}
            className="grid grid-cols-2 gap-3"
          >
            <EnergyOption
              value="renewable"
              label="Renewable"
              description="Solar, wind, etc."
              icon={<Lightbulb className="h-4 w-4" />}
              checked={energySource === "renewable"}
            />
            <EnergyOption
              value="mixed"
              label="Mixed"
              description="Standard utility mix"
              icon={<Lightbulb className="h-4 w-4" />}
              checked={energySource === "mixed"}
            />
            <EnergyOption
              value="natural_gas"
              label="Natural Gas"
              description="Gas heating/cooking"
              icon={<Thermometer className="h-4 w-4" />}
              checked={energySource === "natural_gas"}
            />
            <EnergyOption
              value="coal"
              label="Coal"
              description="Coal based electricity"
              icon={<Home className="h-4 w-4" />}
              checked={energySource === "coal"}
            />
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="heatingUsage" className="text-base">Heating usage (months per year)</Label>
            <span className="text-xl font-medium text-foreground">{heatingUsage}</span>
          </div>
          <Slider
            id="heatingUsage"
            min={0}
            max={12}
            step={1}
            value={[heatingUsage]}
            onValueChange={(value) => setHeatingUsage(value[0])}
            className="py-1"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>6</span>
            <span>12</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="householdSize" className="text-base">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>Household size</span>
              </div>
            </Label>
            <span className="text-xl font-medium text-foreground">{householdSize}</span>
          </div>
          <Slider
            id="householdSize"
            min={1}
            max={8}
            step={1}
            value={[householdSize]}
            onValueChange={(value) => setHouseholdSize(value[0])}
            className="py-1"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1</span>
            <span>4</span>
            <span>8+</span>
          </div>
        </div>
      </div>
    </QuestionCard>
  );
}

interface EnergyOptionProps {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  checked: boolean;
}

function EnergyOption({
  value,
  label,
  description,
  icon,
  checked,
}: EnergyOptionProps) {
  return (
    <Label
      htmlFor={`energy-${value}`}
      className={`flex flex-col items-center justify-center p-4 rounded-lg border border-border/60 transition-all cursor-pointer ${
        checked
          ? "bg-primary/10 border-primary ring-1 ring-primary"
          : "hover:bg-secondary/50"
      }`}
    >
      <RadioGroupItem
        value={value}
        id={`energy-${value}`}
        className="sr-only"
      />
      <div className="mb-2">{icon}</div>
      <span className="font-medium text-sm">{label}</span>
      <span className="text-xs text-muted-foreground">{description}</span>
    </Label>
  );
}
