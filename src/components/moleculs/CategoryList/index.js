import React from "react";

export default function CategoryList({ data, isActive }) {
  return (
    <div className="w-full h-14 py-2 flex overflow-x-scroll overflow-y-hidden scrollable bg-white">
      {data.map((item) => {
        return (
          <button onClick={() => isActive(item.id)}>
            <span className="whitespace-nowrap inline px-2 px-4 cursor-pointer">
              {item.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
