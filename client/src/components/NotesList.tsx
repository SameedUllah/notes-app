import { Note } from "./Note";
import { AddNote } from "./AddNote";

export const NotesList = ({ notes, handleDeleteNote, handleAddNote }: any) => (
  <div className="notes-list">
    {notes.map(
      (note: { id: number; title: string; content: string; date: string }) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      )
    )}
    <AddNote handleAddNote={handleAddNote} />
  </div>
);
