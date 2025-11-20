import { IController } from "@/shared/protocols/controller"
import { HttpResponse } from "@/shared/protocols/http"
import { IGetAllRecipes } from "../../application/ports/IGetAllRecipes"
import { ok } from "@/shared/helpers/HttpHelpers"
import {
  SanitizationHelpers,
  SanitizedRecipe,
} from "@/shared/helpers/SanitizationHelpers"

export class GetAllRecipesController
  implements IController<null, SanitizedRecipe[]>
{
  constructor(private readonly getAllRecipes: IGetAllRecipes) {}

  async handle(): Promise<HttpResponse<SanitizedRecipe[] | Error>> {
    const recipes = await this.getAllRecipes.execute()
    const sanitizedRecipes = SanitizationHelpers.sanitizeRecipes(recipes)
    return ok(sanitizedRecipes)
  }
}
