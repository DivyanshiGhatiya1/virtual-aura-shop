import { Star } from "lucide-react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Virtual{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Try-On
            </span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Experience clothes virtually before you buy. Our AI-powered platform lets you see how outfits look on you instantly, making online shopping more confident and enjoyable.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border max-w-2xl text-center animate-in fade-in slide-in-from-bottom">
            <div className="space-y-4">
              <div className="text-lg font-medium">Key Features:</div>
              <ul className="text-foreground/90 space-y-2">
                <li>✨ Instant virtual try-on</li>
                <li>🎯 Accurate size prediction</li>
                <li>📱 Easy-to-use interface</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
