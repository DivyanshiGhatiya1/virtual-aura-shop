import { Brain, Scan, Ruler, Shirt, Video } from "lucide-react";

const features = [
  {
    icon: Brain,
    number: "1",
    title: "AI Style Advisor",
    description: "Recommends shades and outfits",
  },
  {
    icon: Scan,
    number: "2",
    title: "3D Body Scan",
    description: "Builds personalized 3D avatar",
  },
  {
    icon: Ruler,
    number: "3",
    title: "Smart Fit Predictor",
    description: "Suggests accurate sizes",
  },
  {
    icon: Shirt,
    number: "4",
    title: "Mix & Match Wardrobe",
    description: "Try with existing clothes",
  },
  {
    icon: Video,
    number: "5",
    title: "Live AR Mirror",
    description: "Real-time preview of makeup, jewelry, etc.",
  },
];

const UniqueFeaturesSlide = () => {
  return (
    <div className="h-screen w-full bg-gradient-dark flex items-center justify-center p-12">
      <div className="max-w-7xl w-full space-y-12 animate-in fade-in duration-700">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Unique & Scalable Features
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-500 hover:scale-105 animate-in fade-in zoom-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                {feature.number}
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gradient-accent w-fit">
                  <feature.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniqueFeaturesSlide;
