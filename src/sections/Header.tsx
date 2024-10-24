import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [activeNav, setactiveNav] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeStyle = "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900";
  
  const navItems = [
    { href: "#", label: "Home", id: "home" },
    { href: "#values", label: "Values", id: "values" },
    { href: "#project", label: "Project", id: "project" },
    { 
      href: "https://services.jhonswg.com", 
      label: "Services", 
      id: "services",
      external: true 
    },
    { 
      href: "https://explorer.jhonswg.com", 
      label: "Explorer", 
      id: "explorer",
      external: true 
    },
    { href: "#contact", label: "Contact", id: "contact" }
  ];

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-3 right-3 p-2 rounded-full bg-white/10 backdrop-blur border border-white/15 z-50"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center fixed top-3 w-full z-10">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={twMerge(
                activeNav === item.id ? activeStyle : "",
                "nav-item"
              )}
              onClick={() => setactiveNav(item.id)}
              {...(item.external ? {
                target: "_blank",
                rel: "noopener noreferrer"
              } : {})}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className={twMerge(
        "md:hidden fixed top-0 right-0 w-1/4 min-w-[200px] bg-white/30 backdrop-blur-sm z-40",
        "transition-all duration-300 ease-in-out h-auto rounded-bl-xl",
        "border-l border-b border-white/10",
        isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"
      )}>
        <nav className="flex flex-col items-start py-16 px-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={twMerge(
                "py-2 text-sm w-full transition-colors duration-200",
                activeNav === item.id 
                  ? "text-white font-medium"
                  : "text-gray-300 hover:text-black",
              )}
              onClick={(e) => {
                setactiveNav(item.id);
                setIsMenuOpen(false);
              }}
              {...(item.external ? {
                target: "_blank",
                rel: "noopener noreferrer"
              } : {})}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};