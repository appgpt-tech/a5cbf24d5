//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("ShoppingCart")
export class ShoppingCartEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer",{nullable: true})
customerId: number;

@Column("integer",{nullable: true})
productId: number;

@Column("real",{nullable: true})
price: number;

@Column("integer",{nullable: true})
quantity: number;


}
