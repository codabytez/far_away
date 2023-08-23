import React from "react";
import { FaClipboardList } from "react-icons/fa";

const ClearList = ({ items, onClearList, sortBy, onSortedBy }) => {
  if (!items.length)
    return (
      <div className="flex flex-col justify-center items-center h-[300px] my-10">
        <FaClipboardList className="text-[10rem] text-gray-500 p-10" />
        <p className="w-[80%] text-center font-semibold">
          You don't have Item registered yet Create Items and organize your
          to-do items
        </p>
      </div>
    );
  return (
    <div className="absolute bottom-20 left-[15%]">
      <div className="mx-2 inline-block">
        <button
          onClick={onClearList}
          className="p-4 text-lg px-6 border rounded-md transition-all hover:bg-gray-500"
        >
          Clear List
        </button>
      </div>
      <div className="mx-2 inline-block">
        <select
          value={sortBy}
          onChange={onSortedBy}
          className="p-4 border rounded-md transition-all hover:bg-gray-500"
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
};

export default ClearList;
