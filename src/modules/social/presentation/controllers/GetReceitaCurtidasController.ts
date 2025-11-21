import { IController } from "@/shared/protocols/controller"
import { HttpRequest, HttpResponse } from "@/shared/protocols/http"
import { badRequest, ok, serverError } from "@/shared/helpers/HttpHelpers"
import { Curtida } from "../../domain/entities/Curtida"
import { InvalidParamError } from "@/shared/errors/InvalidParamError"
import { IGetReceitaCurtidas } from "../../application/ports/IGetReceitaCurtidas"

export class GetReceitaCurtidasController
  implements IController<HttpRequest<null>, Curtida[]>
{
  constructor(private readonly getReceitaCurtidas: IGetReceitaCurtidas) {}

  async handle(
    request: HttpRequest<null>,
  ): Promise<HttpResponse<Curtida[] | Error>> {
    try {
      const receitaId = Number(request.params?.receitaId)
      if (!receitaId) {
        return badRequest(new InvalidParamError("receitaId"))
      }

      const curtidas = await this.getReceitaCurtidas.execute(receitaId)

      return ok(curtidas)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
