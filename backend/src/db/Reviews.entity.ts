//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Reviews")
export class ReviewsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer",{nullable: true})
product: number;

@Column("integer",{nullable: true})
customer: number;

@Column("integer",{nullable: true})
vendor: number;

@Column("integer",{nullable: true})
rating: number;

@Column("text",{nullable: true})
reviewDetails: string;

@Column("date",{nullable: true})
date: Date;


}
