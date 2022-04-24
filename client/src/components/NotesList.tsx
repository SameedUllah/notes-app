import AddNote from "./AddNote";
import Note from "./Note";
import Search from "./Search";

const notesList = () => {
  return (
    <div className="notes-list">
      {/* <Search /> */}
      <AddNote />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default notesList;
