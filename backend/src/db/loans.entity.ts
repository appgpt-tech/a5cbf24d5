// Source code generated by AppGPT (www.appgpt.tech)

 //to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("loans")
export class loansEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer",{nullable: true})
member: number;

@Column("date",{nullable: true})
loanDate: Date;

@Column("date",{nullable: true})
dueDate: Date;

@Column("integer",{nullable: true})
bookID: number;


}