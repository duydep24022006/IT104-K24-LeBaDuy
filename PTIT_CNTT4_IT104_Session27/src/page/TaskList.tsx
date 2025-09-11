import React from 'react'
import { tasks } from '../components/data'
import { Link } from 'react-router-dom'

export default function TaskList() {
  return (
    <div>
      <h2>Danh sách công việc</h2>
      <div>
        {tasks.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link to={`/task/${item.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
