import React from 'react'

export default function Ex05() {
  return (
    <div className="w-[300px] h-[300px] bg-blue-200 rounded-[5px] border-blue-400 border-1">
      <div className="w-[250px] h-[250px] bg-blue-300 rounded-[5px] border-blue-500 border-1 m-[25px] relative">
        <p className=" text-blue-600 font-semibold absolute top-5 left-5">Relative parent</p>
        <button className="text-white absolute left-0 bottom-0 bg-[#4bc4fc] hover:bg-[#36b3f7] rounded-[10px] p-3 font-semibold  ">
          Absolute child
        </button>
      </div>
    </div>
  ); 
}
