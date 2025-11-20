import {
  CreateUserOutput,
  CreateUserInput,
  ICreateUser,
} from "../../application/ports/ICreateUser"
import { ICreateUserRepository } from "../repositories/ICreateUserRepository"
import { User } from "../../domain/entities/user"

export class CreateUser implements ICreateUser {
  constructor(private readonly userRepository: ICreateUserRepository) {}

  async execute(input: CreateUserInput): Promise<CreateUserOutput> {
    const user = User.create({ nome: input.nome, senha: input.senha })

    const result = await this.userRepository.create(user)

    return result
  }
}
