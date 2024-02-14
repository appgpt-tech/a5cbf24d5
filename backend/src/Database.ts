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
    let data: any = {"Users":[{"userName":"userName 1","email":"email 1","id":60},{"userName":"userName 2","email":"email 2","id":31},{"userName":"userName 3","email":"email 3","id":85},{"userName":"userName 4","email":"email 4","id":62},{"userName":"userName 5","email":"email 5","id":31}],"Cards":[{"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","set":1,"id":93},{"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","set":2,"id":6},{"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","set":3,"id":5},{"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","set":4,"id":11},{"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","set":5,"id":52}],"Sets":[{"setName":"setName 1","releaseDate":"2024-05-03T15:46:24.939Z","totalCards":1,"id":46},{"setName":"setName 2","releaseDate":"2023-07-03T13:10:08.086Z","totalCards":2,"id":44},{"setName":"setName 3","releaseDate":"2024-10-05T01:35:02.520Z","totalCards":3,"id":14},{"setName":"setName 4","releaseDate":"2023-12-23T18:05:55.523Z","totalCards":4,"id":31},{"setName":"setName 5","releaseDate":"2024-10-05T23:39:47.149Z","totalCards":5,"id":25}],"Inventory":[{"user":1,"card":1,"dateAdded":"2023-11-20T22:57:01.149Z","id":73},{"user":2,"card":2,"dateAdded":"2023-12-29T13:59:59.660Z","id":92},{"user":3,"card":3,"dateAdded":"2024-07-28T11:41:27.135Z","id":11},{"user":4,"card":4,"dateAdded":"2024-11-11T01:31:10.947Z","id":99},{"user":5,"card":5,"dateAdded":"2024-10-30T11:25:07.561Z","id":25}],"Wishlist":[{"user":1,"card":1,"dateInserted":"2023-08-19T00:11:18.462Z","id":28},{"user":2,"card":2,"dateInserted":"2023-06-12T13:57:15.389Z","id":0},{"user":3,"card":3,"dateInserted":"2023-03-03T19:22:56.113Z","id":1},{"user":4,"card":4,"dateInserted":"2023-09-22T22:11:44.536Z","id":61},{"user":5,"card":5,"dateInserted":"2024-10-08T21:28:53.054Z","id":7}]};
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

