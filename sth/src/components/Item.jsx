import React, { useState } from 'react';

const Item = ({ item, updateItem, deleteItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  const handleObjectChange = (e, key) => {
    setEditedItem({
      ...editedItem,
      objectList: { ...editedItem.objectList, [key]: e.target.value },
    });
  };

  const handleSave = () => {
    updateItem(item.id, editedItem);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="item">
        <div className="form-row">
          <div className="form-group">
            <label>Date:</label>
            <input type="date" value={editedItem.date} onChange={handleChange} name="date" />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" value={editedItem.name} onChange={handleChange} name="name" />
          </div>
          <div className="form-group">
            <label>Object A:</label>
            <input type="number" value={editedItem.objectList.a} onChange={(e) => handleObjectChange(e, 'a')} />
          </div>
          <div className="form-group">
            <label>Object B:</label>
            <input type="number" value={editedItem.objectList.b} onChange={(e) => handleObjectChange(e, 'b')} />
          </div>
          <div className="form-group">
            <label>Object C:</label>
            <input type="number" value={editedItem.objectList.c} onChange={(e) => handleObjectChange(e, 'c')} />
          </div>
          <div className="form-group">
            <label>Quantity:</label>
            <input type="number" value={editedItem.quantity} onChange={handleChange} name="quantity" />
          </div>
        </div>
        <div className="item-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* <h id="listTitle">Recent Add:</h> */}
      <div className="item">
        <div>Date: {item.date}</div>
        <div>Name: {item.name}</div>
        <div>Object A: {item.objectList.a}</div>
        <div>Object B: {item.objectList.b}</div>
        <div>Object C: {item.objectList.c}</div>
        <div>Quantity: {item.quantity}</div>
        <div className="item-buttons">
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Item;