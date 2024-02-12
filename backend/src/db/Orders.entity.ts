//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Orders")
export class OrdersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text",{nullable: true})
orderNumber: string;

@Column("integer",{nullable: true})
customerId: number;

@Column("real",{nullable: true})
totalAmount: number;

@Column("real",{nullable: true})
vat: number;

@Column("real",{nullable: true})
totalAmountWithVat: number;

@Column("real",{nullable: true})
shippingCost: number;

@Column("text",{nullable: true})
shippingAddress: string;

@Column("text",{nullable: true})
orderAddress: string;

@Column("text",{nullable: true})
orderEmail: string;

@Column("date",{nullable: true})
orderDate: Date;

@Column("text",{nullable: true})
orderStatus: string;

@Column("text",{nullable: true})
trackingNo: string;


}
