import { User } from "../../domain/entities/user"
import {
  CreateUserOutput,
  CreateUserInput,
  ICreateUser,
} from "../../application/ports/ICreateUser"
import { ICreateUserRepository } from "../repositories/ICreateUserRepository"

export class CreateUser implements ICreateUser {
  constructor(private readonly userRepository: ICreateUserRepository) {}

  async execute(input: CreateUserInput): Promise<CreateUserOutput> {
    const user = User.create({
      name: input.name,
      password: input.password,
    })

    const result = await this.userRepository.create(user)

    return result
  }
}
