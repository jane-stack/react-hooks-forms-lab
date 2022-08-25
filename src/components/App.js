import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  // Inital state for items array;
  const [items, setItems] = useState(itemData);
  // Initial state for toggling light/dark mode;
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handles light/dark mode toggling;
  const handleDarkModeClick = () => {
    setIsDarkMode ((isDarkMode) => !isDarkMode);
  }

  // Handle adding new items into the items array;
  const addItems = (newItem) => {
    const newItemArray = [...items, newItem];
    setItems(newItemArray);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={addItems}/>
    </div>
  );
}

export default App;