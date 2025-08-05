const products = [
  { name: "A", price: 100, discount: 0.1, quantity: 2 },
  {
    name: "B",
    price: 200,
    discount: 0.2,
    quantity: 1,
    bulkDiscount: { minQuantity: 2, extraDiscount: 0.05 },
  },
  {
    name: "C",
    price: 300,
    discount: 0.2,
    quantity: 3,
    bulkDiscount: { minQuantity: 2, extraDiscount: 0.1 },
  },
];

function getOrderSummary(products) {
  let totalBeforeDiscount = 0;
  let totalAfterDiscount = 0;
  const details = [];

  for (const product of products) {
    const { name, price, discount, quantity, bulkDiscount } = product;

    let finalPrice;

    if (bulkDiscount && quantity >= bulkDiscount.minQuantity) {
      finalPrice = price * (1 - bulkDiscount.extraDiscount);
    } else {
      finalPrice = price * (1 - discount);
    }

    const roundedFinalPrice = Math.round(finalPrice);
    const subtotal = roundedFinalPrice * quantity;

    totalBeforeDiscount += price * quantity;
    totalAfterDiscount += subtotal;

    details.push({
      name,
      finalPrice: roundedFinalPrice,
      quantity,
      subtotal,
    });
  }

  return {
    totalBeforeDiscount,
    totalAfterDiscount,
    details,
  };
}

console.log(getOrderSummary(products));
