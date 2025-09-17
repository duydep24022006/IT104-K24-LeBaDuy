import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import type { Port } from "./ManagerPost";

type Props = {
  ports: Port[];
  handleStatus: (id: number) => void;
};
export function PortList({ ports, handleStatus }: Props) {
  return (
    <Table striped bordered variant="dark">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tiêu đề</th>
          <th>Hình ảnh</th>
          <th>Ngày viết</th>
          <th>Trạng thái</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      {ports.length > 0 ? (
        <tbody>
          {ports.map((port, index) => (
            <tr key={port.id}>
              <td>{index + 1}</td>
              <td>{port.title}</td>
              <td>
                <img
                  src={port.image}
                  alt={port.image}
                  className="rounded-[60%]  w-[50px] h-[50px]"
                />
              </td>
              <td>{port.date}</td>
              <td>
                {port.status ? (
                  <Button variant="outline-success">Đã xuất bản</Button>
                ) : (
                  <Button variant="outline-danger">Đã chặn</Button>
                )}
              </td>

              <td className="flex gap-2 h-[67px]">
                <Button variant="primary" onClick={() => handleStatus(port.id)}>
                  Chặn
                </Button>
                <Button variant="outline-warning">Sửa</Button>
                <Button variant="outline-danger">Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
        <td colSpan={6} className="text-center text-[20px] py-3 text-red-600 ">
          Không có kết quả tìm kiếm
        </td>
      )}
    </Table>
  );
}
