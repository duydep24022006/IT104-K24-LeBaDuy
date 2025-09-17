import React from "react";
type Props = {
  handleComplete: () => void;
};
export default function TodoActions({ handleComplete }: Props) {
  return (
    <div className="flex justify-between">
      <button className="btn btn-danger" onClick={handleComplete}>Xóa công việc hoàn thành</button>
      <button className="btn btn-danger">Xóa tất cả công việc</button>
    </div>
  );
}
