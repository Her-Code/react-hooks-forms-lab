import React from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  return (
    <div>
      <select onChange={onCategoryChange} defaultValue="All">
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      <input
        type="text"
        placeholder="Search items"
        value={search}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default Filter;
