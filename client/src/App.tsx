import { useEffect, useState } from "react";

import { IAddNote, INote } from "./interfaces/Note";
import { NotesList } from "./components/NotesList";
import { Search } from "./components/Search";

const date = new Date();

const defaultNotes = new Array(4).fill({}).map<INote>((_, i) => {
  return {
    id: i,
    title: `Note ${i + 1}`,
    content: `This is note number ${i + 1}`,
    date: date.toString(),
  };
});

const App = () => {
  const [notes, setNotes] = useState(defaultNotes);

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

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-notes-app-data")!
    );
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (id: number) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const [searchText, setSearchText] = useState("");

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) => {
          return (
            note.content.toLowerCase().includes(searchText.toLowerCase()) ||
            note.title.toLowerCase().includes(searchText.toLowerCase())
          );
        })}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
