import { Heart, Users, Shield, Leaf } from "lucide-react";

const features = [
  {
    icon: Heart,
    number: "6",
    title: "Sentiment-Based AI",
    description: "Learns user preferences over time",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Users,
    number: "7",
    title: "Social Try-On Rooms",
    description: "Invite friends to give feedback",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    number: "8",
    title: "Blockchain Authentication",
    description: "Verifies product authenticity",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Leaf,
    number: "9",
    title: "Sustainability Mode",
    description: "Highlights eco-friendly items",
    gradient: "from-green-500 to-emerald-500",
  },
];

const SocialFeaturesSlide = () => {
  return (
    <div className="h-screen w-full bg-gradient-hero flex items-center justify-center p-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-6xl w-full space-y-12 relative z-10 animate-in fade-in duration-700">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Social & Personalization
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-lg shadow-xl group-hover:scale-110 transition-transform">
                {feature.number}
              </div>

              <div className="space-y-4">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.gradient} w-fit shadow-lg`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-2xl font-semibold text-primary-foreground">
                  {feature.title}
                </h3>

                <p className="text-lg text-primary-foreground/80 leading-relaxed">
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

export default SocialFeaturesSlide;
