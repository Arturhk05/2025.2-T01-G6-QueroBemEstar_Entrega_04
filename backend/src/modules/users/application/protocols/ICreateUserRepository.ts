export interface ICreateUserRepository {
  create(userData: {
    name: string
    email: string
    password: string
  }): Promise<boolean>
}
