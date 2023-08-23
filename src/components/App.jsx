import { useState } from "react";
import Logo from "./Logo";
import AddItem from "./AddItem";
import ListItems from "./ListItems";
import Stats from "./Stats";
import ClearList from "./ClearList";

function App() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("input");

  const handleAddItems = (newItem) => {
    setItems((items) => [...items, newItem]);
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

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  const handleSortedBy = (e) => setSortBy(e.target.value);

  return (
    <div className="relative w-[500px] min-h-[500px] m-auto rounded-md border my-10 bg-gray-400 pb-40">
      <Logo />
      <AddItem onAddItems={handleAddItems} />
      <ListItems
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        sortBy={sortBy}
        sortedItems={sortedItems}
      />
      <ClearList
        items={items}
        onClearList={handleClearList}
        onSortedBy={handleSortedBy}
        sortBy={sortBy}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
