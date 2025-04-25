import React, { useState } from 'react';

function ShoppingList() {
  
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const addItem = () => {
    
    if (!itemName || itemQuantity <= 0) {
      alert('Please enter a valid item name and quantity.');
      return;
    }

    const newItem = {
      name: itemName,
      quantity: itemQuantity
    };

    setItems([...items, newItem]);
    setItemName(''); 
    setItemQuantity('');  
  };

 
  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const clearAll = () => {
    setItems([]);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      
      {}
      <div>
        <input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
          min="1"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      
      {}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity} 
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>

      {}
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
}

export default ShoppingList;
