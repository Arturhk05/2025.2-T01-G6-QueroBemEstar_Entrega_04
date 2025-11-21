import { Badge } from "@/components/ui/badge";
import { MealType } from "@/types/recipe";

interface MealBadgeProps {
  mealType: MealType;
}

export const MealBadge = ({ mealType }: MealBadgeProps) => {
  return (
    <Badge className="bg-wellness-badge text-white font-medium hover:bg-wellness-badge/90">
      {mealType}
    </Badge>
  );
};
