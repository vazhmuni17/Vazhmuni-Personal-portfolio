import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a 
              href="https://github.com/vazhmuni17" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vazhmuni-p-814265269" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a 
              href="https://www.instagram.com/_vazhmuni_17/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a 
              href="mailto:vazhmuni17@gmail.com"
              className="p-2 rounded-full bg-secondary border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Your Name. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
