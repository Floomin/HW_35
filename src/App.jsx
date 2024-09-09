import { useState } from 'react';
import NoteList from './components/NoteList';
import NoteItem from './components/NoteItem';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  };

  const handleDelete = (indexToRemove) => {
    setNotes(notes.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Введите заметку"
          />
          <button type="submit">Добавить</button>
        </form>
      </div>

      <div className="notes-container">
        {notes.length === 0 ? (
          <h1>Нотаток немає</h1>
        ) : (
          <NoteList>
            {notes.map((note, index) => (
              <NoteItem
                key={index}
                note={note}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </NoteList>
        )}
      </div>
    </div>
  );
};

export default App;
