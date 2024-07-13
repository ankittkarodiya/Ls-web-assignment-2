import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react'
import { InputGroup, Col, Button, Row, Container, Card, Form } from 'react-bootstrap'

import React, { useState } from 'react';
import Note from './components/Note';
import NoteInput from './components/NoteInput';

function App() {
  const [notes, setNotes] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (indexToDelete) => {
    setNotes(notes.filter((_, index) => index !== indexToDelete));
  };

  const editNote = (indexToEdit, newText) => {
    setNotes(notes.map((note, index) => (index === indexToEdit ? newText : note)));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    // <Container className='pt-4 vh-100 vw-100 cont'>
      <Row className=' d-flex justify-content-center align-items-center'>
        <Col xs={12} lg={12} md={12}>
        <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>My Notes</h1>
      {/* <input type='checkbox' onClick={toggleDarkMode}/> */}
      {/* <label>Change Mode</label> */}

      <Form.Check 
              type="switch"
              id="custom-switch"
              label="Toggle Mode"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              // className="mb-3"
              className="mb-3 d-flex align-items-center"
              style={{ gap: '0.5rem' }}
            />
      
      <NoteInput onAdd={addNote} />
      <div className="notes-container">
        {notes.map((note, index) => (
          <Note 
            key={index} 
            index={index} 
            text={note} 
            onDelete={deleteNote} 
            onEdit={editNote} 
          />
        ))}
      </div>
    </div>
        </Col>
        <footer>Made with ❤️ by Ankit Saini</footer>
      </Row>
    // </Container>
  );

}

export default App;