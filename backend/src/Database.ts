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
    let data: any = {"Users":[{"userName":"userName 1","email":"email 1","id":91},{"userName":"userName 2","email":"email 2","id":89},{"userName":"userName 3","email":"email 3","id":29},{"userName":"userName 4","email":"email 4","id":58},{"userName":"userName 5","email":"email 5","id":55}],"Cards":[{"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","setId":1,"id":57},{"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","setId":2,"id":71},{"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","setId":3,"id":29},{"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","setId":4,"id":13},{"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","setId":5,"id":93}],"Sets":[{"setName":"setName 1","releaseDate":"2024-04-16T16:38:03.266Z","totalCards":1,"id":0},{"setName":"setName 2","releaseDate":"2025-01-17T13:05:29.381Z","totalCards":2,"id":53},{"setName":"setName 3","releaseDate":"2024-10-01T16:09:14.188Z","totalCards":3,"id":58},{"setName":"setName 4","releaseDate":"2025-02-07T00:37:42.207Z","totalCards":4,"id":33},{"setName":"setName 5","releaseDate":"2025-01-16T07:44:32.080Z","totalCards":5,"id":93}],"Inventory":[{"userId":1,"cardId":1,"dateAdded":"2023-12-06T02:06:49.035Z","id":51},{"userId":2,"cardId":2,"dateAdded":"2024-11-05T02:12:34.933Z","id":94},{"userId":3,"cardId":3,"dateAdded":"2024-02-24T14:21:19.950Z","id":19},{"userId":4,"cardId":4,"dateAdded":"2023-08-09T13:43:20.617Z","id":86},{"userId":5,"cardId":5,"dateAdded":"2023-05-06T01:21:42.198Z","id":12}],"Wishlist":[{"userId":1,"cardId":1,"dateInserted":"2024-11-13T06:27:22.164Z","id":15},{"userId":2,"cardId":2,"dateInserted":"2023-10-26T06:18:49.551Z","id":59},{"userId":3,"cardId":3,"dateInserted":"2024-06-01T10:22:09.710Z","id":65},{"userId":4,"cardId":4,"dateInserted":"2024-12-06T13:34:24.226Z","id":67},{"userId":5,"cardId":5,"dateInserted":"2023-10-02T08:28:46.855Z","id":68}]};
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

