"use strict";
class MenuItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    constructor(id, capacity, available = true) {
        this.id = id;
        this.capacity = capacity;
        this.available = available;
    }
}
class Reservation {
    constructor(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    constructor(id, tableId, items = []) {
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }
    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}
class Restaurant {
    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }
    addMenuItem(item) {
        this.menu.push(item);
    }
    addTable(table) {
        this.tables.push(table);
    }
    makeReservation(customerName, tableId) {
        const table = this.tables.find(t => t.id === tableId);
        if (!table) {
            console.log("Bàn không tồn tại!");
            return;
        }
        if (!table.available) {
            console.log(`Bàn ${tableId} đã được đặt!`);
            return;
        }
        const reservation = new Reservation(Date.now(), customerName, tableId);
        this.reservations.push(reservation);
        table.available = false;
        console.log(`Đặt bàn thành công cho ${customerName} tại bàn ${tableId}`);
    }
    placeOrder(tableId, items) {
        const table = this.tables.find(t => t.id === tableId);
        if (!table || table.available) {
            console.log(`Bàn ${tableId} không tồn tại hoặc chưa được đặt!`);
            return;
        }
        const order = new Order(Date.now(), tableId, items);
        this.orders.push(order);
        console.log(`Đã đặt ${items.length} món cho bàn ${tableId}`);
    }
    generateBill(tableId) {
        const orders = this.orders.filter(order => order.tableId === tableId);
        if (orders.length === 0) {
            console.log(`Không có đơn hàng nào cho bàn ${tableId}`);
            return;
        }
        const total = orders.reduce((sum, order) => sum + order.getTotal(), 0);
        console.log(`Tổng tiền cho bàn ${tableId} là: ${total} VND`);
        const table = this.tables.find(t => t.id === tableId);
        if (table)
            table.available = true;
        this.orders = this.orders.filter(order => order.tableId !== tableId);
    }
}
const restaurant = new Restaurant();
restaurant.addMenuItem(new MenuItem(1, "Phở bò", 40000));
restaurant.addMenuItem(new MenuItem(2, "Bún chả", 35000));
restaurant.addMenuItem(new MenuItem(3, "Cà phê sữa", 20000));
restaurant.addTable(new Table(1, 4));
restaurant.addTable(new Table(2, 2));
restaurant.makeReservation("Nguyễn Văn A", 1);
restaurant.makeReservation("Trần Thị B", 2);
restaurant.placeOrder(1, [
    restaurant.menu[0],
    restaurant.menu[2]
]);
restaurant.placeOrder(2, [
    restaurant.menu[1],
    restaurant.menu[1],
    restaurant.menu[2]
]);
restaurant.generateBill(1);
restaurant.generateBill(2);
