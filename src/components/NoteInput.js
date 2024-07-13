import React, { useState } from 'react';
import './NoteInput.css';

function NoteInput ({ onAdd }) {
  const [note, setNote] = useState('');

  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleAdd = () => {
    if (note.trim() !== '') {
      onAdd(note);
      setNote('');
    }
  };

  return (
    <div className="note-input">
      <textarea 
        value={note}
        onChange={handleChange}
        placeholder="Take a note..."
      />
      <button id='addBtn' onClick={handleAdd}>Add</button>
    </div>
  );
}

export default NoteInput;