import { Note } from "./components/Note";
import { NotesList } from "./components/NotesList";

const App = () => {
  const notes = [
    {
      id: Math.random(),
      title: "1st Note",
      text: "This is my 1st Note",
      date: new Date(),
    },
    {
      id: Math.random(),
      title: "2nd Note",
      text: "This is my 2nd Note",
      date: new Date(),
    },
    {
      id: Math.random(),
      title: "3rd Note",
      text: "This is my 3rd Note",
      date: new Date(),
    },
    {
      id: Math.random(),
      title: "4th Note",
      text: "This is my 4th Note",
      date: new Date(),
    },
  ];
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
