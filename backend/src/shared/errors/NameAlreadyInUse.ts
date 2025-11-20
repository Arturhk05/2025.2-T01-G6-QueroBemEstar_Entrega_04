export class NameAlreadyInUse extends Error {
  constructor() {
    super(`The name is already in use.`)
    this.name = "NameAlreadyInUse"
  }
}
