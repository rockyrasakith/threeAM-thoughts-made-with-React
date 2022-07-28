import React, { useState } from "react";

function CreateArea({ handleAdd }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  const handleTitle = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleBody = (e) => {
    setNoteBody(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleAdd(noteTitle, noteBody);
    setNoteTitle("");
    setNoteBody("");
  };

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={noteTitle}
          onChange={handleTitle}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteBody}
          onChange={handleBody}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
