import {
  CreateUserOutput,
  CreateUserInput,
  ICreateUser,
} from "../../application/ports/ICreateUser"
import { ICreateUserRepository } from "../repositories/ICreateUserRepository"
import { UserBuilder } from "../../domain/patterns/UserBuilder"

export class CreateUser implements ICreateUser {
  constructor(private readonly userRepository: ICreateUserRepository) {}

  async execute(input: CreateUserInput): Promise<CreateUserOutput> {
    const user = new UserBuilder()
      .comNome(input.nome)
      .comSenha(input.senha)
      .build()

    const result = await this.userRepository.create(user)

    return result
  }
}
