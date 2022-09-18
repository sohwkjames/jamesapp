import Note from "./Note";

export default function Notes(props) {
  const { notes } = props;
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note note={note} key={note} />
        ))}
      </ul>
    </div>
  );
}
