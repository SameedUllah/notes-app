import { MdDeleteForever } from "react-icons/md";
import { IAddNote, INote } from "../interfaces/Note";

export type HandleDeleteNote = (id: number) => void;
export type HandleAddNote = (note: IAddNote) => void;

export interface NoteProps {
  note: INote;
  handleDeleteNote: HandleDeleteNote;
  handleAddNote?: HandleAddNote;
}

export const Note = ({
  note: { id, title, content },
  handleDeleteNote,
}: NoteProps) => {
  const date = new Date();

  return (
    <div className="note">
      <span>{title}</span>
      <span>{content}</span>
      <div className="note-footer">
        {date.toLocaleString()}
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};
