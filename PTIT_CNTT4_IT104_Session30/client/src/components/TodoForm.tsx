import React from "react";
type Props = {
  task: string;
  error: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
};
export default function TodoForm({
  task,
  error,
  handleChange,
  handleSubmit,
}: Props) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mb-4 shadow-2xl p-3 rounded-[5px]"
    >
      <input
        type="text"
        placeholder="Nhập tên công việc"
        className="flex-1 border rounded px-3 py-2"
        value={task}
        onChange={handleChange}
      />
      {error && <p className="text-red-600 m-0">{error}</p>}
      <button type="submit" className="btn btn-primary">
        Thêm công việc
      </button>
    </form>
  );
}
