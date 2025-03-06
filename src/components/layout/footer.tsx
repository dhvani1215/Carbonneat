
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Leaf } from "lucide-react";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer className={cn("bg-muted/30 py-10 px-6", className)} {...props}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="font-medium">CarbonNeat</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Making carbon footprint reduction accessible and actionable for everyone.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Site</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/offset" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Offset
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tips" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Eco Tips
                </Link>
              </li>
              <li>
                <Link to="/#calculator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Calculator
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-5 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} CarbonNeat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
