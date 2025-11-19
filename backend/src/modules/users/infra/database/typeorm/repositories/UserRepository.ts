import { ICreateUserRepository } from "@/modules/users/application/protocols/ICreateUserRepository"
import { Repository } from "typeorm"
import { UserModel } from "../models/UserModel"
import { TypeOrmConnection } from "@/main/database/TypeOrmConnection"

export class UserRepository implements ICreateUserRepository {
  private ormRepository: Repository<UserModel>

  constructor() {
    this.ormRepository = TypeOrmConnection.getInstance()
      .getDataSource()
      .getRepository(UserModel)
  }

  async create(userData: {
    name: string
    email: string
    password: string
  }): Promise<boolean> {
    const user = this.ormRepository.create(userData)
    const result = await this.ormRepository.save(user)

    return result.id !== null
  }
}
