export interface ICreateUser {
  execute(input: CreateUserInput): Promise<CreateUserOutput>
}

export interface CreateUserInput {
  name: string
  password: string
}

export type CreateUserOutput = boolean
