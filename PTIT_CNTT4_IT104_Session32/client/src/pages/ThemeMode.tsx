import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ThemeMode() {
  const themeMode = useSelector((state) => state.themeMode);
  const dispatch = useDispatch();

  const handleSetMode = () => {
    dispatch({ type: "SET_MODE" });
  };

  return (
    <div
      className={`w-screen h-screen flex items-center gap-2 px-4 ${
        themeMode ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <input type="checkbox" checked={themeMode} onChange={handleSetMode} />
      <label>{themeMode ? " Sáng" : " Tối"}</label>
    </div>
  );
}
