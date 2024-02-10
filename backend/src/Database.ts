//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { UsersEntity } from "./db/Users.entity";
import { CardsEntity } from "./db/Cards.entity";
import { SetsEntity } from "./db/Sets.entity";
import { InventoryEntity } from "./db/Inventory.entity";
import { WishlistEntity } from "./db/Wishlist.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, UsersEntity, CardsEntity, SetsEntity, InventoryEntity, WishlistEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Users":[{"userId":"1","email":"test@gmail.com","name":"Test User"},{"userId":"2","email":"johndoe@gmail.com","name":"John Doe"},{"userId":"3","email":"maryjane@gmail.com","name":"Mary Jane"}],"Cards":[{"cardId":"1","setid":"1","name":"Pikachu","serial":"123","type":"electric","rarity":"common","condition":"new","imageurl":"https://example.com/pikachu.png"},{"cardId":"2","setid":"1","name":"Bulbasaur","serial":"124","type":"grass","rarity":"common","condition":"new","imageurl":"https://example.com/bulbasaur.png"},{"cardId":"3","setid":"2","name":"Charizard","serial":"125","type":"fire","rarity":"rare","condition":"mint","imageurl":"https://example.com/charizard.png"}],"Sets":[{"setId":"1","setName":"Base set","releaseDate":"1999-01-09","totalCards":"102"},{"setId":"2","setName":"Fossil","releaseDate":"1999-10-10","totalCards":"62"},{"setId":"3","setName":"Jungle","releaseDate":"1999-06-16","totalCards":"64"}],"Inventory":[{"userId":"1","cardId":"1","recordedDate":"2022-03-01"},{"userId":"1","cardId":"2","recordedDate":"2022-03-02"},{"userId":"2","cardId":"3","recordedDate":"2022-03-03"}],"Wishlist":[{"userId":"1","cardId":"3","insertedDate":"2022-03-01"},{"userId":"2","cardId":"1","insertedDate":"2022-03-02"},{"userId":"2","cardId":"2","insertedDate":"2022-03-03"}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("UsersEntity", data.Users);
await this.SeedResource("CardsEntity", data.Cards);
await this.SeedResource("SetsEntity", data.Sets);
await this.SeedResource("InventoryEntity", data.Inventory);
await this.SeedResource("WishlistEntity", data.Wishlist); 
      await this.SeedResource("SettingsEntity", {
        settingname: "isSeeded",
        settingvalue: "true",
      });
    }else{
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository("SettingsEntity");
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: "isSeeded",
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table '+resourceName);
    await repo.upsert(resourceData, ["id"]);
  }
}

