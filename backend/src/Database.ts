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
    let data: any = {"Users":[{"userId":1,"email":"email 1","name":"name 1","id":59},{"userId":2,"email":"email 2","name":"name 2","id":16},{"userId":3,"email":"email 3","name":"name 3","id":20},{"userId":4,"email":"email 4","name":"name 4","id":62},{"userId":5,"email":"email 5","name":"name 5","id":28}],"Cards":[{"cardId":1,"setid":1,"cardName":"cardName 1","serial":1,"type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","id":12},{"cardId":2,"setid":2,"cardName":"cardName 2","serial":2,"type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","id":99},{"cardId":3,"setid":3,"cardName":"cardName 3","serial":3,"type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","id":1},{"cardId":4,"setid":4,"cardName":"cardName 4","serial":4,"type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","id":39},{"cardId":5,"setid":5,"cardName":"cardName 5","serial":5,"type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","id":89}],"Sets":[{"setId":1,"setName":"setName 1","releaseDate":"2023-09-27T22:21:47.031Z","totalCards":1,"id":48},{"setId":2,"setName":"setName 2","releaseDate":"2024-02-05T17:08:53.290Z","totalCards":2,"id":36},{"setId":3,"setName":"setName 3","releaseDate":"2024-10-27T00:46:40.926Z","totalCards":3,"id":17},{"setId":4,"setName":"setName 4","releaseDate":"2023-05-07T11:34:55.687Z","totalCards":4,"id":46},{"setId":5,"setName":"setName 5","releaseDate":"2024-10-28T21:01:13.727Z","totalCards":5,"id":87}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2024-07-12T23:06:39.634Z","id":73},{"userId":2,"cardId":2,"recordedDate":"2024-06-29T19:30:18.054Z","id":92},{"userId":3,"cardId":3,"recordedDate":"2024-03-23T10:26:48.667Z","id":41},{"userId":4,"cardId":4,"recordedDate":"2023-11-07T17:56:45.606Z","id":77},{"userId":5,"cardId":5,"recordedDate":"2024-09-28T16:34:33.748Z","id":75}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2023-05-24T02:42:54.737Z","id":20},{"userId":2,"cardId":2,"insertedDate":"2024-01-03T03:10:26.590Z","id":30},{"userId":3,"cardId":3,"insertedDate":"2024-06-13T07:23:38.897Z","id":71},{"userId":4,"cardId":4,"insertedDate":"2023-04-26T14:31:14.908Z","id":50},{"userId":5,"cardId":5,"insertedDate":"2023-07-24T10:36:27.966Z","id":98}]};
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

