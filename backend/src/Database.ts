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
    let data: any = {"Users":[{"userName":"userName 1","email":"email 1","id":29},{"userName":"userName 2","email":"email 2","id":100},{"userName":"userName 3","email":"email 3","id":0},{"userName":"userName 4","email":"email 4","id":28},{"userName":"userName 5","email":"email 5","id":67}],"Cards":[{"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","set":1,"id":65},{"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","set":2,"id":74},{"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","set":3,"id":1},{"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","set":4,"id":11},{"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","set":5,"id":14}],"Sets":[{"setName":"setName 1","releaseDate":"2024-04-06T00:00:19.605Z","totalCards":1,"id":34},{"setName":"setName 2","releaseDate":"2023-02-14T10:46:29.691Z","totalCards":2,"id":28},{"setName":"setName 3","releaseDate":"2023-12-15T20:33:52.485Z","totalCards":3,"id":11},{"setName":"setName 4","releaseDate":"2024-11-24T06:32:25.776Z","totalCards":4,"id":49},{"setName":"setName 5","releaseDate":"2023-07-21T06:49:03.336Z","totalCards":5,"id":90}],"Inventory":[{"user":1,"card":1,"dateAdded":"2023-11-26T02:55:01.243Z","id":37},{"user":2,"card":2,"dateAdded":"2025-01-05T02:37:55.261Z","id":44},{"user":3,"card":3,"dateAdded":"2024-10-09T16:44:10.476Z","id":23},{"user":4,"card":4,"dateAdded":"2023-11-29T12:07:01.718Z","id":51},{"user":5,"card":5,"dateAdded":"2024-09-05T06:16:35.042Z","id":41}],"Wishlist":[{"user":1,"card":1,"dateInserted":"2024-08-01T09:17:22.253Z","id":54},{"user":2,"card":2,"dateInserted":"2024-08-07T08:02:29.171Z","id":6},{"user":3,"card":3,"dateInserted":"2024-12-23T22:25:26.737Z","id":35},{"user":4,"card":4,"dateInserted":"2023-04-28T03:40:38.382Z","id":54},{"user":5,"card":5,"dateInserted":"2023-04-16T10:35:30.632Z","id":20}]};
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

