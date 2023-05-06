import React, { useState } from 'react';
import addlogo from "/src/image/add-logo.png";

const AddButton = ({ items, setItems }) => {
  const [showInput, setShowInput] = useState(true);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [objectList, setObjectList] = useState({ a: '', b: '', c: '' , d: '', e: '', f: '', g: '', h: '', i: '', j: '', k: '', l: '', m: '', n: ''});
  const [lorry, setLorry] = useState('');

  const addItem = () => {
    if (date && name && lorry) {
      const newItem = {
        id: Date.now(), date, name, lorry, objectList: setDefaultValues(objectList),
      };
      setItems([...items, newItem]);
      setShowInput(true);
    } else {
      alert("You have not complete the input yet");
    }
  };
  

  const handleObjectChange = (e, key) => {
    setObjectList({ ...objectList, [key]: e.target.value });
  };

  const resetInputFields = () => {
    setDate('');
    setName('');
    setLorry('');
    setObjectList({
      a: '', b: '', c: '', d: '', e: '', f: '', g: '',
      h: '', i: '', j: '', k: '', l: '', m: '', n: '',
    });
  };

  const setDefaultValues = (inputObject) => {
    const outputObject = {};
    for (const key in inputObject) {
      outputObject[key] = inputObject[key] === '' ? '0' : inputObject[key];
    }
    return outputObject;
  };
  
  if (showInput == false) {
    return (
      <div>
        <div className="form-row">
          <div className="form-group">
            <label>Date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Lorry:</label>
            <input type="text" value={lorry} onChange={(e) => setLorry(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>C12:</label>
            <input type="text" value={objectList.a} onChange={(e) => handleObjectChange(e, 'a')}/>
          </div>
          <div className="form-group">
            <label>C12 Tong:</label>
            <input type="text" value={objectList.b} onChange={(e) => handleObjectChange(e, 'b')} />
          </div>
          <div className="form-group">
            <label>C14:</label>
            <input type="text" value={objectList.c} onChange={(e) => handleObjectChange(e, 'c')} />
          </div>
          <div className="form-group">
            <label>C14 Tong:</label>
            <input type="text" value={objectList.d} onChange={(e) => handleObjectChange(e, 'd')} />
          </div>
          <div className="form-group">
            <label>14C:</label>
            <input type="text" value={objectList.e} onChange={(e) => handleObjectChange(e, 'e')} />
          </div>
          <div className="form-group">
            <label>14C Tong:</label>
            <input type="text" value={objectList.f} onChange={(e) => handleObjectChange(e, 'f')} />
          </div>
          <div className="form-group">
            <label>C50:</label>
            <input type="text" value={objectList.g} onChange={(e) => handleObjectChange(e, 'g')} />
          </div>
          <div className="form-group">
            <label>C50 Tong:</label>
            <input type="text" value={objectList.h} onChange={(e) => handleObjectChange(e, 'h')} />
          </div>
          <div className="form-group">
            <label>Gas Payment:</label>
            <input type="text" value={objectList.i} onChange={(e) => handleObjectChange(e, 'i')} />
          </div>
          <div className="form-group">
            <label>Hutang:</label>
            <input type="text" value={objectList.j} onChange={(e) => handleObjectChange(e, 'j')} />
          </div>
          <div className="form-group">
            <label>Tong Payment:</label>
            <input type="text" value={objectList.k} onChange={(e) => handleObjectChange(e, 'k')} />
          </div>
          <div className="form-group">
            <label>Bayar Hutang:</label>
            <input type="text" value={objectList.l} onChange={(e) => handleObjectChange(e, 'l')} />
          </div>
          <div className="form-group">
            <label>Pinjam Tong:</label>
            <input type="text" value={objectList.m} onChange={(e) => handleObjectChange(e, 'm')} />
          </div>
          <div className="form-group">
            <label>Pulang Tong:</label>
            <input type="text" value={objectList.n} onChange={(e) => handleObjectChange(e, 'n')} />
          </div>
        </div>
        
        <button onClick={() =>{
          addItem();
          resetInputFields();
          }
        }>Done</button>
        <button onClick={() => setShowInput(true)}>Cancel</button>
      </div>
    );
  }

  return <button onClick={() => setShowInput(false)}>Add <img src={addlogo} alt="add logo" id="add-logo"/></button>;
};

export default AddButton;