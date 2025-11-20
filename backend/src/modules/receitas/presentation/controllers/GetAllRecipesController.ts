import { IController } from "@/shared/protocols/controller"
import { Recipe } from "../../domain/entities/recipe"
import { HttpResponse } from "@/shared/protocols/http"
import { IGetAllRecipes } from "../../application/ports/IGetAllRecipes"
import { ok } from "@/shared/helpers/HttpHelpers"

export class GetAllRecipesController implements IController<null, Recipe[]> {
  constructor(private readonly getAllRecipes: IGetAllRecipes) {}

  async handle(): Promise<HttpResponse<Recipe[] | Error>> {
    const recipes = await this.getAllRecipes.execute()
    return ok(recipes)
  }
}
