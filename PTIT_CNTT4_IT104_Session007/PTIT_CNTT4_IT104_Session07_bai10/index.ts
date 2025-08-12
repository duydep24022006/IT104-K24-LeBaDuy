class MenuItem {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) {}
}

class Table {
    constructor(
        public id: number,
        public capacity: number,
        public available: boolean = true
    ) {}
}

class Reservation {
    constructor(
        public id: number,
        public customerName: string,
        public tableId: number
    ) {}
}

class Order {
    constructor(
        public id: number,
        public tableId: number,
        public items: MenuItem[] = []
    ) {}

    public getTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

class Restaurant {
    public menu: MenuItem[] = [];
    public tables: Table[] = [];
    public reservations: Reservation[] = [];
    public orders: Order[] = [];

    public addMenuItem(item: MenuItem): void {
        this.menu.push(item);
    }

    public addTable(table: Table): void {
        this.tables.push(table);
    }

    public makeReservation(customerName: string, tableId: number): void {
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

    public placeOrder(tableId: number, items: MenuItem[]): void {
        const table = this.tables.find(t => t.id === tableId);

        if (!table || table.available) {
            console.log(`Bàn ${tableId} không tồn tại hoặc chưa được đặt!`);
            return;
        }

        const order = new Order(Date.now(), tableId, items);
        this.orders.push(order);
        console.log(`Đã đặt ${items.length} món cho bàn ${tableId}`);
    }

    public generateBill(tableId: number): void {
        const orders = this.orders.filter(order => order.tableId === tableId);

        if (orders.length === 0) {
            console.log(`Không có đơn hàng nào cho bàn ${tableId}`);
            return;
        }

        const total = orders.reduce((sum, order) => sum + order.getTotal(), 0);
        console.log(`Tổng tiền cho bàn ${tableId} là: ${total} VND`);

        const table = this.tables.find(t => t.id === tableId);
        if (table) table.available = true;

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
