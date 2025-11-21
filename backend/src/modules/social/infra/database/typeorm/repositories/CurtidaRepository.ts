import { Repository } from "typeorm"
import { ICurtirReceitaRepository } from "@/modules/social/application/repositories/ICurtirReceitaRepository"
import { TypeOrmConnection } from "@/main/database/TypeOrmConnection"
import { Curtida } from "@/modules/social/domain/entities/Curtida"
import { CurtidaModel } from "../models/CurtidaModel"

export class CurtidaRepository implements ICurtirReceitaRepository {
  private ormRepository: Repository<CurtidaModel>

  constructor() {
    this.ormRepository = TypeOrmConnection.getInstance()
      .getDataSource()
      .getRepository(CurtidaModel)
  }

  async curtir(curtida: Curtida): Promise<boolean> {
    console.log("CurtidaRepository - curtir:", curtida)
    const result = await this.ormRepository.save({
      autorId: { id: curtida.autorId },
      receitaId: { id: curtida.receitaId },
      dataCurtida: curtida.dataCurtida,
    })
    return result !== null
  }
}
