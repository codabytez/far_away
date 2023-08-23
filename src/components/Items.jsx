const Items = ({
  id,
  description,
  quantity,
  onDeleteItem,
  onToggleItem,
  packed,
}) => {
  return (
    <li
      className={`relative border-b border-[#ffd700] px-6 py-2 pt-6 w-[90%] m-auto ${
        packed ? "line-through" : "none"
      } decoration-double`}
    >
      <input type="checkbox" value={packed} onChange={() => onToggleItem(id)} />
      <span className="inline-block text-center p-1.5 px-2.5 mx-6 bg-[#ffd700] rounded">
        {quantity}
      </span>
      <span>{description}</span>
      <button
        className="absolute text-[#ffd700] font-bold right-4 bottom-2 cursor-pointer hover:text-red-700"
        onClick={() => onDeleteItem(id)}
      >
        X
      </button>
    </li>
  );
};

export default Items;
