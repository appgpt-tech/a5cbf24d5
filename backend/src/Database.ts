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
    let data: any = {"Users":[{"email":"email 1","name":"name 1","id":49},{"email":"email 2","name":"name 2","id":49},{"email":"email 3","name":"name 3","id":16},{"email":"email 4","name":"name 4","id":27},{"email":"email 5","name":"name 5","id":42}],"Cards":[{"setname":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","id":31},{"setname":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","id":8},{"setname":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","id":32},{"setname":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","id":74},{"setname":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","id":22}],"Sets":[{"setId":1,"setname":"setname 1","releasedate":"2024-05-16T19:02:06.841Z","totalcards":1,"id":71},{"setId":2,"setname":"setname 2","releasedate":"2024-03-10T19:11:12.576Z","totalcards":2,"id":87},{"setId":3,"setname":"setname 3","releasedate":"2024-11-29T17:03:56.433Z","totalcards":3,"id":20},{"setId":4,"setname":"setname 4","releasedate":"2024-06-29T06:19:27.086Z","totalcards":4,"id":36},{"setId":5,"setname":"setname 5","releasedate":"2023-03-14T20:23:41.999Z","totalcards":5,"id":22}],"Inventory":[{"userName":1,"cardName":1,"recordedDate":"2023-04-06T03:38:54.629Z","id":52},{"userName":2,"cardName":2,"recordedDate":"2024-02-21T10:04:27.634Z","id":28},{"userName":3,"cardName":3,"recordedDate":"2024-06-09T13:03:32.909Z","id":39},{"userName":4,"cardName":4,"recordedDate":"2024-02-12T02:20:09.652Z","id":67},{"userName":5,"cardName":5,"recordedDate":"2023-06-08T05:20:21.657Z","id":89}],"Wishlist":[{"userName":1,"cardName":1,"insertedDate":"2023-03-30T20:28:21.463Z","id":83},{"userName":2,"cardName":2,"insertedDate":"2023-04-17T15:51:22.545Z","id":22},{"userName":3,"cardName":3,"insertedDate":"2024-11-27T09:49:23.381Z","id":17},{"userName":4,"cardName":4,"insertedDate":"2024-11-16T20:15:40.971Z","id":24},{"userName":5,"cardName":5,"insertedDate":"2023-03-18T23:42:28.493Z","id":19}]};
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

