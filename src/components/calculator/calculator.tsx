
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { StepTransport } from "./step-transport";
import { StepHome } from "./step-home";
import { StepDiet } from "./step-diet";
import { ResultCard } from "./result-card";
import { Car, Home, Leaf, Plane } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function CarbonCalculator() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const [showResults, setShowResults] = useState(false);

  // Transport step data
  const [transportData, setTransportData] = useState({
    carKm: 100,
    flightsPerYear: 2,
    publicTransport: "regular",
  });

  // Home step data
  const [homeData, setHomeData] = useState({
    homeSize: 90,
    energySource: "mixed",
    heatingUsage: 5,
    householdSize: 2,
  });

  // Diet step data
  const [dietData, setDietData] = useState({
    dietType: "omnivore",
    localFoodPercentage: 30,
    foodWaste: 15,
  });

  // Carbon score and breakdown
  const [carbonScore, setCarbonScore] = useState(0);
  const [breakdown, setBreakdown] = useState([
    { category: "Transport", value: 0, percentage: 0, icon: <Car className="h-4 w-4" /> },
    { category: "Home Energy", value: 0, percentage: 0, icon: <Home className="h-4 w-4" /> },
    { category: "Diet", value: 0, percentage: 0, icon: <Leaf className="h-4 w-4" /> },
    { category: "Flights", value: 0, percentage: 0, icon: <Plane className="h-4 w-4" /> },
  ]);

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateCarbonFootprint();
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateCarbonFootprint = () => {
    // Calculate transport emissions
    const carEmissions = transportData.carKm * 52 * 0.0002; // rough estimate: km per week * weeks * emission factor
    
    // Calculate flight emissions
    const flightEmissions = transportData.flightsPerYear * 0.7; // rough estimate: each flight contributes 0.7 tons
    
    // Calculate public transport factor
    let publicTransportFactor = 0;
    switch (transportData.publicTransport) {
      case "frequent": publicTransportFactor = 0.5; break;
      case "regular": publicTransportFactor = 1; break;
      case "occasional": publicTransportFactor = 1.5; break;
      case "rarely": publicTransportFactor = 2; break;
      default: publicTransportFactor = 1;
    }
    
    // Calculate home emissions
    let energySourceFactor = 0;
    switch (homeData.energySource) {
      case "renewable": energySourceFactor = 0.2; break;
      case "mixed": energySourceFactor = 1; break;
      case "natural_gas": energySourceFactor = 1.5; break;
      case "coal": energySourceFactor = 2; break;
      default: energySourceFactor = 1;
    }
    
    const homeEmissions = (homeData.homeSize * 0.01 * energySourceFactor * homeData.heatingUsage / 6) / Math.sqrt(homeData.householdSize);
    
    // Calculate diet emissions
    let dietFactor = 0;
    switch (dietData.dietType) {
      case "meat_heavy": dietFactor = 3.3; break;
      case "omnivore": dietFactor = 2.5; break;
      case "vegetarian": dietFactor = 1.7; break;
      case "vegan": dietFactor = 1.5; break;
      default: dietFactor = 2.5;
    }
    
    // Adjust diet emissions based on local food and waste
    const localFoodAdjustment = 1 - (dietData.localFoodPercentage / 200); // 0-0.5 reduction
    const wasteAdjustment = 1 + (dietData.foodWaste / 100); // 0-0.5 increase
    const dietEmissions = dietFactor * localFoodAdjustment * wasteAdjustment;
    
    // Calculate total emissions
    const totalEmissions = carEmissions + flightEmissions + homeEmissions + dietEmissions;
    setCarbonScore(parseFloat(totalEmissions.toFixed(2)));
    
    // Calculate breakdown percentages
    const total = carEmissions + flightEmissions + homeEmissions + dietEmissions;
    const newBreakdown = [
      { 
        category: "Transport", 
        value: carEmissions, 
        percentage: (carEmissions / total) * 100,
        icon: <Car className="h-4 w-4" />
      },
      { 
        category: "Home Energy", 
        value: homeEmissions, 
        percentage: (homeEmissions / total) * 100,
        icon: <Home className="h-4 w-4" />
      },
      { 
        category: "Diet", 
        value: dietEmissions, 
        percentage: (dietEmissions / total) * 100,
        icon: <Leaf className="h-4 w-4" />
      },
      { 
        category: "Flights", 
        value: flightEmissions, 
        percentage: (flightEmissions / total) * 100,
        icon: <Plane className="h-4 w-4" />
      },
    ];
    
    setBreakdown(newBreakdown);
    setShowResults(true);
    
    toast({
      title: "Calculation Complete",
      description: "Your carbon footprint has been calculated.",
    });
  };

  const handleReset = () => {
    setCurrentStep(1);
    setShowResults(false);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepTransport
            data={transportData}
            updateData={(data) => setTransportData({ ...transportData, ...data })}
            currentStep={currentStep}
            totalSteps={totalSteps}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
          />
        );
      case 2:
        return (
          <StepHome
            data={homeData}
            updateData={(data) => setHomeData({ ...homeData, ...data })}
            currentStep={currentStep}
            totalSteps={totalSteps}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
          />
        );
      case 3:
        return (
          <StepDiet
            data={dietData}
            updateData={(data) => setDietData({ ...dietData, ...data })}
            currentStep={currentStep}
            totalSteps={totalSteps}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <AnimatePresence mode="wait">
        {!showResults ? (
          renderStep()
        ) : (
          <ResultCard
            score={carbonScore}
            breakdown={breakdown}
            onReset={handleReset}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
