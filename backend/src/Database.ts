//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { UsersEntity } from "./db/Users.entity";
import { VendorsEntity } from "./db/Vendors.entity";
import { CustomersEntity } from "./db/Customers.entity";
import { InventoryEntity } from "./db/Inventory.entity";
import { ProductsEntity } from "./db/Products.entity";
import { ProductCategoriesEntity } from "./db/ProductCategories.entity";
import { DiscountsEntity } from "./db/Discounts.entity";
import { ShoppingCartEntity } from "./db/ShoppingCart.entity";
import { OrdersEntity } from "./db/Orders.entity";
import { OrderDetailsEntity } from "./db/OrderDetails.entity";
import { PaymentsEntity } from "./db/Payments.entity";
import { ReviewsEntity } from "./db/Reviews.entity";
import { SupportTicketsEntity } from "./db/SupportTickets.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, UsersEntity, VendorsEntity, CustomersEntity, InventoryEntity, ProductsEntity, ProductCategoriesEntity, DiscountsEntity, ShoppingCartEntity, OrdersEntity, OrderDetailsEntity, PaymentsEntity, ReviewsEntity, SupportTicketsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Users":[{"username":"username 1","email":"email 1","password":"password 1","role":"role 1","id":28},{"username":"username 2","email":"email 2","password":"password 2","role":"role 2","id":20},{"username":"username 3","email":"email 3","password":"password 3","role":"role 3","id":86},{"username":"username 4","email":"email 4","password":"password 4","role":"role 4","id":23},{"username":"username 5","email":"email 5","password":"password 5","role":"role 5","id":99}],"Vendors":[{"companyName":"companyName 1","contactName":"contactName 1","email":"email 1","password":"password 1","id":2},{"companyName":"companyName 2","contactName":"contactName 2","email":"email 2","password":"password 2","id":18},{"companyName":"companyName 3","contactName":"contactName 3","email":"email 3","password":"password 3","id":63},{"companyName":"companyName 4","contactName":"contactName 4","email":"email 4","password":"password 4","id":40},{"companyName":"companyName 5","contactName":"contactName 5","email":"email 5","password":"password 5","id":27}],"Customers":[{"customerName":"customerName 1","email":"email 1","password":"password 1","billingAddress":"billingAddress 1","shippingAddress":"shippingAddress 1","country":"country 1","phone":"phone 1","id":31},{"customerName":"customerName 2","email":"email 2","password":"password 2","billingAddress":"billingAddress 2","shippingAddress":"shippingAddress 2","country":"country 2","phone":"phone 2","id":81},{"customerName":"customerName 3","email":"email 3","password":"password 3","billingAddress":"billingAddress 3","shippingAddress":"shippingAddress 3","country":"country 3","phone":"phone 3","id":48},{"customerName":"customerName 4","email":"email 4","password":"password 4","billingAddress":"billingAddress 4","shippingAddress":"shippingAddress 4","country":"country 4","phone":"phone 4","id":20},{"customerName":"customerName 5","email":"email 5","password":"password 5","billingAddress":"billingAddress 5","shippingAddress":"shippingAddress 5","country":"country 5","phone":"phone 5","id":90}],"Inventory":[{"product":1,"quantity":1,"lowStockThreshold":1,"id":70},{"product":2,"quantity":2,"lowStockThreshold":2,"id":42},{"product":3,"quantity":3,"lowStockThreshold":3,"id":64},{"product":4,"quantity":4,"lowStockThreshold":4,"id":63},{"product":5,"quantity":5,"lowStockThreshold":5,"id":75}],"Products":[{"productName":"productName 1","vendor":1,"price":0.81,"weight":0.39,"description":"description 1","thumbnail":"thumbnail 1","image":"image 1","category":1,"creationDate":"2023-06-01T19:34:00.196Z","stock":1,"id":33},{"productName":"productName 2","vendor":2,"price":0.02,"weight":0.75,"description":"description 2","thumbnail":"thumbnail 2","image":"image 2","category":2,"creationDate":"2024-07-30T21:11:32.476Z","stock":2,"id":41},{"productName":"productName 3","vendor":3,"price":0.16,"weight":0.68,"description":"description 3","thumbnail":"thumbnail 3","image":"image 3","category":3,"creationDate":"2023-08-09T22:41:21.441Z","stock":3,"id":88},{"productName":"productName 4","vendor":4,"price":0.7,"weight":0.74,"description":"description 4","thumbnail":"thumbnail 4","image":"image 4","category":4,"creationDate":"2024-06-16T02:34:54.143Z","stock":4,"id":14},{"productName":"productName 5","vendor":5,"price":0.64,"weight":0.66,"description":"description 5","thumbnail":"thumbnail 5","image":"image 5","category":5,"creationDate":"2023-07-30T02:19:24.190Z","stock":5,"id":96}],"ProductCategories":[{"description":"description 1","id":12},{"description":"description 2","id":9},{"description":"description 3","id":85},{"description":"description 4","id":8},{"description":"description 5","id":76}],"Discounts":[{"product":1,"discountType":"discountType 1","description":"description 1","discountAmount":0.23,"discountPercent":0.9,"id":9},{"product":2,"discountType":"discountType 2","description":"description 2","discountAmount":0.41,"discountPercent":0.34,"id":54},{"product":3,"discountType":"discountType 3","description":"description 3","discountAmount":0.97,"discountPercent":0.15,"id":23},{"product":4,"discountType":"discountType 4","description":"description 4","discountAmount":0.09,"discountPercent":0.97,"id":99},{"product":5,"discountType":"discountType 5","description":"description 5","discountAmount":0.57,"discountPercent":0.8,"id":57}],"ShoppingCart":[{"customer":1,"product":1,"priceAtPurchase":0.14,"quantity":1,"id":49},{"customer":2,"product":2,"priceAtPurchase":0.5,"quantity":2,"id":83},{"customer":3,"product":3,"priceAtPurchase":0.41,"quantity":3,"id":32},{"customer":4,"product":4,"priceAtPurchase":0.6,"quantity":4,"id":62},{"customer":5,"product":5,"priceAtPurchase":0.31,"quantity":5,"id":67}],"Orders":[{"orderNumber":"orderNumber 1","customer":1,"totalAmount":0.88,"vat":0.42,"totalAmountWithVat":0.06,"shippingCost":0.25,"shippingAddress":"shippingAddress 1","orderAddress":"orderAddress 1","orderEmail":"orderEmail 1","orderDate":"2023-09-24T07:51:53.843Z","orderStatus":"orderStatus 1","trackingNo":"trackingNo 1","id":100},{"orderNumber":"orderNumber 2","customer":2,"totalAmount":0.29,"vat":0.66,"totalAmountWithVat":0.81,"shippingCost":0.74,"shippingAddress":"shippingAddress 2","orderAddress":"orderAddress 2","orderEmail":"orderEmail 2","orderDate":"2024-02-17T06:38:37.828Z","orderStatus":"orderStatus 2","trackingNo":"trackingNo 2","id":45},{"orderNumber":"orderNumber 3","customer":3,"totalAmount":0.64,"vat":0,"totalAmountWithVat":1,"shippingCost":0.99,"shippingAddress":"shippingAddress 3","orderAddress":"orderAddress 3","orderEmail":"orderEmail 3","orderDate":"2024-03-03T12:31:00.581Z","orderStatus":"orderStatus 3","trackingNo":"trackingNo 3","id":96},{"orderNumber":"orderNumber 4","customer":4,"totalAmount":0.22,"vat":0.04,"totalAmountWithVat":0.64,"shippingCost":0.53,"shippingAddress":"shippingAddress 4","orderAddress":"orderAddress 4","orderEmail":"orderEmail 4","orderDate":"2024-07-23T20:37:45.521Z","orderStatus":"orderStatus 4","trackingNo":"trackingNo 4","id":44},{"orderNumber":"orderNumber 5","customer":5,"totalAmount":0.01,"vat":0.17,"totalAmountWithVat":0.24,"shippingCost":0.5,"shippingAddress":"shippingAddress 5","orderAddress":"orderAddress 5","orderEmail":"orderEmail 5","orderDate":"2023-11-08T00:06:50.903Z","orderStatus":"orderStatus 5","trackingNo":"trackingNo 5","id":97}],"OrderDetails":[{"orderNumber":1,"line":1,"product":1,"price":0.61,"quantity":1,"id":48},{"orderNumber":2,"line":2,"product":2,"price":0.63,"quantity":2,"id":16},{"orderNumber":3,"line":3,"product":3,"price":0.02,"quantity":3,"id":30},{"orderNumber":4,"line":4,"product":4,"price":0.66,"quantity":4,"id":64},{"orderNumber":5,"line":5,"product":5,"price":0.19,"quantity":5,"id":71}],"Payments":[{"orderNumber":1,"amount":0.58,"paymentMethod":"paymentMethod 1","paymentDate":"2024-02-16T12:29:50.468Z","paymentStatus":"paymentStatus 1","id":57},{"orderNumber":2,"amount":0.76,"paymentMethod":"paymentMethod 2","paymentDate":"2024-09-26T06:37:41.522Z","paymentStatus":"paymentStatus 2","id":2},{"orderNumber":3,"amount":0.32,"paymentMethod":"paymentMethod 3","paymentDate":"2023-07-24T18:31:23.416Z","paymentStatus":"paymentStatus 3","id":31},{"orderNumber":4,"amount":0.3,"paymentMethod":"paymentMethod 4","paymentDate":"2023-12-18T09:45:14.061Z","paymentStatus":"paymentStatus 4","id":36},{"orderNumber":5,"amount":0.24,"paymentMethod":"paymentMethod 5","paymentDate":"2024-10-13T06:46:21.854Z","paymentStatus":"paymentStatus 5","id":5}],"Reviews":[{"product":1,"customer":1,"vendor":1,"rating":1,"reviewDetails":"reviewDetails 1","date":"2024-07-12T08:49:54.515Z","id":35},{"product":2,"customer":2,"vendor":2,"rating":2,"reviewDetails":"reviewDetails 2","date":"2023-11-29T19:11:19.495Z","id":43},{"product":3,"customer":3,"vendor":3,"rating":3,"reviewDetails":"reviewDetails 3","date":"2024-05-12T01:07:58.667Z","id":63},{"product":4,"customer":4,"vendor":4,"rating":4,"reviewDetails":"reviewDetails 4","date":"2023-08-06T12:14:25.581Z","id":88},{"product":5,"customer":5,"vendor":5,"rating":5,"reviewDetails":"reviewDetails 5","date":"2025-01-24T02:39:42.232Z","id":18}],"SupportTickets":[{"user":1,"customer":1,"description":"description 1","status":"status 1","creationDate":"2023-06-25T21:25:19.326Z","resolutionDate":"2023-06-08T13:40:18.107Z","id":76},{"user":2,"customer":2,"description":"description 2","status":"status 2","creationDate":"2024-06-12T09:07:04.752Z","resolutionDate":"2023-07-11T09:57:25.584Z","id":28},{"user":3,"customer":3,"description":"description 3","status":"status 3","creationDate":"2023-12-12T20:09:49.805Z","resolutionDate":"2023-06-04T04:34:19.955Z","id":80},{"user":4,"customer":4,"description":"description 4","status":"status 4","creationDate":"2024-03-05T07:24:19.458Z","resolutionDate":"2024-05-24T11:18:58.814Z","id":93},{"user":5,"customer":5,"description":"description 5","status":"status 5","creationDate":"2025-01-15T16:58:15.129Z","resolutionDate":"2024-09-12T02:18:54.837Z","id":12}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("UsersEntity", data.Users);
await this.SeedResource("VendorsEntity", data.Vendors);
await this.SeedResource("CustomersEntity", data.Customers);
await this.SeedResource("InventoryEntity", data.Inventory);
await this.SeedResource("ProductsEntity", data.Products);
await this.SeedResource("ProductCategoriesEntity", data.ProductCategories);
await this.SeedResource("DiscountsEntity", data.Discounts);
await this.SeedResource("ShoppingCartEntity", data.ShoppingCart);
await this.SeedResource("OrdersEntity", data.Orders);
await this.SeedResource("OrderDetailsEntity", data.OrderDetails);
await this.SeedResource("PaymentsEntity", data.Payments);
await this.SeedResource("ReviewsEntity", data.Reviews);
await this.SeedResource("SupportTicketsEntity", data.SupportTickets); 
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

