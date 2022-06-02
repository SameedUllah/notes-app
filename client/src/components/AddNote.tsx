import { useState } from "react";

import { IAddNote } from "../interfaces/Note";
import { NoteProps } from "./Note";

export interface AddNoteProps
  extends Required<Pick<NoteProps, "handleAddNote">> {}

export const AddNote = ({ handleAddNote }: AddNoteProps): JSX.Element => {
  const [note, setNote] = useState<IAddNote>({
    title: "",
    content: "",
  });

  const characterLimit = 200;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    const name = event.target.name as "title" | "content";
    if (characterLimit - value.length >= 0) {
      setNote({
        title: name === "title" ? value : note.title,
        content: name === "content" ? value : note.content,
      });
    }
  };

  const handleSaveClick = () => {
    if (note.content.trim().length > 0) {
      handleAddNote(note);
      setNote({
        title: "",
        content: "",
      });
    }
  };

  return (
    <div className="note new">
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={note.title}
        onChange={handleChange}
      />
      <textarea
        rows={8}
        cols={10}
        placeholder="Type to add a note..."
        name="content"
        value={note.content}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};
