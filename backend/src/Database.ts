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
    let data: any = {"Users":[{"userId":1,"email":"email 1","name":"name 1","id":15},{"userId":2,"email":"email 2","name":"name 2","id":96},{"userId":3,"email":"email 3","name":"name 3","id":13},{"userId":4,"email":"email 4","name":"name 4","id":88},{"userId":5,"email":"email 5","name":"name 5","id":71}],"Cards":[{"cardId":1,"setId":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","id":78},{"cardId":2,"setId":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","id":24},{"cardId":3,"setId":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","id":61},{"cardId":4,"setId":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","id":40},{"cardId":5,"setId":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","id":40}],"Sets":[{"setId":1,"setName":"setName 1","releaseDate":"2024-10-02T20:38:17.891Z","totalCards":1,"id":22},{"setId":2,"setName":"setName 2","releaseDate":"2024-02-05T16:22:45.999Z","totalCards":2,"id":92},{"setId":3,"setName":"setName 3","releaseDate":"2023-05-23T20:32:38.654Z","totalCards":3,"id":76},{"setId":4,"setName":"setName 4","releaseDate":"2024-11-29T10:19:02.415Z","totalCards":4,"id":3},{"setId":5,"setName":"setName 5","releaseDate":"2023-09-20T21:20:29.894Z","totalCards":5,"id":54}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2024-11-11T02:21:16.894Z","id":27},{"userId":2,"cardId":2,"recordedDate":"2023-02-24T08:25:04.219Z","id":25},{"userId":3,"cardId":3,"recordedDate":"2023-10-23T09:05:04.022Z","id":19},{"userId":4,"cardId":4,"recordedDate":"2024-11-04T20:55:30.623Z","id":27},{"userId":5,"cardId":5,"recordedDate":"2024-07-28T18:23:02.859Z","id":11}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2023-06-09T05:12:52.666Z","id":72},{"userId":2,"cardId":2,"insertedDate":"2024-05-05T16:24:49.913Z","id":9},{"userId":3,"cardId":3,"insertedDate":"2025-01-06T06:13:03.043Z","id":55},{"userId":4,"cardId":4,"insertedDate":"2024-11-12T08:01:47.049Z","id":47},{"userId":5,"cardId":5,"insertedDate":"2023-03-20T17:41:46.975Z","id":48}]};
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

