import React, { useMemo } from "react";
const users = [
  { id: 1, name: "test1", age: 19 },
  { id: 2, name: "test2", age: 20 },
  { id: 3, name: "test3", age: 10 },
];
export default function UserList() {
  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        return user.age > 18;
      }),
    []
  );
  return (
    <div>
      <h2>Mảng ban đầu</h2>
      <div>
        {users.map((item) => (
          <p>
            Id :{item.id}, Tên:{item.name}, Tuổi:{item.age}
          </p>
        ))}
      </div>
      <h2>Mảng sau khi lọc</h2>
      <div>
        {filteredUsers.map((item) => (
          <p>
            Id :{item.id},Tên:{item.name},Tuổi:{item.age}
          </p>
        ))}
      </div>
    </div>
  );
}
