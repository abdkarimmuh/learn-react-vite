import { useContext } from "react";
import Note from "./Note";
import { NotesContext } from "./NoteContext";

export default function NoteList() {
  const notes = useContext(NotesContext);

  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          <Note note={note} />
        </li>
      ))}
    </ul>
  );
}
