import { ChevronUp, ChevronDown } from "lucide-react";
import { IconButtonRound } from "@/components/atoms/IconButtonRound";

interface FeedNavButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export const FeedNavButtons = ({
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: FeedNavButtonsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <IconButtonRound
        icon={ChevronUp}
        onClick={onPrevious}
        className="bg-card hover:bg-accent disabled:opacity-50"
        aria-label="Receita anterior"
      />
      <IconButtonRound
        icon={ChevronDown}
        onClick={onNext}
        className="bg-card hover:bg-accent disabled:opacity-50"
        aria-label="Próxima receita"
      />
    </div>
  );
};
