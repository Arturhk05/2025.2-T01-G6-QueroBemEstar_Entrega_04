import { ISearchUserRepository } from "@/modules/users/application/repositories/ISearchUserRepository"
import { CurtidaReceitaInput, ICurtirReceita } from "../ports/ICurtirReceita"
import { ICurtirReceitaRepository } from "../repositories/ICurtirReceitaRepository"
import { Curtida } from "../../domain/entities/Curtida"

export class CurtirReceita implements ICurtirReceita {
  constructor(
    private readonly curtirReceitaRepository: ICurtirReceitaRepository,
    private readonly searchUserRepository: ISearchUserRepository,
    private readonly searchRecipeRepository: ISearchUserRepository,
  ) {}

  async execute(input: CurtidaReceitaInput): Promise<boolean> {
    const { autorId, receitaId } = input

    const autor = await this.searchUserRepository.findById(autorId)
    const receita = await this.searchRecipeRepository.findById(receitaId)
    if (!autor?.id || !receita?.id) {
      throw new Error("Autor ou receita não encontrados.")
    }

    const curtida = Curtida.create({ autorId: autor.id, receitaId: receita.id })

    const result = await this.curtirReceitaRepository.curtir(curtida)
    return result
  }
}
