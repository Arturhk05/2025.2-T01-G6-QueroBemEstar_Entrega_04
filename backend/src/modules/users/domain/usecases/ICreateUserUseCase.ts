export interface ICreateUserUseCase {
  execute(input: CreateUserInput): Promise<CreateUserOutput>
}

export interface CreateUserInput {
  name: string
  email: string
  password: string
}

export type CreateUserOutput = boolean
