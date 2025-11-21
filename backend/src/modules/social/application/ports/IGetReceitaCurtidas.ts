import { Curtida } from "../../domain/entities/Curtida";

export interface IGetReceitaCurtidas {
  execute(receitaId: number): Promise<Curtida[]>;
}
