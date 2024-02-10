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
    let data: any = {"Users":[{"userId":"userId 1","email":"email 1","name":"name 1","id":44},{"userId":"userId 2","email":"email 2","name":"name 2","id":38},{"userId":"userId 3","email":"email 3","name":"name 3","id":24},{"userId":"userId 4","email":"email 4","name":"name 4","id":76},{"userId":"userId 5","email":"email 5","name":"name 5","id":87}],"Cards":[{"cardId":"cardId 1","setid":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageurl":"imageurl 1","id":0},{"cardId":"cardId 2","setid":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageurl":"imageurl 2","id":19},{"cardId":"cardId 3","setid":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageurl":"imageurl 3","id":37},{"cardId":"cardId 4","setid":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageurl":"imageurl 4","id":84},{"cardId":"cardId 5","setid":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageurl":"imageurl 5","id":27}],"Sets":[{"setId":"setId 1","setName":"setName 1","releaseDate":"2023-09-13T18:27:47.678Z","totalCards":1,"id":25},{"setId":"setId 2","setName":"setName 2","releaseDate":"2024-06-10T10:05:37.100Z","totalCards":2,"id":22},{"setId":"setId 3","setName":"setName 3","releaseDate":"2023-04-25T17:25:36.063Z","totalCards":3,"id":54},{"setId":"setId 4","setName":"setName 4","releaseDate":"2025-01-01T14:06:18.980Z","totalCards":4,"id":12},{"setId":"setId 5","setName":"setName 5","releaseDate":"2023-09-26T12:08:34.197Z","totalCards":5,"id":29}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2023-12-15T22:58:56.861Z","id":1},{"userId":2,"cardId":2,"recordedDate":"2023-02-23T08:54:21.140Z","id":88},{"userId":3,"cardId":3,"recordedDate":"2023-08-02T20:53:17.209Z","id":93},{"userId":4,"cardId":4,"recordedDate":"2023-11-09T06:57:29.983Z","id":17},{"userId":5,"cardId":5,"recordedDate":"2024-12-20T07:27:32.220Z","id":21}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2023-10-24T00:03:08.699Z","id":70},{"userId":2,"cardId":2,"insertedDate":"2023-05-22T05:10:19.502Z","id":22},{"userId":3,"cardId":3,"insertedDate":"2023-05-28T11:51:24.200Z","id":65},{"userId":4,"cardId":4,"insertedDate":"2024-05-16T06:55:35.741Z","id":18},{"userId":5,"cardId":5,"insertedDate":"2023-10-05T15:17:27.512Z","id":16}]};
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

