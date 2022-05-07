import { MdDeleteForever } from "react-icons/md";

interface NoteProps {
  id: number;
  title: string;
  content: string;
  date: string;
  handleDeleteNote(id: number): number;
}

export const Note = ({
  id,
  title,
  content,
  handleDeleteNote,
}: NoteProps) => {
  const dateStr = new Date();

  return (
    <div className="note">
      <span>{title}</span>
      <span>{content}</span>
      <div className="note-footer">
        {dateStr.toLocaleString()}
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};
