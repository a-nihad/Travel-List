
export default function Status({ items }) {
    const numItem = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const persentage = Math.round((numPacked / numItem) * 100);
    return (
      <h1 className="text-lg font-medium text-[#0F2C59]">
        {!numItem
          ? `Start adding some item to your packing list`
          : persentage === 100
          ? `You got everything! Ready to go `
          : `You have ${numItem} item on your list, and you alredy packed ${numPacked} (
        ${persentage}%)`}
      </h1>
    );
  }