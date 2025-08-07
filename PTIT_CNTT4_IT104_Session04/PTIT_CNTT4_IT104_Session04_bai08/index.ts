// Định nghĩa sản phẩm
type Product = {
  readonly id: string;
  name: string;
  price: number;
};

// Định nghĩa một mục trong đơn hàng
type OrderItem = {
  product: Product;
  quantity: number;
};

// Định nghĩa đơn hàng
type Order = {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  note?: string; // Tuỳ chọn
};
function calculateOrderTotal(order: Order): number {
  let total = 0;
  for (const item of order.items) {
    total += item.product.price * item.quantity;
  }
  return total;
}

const printOrder = (order: Order): void => {
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

    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
}
const shirt: Product = { id: "P01", name: "Áo sơ mi", price: 250000 };
const pants: Product = { id: "P02", name: "Quần tây", price: 400000 };

const orderExample: Order = {
  orderId: "ORD001",
  customerName: "Nguyễn Văn A",
  items: [
    { product: shirt, quantity: 2 },
    { product: pants, quantity: 1 },
  ],
  note: "Giao sau 18h",
};
printOrder(orderExample);