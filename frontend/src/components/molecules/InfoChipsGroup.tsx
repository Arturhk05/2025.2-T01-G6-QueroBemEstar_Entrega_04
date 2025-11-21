import { Flame, Calendar } from "lucide-react";
import { ChipInfo } from "@/components/atoms/ChipInfo";

interface InfoChipsGroupProps {
  points: number;
  days: number;
}

export const InfoChipsGroup = ({ points, days }: InfoChipsGroupProps) => {
  return (
    <div className="flex items-center gap-3">
      <ChipInfo icon={Flame} value={points} />
      <ChipInfo icon={Calendar} value={`${days} dias`} />
    </div>
  );
};
