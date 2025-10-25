import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                asChild
              >
                <a href="mailto:your.email@example.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Copyright */}
            <p className="text-muted-foreground text-center flex items-center gap-2">
              © {currentYear} Your Name. Made with{" "}
              <Heart className="w-4 h-4 text-primary fill-primary" /> and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
