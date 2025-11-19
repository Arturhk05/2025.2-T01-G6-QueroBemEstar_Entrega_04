import { Column, PrimaryGeneratedColumn } from "typeorm"

export class UserModel {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column()
  password: string

  @Column()
  created_at: Date

  @Column()
  updated_at: Date
}