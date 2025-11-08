import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TitleSlide from "./slides/TitleSlide";
import IntroductionSlide from "./slides/IntroductionSlide";
import ProblemStatementSlide from "./slides/ProblemStatementSlide";
import ProposedSolutionSlide from "./slides/ProposedSolutionSlide";
import UniqueFeaturesSlide from "./slides/UniqueFeaturesSlide";
import SocialFeaturesSlide from "./slides/SocialFeaturesSlide";
import TechnologyStackSlide from "./slides/TechnologyStackSlide";
import MonetizationSlide from "./slides/MonetizationSlide";
import RoadmapSlide from "./slides/RoadmapSlide";
import GoalsVisionSlide from "./slides/GoalsVisionSlide";
import ConclusionSlide from "./slides/ConclusionSlide";

const slides = [
  TitleSlide,
  IntroductionSlide,
  ProblemStatementSlide,
  ProposedSolutionSlide,
  UniqueFeaturesSlide,
  SocialFeaturesSlide,
  TechnologyStackSlide,
  MonetizationSlide,
  RoadmapSlide,
  GoalsVisionSlide,
  ConclusionSlide,
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 relative overflow-hidden">
        <div
          key={currentSlide}
          className={`absolute inset-0 animate-in fade-in duration-700 ${
            direction === 1 ? "slide-in-from-right" : "slide-in-from-left"
          }`}
        >
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <Button
          variant="secondary"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="rounded-full bg-card/80 backdrop-blur-sm border border-border/50"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        <Button
          variant="secondary"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="rounded-full bg-card/80 backdrop-blur-sm border border-border/50"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 text-sm text-muted-foreground z-50">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Presentation;
