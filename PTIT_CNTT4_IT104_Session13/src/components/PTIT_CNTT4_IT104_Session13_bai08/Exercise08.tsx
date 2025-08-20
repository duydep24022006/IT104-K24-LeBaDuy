import React, { Component } from "react";
import "./Exercise08.css";

class Exercise08 extends Component {
  render() {
    return (
      <div className="todolist-container">
        <h2>Danh sách công việc</h2>

        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên công việc</th>
              <th>Người thực hiện</th>
              <th>Trạng thái</th>
              <th>Thời gian tạo</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Thiết kế giao diện Header</td>
              <td>Nguyễn Văn A</td>
              <td>
                <button className="btn btn-outline-danger">
                  Chưa hoàn thành
                </button>
              </td>
              <td>21/03/2024 13:12:12</td>
              <td>
                <button className="btn btn-outline-warning">Sửa</button>
                <button className="btn btn-outline-danger">Xóa</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Thiết kế giao diện Footer</td>
              <td>Nguyễn Văn B</td>
              <td>
                <button className="btn btn-outline-success">Hoàn thành</button>
              </td>
              <td>21/03/2024 15:10:50</td>
              <td>
                <button className="btn btn-outline-warning">Sửa</button>
                <button className="btn btn-outline-danger">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Exercise08;
