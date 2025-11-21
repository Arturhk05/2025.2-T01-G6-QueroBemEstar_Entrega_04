import { Heart, MessageCircle, Bookmark } from "lucide-react";
import { IconButtonRound } from "@/components/atoms/IconButtonRound";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface RecipeActionsProps {
  likes: number;
  comments: number;
  saves: number;
  onLike?: () => void;
  onComment?: () => void;
  onSave?: () => void;
}

export const RecipeActions = ({
  likes,
  comments,
  saves,
  onLike,
  onComment,
  onSave,
}: RecipeActionsProps) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    onLike?.();
  };

  const handleSave = () => {
    setSaved(!saved);
    onSave?.();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center gap-1">
        <IconButtonRound
          icon={Heart}
          onClick={handleLike}
          className={cn(
            "bg-card hover:bg-accent",
            liked && "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
          aria-label="Curtir receita"
        />
        <span className="text-xs font-medium text-muted-foreground">{likes}</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <IconButtonRound
          icon={MessageCircle}
          onClick={onComment}
          className="bg-card hover:bg-accent"
          aria-label="Comentar receita"
        />
        <span className="text-xs font-medium text-muted-foreground">{comments}</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <IconButtonRound
          icon={Bookmark}
          onClick={handleSave}
          className={cn(
            "bg-card hover:bg-accent",
            saved && "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
          aria-label="Salvar receita"
        />
        <span className="text-xs font-medium text-muted-foreground">{saves}</span>
      </div>
    </div>
  );
};
