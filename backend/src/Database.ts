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
    let data: any = {"Users":[{"userId":1,"email":"email 1","name":"name 1","id":1},{"userId":2,"email":"email 2","name":"name 2","id":97},{"userId":3,"email":"email 3","name":"name 3","id":49},{"userId":4,"email":"email 4","name":"name 4","id":39},{"userId":5,"email":"email 5","name":"name 5","id":68}],"Cards":[{"cardId":1,"setId":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","id":42},{"cardId":2,"setId":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","id":84},{"cardId":3,"setId":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","id":73},{"cardId":4,"setId":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","id":65},{"cardId":5,"setId":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","id":7}],"Sets":[{"setId":1,"setName":"setName 1","releaseDate":"2024-08-26T18:29:29.980Z","totalCards":1,"id":81},{"setId":2,"setName":"setName 2","releaseDate":"2023-06-29T16:15:36.290Z","totalCards":2,"id":91},{"setId":3,"setName":"setName 3","releaseDate":"2024-12-02T19:24:03.777Z","totalCards":3,"id":90},{"setId":4,"setName":"setName 4","releaseDate":"2024-04-18T22:52:12.133Z","totalCards":4,"id":100},{"setId":5,"setName":"setName 5","releaseDate":"2024-06-26T18:53:19.169Z","totalCards":5,"id":80}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2023-11-03T18:57:38.084Z","id":64},{"userId":2,"cardId":2,"recordedDate":"2023-07-25T19:55:30.569Z","id":62},{"userId":3,"cardId":3,"recordedDate":"2023-06-13T09:46:31.447Z","id":61},{"userId":4,"cardId":4,"recordedDate":"2024-06-01T01:59:47.417Z","id":28},{"userId":5,"cardId":5,"recordedDate":"2023-12-18T07:51:08.973Z","id":20}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2023-12-26T23:40:53.237Z","id":48},{"userId":2,"cardId":2,"insertedDate":"2024-12-23T06:05:51.548Z","id":1},{"userId":3,"cardId":3,"insertedDate":"2024-02-04T18:50:52.344Z","id":62},{"userId":4,"cardId":4,"insertedDate":"2024-10-05T22:06:31.037Z","id":49},{"userId":5,"cardId":5,"insertedDate":"2023-08-14T09:17:15.385Z","id":32}]};
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

