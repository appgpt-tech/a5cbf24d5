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
    let data: any = {"Users":[{"userId":1,"email":"user1@example.com","name":"User One"},{"userId":2,"email":"user2@example.com","name":"User Two"},{"userId":3,"email":"user3@example.com","name":"User Three"}],"Cards":[{"cardId":1,"setId":1,"cardName":"Card 1","serial":"C1","type":"Fire","rarity":"Common","condition":"New","imageUrl":"http://example.com/card1.jpg"},{"cardId":2,"setId":2,"cardName":"Card 2","serial":"C2","type":"Water","rarity":"Rare","condition":"Used","imageUrl":"http://example.com/card2.jpg"},{"cardId":3,"setId":3,"cardName":"Card 3","serial":"C3","type":"Fairy","rarity":"Epic","condition":"Used","imageUrl":"http://example.com/card3.jpg"}],"Sets":[{"setId":1,"setName":"Set 1","releaseDate":"2020-01-01T00:00:00Z","totalCards":10},{"setId":2,"setName":"Set 2","releaseDate":"2021-01-01T00:00:00Z","totalCards":20},{"setId":3,"setName":"Set 3","releaseDate":"2022-01-01T00:00:00Z","totalCards":30}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2021-01-01T00:00:00Z"},{"userId":2,"cardId":2,"recordedDate":"2021-01-02T00:00:00Z"},{"userId":3,"cardId":3,"recordedDate":"2021-01-03T00:00:00Z"}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2021-01-01T00:00:00Z"},{"userId":2,"cardId":2,"insertedDate":"2021-01-02T00:00:00Z"},{"userId":3,"cardId":3,"insertedDate":"2021-01-03T00:00:00Z"}]};
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

