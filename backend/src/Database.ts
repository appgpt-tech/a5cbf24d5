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
    let data: any = {"Users":[{"userName":"userName 1","email":"email 1","id":81},{"userName":"userName 2","email":"email 2","id":89},{"userName":"userName 3","email":"email 3","id":73},{"userName":"userName 4","email":"email 4","id":47},{"userName":"userName 5","email":"email 5","id":15}],"Cards":[{"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","set":1,"id":63},{"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","set":2,"id":23},{"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","set":3,"id":74},{"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","set":4,"id":54},{"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","set":5,"id":68}],"Sets":[{"setName":"setName 1","releaseDate":"2024-08-26T04:40:16.948Z","totalCards":1,"id":36},{"setName":"setName 2","releaseDate":"2023-06-21T12:34:22.071Z","totalCards":2,"id":21},{"setName":"setName 3","releaseDate":"2023-09-17T17:30:31.824Z","totalCards":3,"id":71},{"setName":"setName 4","releaseDate":"2024-04-07T07:18:43.211Z","totalCards":4,"id":39},{"setName":"setName 5","releaseDate":"2023-11-25T09:39:20.577Z","totalCards":5,"id":0}],"Inventory":[{"user":1,"card":1,"dateAdded":"2024-09-04T17:59:33.890Z","id":82},{"user":2,"card":2,"dateAdded":"2023-03-09T23:01:37.952Z","id":22},{"user":3,"card":3,"dateAdded":"2024-03-26T13:15:00.525Z","id":54},{"user":4,"card":4,"dateAdded":"2023-06-05T16:19:00.205Z","id":46},{"user":5,"card":5,"dateAdded":"2024-01-21T09:04:03.690Z","id":78}],"Wishlist":[{"user":1,"card":1,"dateInserted":"2024-03-11T08:08:27.028Z","id":23},{"user":2,"card":2,"dateInserted":"2024-11-13T04:24:45.991Z","id":24},{"user":3,"card":3,"dateInserted":"2023-03-29T22:42:13.132Z","id":4},{"user":4,"card":4,"dateInserted":"2024-06-28T04:00:07.649Z","id":84},{"user":5,"card":5,"dateInserted":"2023-07-02T07:02:23.278Z","id":2}]};
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

