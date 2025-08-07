"use strict";
function calculateOrderTotal(order) {
    let total = 0;
    for (const item of order.items) {
        total += item.product.price * item.quantity;
    }
    return total;
}
function calculateInvoiceTotal(invoice) {
    let total = 0;
    for (const order of invoice.orders) {
        total += total += calculateOrderTotal(order);
    }
    return total;
}
const getUnpaidOrders = (invoice) => {
    return invoice.orders.filter(order => !order.isPaid);
};
const printOrder = (order) => {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:`);
    for (const item of order.items) {
        const lineTotal = item.product.price * item.quantity;
        const formatted = lineTotal.toLocaleString("vi-VN"); // format tiền VND
        console.log(`- ${item.product.name} x ${item.quantity} → ${formatted} VND`);
    }
    const total = calculateOrderTotal(order).toLocaleString("vi-VN");
    console.log(`Tổng cộng: ${total} VND`);
    console.log(`Trạng thái: ${order.isPaid ? "Đã thanh toán" : "Chưa thanh toán"}`);
};
const printInvoice = (invoice) => {
    console.log(`HÓA ĐƠN: ${invoice.invoiceId} - Ngày tạo: ${invoice.createdAt.toLocaleDateString()}`);
    console.log("---------------------------");
    for (const order of invoice.orders) {
        printOrder(order);
    }
    const invoiceTotal = calculateInvoiceTotal(invoice).toLocaleString("vi-VN");
    console.log(`>> Tổng cộng hóa đơn: ${invoiceTotal} VND`);
};
// Tạo sản phẩm
const shirt = { id: "p1", name: "Áo sơ mi", price: 250000 };
const jeans = { id: "p2", name: "Quần jean", price: 400000 };
const dress = { id: "p3", name: "Váy hoa", price: 700000 };
const order1 = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    deliveryAddress: "123 Lê Lợi",
    isPaid: true,
    items: [
        { product: shirt, quantity: 2 },
        { product: jeans, quantity: 1 }
    ]
};
const order2 = {
    orderId: "ORD002",
    customerName: "Trần Thị B",
    deliveryAddress: "456 CMT8",
    isPaid: false,
    items: [
        { product: dress, quantity: 1, note: "size M" }
    ]
};
const invoice = {
    invoiceId: "INV001",
    createdAt: new Date("2024-05-14"),
    orders: [order1, order2]
};
printInvoice(invoice);
