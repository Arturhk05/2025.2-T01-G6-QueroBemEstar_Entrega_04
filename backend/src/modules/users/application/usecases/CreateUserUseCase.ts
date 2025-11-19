import { User } from "../../domain/entities/user"
import {
  CreateUserOutput,
  CreateUserInput,
  ICreateUserUseCase,
} from "../../domain/usecases/ICreateUserUseCase"

export class CreateUserUseCase implements ICreateUserUseCase {
  async execute(input: CreateUserInput): Promise<CreateUserOutput> {
    const user = User.create({
      name: input.name,
      password: input.password,
    })

    console.log("User created:", user)

    //TODO: Implementar lógica para persistir o usuário no banco de dados

    return true
  }
}
