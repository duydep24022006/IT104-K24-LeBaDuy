import React from 'react'
type Props = {
  filter: "all" | "completed" | "active";
  onFilterChange: (filter: "all" | "completed" | "active") => void;
};
export default function TodoFilters({ filter, onFilterChange }: Props) {
  return (
    <div className="flex justify-center gap-2 mb-4 shadow-2xl p-3 rounded-[5px]">
      <button
        className={`btn ${
          filter === "all" ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={() => onFilterChange("all")}
      >
        Tất cả
      </button>
      <button
        className={`btn ${
          filter === "completed" ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={() => onFilterChange("completed")}
      >
        Hoàn thành
      </button>
      <button
        className={`btn ${
          filter === "active" ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={() => onFilterChange("active")}
      >
        Đang thực hiện
      </button>
    </div>
  );
}
