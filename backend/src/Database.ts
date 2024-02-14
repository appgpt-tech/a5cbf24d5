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
    let data: any = {"Users":[{"userName":"userName 1","email":"email 1","id":54},{"userName":"userName 2","email":"email 2","id":57},{"userName":"userName 3","email":"email 3","id":37},{"userName":"userName 4","email":"email 4","id":5},{"userName":"userName 5","email":"email 5","id":15}],"Cards":[{"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","set":1,"id":42},{"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","set":2,"id":21},{"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","set":3,"id":85},{"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","set":4,"id":75},{"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","set":5,"id":37}],"Sets":[{"setName":"setName 1","releaseDate":"2024-10-23T11:34:05.206Z","totalCards":1,"id":23},{"setName":"setName 2","releaseDate":"2024-04-26T00:19:46.684Z","totalCards":2,"id":87},{"setName":"setName 3","releaseDate":"2024-11-16T19:24:50.955Z","totalCards":3,"id":12},{"setName":"setName 4","releaseDate":"2023-06-05T02:36:06.076Z","totalCards":4,"id":43},{"setName":"setName 5","releaseDate":"2024-05-11T01:58:21.008Z","totalCards":5,"id":95}],"Inventory":[{"user":1,"card":1,"dateAdded":"2024-09-14T23:42:27.782Z","id":58},{"user":2,"card":2,"dateAdded":"2023-07-13T10:40:17.935Z","id":74},{"user":3,"card":3,"dateAdded":"2023-05-01T03:25:41.299Z","id":62},{"user":4,"card":4,"dateAdded":"2024-08-30T18:58:32.833Z","id":19},{"user":5,"card":5,"dateAdded":"2024-12-28T05:23:15.106Z","id":50}],"Wishlist":[{"user":1,"card":1,"dateInserted":"2024-10-11T04:24:34.102Z","id":62},{"user":2,"card":2,"dateInserted":"2024-07-06T14:53:26.759Z","id":75},{"user":3,"card":3,"dateInserted":"2023-05-19T13:15:12.975Z","id":90},{"user":4,"card":4,"dateInserted":"2024-01-26T09:44:12.637Z","id":78},{"user":5,"card":5,"dateInserted":"2023-08-12T14:17:39.249Z","id":88}]};
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

