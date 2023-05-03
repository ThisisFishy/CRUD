import React, { useState, useEffect } from 'react';
import Item from './Item';
import ItemList from './ItemList';

const SearchButton = ({ items, updateItem, deleteItem }) => {
  const [showInput, setShowInput] = useState(false);
  const [searchDate, setSearchDate] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    if (searchPerformed) {
      searchItems();
    }
  }, [items]);

  const searchItems = () => {
    const results = items.filter((item) => {
      const matchDate = searchDate === '' || item.date === searchDate;
      const matchName = searchName === '' || item.name === searchName;
      return matchDate && matchName;
    });
    setShowInput(true);
    setSearchResults(results);
    setSearchPerformed(true);
    
  };

  if (showInput) {
    return (
      <div>
        <div className="form-row">
          <div className="form-group">
            <label>Date:</label>
            <input type="date" value={searchDate} onChange={(e) => setSearchDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
          </div>
        </div>
        <button onClick={searchItems}>Search</button>
        <button onClick={() => setShowInput(false)}>Close</button>
        {searchResults.map((item) => (
          <Item key={item.id} item={item} updateItem={updateItem} deleteItem={deleteItem} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => setShowInput(true)}>Searchhhhh</button>
    </div>
  );
};

export default SearchButton;
