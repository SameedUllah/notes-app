import { AddNote } from "./AddNote";
import { Note } from "./Note";

export const NotesList = ({ notes, handleDeleteNote }: any) => {
  return (
    <div className="notes-list">
      {notes.map(
        (note: { id: number; title: string; text: string; date: string }) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        )
      )}
      <AddNote />
    </div>
  );
};
