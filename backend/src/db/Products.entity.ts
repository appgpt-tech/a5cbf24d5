//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Products")
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text",{nullable: true})
productName: string;

@Column("integer",{nullable: true})
vendor: number;

@Column("real",{nullable: true})
price: number;

@Column("real",{nullable: true})
weight: number;

@Column("text",{nullable: true})
description: string;

@Column("text",{nullable: true})
thumbnail: string;

@Column("text",{nullable: true})
image: string;

@Column("integer",{nullable: true})
category: number;

@Column("date",{nullable: true})
creationDate: Date;

@Column("integer",{nullable: true})
stock: number;


}
