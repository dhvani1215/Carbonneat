
import React from "react";
import { QuestionCard } from "./question-card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plane, Car, Train, Bike } from "lucide-react";

interface TransportData {
  carKm: number;
  flightsPerYear: number;
  publicTransport: string;
}

interface StepTransportProps {
  data: TransportData;
  updateData: (data: Partial<TransportData>) => void;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
}

export function StepTransport({
  data,
  updateData,
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
}: StepTransportProps) {
  const [carKm, setCarKm] = React.useState(data.carKm);
  const [flightsPerYear, setFlightsPerYear] = React.useState(data.flightsPerYear);
  const [publicTransport, setPublicTransport] = React.useState(data.publicTransport);

  // Update parent state on change
  React.useEffect(() => {
    updateData({ carKm, flightsPerYear, publicTransport });
  }, [carKm, flightsPerYear, publicTransport, updateData]);

  return (
    <QuestionCard
      title="Transportation"
      description="How do you get around?"
      currentStep={currentStep}
      totalSteps={totalSteps}
      onNext={onNext}
      onPrevious={onPrevious}
    >
      <div className="space-y-8">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="carKm" className="text-base">Car travel (km per week)</Label>
            <span className="text-xl font-medium text-foreground">{carKm}</span>
          </div>
          <Slider
            id="carKm"
            min={0}
            max={1000}
            step={10}
            value={[carKm]}
            onValueChange={(value) => setCarKm(value[0])}
            className="py-1"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0 km</span>
            <span>500 km</span>
            <span>1000 km</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="flights" className="text-base">Flights per year</Label>
            <span className="text-xl font-medium text-foreground">{flightsPerYear}</span>
          </div>
          <Slider
            id="flights"
            min={0}
            max={20}
            step={1}
            value={[flightsPerYear]}
            onValueChange={(value) => setFlightsPerYear(value[0])}
            className="py-1"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>10</span>
            <span>20+</span>
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-base">Public transport usage</Label>
          <RadioGroup
            value={publicTransport}
            onValueChange={setPublicTransport}
            className="grid grid-cols-2 gap-3"
          >
            <PublicTransportOption
              value="frequent"
              label="Frequent"
              description="Daily use"
              icon={<Train className="h-4 w-4" />}
              checked={publicTransport === "frequent"}
            />
            <PublicTransportOption
              value="regular"
              label="Regular"
              description="Few times a week"
              icon={<Train className="h-4 w-4" />}
              checked={publicTransport === "regular"}
            />
            <PublicTransportOption
              value="occasional"
              label="Occasional"
              description="Once a week"
              icon={<Train className="h-4 w-4" />}
              checked={publicTransport === "occasional"}
            />
            <PublicTransportOption
              value="rarely"
              label="Rarely"
              description="Almost never"
              icon={<Car className="h-4 w-4" />}
              checked={publicTransport === "rarely"}
            />
          </RadioGroup>
        </div>
      </div>
    </QuestionCard>
  );
}

interface PublicTransportOptionProps {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  checked: boolean;
}

function PublicTransportOption({
  value,
  label,
  description,
  icon,
  checked,
}: PublicTransportOptionProps) {
  return (
    <Label
      htmlFor={`transport-${value}`}
      className={`flex flex-col items-center justify-center p-4 rounded-lg border border-border/60 transition-all cursor-pointer ${
        checked
          ? "bg-primary/10 border-primary ring-1 ring-primary"
          : "hover:bg-secondary/50"
      }`}
    >
      <RadioGroupItem
        value={value}
        id={`transport-${value}`}
        className="sr-only"
      />
      <div className="mb-2">{icon}</div>
      <span className="font-medium text-sm">{label}</span>
      <span className="text-xs text-muted-foreground">{description}</span>
    </Label>
  );
}
