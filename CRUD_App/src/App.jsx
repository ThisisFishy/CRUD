import React, { useState } from 'react';
import AddButton from './components/AddButton.jsx';
import SearchButton from './components/SearchButton.jsx';
import ItemList from './components/ItemList.jsx';
import './styles.css';

function App() {
  const [items, setItems] = useState([]);

  const updateItem = (id, updatedItem) => {
    const newItems = items.map((item) => (item.id === id ? updatedItem : item));
    setItems(newItems);
  };

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div className="app">
      <div className="title">
        <h1>CRUD APP</h1>
      </div>
      <div className="interface">
        <div className="add-part">
          <AddButton items={items} setItems={setItems} />
          <h2>Recent add:</h2>
          <ItemList items={items} setItems={setItems} updateItem={updateItem} deleteItem={deleteItem} />
        </div>
        <div className="search-part">
          <SearchButton items={items} updateItem={updateItem} deleteItem={deleteItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
