import { Curtida } from "../../domain/entities/Curtida"
import { IGetReceitaCurtidas } from "../ports/IGetReceitaCurtidas"
import { ISearchCurtidaRepository } from "../repositories/ISearchCurtidaRepository"

export class GetReceitaCurtidas implements IGetReceitaCurtidas {
  constructor(
    private readonly searchCurtidaRepository: ISearchCurtidaRepository,
  ) {}

  async execute(receitaId: number): Promise<Curtida[]> {
    const curtidas =
      await this.searchCurtidaRepository.findAllByReceitaId(receitaId)
    return curtidas
  }
}
