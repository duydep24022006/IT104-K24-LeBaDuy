import React from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
export default function ListUser() {
  const listUser = useSelector((state) => state.listUser);
  return (
    <div>
      import Table from 'react-bootstrap/Table';
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((user: any) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.male}</td>

              <td>{user.date}</td>
              <td>{user.address}</td>
              <td className="d-flex gap-2">
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
