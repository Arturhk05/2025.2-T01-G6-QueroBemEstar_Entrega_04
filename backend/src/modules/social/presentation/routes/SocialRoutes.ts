import { adaptRoute } from "@/main/adapters/ExpressRouteAdapter"
import { Router } from "express"
import { adaptMiddleware } from "@/main/adapters/ExpressMiddlewareAdapter"
import { AuthMiddleware } from "@/shared/middleware/AuthMiddleware"
import { UserRepository } from "@/modules/users/infra/database/typeorm/repositories/UserRepository"
import { JwtAdapter } from "@/modules/auth/infra/adapters/JwtAdapter"
import { makeCurtirReceitaController } from "../factories/CurtirReceitaControllerFactory"
import { makeGetReceitaCurtidasController } from "../factories/GetReceitaCurtidasControllerFactory"

const createAuthMiddleware = (): AuthMiddleware => {
  const tokenGenerator = new JwtAdapter()
  const userRepository = new UserRepository()
  return new AuthMiddleware(userRepository, tokenGenerator)
}

export default (router: Router): void => {
  router.post(
    "/curtidas/:receitaId",
    adaptMiddleware(createAuthMiddleware()),
    adaptRoute(makeCurtirReceitaController()),
  )
  router.get(
    "/curtidas/:receitaId",
    adaptRoute(makeGetReceitaCurtidasController()),
  )
}
