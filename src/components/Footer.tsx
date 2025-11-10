import { Sparkles, Instagram, Linkedin, Mail } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./ui/dialog";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card/30 backdrop-blur-sm border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl">
  <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
    <div className="space-y-4 md:pr-6">
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

          {/* About / Our Story & Team (Our Story opens a dialog) */}
          <div className="space-y-4 md:col-span-1 md:px-6">
            <Dialog>
              <div>
                <DialogTrigger asChild>
                  <button className="font-semibold text-foreground text-left hover:underline">
                    Our Story
                  </button>
                </DialogTrigger>
                <p className="text-muted-foreground text-sm mt-2">
                  Try Before You Buy — Virtually. Click "Our Story" to learn more.
                </p>
              </div>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Our Story</DialogTitle>
                  <DialogDescription>
                    We’re a passionate team — Aman, Divyanshi, and Vivek — driven by innovation and creativity. Our project, “Try Before You Buy — Virtually,” uses cutting-edge AI technology to let users upload their photo and instantly see how any outfit looks on them. We aim to make online shopping smarter, easier, and more personal.
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4">
                  <h4 className="font-semibold">Team</h4>
                  <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground">
                    <li>Aman</li>
                    <li>Divyanshi</li>
                    <li>Vivek</li>
                  </ul>
                </div>

                <div className="mt-6 text-right">
                  <DialogClose asChild>
                    <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground">Close</button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* (Legal section removed as requested) */}

          {/* Social */}
          <div className="space-y-4 md:pl-6">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex gap-4">
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
          <p>© 2024 FitLens. All rights reserved. Built By Team Future Entrepreneurs.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
