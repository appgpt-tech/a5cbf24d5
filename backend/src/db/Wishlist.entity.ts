//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Wishlist")
export class WishlistEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer",{nullable: true})
userName: number;

@Column("integer",{nullable: true})
cardName: number;

@Column("date",{nullable: true})
insertedDate: Date;


}
