import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PckingList from "./components/PckingList";
import Status from "./components/Status";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirm = window.confirm("Are you sure you want to delete all item");
    if (confirm) setItems([]);
  };

  return (
    <div className="text-center bg-[url('./images/bg.jpg')] bg-cover h-screen">
      <div className="w-6/12 h-full ml-[100px] py-10 flex flex-col gap-5">
        <Logo />
        <Form onAddItem={handleAddItem} />
        <PckingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        />
        <Status items={items} />
      </div>
    </div>
  );
}
export default App;
