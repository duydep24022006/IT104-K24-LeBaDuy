import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ListCourse from "./components/PTIT_CNTT4_IT104_Session12_bai01/ListCourse";
import { Calculation } from "./components/PTIT_CNTT4_IT104_Session12_bai02/Calculation";
import UserInfo from "./components/PTIT_CNTT4_IT104_Session12_bai03/UserInfo";
import ColorBox from "./components/PTIT_CNTT4_IT104_Session12_bai04/ColorBox";
import FormatName from "./components/PTIT_CNTT4_IT104_Session12_bai05/FormatName";
import AdminIndex from "./components/PTIT_CNTT4_IT104_Session12_bai06/AdminIndex";
import UserLayout from "./components/PTIT_CNTT4_IT104_Session12_bai07/UserLayout";
import TodoListIndex from "./components/PTIT_CNTT4_IT104_Session12_bai09/TodoListIndex";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ListCourse /> */}
    {/* <Calculation /> */}
    {/* <UserInfo /> */}
    {/* <ColorBox /> */}
    {/* <FormatName /> */}
    {/* <AdminIndex /> */}
    {/* <UserLayout/> */}

    <TodoListIndex/>
  </StrictMode>
);
