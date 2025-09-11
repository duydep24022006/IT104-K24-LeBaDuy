import { createBrowserRouter } from "react-router-dom";
import Register from "./page/Register";
import Login from "./page/Login";
import Layout08 from "./layout/Layout08";

//bài 1
// import Home from "./page/Home";
// import About from "./page/About";
// import Contact from "./page/Contact";
// import Layout01 from "./layout/Layout01";

//Bài 2
// import Layout02 from "./layout/Layout02";
// import ProductList from "./page/ProductList";
// import ProductDetail from "./page/ProductDetail";

//Bài 3
// import Layout03 from "./layout/Layout03";
// import TaskList from "./page/TaskList";
// import TaskDetail from "./page/TaskDetail";

//bài 4
// import Layout04 from "./layout/Layout04";
// import ProductList04 from "./page/ProductList04";

//bài 5
// import Layout05 from "./layout/Layout05";
// import Posts from "./page/Posts";
// import PostDetail from "./page/PostDetail";

//bài 6
// import Layout06 from "./layout/Layout06";
// import Home from "./page/Home";
// import Product from "./page/Product";
// import Detail from "./page/Detail";

//Bài 7
// import About07 from "./page/About07";
// import Layout07 from "./layout/Layout07";
// import Home07 from "./page/Home07";
// import NotFount from "./page/NotFount";

export const routes = createBrowserRouter([
  //     {
  //       //bài 1
  //     path: "/",
  //     element: <Layout01 />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />,
  //       },
  //       {
  //         path: "about",
  //         element: <About />,
  //       },
  //       {
  //         path: "contact",
  //         element: <Contact />,
  //       },
  //     ],
  //   },
  //     {
  //       //bài 2
  //     path: "/products",
  //     element: <Layout02 />,
  //     children: [
  //       {
  //         index: true,
  //         element: <ProductList />,
  //       },
  //       {
  //         path:":id",
  //         element: <ProductDetail />,
  //       },
  //     ],
  //   },
  //   {
  ////Bài 3
  //     path: "/",
  //     element: <Layout03 />,
  //     children: [
  //       {
  //         index: true,
  //         element: <TaskList />,
  //       },
  //       {
  //           path: "task/:id",
  //           element:<TaskDetail/>
  //       },
  //     ],
  //   },
  //     {
  //       //bài 4
  //     path: "/products",
  //     element: <Layout04 />,
  //     children: [
  //       {
  //         index: true,
  //         element: <ProductList04 />,
  //       },
  //       {
  //         path: ":name",
  //         element: <ProductList04 />,
  //       },
  //     ],
  //   },
  //     {
  //       //Bài5
  //     path: "/blog/posts",
  //     element: <Layout05 />,
  //     children: [
  //       {
  //         index:true,
  //         element: <Posts />,
  //       },
  //       {
  //         path: ":id",
  //         element: <PostDetail />,
  //       },
  //     ],
  //   },
  //     {
  //       //Bài 06
  //     path: "/",
  //     element: <Layout06 />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />,
  //       },
  //       {
  //         path: "/product",
  //         element: <Product />,
  //       },
  //       {
  //         path: "/detail",
  //         element: <Detail />,
  //       },
  //     ],
  //   },
  //     {
  //     //Bài 7
  //     path: "/",
  //     element: <Layout07 />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home07 />,
  //       },
  //       {
  //         path: "about",
  //         element: <About07 />,
  //       },
  //       {
  //         path: "*",
  //         element: <NotFount />,
  //       },
  //     ],
  //   },
  {
    path: "/",
    element: <Layout08 />,
    children: [
      {
        index:true,
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
