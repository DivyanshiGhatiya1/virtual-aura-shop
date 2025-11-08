import { Code2, Box, Server, Smartphone, Plug } from "lucide-react";

const techStack = [
  {
    icon: Code2,
    category: "Computer Vision & ML",
    items: ["OpenCV", "Mediapipe", "TensorFlow Lite", "PyTorch"],
  },
  {
    icon: Box,
    category: "AR/3D Tools",
    items: ["ARCore", "ARKit", "Unity", "Blender"],
  },
  {
    icon: Server,
    category: "Backend",
    items: ["Firebase", "AWS"],
  },
  {
    icon: Smartphone,
    category: "Frontend",
    items: ["Flutter", "React Native"],
  },
  {
    icon: Plug,
    category: "API Integrations",
    items: ["Shopify", "WooCommerce", "Amazon APIs"],
  },
];

const TechnologyStackSlide = () => {
  return (
    <div className="h-screen w-full bg-gradient-dark flex items-center justify-center p-12">
      <div className="max-w-7xl w-full space-y-12 animate-in fade-in duration-700">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Technology Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 hover:border-accent/60 transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-left"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-accent group-hover:scale-110 transition-transform">
                    <tech.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {tech.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyStackSlide;
