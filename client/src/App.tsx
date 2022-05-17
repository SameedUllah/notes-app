import { useState } from "react";
import { IAddNote } from "./interfaces/Note";

import { NotesList } from "./components/NotesList";
import { Search } from "./components/Search";

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

  const [search, setSearch] = "";

  const addNote = (note: IAddNote): void => {
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

  // const note1: <NoteProps> = {
  //   note: {},
  //   handleDeleteNote: HandleDeleteNote,
  // }

  // const note2: Required<Omit<Partial<INote>, 'id'>> = {

  // }

  return (
    <div className="container">
      <Search handleSearchNote={setSearch} />
      <NotesList
        notes={notes.filter((note) => {
          note.content.includes(search);
        })}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );

  // return (
  //   <div className="container">
  //     <button onClick={handleClick}>Create note</button>
  //   </div>
  // )
};

export default App;
