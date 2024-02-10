//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Users")
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text",{nullable: true})
userId: string;

@Column("text",{nullable: true})
email: string;

@Column("text",{nullable: true})
name: string;


}