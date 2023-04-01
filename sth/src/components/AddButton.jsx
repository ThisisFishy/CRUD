import React, { useState } from 'react';

const AddButton = ({ items, setItems }) => {
  const [showInput, setShowInput] = useState(false);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [objectList, setObjectList] = useState({ a: '', b: '', c: '' });
  const [quantity, setQuantity] = useState('');

  const addItem = () => {
    const newItem = { id: Date.now(), date, name, objectList, quantity };
    setItems([...items, newItem]);
    setShowInput(false);
  };

  const handleObjectChange = (e, key) => {
    setObjectList({ ...objectList, [key]: e.target.value });
  };

  if (showInput) {
    return (
      <div>
        <div className="form-row">
          <div className="form-group">
            <label>Date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Object A:</label>
            <input type="text" value={objectList.a} onChange={(e) => handleObjectChange(e, 'a')} />
          </div>
          <div className="form-group">
            <label>Object B:</label>
            <input type="text" value={objectList.b} onChange={(e) => handleObjectChange(e, 'b')} />
          </div>
          <div className="form-group">
            <label>Object C:</label>
            <input type="text" value={objectList.c} onChange={(e) => handleObjectChange(e, 'c')} />
          </div>
          <div className="form-group">
            <label>Quantity:</label>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </div>
        </div>
        <button onClick={addItem}>Done</button>
        <button onClick={() => setShowInput(false)}>Cancel</button>
      </div>
    );
  }

  return <button onClick={() => setShowInput(true)}>ADD</button>;
};

export default AddButton;