import { useState } from "react";

export const AddNote = ({ handleAddNote }: any) => {
  const [note, setNote] = useState({
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
