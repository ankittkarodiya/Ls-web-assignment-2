import React, { useState } from 'react';
import './Note.css';

function Note ({ text, index, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleDelete = () => {
    onDelete(index);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    onEdit(index, newText);
    setIsEditing(false);
  };

  return (
    <div>
        <div className="note">
      {isEditing ? (
        <textarea 
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <p>{text}</p>
      )}
      <div className="note-buttons">
        <button id='dltBtn' onClick={handleDelete}>Delete</button>
        {isEditing ? (
          <button id='saveBtn' onClick={handleSave}>Save</button>
        ) : (
          <button id='editBtn' onClick={handleEditToggle}>Edit</button>
        )}
      </div>
    </div>
    </div>
  );
}

export default Note;