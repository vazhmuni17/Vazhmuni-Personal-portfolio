import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import profileImage from "@/assets/profile.jpg";

export const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent animate-glow-pulse" />
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center animate-fade-in relative z-10">
        {/* Profile Image with cursor follow effect */}
        <div 
          ref={imageRef}
          className="relative mx-auto md:mx-0 order-2 md:order-1"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out"
          }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/50 rounded-full blur-2xl opacity-30 animate-glow-pulse" />
            <img
              src={profileImage}
              alt="Profile"
              className="relative rounded-full w-full h-full object-cover border-4 border-primary/20 shadow-2xl"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-8 text-center md:text-left order-1 md:order-2">
          <div className="space-y-4">
            <p className="text-primary text-sm font-medium tracking-wider uppercase">
              Full Stack Developer
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="text-gradient">VAZHMUNI P</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              I craft beautiful, functional web experiences that solve real problems
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth glow group"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:bg-secondary transition-smooth"
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex gap-4 justify-center md:justify-start pt-8">
            <a 
              href="https://github.com/vazhmuni17" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth hover:scale-110 hover:glow"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vazhmuni-p-814265269" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth hover:scale-110 hover:glow"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth hover:scale-110 hover:glow"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="https://instagram.com/_vazhmuni_17/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth hover:scale-110 hover:glow"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="mailto:vazhmuni17@gmail.com"
              className="p-3 rounded-full bg-secondary border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth hover:scale-110 hover:glow"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};
