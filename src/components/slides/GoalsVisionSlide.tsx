import { Target, Heart, Zap } from "lucide-react";

const goals = [
  {
    icon: Target,
    title: "Revolutionize Shopping",
    description: "Transform online shopping using cutting-edge AI & AR technology",
  },
  {
    icon: Heart,
    title: "Enhance Experience",
    description: "Provide personalized recommendations and boost customer satisfaction",
  },
  {
    icon: Zap,
    title: "Build Ecosystem",
    description: "Create a scalable and sustainable try-on platform for the future",
  },
];

const GoalsVisionSlide = () => {
  return (
    <div className="h-screen w-full bg-gradient-hero flex items-center justify-center p-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl w-full space-y-16 relative z-10 animate-in fade-in duration-700">
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground">
            Goals & Vision
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-2xl text-primary-foreground/80 font-light max-w-3xl mx-auto">
            Building the future of online retail with AI-powered personalization
          </p>
        </div>

        <div className="space-y-6">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-500 hover:scale-105 animate-in slide-in-from-right"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-6">
                <div className="p-5 rounded-2xl bg-accent shadow-2xl shadow-accent/50 group-hover:scale-110 transition-transform">
                  <goal.icon className="h-8 w-8 text-accent-foreground" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                    {goal.title}
                  </h3>
                  <p className="text-lg text-primary-foreground/80">
                    {goal.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalsVisionSlide;
