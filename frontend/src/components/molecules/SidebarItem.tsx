import { LucideIcon } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  to: string;
  collapsed: boolean;
}

export const SidebarItem = ({ icon: Icon, label, to, collapsed }: SidebarItemProps) => {
  return (
    <NavLink
      to={to}
      end
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-3 text-foreground transition-all hover:bg-accent",
        collapsed && "justify-center px-2"
      )}
      activeClassName="bg-primary text-primary-foreground hover:bg-primary/90"
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      {!collapsed && <span className="font-medium">{label}</span>}
    </NavLink>
  );
};
