import React, { useState, useTransition } from 'react';

function TransitionEx() {
  const [items, setItems] = useState<string[]>(['Apple', 'Banana']);
  const [newItem, setNewItem] = useState<string>('');

  const [isPending, startTransition] = useTransition();

  const addItem = () => {
    startTransition(() => {
      setItems([...items, newItem]);
      console.log(items);
      setNewItem('');
    });
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem} disabled={isPending}>
        Add Item
      </button>
      {isPending && <p>Adding...</p>}
    </div>
  );
}

export default TransitionEx;
