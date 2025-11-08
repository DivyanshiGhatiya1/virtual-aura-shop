import { AlertCircle, Package, TrendingDown, Frown } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Lack of Real Visualization",
    description: "Online shopping lacks real product visualization",
  },
  {
    icon: Package,
    title: "Mismatch Issues",
    description: "Customers face size, fit, and color mismatch issues",
  },
  {
    icon: TrendingDown,
    title: "High Return Rates",
    description: "High return rates increase seller losses",
  },
  {
    icon: Frown,
    title: "Poor Experience",
    description: "Need for an immersive and personalized try-on experience",
  },
];

const ProblemStatementSlide = () => {
  return (
    <div className="h-screen w-full bg-gradient-dark flex items-center justify-center p-12">
      <div className="max-w-6xl w-full space-y-12 animate-in fade-in duration-700">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Problem Statement
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-accent/50 transition-all duration-500 hover:scale-105 animate-in fade-in zoom-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-gradient-accent group-hover:scale-110 transition-transform duration-300">
                  <problem.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {problem.title}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemStatementSlide;
