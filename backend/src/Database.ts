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
    let data: any = {"Users":[{"userId":1,"email":"email 1","name":"name 1","id":28},{"userId":2,"email":"email 2","name":"name 2","id":58},{"userId":3,"email":"email 3","name":"name 3","id":67},{"userId":4,"email":"email 4","name":"name 4","id":41},{"userId":5,"email":"email 5","name":"name 5","id":39}],"Cards":[{"cardId":1,"setid":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageurl":"imageurl 1","id":19},{"cardId":2,"setid":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageurl":"imageurl 2","id":44},{"cardId":3,"setid":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageurl":"imageurl 3","id":96},{"cardId":4,"setid":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageurl":"imageurl 4","id":93},{"cardId":5,"setid":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageurl":"imageurl 5","id":23}],"Sets":[{"setId":1,"setName":"setName 1","releaseDate":"2025-01-05T11:03:01.541Z","totalCards":1,"id":68},{"setId":2,"setName":"setName 2","releaseDate":"2023-09-07T20:54:02.976Z","totalCards":2,"id":9},{"setId":3,"setName":"setName 3","releaseDate":"2024-12-05T06:58:03.042Z","totalCards":3,"id":3},{"setId":4,"setName":"setName 4","releaseDate":"2023-09-05T04:57:07.615Z","totalCards":4,"id":31},{"setId":5,"setName":"setName 5","releaseDate":"2024-04-18T14:51:45.174Z","totalCards":5,"id":21}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2024-03-02T14:00:09.478Z","id":23},{"userId":2,"cardId":2,"recordedDate":"2023-07-30T19:59:27.215Z","id":72},{"userId":3,"cardId":3,"recordedDate":"2024-07-09T06:46:06.508Z","id":64},{"userId":4,"cardId":4,"recordedDate":"2023-11-23T06:16:42.919Z","id":15},{"userId":5,"cardId":5,"recordedDate":"2024-05-28T11:53:08.157Z","id":33}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2025-01-11T11:38:39.734Z","id":51},{"userId":2,"cardId":2,"insertedDate":"2023-03-15T12:12:39.591Z","id":79},{"userId":3,"cardId":3,"insertedDate":"2023-10-28T21:04:53.114Z","id":99},{"userId":4,"cardId":4,"insertedDate":"2023-11-26T11:19:55.629Z","id":86},{"userId":5,"cardId":5,"insertedDate":"2023-06-23T07:00:35.562Z","id":52}]};
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

