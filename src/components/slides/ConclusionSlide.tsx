import { CheckCircle2, Sparkles } from "lucide-react";

const highlights = [
  "Bridges the gap between virtual & physical retail",
  "Offers innovation, engagement, and personalization",
  "Combines technology & fashion for seamless shopping",
];

const ConclusionSlide = () => {
  return (
    <div className="h-screen w-full bg-gradient-hero flex items-center justify-center p-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl w-full space-y-16 relative z-10 animate-in fade-in duration-700">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <Sparkles className="h-16 w-16 text-accent animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground">
            Conclusion
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="space-y-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-500 animate-in slide-in-from-left"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CheckCircle2 className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
              <p className="text-2xl text-primary-foreground font-light">
                {highlight}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-8 space-y-4 animate-in fade-in delay-700">
          <p className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            The Future of Shopping is Here
          </p>
          <p className="text-xl text-primary-foreground/80">
            Thank you for your attention!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConclusionSlide;
