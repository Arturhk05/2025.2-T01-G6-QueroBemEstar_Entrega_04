import { Home, Trophy, BookOpen, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { SidebarItem } from "@/components/molecules/SidebarItem";
import { IconButtonRound } from "@/components/atoms/IconButtonRound";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const menuItems = [
  { icon: Home, label: "Home", to: "/" },
  { icon: Trophy, label: "Competições", to: "/competicoes" },
  { icon: BookOpen, label: "Receitas", to: "/receitas" },
  { icon: Settings, label: "Configurações", to: "/configuracoes" },
];

export const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 80 : 256 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed left-0 top-16 bottom-0 z-40 border-r bg-card shadow-sm",
        "flex flex-col"
      )}
    >
      <div className="flex items-center justify-end p-4">
        <IconButtonRound
          icon={collapsed ? ChevronRight : ChevronLeft}
          onClick={onToggle}
          size="sm"
          className="bg-background hover:bg-accent"
          aria-label={collapsed ? "Expandir sidebar" : "Recolher sidebar"}
        />
      </div>

      <nav className="flex-1 space-y-2 px-3">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.to}
            icon={item.icon}
            label={item.label}
            to={item.to}
            collapsed={collapsed}
          />
        ))}
      </nav>
    </motion.aside>
  );
};
