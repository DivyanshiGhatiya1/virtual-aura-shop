import { Brain, Ruler, Smartphone, Save } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Fitting",
    description: "Our advanced AI technology creates realistic virtual try-ons with accurate proportions and lighting.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Ruler,
    title: "Smart Sizing",
    description: "Get personalized size recommendations based on your measurements and preferences.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "AR Preview Mode",
    description: "Experience augmented reality try-on directly from your mobile device camera.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Save,
    title: "Save Your Looks",
    description: "Keep track of your favorite outfits and share them with friends for feedback.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const FeaturesSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Powerful{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the future of online shopping with our cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 group animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} w-fit group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
