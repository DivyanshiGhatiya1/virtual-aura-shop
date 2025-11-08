import { Sparkles } from "lucide-react";

const TitleSlide = () => {
  return (
    <div className="h-screen w-full bg-gradient-hero flex items-center justify-center p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
        <div className="flex justify-center mb-6">
          <Sparkles className="h-16 w-16 text-accent animate-pulse" />
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold text-primary-foreground leading-tight">
          Virtual Try-On App
          <br />
          <span className="text-5xl md:text-6xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            for E-Commerce
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-primary-foreground/90 font-light">
          Enhancing Online Shopping Through AI and Augmented Reality
        </p>

        <div className="pt-8">
          <p className="text-xl text-primary-foreground/80">
            By: <span className="font-semibold text-accent">Darshika Shrivastava</span>
          </p>
          <p className="text-lg text-primary-foreground/70">
            B.Tech CSE, 1st Year
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;
