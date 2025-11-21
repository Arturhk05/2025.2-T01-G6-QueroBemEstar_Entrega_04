import { useState, useEffect, useCallback } from "react";
import { MainLayout } from "@/components/templates/MainLayout";
import { RecipeCard } from "@/components/organisms/RecipeCard";
import { RecipeActions } from "@/components/molecules/RecipeActions";
import { FeedNavButtons } from "@/components/molecules/FeedNavButtons";
import { recipes } from "@/data/recipes";
import { AnimatePresence } from "framer-motion";

const Recipes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");

  const currentRecipe = recipes[currentIndex];
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < recipes.length - 1;

  const goToPrevious = useCallback(() => {
    if (hasPrevious) {
      setDirection("up");
      setCurrentIndex((prev) => prev - 1);
    }
  }, [hasPrevious]);

  const goToNext = useCallback(() => {
    if (hasNext) {
      setDirection("down");
      setCurrentIndex((prev) => prev + 1);
    }
  }, [hasNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Scroll navigation
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling) return;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 100);

      isScrolling = true;

      if (e.deltaY > 0) {
        goToNext();
      } else if (e.deltaY < 0) {
        goToPrevious();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [goToPrevious, goToNext]);

  return (
    <MainLayout>
      <div className="relative flex items-center justify-center min-h-[calc(100vh-8rem)]">
        {/* Left Actions */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <RecipeActions
            likes={currentRecipe.likes}
            comments={currentRecipe.comments}
            saves={currentRecipe.saves}
          />
        </div>

        {/* Center Card */}
        <div className="flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <RecipeCard key={currentRecipe.id} recipe={currentRecipe} direction={direction} />
          </AnimatePresence>
        </div>

        {/* Right Navigation */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <FeedNavButtons
            onPrevious={goToPrevious}
            onNext={goToNext}
            hasPrevious={hasPrevious}
            hasNext={hasNext}
          />
        </div>

        {/* Mobile Actions */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-10 lg:hidden">
          <div className="flex items-center gap-4 bg-card rounded-full shadow-lg p-2">
            <RecipeActions
              likes={currentRecipe.likes}
              comments={currentRecipe.comments}
              saves={currentRecipe.saves}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Recipes;
