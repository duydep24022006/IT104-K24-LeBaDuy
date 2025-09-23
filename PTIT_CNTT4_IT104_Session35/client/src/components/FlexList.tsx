import { useDispatch, useSelector } from "react-redux";
import { mode } from "../store/slices/flexListSlice";

export default function FlexList() {
  const result = useSelector((data: any) => data.flexList.mode);
  const dispatch = useDispatch();
  const handleMode = () => {
    dispatch(mode());
  };
  return (
    <div>
      <button
        onClick={() => handleMode()}
        className="border-1 border-black-300 rounded-[10px] p-2 m-2"
      >
        {result === "listMode" ? "Grid mode" : "List mode"}
      </button>
      <div
        className={`flex  w-screen ${
          result === "listMode" ? "" : "flex-col"
        } gap-3 justify-center p-10 `}
      >
        <div className=" text-center bg-red-500 p-2 min-w-50">1</div>
        <div className=" text-center bg-red-500 p-2 min-w-50">2</div>
        <div className=" text-center bg-red-500 p-2 min-w-50">3</div>
        <div className=" text-center bg-red-500 p-2 min-w-50">4</div>
      </div>
    </div>
  );
}
