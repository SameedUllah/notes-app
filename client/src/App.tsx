import { useState } from "react";

import { NotesList } from "./components/NotesList";

const App = () => {
  const date = new Date();

  const [notes, setNotes] = useState([
    {
      id: Math.random(),
      title: "1st Note",
      content: "This is my 1st Note",
      date: date.toLocaleString(),
    },
    {
      id: Math.random(),
      title: "2nd Note",
      content: "This is my 2nd Note",
      date: date.toLocaleString(),
    },
    {
      id: Math.random(),
      title: "3rd Note",
      content: "This is my 3rd Note",
      date: date.toLocaleString(),
    },
    {
      id: Math.random(),
      title: "4th Note",
      content: "This is my 4th Note",
      date: date.toLocaleString(),
    },
  ]);

  const addNote = (note: any) => {
    const newNote = {
      id: Math.random(),
      title: note.title,
      content: note.content,
      date: date.toLocaleDateString(),
    };
    const newNotes: any = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id: number) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
