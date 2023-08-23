import React from "react";

const Stats = ({ items }) => {
  if (!items.length) return;
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <div className="absolute bottom-[0%] w-full py-5 text-center">
      <p>
        You have {numItems} items on your list, and you already packed{" "}
        {numPacked}({`${percentage}%`})
      </p>
    </div>
  );
};

export default Stats;
