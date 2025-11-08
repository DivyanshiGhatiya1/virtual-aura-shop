import { Eye, Cpu, Box, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Eye,
    text: "Enables users to virtually try on fashion items, accessories, or cosmetics",
  },
  {
    icon: Cpu,
    text: "Uses AI, Computer Vision, and AR technology",
  },
  {
    icon: Box,
    text: "Helps customers make confident purchase decisions",
  },
  {
    icon: TrendingUp,
    text: "Aims to reduce return rates & improve satisfaction",
  },
];

const IntroductionSlide = () => {
  return (
    <div className="h-screen w-full bg-gradient-dark flex items-center justify-center p-12">
      <div className="max-w-6xl w-full space-y-12 animate-in fade-in slide-in-from-bottom duration-700">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-16">
          Introduction
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-left"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-3 rounded-lg bg-gradient-primary">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-lg text-foreground/90 flex-1">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroductionSlide;
