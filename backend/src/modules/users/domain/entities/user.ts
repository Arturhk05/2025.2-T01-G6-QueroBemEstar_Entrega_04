export class User {
  public readonly id?: number
  public nome: string
  public senha: string

  public readonly dataCadastro: Date
  public dataAtualizacao: Date

  private constructor(props: {
    id?: number
    nome: string
    senha: string
    dataCadastro: Date
    dataAtualizacao: Date
  }) {
    this.id = props.id
    this.nome = props.nome
    this.senha = props.senha
    this.dataCadastro = props.dataCadastro
    this.dataAtualizacao = props.dataAtualizacao
  }

  public static create(props: { nome: string; senha: string }): User {
    //TODO: Adicionar validações e regras de negócio aqui

    const user = new User({
      nome: props.nome,
      senha: props.senha,
      dataCadastro: new Date(),
      dataAtualizacao: new Date(),
    })
    return user
  }
}
