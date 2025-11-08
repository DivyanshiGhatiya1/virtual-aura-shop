import { Gift, Link2, Paintbrush, Star } from "lucide-react";

const models = [
  {
    icon: Gift,
    title: "Freemium SDK",
    description: "Free for small retailers, paid for enterprises",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Link2,
    title: "Affiliate Earnings",
    description: "Commission-based revenue model",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Paintbrush,
    title: "White-Label Version",
    description: "Custom app for boutiques and brands",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Star,
    title: "Sponsored Recommendations",
    description: "Paid AI-based product placements",
    color: "from-amber-500 to-orange-500",
  },
];

const MonetizationSlide = () => {
  return (
    <div className="h-screen w-full bg-gradient-hero flex items-center justify-center p-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl w-full space-y-12 relative z-10 animate-in fade-in duration-700">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Monetization Model
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-500 hover:scale-105 animate-in fade-in zoom-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-4">
                <div className={`p-5 rounded-2xl bg-gradient-to-r ${model.color} w-fit shadow-xl group-hover:scale-110 transition-transform`}>
                  <model.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-primary-foreground">
                  {model.title}
                </h3>

                <p className="text-lg text-primary-foreground/80 leading-relaxed">
                  {model.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonetizationSlide;
