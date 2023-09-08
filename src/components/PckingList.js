import React, { useState } from "react";
import Item from "./Item"


export default function PckingList({ items, onDeleteItem, onToggleItem, onClearList }) {
    const [sortBy, setSotbay] = useState("input");
    let sortedItems;
    if (sortBy === "input") {
      sortedItems = items;
    } else if (sortBy === "packed") {
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
    } else {
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    }
    return (
      <div className=" min-h-[500px] w-8/12 m-auto flex flex-col justify-between gap-10 py-5">
        <ul className="flex flex-col gap-2 overflow-auto">
          {sortedItems.map((item) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              key={item.id}
            />
          ))}
        </ul>
        <div>
          <select
            value={sortBy}
            onChange={(e) => setSotbay(e.target.value)}
            className="py-2 px-4 rounded-full mr-5 outline-none bg-[#F8F0E5]"
          >
            <option value="input">SORT BY INOUT ORDER</option>
            <option value="description">SORT BY DESCRIPTION ORDER</option>
            <option value="packed">SORT BY PACKED ORDER</option>
          </select>
          <button
            className="px-8 py-2 bg-[#F8F0E5] hover:bg-[#0F2C59] hover:text-white rounded-full"
            onClick={onClearList}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }