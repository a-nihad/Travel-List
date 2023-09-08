
export default function Item({ item, onDeleteItem, onToggleItem }) {
    return (
      <div className=" flex justify-between gap-2 px-5 py-2 bg-white hover:bg-[#F8F0E5] w-4/6 m-auto rounded-lg capitalize">
        <div className="flex gap-2 ">
          <input
            type="checkbox"
            value={item.packed}
            onChange={() => onToggleItem(item.id)}
          />
          <h1 className={item.packed ? "line-through text-red-500 font-medium" : ""}>
            {item.description}
          </h1>
        </div>
        <button onClick={() => onDeleteItem(item.id)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    ); 
  }