import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  // Inital state for a list of selected category;
  const [selectedCategory, setSelectedCategory] = useState("All");
  // Inital state for Filter;
  const [searchItem, setSearchItem] = useState("");

  // Handle the filter by category;
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  // Handle the search by item;
  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);
    console.log(searchItem)
  }

  // Handles what items to display in ul;
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  })
  .filter((item) => {
    if (searchItem === "") return true;
    return item.name.toLowerCase().includes(searchItem.toLowerCase())
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter searchItem={searchItem} onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
