import { MdDeleteForever } from "react-icons/md";

const Note = () => {
  var date = new Date().getDate();
  return (
    <div className="note">
      <span>First Note</span>
      <div className="note-footer">
        {date}
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Note;
