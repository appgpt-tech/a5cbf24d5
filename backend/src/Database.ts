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
    let data: any = {"Users":[{"userId":1,"email":"email 1","name":"name 1","id":46},{"userId":2,"email":"email 2","name":"name 2","id":70},{"userId":3,"email":"email 3","name":"name 3","id":79},{"userId":4,"email":"email 4","name":"name 4","id":33},{"userId":5,"email":"email 5","name":"name 5","id":0}],"Cards":[{"cardId":1,"setid":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageurl":"imageurl 1","id":96},{"cardId":2,"setid":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageurl":"imageurl 2","id":47},{"cardId":3,"setid":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageurl":"imageurl 3","id":89},{"cardId":4,"setid":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageurl":"imageurl 4","id":71},{"cardId":5,"setid":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageurl":"imageurl 5","id":40}],"Sets":[{"setId":1,"setName":"setName 1","releaseDate":"2023-11-16T14:53:17.509Z","totalCards":1,"id":1},{"setId":2,"setName":"setName 2","releaseDate":"2023-04-18T02:22:34.036Z","totalCards":2,"id":100},{"setId":3,"setName":"setName 3","releaseDate":"2023-09-07T01:32:06.457Z","totalCards":3,"id":55},{"setId":4,"setName":"setName 4","releaseDate":"2023-04-26T22:41:58.410Z","totalCards":4,"id":83},{"setId":5,"setName":"setName 5","releaseDate":"2023-06-16T19:18:10.616Z","totalCards":5,"id":11}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2024-01-21T05:45:13.638Z","id":40},{"userId":2,"cardId":2,"recordedDate":"2023-06-08T00:37:20.972Z","id":69},{"userId":3,"cardId":3,"recordedDate":"2023-05-08T06:56:24.074Z","id":100},{"userId":4,"cardId":4,"recordedDate":"2024-12-25T06:59:00.709Z","id":12},{"userId":5,"cardId":5,"recordedDate":"2023-07-16T09:45:29.767Z","id":12}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2023-12-20T16:17:53.183Z","id":59},{"userId":2,"cardId":2,"insertedDate":"2025-01-04T23:49:28.673Z","id":87},{"userId":3,"cardId":3,"insertedDate":"2023-06-10T12:09:48.442Z","id":53},{"userId":4,"cardId":4,"insertedDate":"2023-10-16T06:04:34.258Z","id":83},{"userId":5,"cardId":5,"insertedDate":"2024-04-17T21:32:53.613Z","id":13}]};
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

