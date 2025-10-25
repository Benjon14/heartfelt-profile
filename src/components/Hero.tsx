import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Animated Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-background/20 backdrop-blur-sm rounded-full text-primary-foreground font-medium">
            👋 Welcome to my portfolio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Hi, I'm <span className="text-accent">Your Name</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
            Creative Developer & Problem Solver
          </p>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            I craft beautiful, functional digital experiences that make a difference.
            Let's build something amazing together!
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              className="bg-background/20 backdrop-blur-sm hover:bg-background/30 text-primary-foreground"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-background/20 backdrop-blur-sm hover:bg-background/30 text-primary-foreground"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-background/20 backdrop-blur-sm hover:bg-background/30 text-primary-foreground"
              asChild
            >
              <a href="mailto:your.email@example.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-background text-primary hover:bg-background/90 shadow-glow group"
          >
            Let's Connect!
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
