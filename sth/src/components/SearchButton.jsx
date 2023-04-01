import React, { useState } from 'react';

const SearchButton = ({ items, setItems }) => {
  const [showInput, setShowInput] = useState(false);
  const [searchDate, setSearchDate] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchItems = () => {
    const results = items.filter((item) => {
      const matchDate = searchDate === '' || item.date === searchDate;
      const matchName = searchName === '' || item.name === searchName;
      return matchDate && matchName;
    });
    setSearchResults(results);
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
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => setShowInput(true)}>Search</button>
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>{result.name}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchButton;
