import React, { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // avoid epmty value
    if (!description) return;

    const newData = {
      description,
      id: Date.now(),
      packed: false,
    };
    onAddItem(newData);
    setDescription("");
  };
  return (
    <form
      className="py-5 flex gap-5 items-center justify-center bg-[#F8F0E5] rounded-xl"
      onSubmit={handleSubmit}
    >
      <h1>What do you need for your trip ?</h1>
      <input
        type="text"
        placeholder="Enter item"
        value={description}
        className="px-5 py-2 rounded-full outline-none"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button className="px-8 py-2 bg-[#0F2C59] text-white rounded-full">
        Add
      </button>
    </form>
  );
}
