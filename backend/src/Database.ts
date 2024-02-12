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
    let data: any = {"Users":[{"id":86,"name":"name 1","email":"email 1","password":"password 1","role":"role 1"},{"id":90,"name":"name 2","email":"email 2","password":"password 2","role":"role 2"},{"id":80,"name":"name 3","email":"email 3","password":"password 3","role":"role 3"},{"id":96,"name":"name 4","email":"email 4","password":"password 4","role":"role 4"},{"id":90,"name":"name 5","email":"email 5","password":"password 5","role":"role 5"}],"Vendors":[{"id":78,"companyName":"companyName 1","contactName":"contactName 1","email":"email 1","password":"password 1"},{"id":35,"companyName":"companyName 2","contactName":"contactName 2","email":"email 2","password":"password 2"},{"id":3,"companyName":"companyName 3","contactName":"contactName 3","email":"email 3","password":"password 3"},{"id":24,"companyName":"companyName 4","contactName":"contactName 4","email":"email 4","password":"password 4"},{"id":23,"companyName":"companyName 5","contactName":"contactName 5","email":"email 5","password":"password 5"}],"Customers":[{"id":81,"email":"email 1","password":"password 1","name":"name 1","billingAddress":"billingAddress 1","shippingAddress":"shippingAddress 1","country":"country 1","phone":"phone 1"},{"id":22,"email":"email 2","password":"password 2","name":"name 2","billingAddress":"billingAddress 2","shippingAddress":"shippingAddress 2","country":"country 2","phone":"phone 2"},{"id":62,"email":"email 3","password":"password 3","name":"name 3","billingAddress":"billingAddress 3","shippingAddress":"shippingAddress 3","country":"country 3","phone":"phone 3"},{"id":16,"email":"email 4","password":"password 4","name":"name 4","billingAddress":"billingAddress 4","shippingAddress":"shippingAddress 4","country":"country 4","phone":"phone 4"},{"id":73,"email":"email 5","password":"password 5","name":"name 5","billingAddress":"billingAddress 5","shippingAddress":"shippingAddress 5","country":"country 5","phone":"phone 5"}],"Inventory":[{"id":77,"productId":1,"vendorId":1,"quantity":1,"lowStockThreshold":1},{"id":5,"productId":2,"vendorId":2,"quantity":2,"lowStockThreshold":2},{"id":20,"productId":3,"vendorId":3,"quantity":3,"lowStockThreshold":3},{"id":59,"productId":4,"vendorId":4,"quantity":4,"lowStockThreshold":4},{"id":36,"productId":5,"vendorId":5,"quantity":5,"lowStockThreshold":5}],"Products":[{"id":7,"vendorId":1,"productName":"productName 1","price":0.55,"weight":0.1,"description":"description 1","thumbnail":"thumbnail 1","image":"image 1","category":1,"creationDate":"2023-09-19T10:48:39.987Z","stock":1},{"id":43,"vendorId":2,"productName":"productName 2","price":0.17,"weight":0.97,"description":"description 2","thumbnail":"thumbnail 2","image":"image 2","category":2,"creationDate":"2023-11-21T00:28:48.045Z","stock":2},{"id":59,"vendorId":3,"productName":"productName 3","price":0.14,"weight":0.6,"description":"description 3","thumbnail":"thumbnail 3","image":"image 3","category":3,"creationDate":"2024-08-23T16:32:05.479Z","stock":3},{"id":1,"vendorId":4,"productName":"productName 4","price":0.73,"weight":0.69,"description":"description 4","thumbnail":"thumbnail 4","image":"image 4","category":4,"creationDate":"2024-11-11T10:53:20.082Z","stock":4},{"id":56,"vendorId":5,"productName":"productName 5","price":0.56,"weight":0.1,"description":"description 5","thumbnail":"thumbnail 5","image":"image 5","category":5,"creationDate":"2023-06-10T21:54:49.586Z","stock":5}],"ProductCategories":[{"id":97,"description":"description 1"},{"id":19,"description":"description 2"},{"id":41,"description":"description 3"},{"id":13,"description":"description 4"},{"id":14,"description":"description 5"}],"Discounts":[{"id":0,"productId":1,"discountType":"discountType 1","description":"description 1","discountAmount":0.15,"discountPercent":0.16},{"id":25,"productId":2,"discountType":"discountType 2","description":"description 2","discountAmount":0.79,"discountPercent":0.25},{"id":94,"productId":3,"discountType":"discountType 3","description":"description 3","discountAmount":0.47,"discountPercent":0.48},{"id":97,"productId":4,"discountType":"discountType 4","description":"description 4","discountAmount":0.84,"discountPercent":0.47},{"id":24,"productId":5,"discountType":"discountType 5","description":"description 5","discountAmount":0.36,"discountPercent":0.64}],"ShoppingCart":[{"id":31,"customerId":1,"productId":1,"priceAtPurchase":0.28,"quantity":1},{"id":67,"customerId":2,"productId":2,"priceAtPurchase":0.64,"quantity":2},{"id":29,"customerId":3,"productId":3,"priceAtPurchase":0.28,"quantity":3},{"id":94,"customerId":4,"productId":4,"priceAtPurchase":0.64,"quantity":4},{"id":49,"customerId":5,"productId":5,"priceAtPurchase":0.45,"quantity":5}],"Orders":[{"id":44,"customerId":1,"totalAmount":0.36,"vat":0.47,"totalAmountWithVat":0.56,"shippingCost":0.75,"shippingAddress":"shippingAddress 1","orderAddress":"orderAddress 1","orderEmail":"orderEmail 1","orderDate":"2023-05-22T05:51:42.772Z","orderStatus":"orderStatus 1","trackingNo":"trackingNo 1"},{"id":92,"customerId":2,"totalAmount":0.37,"vat":0.28,"totalAmountWithVat":0.47,"shippingCost":0.47,"shippingAddress":"shippingAddress 2","orderAddress":"orderAddress 2","orderEmail":"orderEmail 2","orderDate":"2024-03-30T16:09:23.719Z","orderStatus":"orderStatus 2","trackingNo":"trackingNo 2"},{"id":35,"customerId":3,"totalAmount":0.2,"vat":0.54,"totalAmountWithVat":0.58,"shippingCost":0.53,"shippingAddress":"shippingAddress 3","orderAddress":"orderAddress 3","orderEmail":"orderEmail 3","orderDate":"2023-02-24T13:25:02.319Z","orderStatus":"orderStatus 3","trackingNo":"trackingNo 3"},{"id":97,"customerId":4,"totalAmount":0.87,"vat":0.7,"totalAmountWithVat":0.84,"shippingCost":0.95,"shippingAddress":"shippingAddress 4","orderAddress":"orderAddress 4","orderEmail":"orderEmail 4","orderDate":"2023-06-29T08:17:15.938Z","orderStatus":"orderStatus 4","trackingNo":"trackingNo 4"},{"id":61,"customerId":5,"totalAmount":0.46,"vat":0.85,"totalAmountWithVat":0.14,"shippingCost":0.99,"shippingAddress":"shippingAddress 5","orderAddress":"orderAddress 5","orderEmail":"orderEmail 5","orderDate":"2024-02-02T04:55:02.600Z","orderStatus":"orderStatus 5","trackingNo":"trackingNo 5"}],"OrderDetails":[{"id":91,"orderId":1,"productId":1,"price":0.32,"quantity":1},{"id":66,"orderId":2,"productId":2,"price":0.39,"quantity":2},{"id":31,"orderId":3,"productId":3,"price":0.21,"quantity":3},{"id":82,"orderId":4,"productId":4,"price":0.39,"quantity":4},{"id":47,"orderId":5,"productId":5,"price":0.79,"quantity":5}],"Payments":[{"id":9,"orderId":1,"amount":0.64,"paymentMethod":"paymentMethod 1","paymentDate":"2023-08-20T13:48:07.779Z","paymentStatus":"paymentStatus 1"},{"id":71,"orderId":2,"amount":0.5,"paymentMethod":"paymentMethod 2","paymentDate":"2024-09-05T13:57:44.062Z","paymentStatus":"paymentStatus 2"},{"id":96,"orderId":3,"amount":0.94,"paymentMethod":"paymentMethod 3","paymentDate":"2023-02-24T18:31:06.661Z","paymentStatus":"paymentStatus 3"},{"id":88,"orderId":4,"amount":0.06,"paymentMethod":"paymentMethod 4","paymentDate":"2023-10-27T18:25:37.102Z","paymentStatus":"paymentStatus 4"},{"id":25,"orderId":5,"amount":0.58,"paymentMethod":"paymentMethod 5","paymentDate":"2023-09-28T04:21:44.064Z","paymentStatus":"paymentStatus 5"}],"Reviews":[{"id":94,"productId":1,"customerId":1,"vendorId":1,"rating":0.13,"reviewDetails":"reviewDetails 1","date":"2024-01-13T04:16:58.023Z"},{"id":84,"productId":2,"customerId":2,"vendorId":2,"rating":0,"reviewDetails":"reviewDetails 2","date":"2025-02-10T04:28:07.907Z"},{"id":98,"productId":3,"customerId":3,"vendorId":3,"rating":0.3,"reviewDetails":"reviewDetails 3","date":"2023-11-06T04:03:53.345Z"},{"id":59,"productId":4,"customerId":4,"vendorId":4,"rating":0.15,"reviewDetails":"reviewDetails 4","date":"2023-12-31T01:59:21.020Z"},{"id":72,"productId":5,"customerId":5,"vendorId":5,"rating":0.58,"reviewDetails":"reviewDetails 5","date":"2023-11-27T20:34:58.201Z"}],"SupportTickets":[{"id":15,"userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2023-02-23T12:06:10.368Z","resolutionDate":"2024-12-07T14:23:03.933Z"},{"id":41,"userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2024-06-27T15:20:46.598Z","resolutionDate":"2023-02-18T06:43:53.802Z"},{"id":27,"userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2024-02-28T17:44:51.467Z","resolutionDate":"2023-06-04T22:57:57.491Z"},{"id":1,"userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2024-01-24T01:10:28.521Z","resolutionDate":"2023-02-28T10:31:14.589Z"},{"id":58,"userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2024-01-30T01:36:13.113Z","resolutionDate":"2024-04-25T16:06:28.513Z"}]};
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

