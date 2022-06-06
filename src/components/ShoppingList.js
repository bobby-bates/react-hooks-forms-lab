import React, { useState } from "react";
import { v4 as uuid } from 'uuid'
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  // ItemForm states:
  const [name, setName] = useState('')
  const defaultCategory = 'Produce'
  const [newItemCategory, setnewItemCategory] = useState(defaultCategory)
  const [itemsList, setItemsList] = useState(items)

  // Filter states:
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchStr, setSearchStr] = useState('')

    const handleNameChange = e => setName(e.target.value)
    const handleNewItemCategory = e => setnewItemCategory(e.target.value)
  const handleItemFormSubmit = e => {
    e.preventDefault()
    // debugger
    const newItem = {
      id: uuid(),
      name: name,
      category: newItemCategory }
    const updatedListArr = [...itemsList, newItem]
    setItemsList(updatedListArr)
    setName('')
    setnewItemCategory(defaultCategory)
  }

  const handleSearchChange = e => setSearchStr(e.target.value)
  const handleCategoryChange = e => setSelectedCategory(e.target.value)

  // TODO: Sort out logic here
  const itemsToDisplay = itemsList.filter((item) => {
    if (item === searchStr) return true
    else if (selectedCategory === "All" && searchStr === '') return true;
    else return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm
        name={name}
        newItemCategory={newItemCategory}
        onNameChange={handleNameChange}
        onNewItemCategory={handleNewItemCategory}
        onItemFormSubmit={handleItemFormSubmit}
      />
      <Filter
        search={searchStr}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
