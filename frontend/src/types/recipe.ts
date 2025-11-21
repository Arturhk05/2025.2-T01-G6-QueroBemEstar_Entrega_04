export type MealType = "Café da Manhã" | "Almoço" | "Jantar" | "Lanche";

export interface Recipe {
  id: string;
  authorName: string;
  authorAvatarUrl: string;
  mealType: MealType;
  createdAtRelative: string;
  imageUrl: string;
  title: string;
  description: string;
  slug: string;
  likes: number;
  comments: number;
  saves: number;
}
