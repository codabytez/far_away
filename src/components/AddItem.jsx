import { useState } from "react";

const AddItem = ({ onAddItems }) => {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  const handleSetQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleSetDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      quantity,
      description,
      packed: false,
      id: Date.now(),
    };
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };
  return (
    <div className="w-[90%] m-auto border-b-2 pb-2">
      <h3 className="text-xl p-2">What do you need for your trip?</h3>
      <form onSubmit={handleSubmit}>
        <select
          className="border bg-[#FFECF5] mx-2 h-8 rounded"
          value={quantity}
          onChange={handleSetQuantity}
        >
          {new Array(20).fill(0).map((_, i) => (
            <option key={i}>{i + 1}</option>
          ))}
        </select>
        <input
          className="border bg-[#FFECF5] mx-2 h-8 px-2 rounded"
          type="text"
          placeholder="Item..."
          value={description}
          onChange={handleSetDescription}
        />
        <button className="border-[3px] px-6 rounded-md text-[#ffd700] border-[#ffd700] bg-[#777] h-8">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddItem;
