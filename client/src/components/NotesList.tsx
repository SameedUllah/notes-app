import { HandleAddNote, HandleDeleteNote, Note } from "./Note";
import { AddNote } from "./AddNote";
import { INote } from "../interfaces/Note";

interface NoteListProps {
  notes: INote[];
  handleDeleteNote: HandleDeleteNote;
  handleAddNote: HandleAddNote;
}

export const NotesList = ({
  notes,
  handleDeleteNote,
  handleAddNote,
}: NoteListProps) => (
  <div className="notes-list">
    {notes.map(
      (note: { id: number; title: string; content: string; date: string }) => (
        <Note key={note.id} note={note} handleDeleteNote={handleDeleteNote} />
      )
    )}
    <AddNote handleAddNote={handleAddNote} />
  </div>
);
