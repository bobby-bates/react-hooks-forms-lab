import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ 
  name,
  newItemCategory,
  onNameChange,
  onNewItemCategory,
  onItemFormSubmit
}) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onNameChange} value={name} />
      </label>

      <label>
        Category:
        <select 
          name="category"
          onChange={onNewItemCategory}
          value={newItemCategory}
          >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
