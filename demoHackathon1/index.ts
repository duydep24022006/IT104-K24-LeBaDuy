class Customer {
  private static counter = 0;
  public readonly id: number;
  constructor(
    public name: string,
    private email: string,
    private shippingAddress: string
  ) {
    Customer.counter++;
    this.id = Customer.counter;
  }
  getDetails() {
    console.log(`id:${this.id}`);
    console.log(`name:${this.name}`);
    console.log(`email:${this.email}`);
    console.log(`shippingAddress:${this.shippingAddress}`);
  }
}

abstract class Product {
  constructor(
    public readonly id: number,
    public name: string,
    public price: number,
    public stock: number
  ) {}
  sell(quantity: number): number | null {
    if (quantity <= 0) {
      return null;
    }
    if (this.stock - quantity > 0) {
      return (this.stock -= quantity);
    } else {
      return null;
    }
  }
  restock(quantity: number): number | null {
    if (quantity <= 0) {
      return null;
    }
    return (this.stock += quantity);
  }
  getPrice(): number {
    return this.price;
  }
  public abstract getProductInfo(): string;
  public abstract getShippingCost(distance: number): number;
  public abstract getCategory(): string;
}
class ElectronicsProduct extends Product {
  private static counter = 0;
  constructor(
    name: string,
    price: number,
    stock: number,
    private warrantyPeriod: number
  ) {
    super(++ElectronicsProduct.counter, name, price, stock);
  }
  sell(quantity: number): number | null {
    return super.sell(quantity);
  }
  restock(quantity: number): number | null {
    return super.restock(quantity);
  }
  getProductInfo(): string {
    return `warranty period:${this.warrantyPeriod}`;
  }
  getShippingCost(distance: number): number {
    if (distance < 0) {
      return 0;
    } else {
      return 50000 * distance;
    }
  }
  getCategory(): string {
    return "Electronics";
  }
}
class ClothingProduct extends Product {
  private static counter = 0;
  constructor(
    name: string,
    price: number,
    stock: number,
    public size: string,
    public color: string
  ) {
    super(++ClothingProduct.counter, name, price, stock);
  }
  sell(quantity: number): number | null {
    return super.sell(quantity);
  }
  restock(quantity: number): number | null {
    return super.restock(quantity);
  }
  getProductInfo(): string {
    return `Size:${this.size},Color:${this.color}`;
  }
  getShippingCost(distance: number): number {
    if (distance < 0) {
      return 0;
    } else {
      return 25000 * distance;
    }
  }
  getCategory(): string {
    return "Clothing";
  }
}

interface OrderItem {
  product: Product;
  quantity: number;
}

class Order {
  private static counter = 0;
  public readonly orderId: number;
  constructor(
    public customer: number,
    public products: OrderItem[],
    public totalAmount: number
  ) {
    this.orderId = ++Order.counter;
  }
  getDetails() {
    console.log(`Id: ${this.orderId}`);
    console.log(`Customer: ${this.customer}`);
    console.log(`Products:`);
    this.products.forEach((item) => {
      console.log(
        `- ${item.product.name} | Qty: ${
          item.quantity
        } | Price: ${item.product.getPrice()}`
      );
    });
    console.log(`Total Amount: ${this.totalAmount}`);
  }
}

class Store {
  constructor(
    public products: Product[],
    public customers: Customer[],
    public orders: Order[]
  ) {}
  addProduct(product: Product): void {
    this.products.push(product);
  }
  addCustomer(name: string, email: string, address: string): void {
    this.customers.push(new Customer(name, email, address));
  }
  createOrder(
    customerId: number,
    productQuantities: { productId: number; quantity: number }[]
  ): Order | null {
    const customer = this.customers.find((item) => item.id == customerId);
    if (!customer) return null;
    const orderItem: OrderItem[] = [];
    let total = 0;
    for (const { productId, quantity } of productQuantities) {
      const product = this.products.find((item) => item.id == productId);
      if (!product || product.sell(quantity) === null) return null;
      orderItem.push({ product, quantity });
      total += quantity * (product as any).price;
    }
    const order = new Order(customerId, orderItem, total);
    this.orders.push(order);
    return order;
  }
  cancelOrder(orderId: number): void {
    const orderIndex = this.orders.findIndex(
      (item) => item.orderId === orderId
    );
    if (orderIndex == -1) {
      console.log(`không tìm thấy orderId:${orderId}`);
      return;
    }
    const order = this.orders[orderIndex];
    order.products.forEach((d) => d.product.restock(d.quantity));
    this.orders.splice(orderIndex, 1);
    console.log("hủy hàng thành công");
  }
  listAvailableProducts(): void {
    const productsList = this.products.filter((item) => item.stock > 0);
    productsList.forEach((item) => {
      console.log(`Name: ${item.name}- số lượng :${item.stock}`);
    });
  }
  listCustomerOrders(customerId: number): void {
    const customerUser = this.customers.filter(
      (item) => item.id === customerId
    );
    if (customerUser.length === 0) {
      console.log("khách không có đơn hàng nào");
    }
    customerUser.forEach((item) => {
      item.getDetails();
    });
  }
  calculateTotalRevenue(): number {
    return this.orders.reduce((sum, order) => {
      const orderTotal = order.products.reduce(
        (orderSum, item) => orderSum + item.product.getPrice() * item.quantity,
        0
      );
      return sum + orderTotal;
    }, 0);
  }
  countProductsByCategory() {
    let electronics = 0;
    let clothing = 0;
    const productMap = this.products.map((item) => {
      if (item.getCategory() === "Electronics") {
        electronics += item.stock;
      } else {
        clothing += item.stock;
      }
    });
    console.log(`Electronics:  ${electronics}`);
    console.log(`Clothing:  ${clothing}`);
  }
  updateProductStock(productId: number, newStock: number): void {
    const product = this.products.find((item) => item.id === productId);
    if (!product) {
      console.log("không tim thấy sản phẩm");
      return;
    }
    product.restock(newStock);
    console.log("cập nhật thành công");
  }
}
const store = new Store([], [], []);
store.addCustomer("Nguyễn Văn A", "a@gmail.com", "Hà Nội");
store.addCustomer("Trần Thị B", "b@gmail.com", "TP.HCM");
store.addProduct(new ElectronicsProduct("Laptop", 15000000, 5, 24));
store.addProduct(new ElectronicsProduct("Điện thoại", 8000000, 10, 12));
store.addProduct(new ClothingProduct("Áo thun", 200000, 50, "L", "Đen"));
store.addProduct(new ClothingProduct("Quần jean", 350000, 30, "M", "Xanh"));

let choice: number;
do {
  console.log("\n=== MENU ===");
  console.log("1. Thêm khách hàng mẫu");
  console.log("2. Thêm sản phẩm mẫu");
  console.log("3. Tạo đơn hàng mẫu");
  console.log("4. Hủy đơn hàng");
  console.log("5. Hiển thị sản phẩm còn hàng");
  console.log("6. Hiển thị đơn hàng khách hàng");
  console.log("7. Tính tổng doanh thu");
  console.log("8. Thống kê sản phẩm theo danh mục");
  console.log("9. Cập nhật tồn kho");
  console.log("10. Tìm sản phẩm theo ID");
  console.log("11. Xem chi tiết sản phẩm");
  console.log("0. Thoát");

  choice = Number(prompt("mời bạn nhập lưa chọn: "));

  switch (choice) {
    case 1:
      store.addCustomer("Nguyễn Văn C", "c@gmail.com", "Đà Nẵng");
      console.log("Đã thêm khách hàng mẫu C");
      break;
    case 2:
      store.addProduct(new ClothingProduct("Áo khoác", 500000, 20, "XL", "Đỏ"));
      console.log("Đã thêm sản phẩm mẫu Áo khoác");
      break;
    case 3:
      const order = store.createOrder(1, [
        { productId: 1, quantity: 1 },
        { productId: 3, quantity: 2 },
      ]);
      order?.getDetails();
      break;
    case 4:
      store.cancelOrder(1);
      break;
    case 5:
      store.listAvailableProducts();
      break;
    case 6:
      store.listCustomerOrders(1);
      break;
    case 7:
      console.log("Tổng doanh thu:", store.calculateTotalRevenue());
      break;
    case 8:
      store.countProductsByCategory();
      break;
    case 9:
      store.updateProductStock(3, 100);
      break;
    case 10:
      const found = store.products.find((p) => p.id === 2);
      console.log(found ? found.getProductInfo() : "Không tìm thấy");
      break;
    case 11:
      const prod = store.products.find((p) => p.id === 1);
      console.log(prod?.getProductInfo());
      break;
    case 12:
      console.log("Thoát chương trình");
      break;
    default:
      console.log("Lựa chọn không hợp lệ");
  }
} while (choice !== 12);
