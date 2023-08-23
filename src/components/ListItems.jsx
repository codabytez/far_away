import { useState } from "react";
import Items from "./Items";

const ListItems = ({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
  sortBy,
  sortedItems,
}) => {
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div>
      <ul>
        {sortedItems.map(({ id, description, quantity, packed }) => (
          <Items
            key={id}
            id={id}
            quantity={quantity}
            description={description}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            packed={packed}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
