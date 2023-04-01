import React, { useState } from 'react';
import AddButton from './components/AddButton.jsx';
import SearchButton from './components/SearchButton.jsx';
import ItemList from './components/ItemList.jsx';
import Item from './components/Item.jsx';
import './styles.css';
function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <h1>CRUD App</h1>
      <AddButton items={items} setItems={setItems} />
      <SearchButton items={items} setItems={setItems} />
      <ItemList items={items} setItems={setItems} />
    </div>
  );
}

export default App;