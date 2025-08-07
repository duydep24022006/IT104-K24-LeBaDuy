"use strict";
function calculateOrderTotal(order) {
    let total = 0;
    for (const item of order.items) {
        total += item.product.price * item.quantity;
    }
    return total;
}
const printOrder = (order) => {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:`);
    for (const item of order.items) {
        const lineTotal = item.product.price * item.quantity;
        const formatted = lineTotal.toLocaleString("vi-VN"); 
        console.log(`- ${item.product.name} x ${item.quantity} → ${formatted} VND`);
    }
    const total = calculateOrderTotal(order).toLocaleString("vi-VN");
    console.log(`Tổng cộng: ${total} VND`);
    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
};
const shirt = { id: "P01", name: "Áo sơ mi", price: 250000 };
const pants = { id: "P02", name: "Quần tây", price: 400000 };
const orderExample = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        { product: shirt, quantity: 2 },
        { product: pants, quantity: 1 },
    ],
    note: "Giao sau 18h",
};
printOrder(orderExample);
