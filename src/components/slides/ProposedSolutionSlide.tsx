import { Lightbulb, Globe, Camera } from "lucide-react";

const solutions = [
  {
    icon: Lightbulb,
    text: "Virtual Try-On App simulates how products look on the user",
  },
  {
    icon: Globe,
    text: "Integrates seamlessly with e-commerce websites",
  },
  {
    icon: Camera,
    text: "Uses AR to overlay products in real time on user images or videos",
  },
];

const ProposedSolutionSlide = () => {
  return (
    <div className="h-screen w-full bg-gradient-hero flex items-center justify-center p-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-5xl w-full space-y-16 relative z-10 animate-in fade-in duration-700">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Proposed Solution
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex items-center gap-6 p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-500 animate-in slide-in-from-right"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-5 rounded-2xl bg-accent shadow-lg shadow-accent/50">
                <solution.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <p className="text-2xl text-primary-foreground font-light flex-1">
                {solution.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProposedSolutionSlide;
