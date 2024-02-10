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
    let data: any = {"Users":[{"userId":"userId 1","email":"email 1","name":"name 1","id":6},{"userId":"userId 2","email":"email 2","name":"name 2","id":36},{"userId":"userId 3","email":"email 3","name":"name 3","id":92},{"userId":"userId 4","email":"email 4","name":"name 4","id":72},{"userId":"userId 5","email":"email 5","name":"name 5","id":34}],"Cards":[{"cardId":"cardId 1","setid":"setid 1","cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageurl":"imageurl 1","id":63},{"cardId":"cardId 2","setid":"setid 2","cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageurl":"imageurl 2","id":17},{"cardId":"cardId 3","setid":"setid 3","cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageurl":"imageurl 3","id":96},{"cardId":"cardId 4","setid":"setid 4","cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageurl":"imageurl 4","id":53},{"cardId":"cardId 5","setid":"setid 5","cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageurl":"imageurl 5","id":7}],"Sets":[{"setId":"setId 1","setname":"setname 1","releasedate":"2024-05-23T00:55:55.979Z","totalcards":1,"id":100},{"setId":"setId 2","setname":"setname 2","releasedate":"2024-07-01T21:32:55.137Z","totalcards":2,"id":67},{"setId":"setId 3","setname":"setname 3","releasedate":"2023-02-11T12:56:37.605Z","totalcards":3,"id":78},{"setId":"setId 4","setname":"setname 4","releasedate":"2024-03-23T11:06:51.141Z","totalcards":4,"id":20},{"setId":"setId 5","setname":"setname 5","releasedate":"2024-12-24T18:22:55.870Z","totalcards":5,"id":57}],"Inventory":[{"userId":"userId 1","cardId":"cardId 1","recordedDate":"2023-08-06T02:16:47.487Z","id":65},{"userId":"userId 2","cardId":"cardId 2","recordedDate":"2023-09-08T02:53:42.339Z","id":35},{"userId":"userId 3","cardId":"cardId 3","recordedDate":"2024-04-14T09:26:01.711Z","id":53},{"userId":"userId 4","cardId":"cardId 4","recordedDate":"2023-06-06T11:00:34.961Z","id":36},{"userId":"userId 5","cardId":"cardId 5","recordedDate":"2023-08-22T17:42:02.070Z","id":15}],"Wishlist":[{"userId":"userId 1","cardId":"cardId 1","insertedDate":"2024-04-07T15:55:55.418Z","id":89},{"userId":"userId 2","cardId":"cardId 2","insertedDate":"2024-05-07T21:33:25.306Z","id":48},{"userId":"userId 3","cardId":"cardId 3","insertedDate":"2023-12-15T22:27:04.140Z","id":96},{"userId":"userId 4","cardId":"cardId 4","insertedDate":"2023-09-17T04:52:30.475Z","id":98},{"userId":"userId 5","cardId":"cardId 5","insertedDate":"2024-11-21T10:15:54.747Z","id":32}]};
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

