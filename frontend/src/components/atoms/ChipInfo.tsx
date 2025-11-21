import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChipInfoProps {
  icon: LucideIcon;
  value: string | number;
  className?: string;
}

export const ChipInfo = ({ icon: Icon, value, className }: ChipInfoProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full bg-chip-bg px-4 py-2 text-sm font-medium text-foreground",
        className
      )}
    >
      <Icon className="h-4 w-4 text-wellness-green" />
      <span>{value}</span>
    </div>
  );
};
