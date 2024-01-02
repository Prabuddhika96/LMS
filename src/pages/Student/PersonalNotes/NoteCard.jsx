import React from "react";

function NoteCard({ note }) {
  return (
    <div className="p-5 bg-white rounded-md shadow-lg m-4 min-h-[200px]">
      <p className="text-lg font-bold">{note?.title}</p>
      <p className="text-justify">{note?.note}</p>
    </div>
  );
}

export default NoteCard;
