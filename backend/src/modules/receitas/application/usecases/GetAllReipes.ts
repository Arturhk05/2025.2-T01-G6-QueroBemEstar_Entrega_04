import { Recipe } from "../../domain/entities/recipe"
import { IGetAllRecipes } from "../ports/IGetAllRecipes"
import { ISearchRecipeRepository } from "../repositories/ISearchRecipeRepository"

export class GetAllRecipes implements IGetAllRecipes {
  constructor(private readonly recipeRepository: ISearchRecipeRepository) {}

  async execute(): Promise<Recipe[]> {
    const recipes = await this.recipeRepository.findAll()
    return recipes
  }
}
