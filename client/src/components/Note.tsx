import { MdDeleteForever } from "react-icons/md";

interface NoteProps {
  id: number;
  title: string;
  text: string;
  date: string;
  handleDeleteNote: (id: number) => number;
}

export const Note = ({
  id,
  title,
  text,
  date,
  handleDeleteNote,
}: NoteProps) => {
  const dateStr = new Date(date).toString();

  return (
    <div className="note">
      <span>{title}</span>
      <span>{text}</span>
      <div className="note-footer">
        {dateStr}
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};
