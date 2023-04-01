import React from 'react';
import Item from './Item';

const ItemList = ({ items, setItems }) => {
  const updateItem = (id, updatedItem) => {
    const newItems = items.map((item) => (item.id === id ? updatedItem : item));
    setItems(newItems);
  };

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} updateItem={updateItem} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default ItemList;
