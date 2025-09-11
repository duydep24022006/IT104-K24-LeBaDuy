

//bài3
export interface IDataTask {
  id: number;
  title: string;
  description: string;
}

export const tasks: IDataTask[] = [
  {
    id: 1,
    title: "Học React Router",
    description: "Làm quen với Dynamic Routes và useNavigate",
  },
  {
    id: 2,
    title: "Ôn lại Tailwind",
    description: "Thực hành tạo UI cơ bản bằng Tailwind CSS",
  },
  {
    id: 3,
    title: "Hoàn thành BTVN",
    description: "Đẩy code lên GitHub và nộp link",
  },
];

export interface IProducts {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: IProducts[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 29990000,
    description: "Điện thoại cao cấp với chip A17 Pro và camera tiên tiến.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    price: 26990000,
    description: "Smartphone flagship của Samsung với camera 200MP.",
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 28990000,
    description: "Laptop mỏng nhẹ với chip Apple M2 hiệu năng mạnh mẽ.",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 25990000,
    description: "Laptop siêu mỏng với màn hình InfinityEdge sắc nét.",
  },
  {
    id: 5,
    name: "iPad Pro 12.9",
    price: 31990000,
    description: "Máy tính bảng cao cấp với màn hình Liquid Retina XDR.",
  },
];

// src/components/posts.ts
export interface IPost {
  id: number;
  title: string;
  excerpt: string;
}

export const posts: IPost[] = [
  {
    id: 1,
    title: "Bắt đầu với React",
    excerpt: "Giới thiệu cơ bản về React và cách tạo component đầu tiên.",
  },
  {
    id: 2,
    title: "Hiểu về React Router",
    excerpt: "Cách định tuyến và điều hướng trong ứng dụng React.",
  },
  {
    id: 3,
    title: "Làm quen với TypeScript",
    excerpt: "Học cách dùng TypeScript để viết code an toàn hơn.",
  },
  {
    id: 4,
    title: "Styling với Tailwind CSS",
    excerpt: "Cách áp dụng Tailwind để tạo UI nhanh chóng và đẹp mắt.",
  },
  {
    id: 5,
    title: "State Management với Redux",
    excerpt: "Quản lý state phức tạp trong ứng dụng React bằng Redux.",
  },
];
