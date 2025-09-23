import {
  DashboardOutlined,
  UserOutlined,
  DollarOutlined,
  BarChartOutlined,
  FileTextOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { mode } from "../store/slices/MenuNavbaSlice";

export default function MenuNavba() {
  const result = useSelector((data: any) => data.menu.mode);
  console.log(result);

  const dispatch = useDispatch();
  const handleOnNav = () => {
    dispatch(mode());
  };

  return (
    <div className="w-screen h-auto">
      <div
        className={`${
          result === "expanded" ? "w-64" : "w-14"
        } bg-[#041433] text-white p-3  flex flex-col gap-4`}
      >
        <div>
          <DashboardOutlined />
          {result === "expanded" ? <span> Bảng điều khiển</span> : ""}
        </div>
        <div>
          <UserOutlined />
          {result === "expanded" ? <span> Tài khoản</span> : ""}
        </div>
        <div>
          <DollarOutlined />
          {result === "expanded" ? <span> Tài sản</span> : ""}
        </div>
        <div>
          <BarChartOutlined />
          {result === "expanded" ? <span>Thống kê</span> : ""}
        </div>
        <div>
          <FileTextOutlined />
          {result === "expanded" ? <span>Tài liệu</span> : ""}{" "}
        </div>
        <div onClick={handleOnNav}>
          {result === "expanded" ? (
            <div>
              <LeftOutlined /> <span>Thu gọn</span>
            </div>
          ) : (
            <RightOutlined />
          )}{" "}
        </div>
      </div>
      <div></div>
    </div>
  );
}
