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
    let data: any = {"Users":[{"username":"username 1","email":"email 1","password":"password 1","role":"role 1","id":17},{"username":"username 2","email":"email 2","password":"password 2","role":"role 2","id":60},{"username":"username 3","email":"email 3","password":"password 3","role":"role 3","id":54},{"username":"username 4","email":"email 4","password":"password 4","role":"role 4","id":75},{"username":"username 5","email":"email 5","password":"password 5","role":"role 5","id":4}],"Vendors":[{"companyName":"companyName 1","contactName":"contactName 1","email":"email 1","password":"password 1","id":89},{"companyName":"companyName 2","contactName":"contactName 2","email":"email 2","password":"password 2","id":28},{"companyName":"companyName 3","contactName":"contactName 3","email":"email 3","password":"password 3","id":70},{"companyName":"companyName 4","contactName":"contactName 4","email":"email 4","password":"password 4","id":39},{"companyName":"companyName 5","contactName":"contactName 5","email":"email 5","password":"password 5","id":84}],"Customers":[{"customerName":"customerName 1","email":"email 1","password":"password 1","billingAddress":"billingAddress 1","shippingAddress":"shippingAddress 1","country":"country 1","phone":"phone 1","id":4},{"customerName":"customerName 2","email":"email 2","password":"password 2","billingAddress":"billingAddress 2","shippingAddress":"shippingAddress 2","country":"country 2","phone":"phone 2","id":97},{"customerName":"customerName 3","email":"email 3","password":"password 3","billingAddress":"billingAddress 3","shippingAddress":"shippingAddress 3","country":"country 3","phone":"phone 3","id":6},{"customerName":"customerName 4","email":"email 4","password":"password 4","billingAddress":"billingAddress 4","shippingAddress":"shippingAddress 4","country":"country 4","phone":"phone 4","id":44},{"customerName":"customerName 5","email":"email 5","password":"password 5","billingAddress":"billingAddress 5","shippingAddress":"shippingAddress 5","country":"country 5","phone":"phone 5","id":90}],"Inventory":[{"productId":1,"quantity":1,"lowStockThreshold":1,"id":29},{"productId":2,"quantity":2,"lowStockThreshold":2,"id":19},{"productId":3,"quantity":3,"lowStockThreshold":3,"id":61},{"productId":4,"quantity":4,"lowStockThreshold":4,"id":8},{"productId":5,"quantity":5,"lowStockThreshold":5,"id":18}],"Products":[{"productName":"productName 1","vendorId":1,"price":0.15,"weight":0.4,"description":"description 1","thumbnail":"thumbnail 1","image":"image 1","category":1,"creationDate":"2023-05-25T17:38:49.726Z","stock":1,"id":49},{"productName":"productName 2","vendorId":2,"price":0.27,"weight":0.63,"description":"description 2","thumbnail":"thumbnail 2","image":"image 2","category":2,"creationDate":"2024-04-10T03:02:26.415Z","stock":2,"id":54},{"productName":"productName 3","vendorId":3,"price":0.72,"weight":0.94,"description":"description 3","thumbnail":"thumbnail 3","image":"image 3","category":3,"creationDate":"2023-12-16T09:32:23.410Z","stock":3,"id":68},{"productName":"productName 4","vendorId":4,"price":0.34,"weight":0.94,"description":"description 4","thumbnail":"thumbnail 4","image":"image 4","category":4,"creationDate":"2023-12-10T02:46:38.550Z","stock":4,"id":17},{"productName":"productName 5","vendorId":5,"price":0.48,"weight":0.87,"description":"description 5","thumbnail":"thumbnail 5","image":"image 5","category":5,"creationDate":"2023-03-14T23:52:02.935Z","stock":5,"id":6}],"ProductCategories":[{"description":"description 1","id":90},{"description":"description 2","id":14},{"description":"description 3","id":78},{"description":"description 4","id":57},{"description":"description 5","id":96}],"Discounts":[{"productId":1,"discountType":"discountType 1","description":"description 1","discountAmount":0.63,"discountPercent":0,"id":17},{"productId":2,"discountType":"discountType 2","description":"description 2","discountAmount":0.18,"discountPercent":0.22,"id":60},{"productId":3,"discountType":"discountType 3","description":"description 3","discountAmount":0.49,"discountPercent":0.72,"id":71},{"productId":4,"discountType":"discountType 4","description":"description 4","discountAmount":0.68,"discountPercent":0.48,"id":93},{"productId":5,"discountType":"discountType 5","description":"description 5","discountAmount":0.05,"discountPercent":0.06,"id":13}],"ShoppingCart":[{"customerId":1,"productId":1,"price":0.63,"quantity":1,"id":86},{"customerId":2,"productId":2,"price":0.02,"quantity":2,"id":34},{"customerId":3,"productId":3,"price":0.64,"quantity":3,"id":18},{"customerId":4,"productId":4,"price":0.87,"quantity":4,"id":4},{"customerId":5,"productId":5,"price":0.58,"quantity":5,"id":86}],"Orders":[{"orderNumber":"orderNumber 1","customerId":1,"totalAmount":0.65,"vat":0.46,"totalAmountWithVat":0.76,"shippingCost":0.72,"shippingAddress":"shippingAddress 1","orderAddress":"orderAddress 1","orderEmail":"orderEmail 1","orderDate":"2024-03-26T21:22:55.881Z","orderStatus":"orderStatus 1","trackingNo":"trackingNo 1","id":67},{"orderNumber":"orderNumber 2","customerId":2,"totalAmount":0.23,"vat":0.63,"totalAmountWithVat":0.53,"shippingCost":0.55,"shippingAddress":"shippingAddress 2","orderAddress":"orderAddress 2","orderEmail":"orderEmail 2","orderDate":"2024-05-13T08:30:49.203Z","orderStatus":"orderStatus 2","trackingNo":"trackingNo 2","id":36},{"orderNumber":"orderNumber 3","customerId":3,"totalAmount":0.33,"vat":0.69,"totalAmountWithVat":0.28,"shippingCost":0.85,"shippingAddress":"shippingAddress 3","orderAddress":"orderAddress 3","orderEmail":"orderEmail 3","orderDate":"2024-01-07T09:18:22.167Z","orderStatus":"orderStatus 3","trackingNo":"trackingNo 3","id":50},{"orderNumber":"orderNumber 4","customerId":4,"totalAmount":0.74,"vat":0.25,"totalAmountWithVat":0.22,"shippingCost":0.01,"shippingAddress":"shippingAddress 4","orderAddress":"orderAddress 4","orderEmail":"orderEmail 4","orderDate":"2024-01-03T13:51:55.233Z","orderStatus":"orderStatus 4","trackingNo":"trackingNo 4","id":14},{"orderNumber":"orderNumber 5","customerId":5,"totalAmount":0.76,"vat":0.21,"totalAmountWithVat":0.72,"shippingCost":0.22,"shippingAddress":"shippingAddress 5","orderAddress":"orderAddress 5","orderEmail":"orderEmail 5","orderDate":"2024-09-01T08:56:10.290Z","orderStatus":"orderStatus 5","trackingNo":"trackingNo 5","id":31}],"OrderDetails":[{"orderId":1,"productId":1,"price":0.92,"quantity":1,"id":94},{"orderId":2,"productId":2,"price":0.42,"quantity":2,"id":49},{"orderId":3,"productId":3,"price":0.74,"quantity":3,"id":10},{"orderId":4,"productId":4,"price":0.61,"quantity":4,"id":75},{"orderId":5,"productId":5,"price":0.89,"quantity":5,"id":94}],"Payments":[{"orderId":1,"amount":0.52,"paymentMethod":"paymentMethod 1","paymentDate":"2023-10-22T18:41:45.844Z","paymentStatus":"paymentStatus 1","id":52},{"orderId":2,"amount":0.47,"paymentMethod":"paymentMethod 2","paymentDate":"2023-07-16T23:11:19.224Z","paymentStatus":"paymentStatus 2","id":40},{"orderId":3,"amount":0.66,"paymentMethod":"paymentMethod 3","paymentDate":"2023-02-25T22:06:23.400Z","paymentStatus":"paymentStatus 3","id":52},{"orderId":4,"amount":0.21,"paymentMethod":"paymentMethod 4","paymentDate":"2024-06-24T07:24:16.261Z","paymentStatus":"paymentStatus 4","id":5},{"orderId":5,"amount":0.95,"paymentMethod":"paymentMethod 5","paymentDate":"2023-11-04T05:32:11.862Z","paymentStatus":"paymentStatus 5","id":40}],"Reviews":[{"productId":1,"customerId":1,"vendorId":1,"rating":0.7,"reviewDetails":"reviewDetails 1","date":"2023-09-20T09:43:41.546Z","id":67},{"productId":2,"customerId":2,"vendorId":2,"rating":0.57,"reviewDetails":"reviewDetails 2","date":"2023-06-13T08:56:57.141Z","id":53},{"productId":3,"customerId":3,"vendorId":3,"rating":0.73,"reviewDetails":"reviewDetails 3","date":"2024-08-08T14:57:50.077Z","id":10},{"productId":4,"customerId":4,"vendorId":4,"rating":0.13,"reviewDetails":"reviewDetails 4","date":"2023-07-29T16:26:47.481Z","id":40},{"productId":5,"customerId":5,"vendorId":5,"rating":0.36,"reviewDetails":"reviewDetails 5","date":"2023-05-11T02:41:30.762Z","id":67}],"SupportTickets":[{"userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2023-08-18T16:04:14.310Z","resolutionDate":"2024-06-18T09:40:21.161Z","id":30},{"userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2023-03-21T15:35:10.008Z","resolutionDate":"2023-12-14T18:34:25.590Z","id":62},{"userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2024-03-02T05:10:37.072Z","resolutionDate":"2023-09-24T19:09:26.415Z","id":38},{"userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2024-06-04T16:08:39.295Z","resolutionDate":"2023-04-28T15:32:49.545Z","id":77},{"userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2024-09-07T17:30:12.014Z","resolutionDate":"2023-06-08T17:10:11.898Z","id":55}]};
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

