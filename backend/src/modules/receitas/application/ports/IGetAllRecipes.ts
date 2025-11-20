import { Recipe } from "../../domain/entities/recipe";

export interface IGetAllRecipes {
  execute(): Promise<Recipe[]>
}