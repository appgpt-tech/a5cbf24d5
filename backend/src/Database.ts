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
    let data: any = {"Users":[{"userName":"userName 1","email":"email 1","id":52},{"userName":"userName 2","email":"email 2","id":35},{"userName":"userName 3","email":"email 3","id":55},{"userName":"userName 4","email":"email 4","id":7},{"userName":"userName 5","email":"email 5","id":76}],"Cards":[{"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","set":1,"id":55},{"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","set":2,"id":41},{"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","set":3,"id":74},{"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","set":4,"id":95},{"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","set":5,"id":25}],"Sets":[{"setName":"setName 1","releaseDate":"2024-09-02T21:38:45.771Z","totalCards":1,"id":87},{"setName":"setName 2","releaseDate":"2025-01-17T05:50:40.465Z","totalCards":2,"id":9},{"setName":"setName 3","releaseDate":"2023-04-20T16:22:47.251Z","totalCards":3,"id":79},{"setName":"setName 4","releaseDate":"2024-09-10T03:45:36.232Z","totalCards":4,"id":51},{"setName":"setName 5","releaseDate":"2024-05-04T07:53:43.406Z","totalCards":5,"id":46}],"Inventory":[{"user":1,"card":1,"dateAdded":"2024-06-22T17:26:34.290Z","id":18},{"user":2,"card":2,"dateAdded":"2023-10-30T21:27:24.821Z","id":75},{"user":3,"card":3,"dateAdded":"2024-01-13T21:30:38.734Z","id":92},{"user":4,"card":4,"dateAdded":"2024-12-13T18:32:03.158Z","id":53},{"user":5,"card":5,"dateAdded":"2023-03-18T09:12:26.315Z","id":65}],"Wishlist":[{"user":1,"card":1,"dateInserted":"2023-05-10T03:50:13.041Z","id":42},{"user":2,"card":2,"dateInserted":"2023-09-03T05:31:20.733Z","id":83},{"user":3,"card":3,"dateInserted":"2023-06-04T16:53:23.139Z","id":84},{"user":4,"card":4,"dateInserted":"2024-01-20T22:46:38.385Z","id":71},{"user":5,"card":5,"dateInserted":"2023-11-26T07:14:28.035Z","id":96}]};
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

