import React, { useState } from 'react';
import useStore from './zustand';
import "./App.css"
const App = () => {
  const [newItem, setNewItem] = useState({ id: '', name: '' });
  const items = useStore((state) => state.items);
  const addItem = useStore((state) => state.addItem);
  const updateItem = useStore((state) => state.updateItem);
  const deleteItem = useStore((state) => state.deleteItem);

  const handleAddItem = () => {
    addItem(newItem);
    setNewItem({ id: '', name: '' });
  };

  const handleUpdateItem = (id) => {
    const updatedName = prompt('Enter new name:', '');
    if (updatedName) {
      updateItem(id, { name: updatedName });
    }
  };

  const handleDeleteItem = (id) => {
    deleteItem(id);
  };

  return (
    <div className='content'>
      <h1 className='text'>CRUD</h1>

      <input
        type="text"
        placeholder="ID"
        value={newItem.id}
        onChange={(e) => setNewItem({ ...newItem, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Name"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
      />
      <button onClick={handleAddItem}>Add Item</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <button onClick={() => handleUpdateItem(item.id)}>Edit</button>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
