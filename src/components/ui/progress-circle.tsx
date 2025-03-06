
import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg" | "xl";
  showValue?: boolean;
  unit?: string;
  label?: string;
  variant?: "default" | "success" | "warning" | "danger";
}

const sizeMap = {
  sm: "w-20 h-20 text-sm",
  md: "w-28 h-28 text-base",
  lg: "w-36 h-36 text-lg",
  xl: "w-48 h-48 text-xl",
};

const variantMap = {
  default: "stroke-primary",
  success: "stroke-nature-500",
  warning: "stroke-amber-500",
  danger: "stroke-destructive",
};

export function ProgressCircle({
  value,
  max = 100,
  size = "md",
  showValue = true,
  unit = "%",
  label,
  variant = "default",
  className,
  ...props
}: ProgressCircleProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={cn("relative flex items-center justify-center", sizeMap[size], className)} {...props}>
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          className="stroke-muted transition-all duration-300 ease-in-out"
          cx="50"
          cy="50"
          r={radius}
          strokeWidth="8"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          className={cn(
            "transition-all duration-700 ease-in-out",
            variantMap[variant]
          )}
          cx="50"
          cy="50"
          r={radius}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {showValue && (
          <span className="font-semibold">
            {Math.round(value)}
            {unit}
          </span>
        )}
        {label && <span className="mt-1 text-xs text-muted-foreground">{label}</span>}
      </div>
    </div>
  );
}
