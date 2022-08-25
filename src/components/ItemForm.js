import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  // Initial state for name and category choice;
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("Produce");

  const handleNewName = (e) => {
    setNewName(e.target.value);
  }

  const handleNewCategory = (e) => {
    setNewCategory(e.target.value);
  }
  
  // Handle form submit;
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: newName,
      category: newCategory,
    }
    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewName} value={newName}/>
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce" onChange={handleNewCategory}>Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;