"use strict";
class Customer {
    constructor(name, email, shippingAddress) {
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
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
Customer.counter = 0;
class Product {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    sell(quantity) {
        if (quantity <= 0) {
            return null;
        }
        if (this.stock - quantity > 0) {
            return (this.stock -= quantity);
        }
        else {
            return null;
        }
    }
    restock(quantity) {
        if (quantity <= 0) {
            return null;
        }
        return (this.stock += quantity);
    }
    getPrice() {
        return this.price;
    }
}
class ElectronicsProduct extends Product {
    constructor(name, price, stock, warrantyPeriod) {
        super(++ElectronicsProduct.counter, name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    sell(quantity) {
        return super.sell(quantity);
    }
    restock(quantity) {
        return super.restock(quantity);
    }
    getProductInfo() {
        return `warranty period:${this.warrantyPeriod}`;
    }
    getShippingCost(distance) {
        if (distance < 0) {
            return 0;
        }
        else {
            return 50000 * distance;
        }
    }
    getCategory() {
        return "Electronics";
    }
}
ElectronicsProduct.counter = 0;
class ClothingProduct extends Product {
    constructor(name, price, stock, size, color) {
        super(++ClothingProduct.counter, name, price, stock);
        this.size = size;
        this.color = color;
    }
    sell(quantity) {
        return super.sell(quantity);
    }
    restock(quantity) {
        return super.restock(quantity);
    }
    getProductInfo() {
        return `Size:${this.size},Color:${this.color}`;
    }
    getShippingCost(distance) {
        if (distance < 0) {
            return 0;
        }
        else {
            return 25000 * distance;
        }
    }
    getCategory() {
        return "Clothing";
    }
}
ClothingProduct.counter = 0;
class Order {
    constructor(customer, products, totalAmount) {
        this.customer = customer;
        this.products = products;
        this.totalAmount = totalAmount;
        this.orderId = ++Order.counter;
    }
    getDetails() {
        console.log(`Id: ${this.orderId}`);
        console.log(`Customer: ${this.customer}`);
        console.log(`Products:`);
        this.products.forEach((item) => {
            console.log(`- ${item.product.name} | Qty: ${item.quantity} | Price: ${item.product.getPrice()}`);
        });
        console.log(`Total Amount: ${this.totalAmount}`);
    }
}
Order.counter = 0;
class Store {
    constructor(products, customers, orders) {
        this.products = products;
        this.customers = customers;
        this.orders = orders;
    }
    addProduct(product) {
        this.products.push(product);
    }
    addCustomer(name, email, address) {
        this.customers.push(new Customer(name, email, address));
    }
    createOrder(customerId, productQuantities) {
        const customer = this.customers.find((item) => item.id == customerId);
        if (!customer)
            return null;
        const orderItem = [];
        let total = 0;
        for (const { productId, quantity } of productQuantities) {
            const product = this.products.find((item) => item.id == productId);
            if (!product || product.sell(quantity) === null)
                return null;
            orderItem.push({ product, quantity });
            total += quantity * product.price;
        }
        const order = new Order(customerId, orderItem, total);
        this.orders.push(order);
        return order;
    }
    cancelOrder(orderId) {
        const orderIndex = this.orders.findIndex((item) => item.orderId === orderId);
        if (orderIndex == -1) {
            console.log(`không tìm thấy orderId:${orderId}`);
            return;
        }
        const order = this.orders[orderIndex];
        order.products.forEach((d) => d.product.restock(d.quantity));
        this.orders.splice(orderIndex, 1);
        console.log("hủy hàng thành công");
    }
    listAvailableProducts() {
        const productsList = this.products.filter((item) => item.stock > 0);
        productsList.forEach((item) => {
            console.log(`Name: ${item.name}- số lượng :${item.stock}`);
        });
    }
    listCustomerOrders(customerId) {
        const customerUser = this.customers.filter((item) => item.id === customerId);
        if (customerUser.length === 0) {
            console.log("khách không có đơn hàng nào");
        }
        customerUser.forEach((item) => {
            item.getDetails();
        });
    }
    calculateTotalRevenue() {
        return this.orders.reduce((sum, order) => {
            const orderTotal = order.products.reduce((orderSum, item) => orderSum + item.product.getPrice() * item.quantity, 0);
            return sum + orderTotal;
        }, 0);
    }
    countProductsByCategory() {
        let electronics = 0;
        let clothing = 0;
        const productMap = this.products.map((item) => {
            if (item.getCategory() === "Electronics") {
                electronics += item.stock;
            }
            else {
                clothing += item.stock;
            }
        });
        console.log(`Electronics:  ${electronics}`);
        console.log(`Clothing:  ${clothing}`);
    }
    updateProductStock(productId, newStock) {
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
let choice;
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
            order === null || order === void 0 ? void 0 : order.getDetails();
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
            console.log(prod === null || prod === void 0 ? void 0 : prod.getProductInfo());
            break;
        case 12:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
    }
} while (choice !== 12);
