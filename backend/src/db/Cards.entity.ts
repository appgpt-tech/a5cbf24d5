//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Cards")
export class CardsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text",{nullable: true})
cardName: string;

@Column("text",{nullable: true})
serial: string;

@Column("text",{nullable: true})
type: string;

@Column("text",{nullable: true})
rarity: string;

@Column("text",{nullable: true})
condition: string;

@Column("text",{nullable: true})
imageUrl: string;

@Column("integer",{nullable: true})
set: number;


}
