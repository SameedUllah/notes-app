import { useState } from "react";
import { IAddNote, INote } from "./interfaces/Note";

import { NotesList } from "./components/NotesList";

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
