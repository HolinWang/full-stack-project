// @ts-ignore
import { Common } from "src/shared/entites/common.entity";
import { Column, Entity,ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class User extends Common{
  
  @Column("text")
  name: string

  @Column({length:100})
  email: string


}
