import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modeBg } from "../store/slices/onMode";

export default function OnMode() {
  const result = useSelector((data: any) => data.onMode.mode);

  const dispatch = useDispatch();
  const onMode = () => {
    dispatch(modeBg());
  };
  return (
    <div
      className={`w-screen h-screen flex justify-center items-center ${
        result ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <button
        onClick={() => onMode()}
        className={`${result ? "bg-black text-white" : "bg-white text-black"} p-1`}
      >
        {result ? "Sáng" : "Tối"}
      </button>
    </div>
  );
}
