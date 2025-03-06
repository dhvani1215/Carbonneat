
import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { cn } from "@/lib/utils";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  transparentHeader?: boolean;
}

export function Layout({ 
  children, 
  transparentHeader = false, 
  className, 
  ...props 
}: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header transparent={transparentHeader} />
      <main className={cn("flex-1", className)} {...props}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
