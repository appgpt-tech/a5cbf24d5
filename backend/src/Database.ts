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
    let data: any = {"Users":[{"userId":"userId 1","email":"email 1","name":"name 1","id":14},{"userId":"userId 2","email":"email 2","name":"name 2","id":22},{"userId":"userId 3","email":"email 3","name":"name 3","id":40},{"userId":"userId 4","email":"email 4","name":"name 4","id":61},{"userId":"userId 5","email":"email 5","name":"name 5","id":46}],"Cards":[{"cardId":"cardId 1","setid":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageurl":"imageurl 1","id":58},{"cardId":"cardId 2","setid":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageurl":"imageurl 2","id":30},{"cardId":"cardId 3","setid":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageurl":"imageurl 3","id":81},{"cardId":"cardId 4","setid":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageurl":"imageurl 4","id":21},{"cardId":"cardId 5","setid":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageurl":"imageurl 5","id":13}],"Sets":[{"setId":"setId 1","setname":"setname 1","releasedate":"2024-09-30T00:37:12.820Z","totalcards":1,"id":17},{"setId":"setId 2","setname":"setname 2","releasedate":"2023-02-28T03:38:51.164Z","totalcards":2,"id":63},{"setId":"setId 3","setname":"setname 3","releasedate":"2024-01-03T10:41:10.195Z","totalcards":3,"id":36},{"setId":"setId 4","setname":"setname 4","releasedate":"2024-09-06T19:29:23.810Z","totalcards":4,"id":77},{"setId":"setId 5","setname":"setname 5","releasedate":"2023-04-04T18:43:21.023Z","totalcards":5,"id":57}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2024-08-16T02:32:03.684Z","id":66},{"userId":2,"cardId":2,"recordedDate":"2025-01-10T07:16:31.434Z","id":11},{"userId":3,"cardId":3,"recordedDate":"2023-08-19T11:26:33.525Z","id":80},{"userId":4,"cardId":4,"recordedDate":"2024-08-11T00:28:13.866Z","id":12},{"userId":5,"cardId":5,"recordedDate":"2024-06-09T23:46:10.384Z","id":62}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2024-06-08T17:39:10.700Z","id":72},{"userId":2,"cardId":2,"insertedDate":"2023-08-23T00:31:26.735Z","id":35},{"userId":3,"cardId":3,"insertedDate":"2025-02-07T10:19:09.237Z","id":13},{"userId":4,"cardId":4,"insertedDate":"2023-12-23T04:31:35.986Z","id":43},{"userId":5,"cardId":5,"insertedDate":"2024-09-06T21:28:03.158Z","id":7}]};
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

