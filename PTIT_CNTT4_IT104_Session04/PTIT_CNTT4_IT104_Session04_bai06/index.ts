type Product = {
     id: string;
     name: string;
     price: number;
     category: {
       id: string;
       name: string;
    };
     discount?: number; 
};

const listProduct: Product[] = [
  {
    id: "p001",
    name: "Áo sơ mi nam",
    price: 350000,
    category: {
      id: "c001",
      name: "Thời trang nam"
    },
    discount: 10
  },
  {
    id: "p002",
    name: "Giày thể thao nữ",
    price: 800000,
    category: {
      id: "c002",
      name: "Giày dép"
    }
    // không có giảm giá
  },
  {
    id: "p003",
    name: "Tai nghe Bluetooth",
    price: 1200000,
    category: {
      id: "c003",
      name: "Phụ kiện công nghệ"
    },
    discount: 25
  }
];
const getFinalPrice = (product: Product): Product => {
    product.discount == undefined ? product.price : product.price = product.price * (1 - product.discount / 100);
    return product;
}

const printProductInfo = (product: Product) => {
    console.log(`Tên ${product.name}`);
    console.log(`giá gốc: ${product.price} VND`);
    product=getFinalPrice(product);
    console.log(`giá sau giảm:${product.price}`);
    console.log(`Danh mục:${product.category.name}`);
}
printProductInfo(listProduct[0]);
printProductInfo(listProduct[1]);
printProductInfo(listProduct[2]);
