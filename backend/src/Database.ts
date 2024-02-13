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
    let data: any = {"Users":[{"userName":"userName 1","email":"email 1","id":0},{"userName":"userName 2","email":"email 2","id":51},{"userName":"userName 3","email":"email 3","id":55},{"userName":"userName 4","email":"email 4","id":84},{"userName":"userName 5","email":"email 5","id":55}],"Cards":[{"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","set":1,"id":8},{"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","set":2,"id":74},{"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","set":3,"id":54},{"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","set":4,"id":18},{"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","set":5,"id":18}],"Sets":[{"setName":"setName 1","releaseDate":"2023-06-29T03:08:41.439Z","totalCards":1,"id":62},{"setName":"setName 2","releaseDate":"2023-09-04T18:02:20.133Z","totalCards":2,"id":31},{"setName":"setName 3","releaseDate":"2024-11-09T06:42:23.891Z","totalCards":3,"id":45},{"setName":"setName 4","releaseDate":"2023-07-09T01:24:17.844Z","totalCards":4,"id":76},{"setName":"setName 5","releaseDate":"2024-10-25T00:54:18.172Z","totalCards":5,"id":5}],"Inventory":[{"user":1,"card":1,"dateAdded":"2023-09-25T19:22:54.352Z","id":10},{"user":2,"card":2,"dateAdded":"2023-11-18T20:10:38.598Z","id":14},{"user":3,"card":3,"dateAdded":"2023-07-27T22:21:02.085Z","id":41},{"user":4,"card":4,"dateAdded":"2024-12-11T22:19:17.507Z","id":6},{"user":5,"card":5,"dateAdded":"2023-10-15T22:10:35.200Z","id":6}],"Wishlist":[{"user":1,"card":1,"dateInserted":"2023-12-08T03:41:09.539Z","id":13},{"user":2,"card":2,"dateInserted":"2024-12-20T19:34:30.582Z","id":20},{"user":3,"card":3,"dateInserted":"2024-10-10T20:21:10.103Z","id":56},{"user":4,"card":4,"dateInserted":"2023-07-20T19:38:46.424Z","id":79},{"user":5,"card":5,"dateInserted":"2024-04-08T06:14:43.673Z","id":47}]};
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

