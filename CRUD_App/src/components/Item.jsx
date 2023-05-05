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
      objectList: { ...editedItem.objectList, [key]: e.target.value }
    });
  };

  const handleSave = () => {
    if (editedItem.date && editedItem.name && editedItem.lorry) {
      const updatedItem = {
        ...editedItem,
        objectList: setDefaultValues(editedItem.objectList),
      };
      updateItem(item.id, updatedItem);
      setIsEditing(false);
    }else{
      alert("You have not complete the input yet");
    }
  };

  const setDefaultValues = (inputObject) => {
    const outputObject = {};
    for (const key in inputObject) {
      outputObject[key] = inputObject[key] === '' ? '0' : inputObject[key];
    }
    return outputObject;
  };

  if (isEditing) {
    return (
      <div className="edit_item item">
        <div className="form-row">
          <div className="form-group">
            <label>Date:</label>
            <input type="date" value={editedItem.date} onChange={handleChange} name="date" required/>
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" value={editedItem.name} onChange={handleChange} name="name" required/>
          </div>
          <div className="form-group">
            <label>Lorry:</label>
            <input type="text" value={editedItem.lorry} onChange={handleChange} name="lorry" required/>
          </div>
          <div className="form-group">
            <label>C12:</label>
            <input type="number" value={editedItem.objectList.a} onChange={(e) => handleObjectChange(e, 'a')} />
          </div>
          <div className="form-group">
            <label>C12 Tong:</label>
            <input type="number" value={editedItem.objectList.b} onChange={(e) => handleObjectChange(e, 'b')} />
          </div>
          <div className="form-group">
            <label>C14:</label>
            <input type="number" value={editedItem.objectList.c} onChange={(e) => handleObjectChange(e, 'c')} />
          </div>
          <div className="form-group">
            <label>C14 Tong:</label>
            <input type="number" value={editedItem.objectList.d} onChange={(e) => handleObjectChange(e, 'd')} />
          </div>
          <div className="form-group">
            <label>14C:</label>
            <input type="number" value={editedItem.objectList.e} onChange={(e) => handleObjectChange(e, 'e')} />
          </div>
          <div className="form-group">
            <label>14C Tong:</label>
            <input type="number" value={editedItem.objectList.f} onChange={(e) => handleObjectChange(e, 'f')} />
          </div>
          <div className="form-group">
            <label>C50:</label>
            <input type="number" value={editedItem.objectList.g} onChange={(e) => handleObjectChange(e, 'g')} />
          </div>
          <div className="form-group">
            <label>C50 Tong:</label>
            <input type="number" value={editedItem.objectList.h} onChange={(e) => handleObjectChange(e, 'h')} />
          </div>
          <div className="form-group">
            <label>GasPayment:</label>
            <input type="number" value={editedItem.objectList.i} onChange={(e) => handleObjectChange(e, 'i')} />
          </div>
          <div className="form-group">
            <label>Hutang:</label>
            <input type="number" value={editedItem.objectList.j} onChange={(e) => handleObjectChange(e, 'j')} />
          </div>
          <div className="form-group">
            <label>Tong Payment:</label>
            <input type="number" value={editedItem.objectList.k} onChange={(e) => handleObjectChange(e, 'k')} />
          </div>
          <div className="form-group">
            <label>Bayar Hutang:</label>
            <input type="number" value={editedItem.objectList.l} onChange={(e) => handleObjectChange(e, 'l')} />
          </div>
          <div className="form-group">
            <label>Pinjam tong:</label>
            <input type="number" value={editedItem.objectList.m} onChange={(e) => handleObjectChange(e, 'm')} />
          </div>
          <div className="form-group">
            <label>Pulang tong:</label>
            <input type="number" value={editedItem.objectList.n} onChange={(e) => handleObjectChange(e, 'n')} />
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
    <div >
      <div className="show_item item">
        <div><span>Date: </span><br></br>{item.date}</div>
        <div><span>Name: </span><br></br>{item.name}</div>
        <div><span>Lorry: </span><br></br>{item.lorry}</div>
        <div><span>C12: </span><br></br>{item.objectList.a}</div>
        <div><span>C12 Tong: </span><br></br>{item.objectList.b}</div>
        <div><span>C14: </span><br></br>{item.objectList.c}</div>
        <div><span>C14 Tong: </span><br></br> {item.objectList.d}</div>
        <div><span>14C: </span><br></br>{item.objectList.e}</div>
        <div><span>14C Tong: </span><br></br>{item.objectList.f}</div>
        <div><span>C50: </span><br></br>{item.objectList.g}</div>
        <div><span>C50 Tong: </span><br></br>{item.objectList.h}</div>
        <div><span>Gas Payment: </span><br></br>{item.objectList.i}</div>
        <div><span>Hutang: </span><br></br>{item.objectList.j}</div>
        <div><span>Tong Payment: </span><br></br>{item.objectList.k}</div>
        <div><span>Bayar Hutang: </span><br></br>{item.objectList.l}</div>
        <div><span>Pinjam tong: </span><br></br>{item.objectList.m}</div>
        <div><span>Pulang tong: </span><br></br>{item.objectList.n}</div>
        
      </div>
      <div className="item-buttons">
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Item;