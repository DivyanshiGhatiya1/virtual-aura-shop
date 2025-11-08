import { Rocket, Zap, Globe2 } from "lucide-react";

const phases = [
  {
    icon: Rocket,
    phase: "Phase 1",
    title: "Foundation",
    items: ["Face detection", "Simple AR filters"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    phase: "Phase 2",
    title: "Advanced Features",
    items: ["3D try-on", "AI style advisor", "Social features"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe2,
    phase: "Phase 3",
    title: "Full Integration",
    items: ["E-commerce integration", "Blockchain", "Sustainability tools"],
    color: "from-purple-500 to-pink-500",
  },
];

const RoadmapSlide = () => {
  return (
    <div className="h-screen w-full bg-gradient-dark flex items-center justify-center p-12">
      <div className="max-w-6xl w-full space-y-16 animate-in fade-in duration-700">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Development Roadmap
          </h2>
          <div className="w-32 h-1 bg-gradient-accent mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-primary -translate-y-1/2 hidden md:block" />

          <div className="grid md:grid-cols-3 gap-8 relative">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="relative animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/50 transition-all duration-500 hover:scale-105">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className={`p-6 rounded-2xl bg-gradient-to-r ${phase.color} shadow-xl group-hover:scale-110 transition-transform`}>
                      <phase.icon className="h-10 w-10 text-white" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">
                        {phase.phase}
                      </p>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {phase.title}
                      </h3>
                    </div>

                    <ul className="space-y-2 text-left w-full">
                      {phase.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="text-accent mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSlide;
