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
    let data: any = {"Users":[{"userId":1,"email":"email 1","name":"name 1","id":39},{"userId":2,"email":"email 2","name":"name 2","id":33},{"userId":3,"email":"email 3","name":"name 3","id":25},{"userId":4,"email":"email 4","name":"name 4","id":57},{"userId":5,"email":"email 5","name":"name 5","id":76}],"Cards":[{"cardId":1,"setId":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","id":41},{"cardId":2,"setId":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","id":46},{"cardId":3,"setId":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","id":56},{"cardId":4,"setId":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","id":84},{"cardId":5,"setId":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","id":91}],"Sets":[{"setId":1,"setName":"setName 1","releaseDate":"2023-08-17T17:19:00.092Z","totalCards":1,"id":54},{"setId":2,"setName":"setName 2","releaseDate":"2023-11-30T23:39:26.080Z","totalCards":2,"id":66},{"setId":3,"setName":"setName 3","releaseDate":"2024-01-29T17:27:30.220Z","totalCards":3,"id":32},{"setId":4,"setName":"setName 4","releaseDate":"2023-12-26T13:27:08.234Z","totalCards":4,"id":61},{"setId":5,"setName":"setName 5","releaseDate":"2024-08-17T07:31:19.920Z","totalCards":5,"id":9}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2023-05-11T16:28:51.112Z","id":98},{"userId":2,"cardId":2,"recordedDate":"2024-01-04T03:39:59.359Z","id":10},{"userId":3,"cardId":3,"recordedDate":"2024-01-09T08:25:36.127Z","id":100},{"userId":4,"cardId":4,"recordedDate":"2024-06-04T22:59:18.433Z","id":13},{"userId":5,"cardId":5,"recordedDate":"2024-02-12T05:16:10.881Z","id":37}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2023-11-28T09:56:36.301Z","id":36},{"userId":2,"cardId":2,"insertedDate":"2025-01-01T18:03:07.632Z","id":89},{"userId":3,"cardId":3,"insertedDate":"2024-04-28T16:53:46.247Z","id":58},{"userId":4,"cardId":4,"insertedDate":"2025-01-30T02:54:02.868Z","id":88},{"userId":5,"cardId":5,"insertedDate":"2023-09-22T02:37:18.767Z","id":22}]};
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

