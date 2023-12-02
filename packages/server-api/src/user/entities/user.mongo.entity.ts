// @ts-ignore
import { Column, Entity,ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectID;
  
  @Column("text")
  name: string

  @Column({length:100})
  email: string


}
