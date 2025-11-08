import { Sparkles, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card/30 backdrop-blur-sm border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                FitLens
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Revolutionizing online shopping with AI-powered virtual try-on technology.
            </p>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-muted/50 hover:bg-primary transition-colors group"
              >
                <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted/50 hover:bg-primary transition-colors group"
              >
                <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted/50 hover:bg-primary transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted/50 hover:bg-primary transition-colors group"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 FitLens. All rights reserved. Built with AI for the future of shopping.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
