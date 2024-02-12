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
    let data: any = {"Users":[{"username":"username 1","email":"email 1","password":"password 1","role":"role 1","id":36},{"username":"username 2","email":"email 2","password":"password 2","role":"role 2","id":2},{"username":"username 3","email":"email 3","password":"password 3","role":"role 3","id":20},{"username":"username 4","email":"email 4","password":"password 4","role":"role 4","id":94},{"username":"username 5","email":"email 5","password":"password 5","role":"role 5","id":39}],"Vendors":[{"companyName":"companyName 1","contactName":"contactName 1","email":"email 1","password":"password 1","id":19},{"companyName":"companyName 2","contactName":"contactName 2","email":"email 2","password":"password 2","id":57},{"companyName":"companyName 3","contactName":"contactName 3","email":"email 3","password":"password 3","id":41},{"companyName":"companyName 4","contactName":"contactName 4","email":"email 4","password":"password 4","id":64},{"companyName":"companyName 5","contactName":"contactName 5","email":"email 5","password":"password 5","id":53}],"Customers":[{"customerName":"customerName 1","email":"email 1","password":"password 1","billingAddress":"billingAddress 1","shippingAddress":"shippingAddress 1","country":"country 1","phone":"phone 1","id":34},{"customerName":"customerName 2","email":"email 2","password":"password 2","billingAddress":"billingAddress 2","shippingAddress":"shippingAddress 2","country":"country 2","phone":"phone 2","id":98},{"customerName":"customerName 3","email":"email 3","password":"password 3","billingAddress":"billingAddress 3","shippingAddress":"shippingAddress 3","country":"country 3","phone":"phone 3","id":63},{"customerName":"customerName 4","email":"email 4","password":"password 4","billingAddress":"billingAddress 4","shippingAddress":"shippingAddress 4","country":"country 4","phone":"phone 4","id":2},{"customerName":"customerName 5","email":"email 5","password":"password 5","billingAddress":"billingAddress 5","shippingAddress":"shippingAddress 5","country":"country 5","phone":"phone 5","id":92}],"Inventory":[{"product":1,"quantity":1,"lowStockThreshold":1,"id":43},{"product":2,"quantity":2,"lowStockThreshold":2,"id":7},{"product":3,"quantity":3,"lowStockThreshold":3,"id":35},{"product":4,"quantity":4,"lowStockThreshold":4,"id":82},{"product":5,"quantity":5,"lowStockThreshold":5,"id":92}],"Products":[{"productName":"productName 1","vendor":1,"price":0.27,"weight":0.4,"description":"description 1","thumbnail":"thumbnail 1","image":"image 1","category":1,"creationDate":"2024-10-02T12:15:59.400Z","stock":1,"id":69},{"productName":"productName 2","vendor":2,"price":0.09,"weight":0.44,"description":"description 2","thumbnail":"thumbnail 2","image":"image 2","category":2,"creationDate":"2023-10-29T23:10:20.852Z","stock":2,"id":17},{"productName":"productName 3","vendor":3,"price":0.8,"weight":0.54,"description":"description 3","thumbnail":"thumbnail 3","image":"image 3","category":3,"creationDate":"2023-10-04T05:05:49.130Z","stock":3,"id":45},{"productName":"productName 4","vendor":4,"price":0.69,"weight":0.04,"description":"description 4","thumbnail":"thumbnail 4","image":"image 4","category":4,"creationDate":"2023-05-03T03:06:22.817Z","stock":4,"id":87},{"productName":"productName 5","vendor":5,"price":0.11,"weight":0.18,"description":"description 5","thumbnail":"thumbnail 5","image":"image 5","category":5,"creationDate":"2024-05-19T06:46:47.519Z","stock":5,"id":31}],"ProductCategories":[{"category":"category 1","id":38},{"category":"category 2","id":16},{"category":"category 3","id":96},{"category":"category 4","id":72},{"category":"category 5","id":99}],"Discounts":[{"product":1,"discountType":"discountType 1","description":"description 1","discountAmount":0.94,"discountPercent":0.79,"id":31},{"product":2,"discountType":"discountType 2","description":"description 2","discountAmount":0.82,"discountPercent":0.74,"id":76},{"product":3,"discountType":"discountType 3","description":"description 3","discountAmount":0.25,"discountPercent":0.21,"id":98},{"product":4,"discountType":"discountType 4","description":"description 4","discountAmount":0.23,"discountPercent":0.49,"id":78},{"product":5,"discountType":"discountType 5","description":"description 5","discountAmount":0.2,"discountPercent":0.97,"id":23}],"ShoppingCart":[{"customer":1,"product":1,"priceAtPurchase":0.36,"quantity":1,"id":60},{"customer":2,"product":2,"priceAtPurchase":0.47,"quantity":2,"id":37},{"customer":3,"product":3,"priceAtPurchase":0.74,"quantity":3,"id":73},{"customer":4,"product":4,"priceAtPurchase":0.37,"quantity":4,"id":14},{"customer":5,"product":5,"priceAtPurchase":0.91,"quantity":5,"id":18}],"Orders":[{"orderNumber":"orderNumber 1","customer":1,"totalAmount":0.78,"vat":0.37,"totalAmountWithVat":0.25,"shippingCost":0.96,"shippingAddress":"shippingAddress 1","orderAddress":"orderAddress 1","orderEmail":"orderEmail 1","orderDate":"2024-01-15T13:39:56.274Z","orderStatus":"orderStatus 1","trackingNo":"trackingNo 1","id":92},{"orderNumber":"orderNumber 2","customer":2,"totalAmount":0.64,"vat":0.96,"totalAmountWithVat":0.23,"shippingCost":0.32,"shippingAddress":"shippingAddress 2","orderAddress":"orderAddress 2","orderEmail":"orderEmail 2","orderDate":"2023-09-25T22:18:32.073Z","orderStatus":"orderStatus 2","trackingNo":"trackingNo 2","id":77},{"orderNumber":"orderNumber 3","customer":3,"totalAmount":0.83,"vat":0.26,"totalAmountWithVat":0.54,"shippingCost":0.96,"shippingAddress":"shippingAddress 3","orderAddress":"orderAddress 3","orderEmail":"orderEmail 3","orderDate":"2025-01-04T07:27:00.808Z","orderStatus":"orderStatus 3","trackingNo":"trackingNo 3","id":18},{"orderNumber":"orderNumber 4","customer":4,"totalAmount":0.01,"vat":0.03,"totalAmountWithVat":0.33,"shippingCost":0.58,"shippingAddress":"shippingAddress 4","orderAddress":"orderAddress 4","orderEmail":"orderEmail 4","orderDate":"2024-10-09T19:47:57.676Z","orderStatus":"orderStatus 4","trackingNo":"trackingNo 4","id":89},{"orderNumber":"orderNumber 5","customer":5,"totalAmount":0.65,"vat":0.85,"totalAmountWithVat":0.56,"shippingCost":0.9,"shippingAddress":"shippingAddress 5","orderAddress":"orderAddress 5","orderEmail":"orderEmail 5","orderDate":"2024-03-25T11:01:25.061Z","orderStatus":"orderStatus 5","trackingNo":"trackingNo 5","id":88}],"OrderDetails":[{"orderNumber":1,"line":1,"product":1,"price":0.83,"quantity":1,"id":32},{"orderNumber":2,"line":2,"product":2,"price":0.71,"quantity":2,"id":63},{"orderNumber":3,"line":3,"product":3,"price":0.4,"quantity":3,"id":78},{"orderNumber":4,"line":4,"product":4,"price":0.75,"quantity":4,"id":71},{"orderNumber":5,"line":5,"product":5,"price":0.9,"quantity":5,"id":61}],"Payments":[{"orderNumber":1,"amount":0.02,"paymentMethod":"paymentMethod 1","paymentDate":"2024-08-02T11:09:36.091Z","paymentStatus":"paymentStatus 1","id":51},{"orderNumber":2,"amount":0.84,"paymentMethod":"paymentMethod 2","paymentDate":"2023-03-15T10:27:24.012Z","paymentStatus":"paymentStatus 2","id":77},{"orderNumber":3,"amount":0.33,"paymentMethod":"paymentMethod 3","paymentDate":"2024-05-14T13:30:29.073Z","paymentStatus":"paymentStatus 3","id":99},{"orderNumber":4,"amount":0.42,"paymentMethod":"paymentMethod 4","paymentDate":"2024-05-04T23:52:08.985Z","paymentStatus":"paymentStatus 4","id":97},{"orderNumber":5,"amount":0.78,"paymentMethod":"paymentMethod 5","paymentDate":"2024-08-01T04:42:13.109Z","paymentStatus":"paymentStatus 5","id":46}],"Reviews":[{"product":1,"customer":1,"vendor":1,"rating":1,"reviewDetails":"reviewDetails 1","date":"2024-03-14T04:18:45.882Z","id":64},{"product":2,"customer":2,"vendor":2,"rating":2,"reviewDetails":"reviewDetails 2","date":"2023-08-28T12:05:43.146Z","id":95},{"product":3,"customer":3,"vendor":3,"rating":3,"reviewDetails":"reviewDetails 3","date":"2023-07-21T00:48:24.660Z","id":86},{"product":4,"customer":4,"vendor":4,"rating":4,"reviewDetails":"reviewDetails 4","date":"2023-12-17T21:55:17.840Z","id":15},{"product":5,"customer":5,"vendor":5,"rating":5,"reviewDetails":"reviewDetails 5","date":"2024-01-27T02:29:13.989Z","id":47}],"SupportTickets":[{"user":1,"customer":1,"description":"description 1","status":"status 1","creationDate":"2024-06-28T15:04:46.580Z","resolutionDate":"2024-01-27T13:28:45.002Z","id":6},{"user":2,"customer":2,"description":"description 2","status":"status 2","creationDate":"2023-02-17T19:38:30.806Z","resolutionDate":"2023-02-28T23:44:19.938Z","id":13},{"user":3,"customer":3,"description":"description 3","status":"status 3","creationDate":"2023-09-27T17:30:30.365Z","resolutionDate":"2024-02-24T18:41:20.105Z","id":18},{"user":4,"customer":4,"description":"description 4","status":"status 4","creationDate":"2023-10-14T13:05:32.144Z","resolutionDate":"2024-02-25T10:11:10.482Z","id":96},{"user":5,"customer":5,"description":"description 5","status":"status 5","creationDate":"2023-02-14T15:42:24.499Z","resolutionDate":"2024-01-31T02:14:11.672Z","id":52}]};
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

