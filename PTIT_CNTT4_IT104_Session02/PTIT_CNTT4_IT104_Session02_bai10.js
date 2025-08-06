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

  const details = products.map(
    ({
      name,
      price,
      discount,
      quantity,
      bulkDiscount = { minQuantity: 0, extraDiscount: 0 }, 
    }) => {
      const { minQuantity, extraDiscount } = bulkDiscount;

      const totalDiscount =
        quantity >= minQuantity ? discount + extraDiscount : discount;

      const rawFinalPrice = price * (1 - totalDiscount);
      const finalPrice = Math.round(rawFinalPrice);
      const subtotal = finalPrice * quantity;

      totalBeforeDiscount += price * quantity;
      totalAfterDiscount += subtotal;

      return {
        name,
        finalPrice,
        quantity,
        subtotal,
      };
    }
  );

  return {
    totalBeforeDiscount,
    totalAfterDiscount,
    details,
  };
}


console.log(getOrderSummary(products));
