import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Leaf } from "lucide-react";
import { ThemeToggle } from "../theme/theme-toggle";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  transparent?: boolean;
}

export function Header({ transparent = false, className, ...props }: HeaderProps) {
  const [scrolled, setScrolled] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCalculatorClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      const calculatorSection = document.getElementById('calculator');
      if (calculatorSection) {
        calculatorSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollToCalculator: true } });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300",
        scrolled || !transparent
          ? "bg-background/80 backdrop-blur-md shadow-soft"
          : "bg-transparent",
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 text-foreground transition-all hover:opacity-90"
          aria-label="CarbonNeat - Go to homepage"
        >
          <Leaf className="h-6 w-6 text-primary animate-pulse-subtle" />
          <span className="font-medium text-lg">CarbonNeat</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" onClick={handleCalculatorClick}>Calculator</NavLink>
          <NavLink to="/tips">Eco Tips</NavLink>
          <NavLink to="/offset">Offset</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <div className="md:hidden">
            {/* Mobile menu would go here */}
          </div>
        </div>
      </div>
    </header>
  );
}

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

function NavLink({ to, children, className, onClick, ...props }: NavLinkProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <Link
      to={to}
      className={cn(
        "relative text-foreground/90 text-sm font-medium transition-colors hover:text-foreground",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      {...props}
    >
      {children}
      <span
        className={cn(
          "absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary rounded-full transition-all duration-300",
          isHovered ? "w-full" : "w-0"
        )}
      />
    </Link>
  );
}
