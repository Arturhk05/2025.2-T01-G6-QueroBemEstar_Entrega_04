import { GetReceitaCurtidas } from "../../application/usecases/GetReceitaCurtidas"
import { CurtidaRepository } from "../../infra/database/typeorm/repositories/CurtidaRepository"
import { GetReceitaCurtidasController } from "../controllers/GetReceitaCurtidasController"

export const makeGetReceitaCurtidasController = () => {
  const searchCurtidaRepository = new CurtidaRepository()
  const getReceitaCurtidas = new GetReceitaCurtidas(searchCurtidaRepository)

  const controller = new GetReceitaCurtidasController(getReceitaCurtidas)
  return controller
}
