import React, { useState } from "react";
import PopUpModel from "../../../components/PopUpModel/PopUpModel";
import NoteCard from "./NoteCard";
import AddNoteForm from "./AddNoteForm";

function PersonalNotes() {
  const [notes, setNotes] = useState([
    {
      title: "Meeting",
      note: "Discuss quarterly goals with the team.",
    },
    {
      title: "Grocery Shopping",
      note: "Buy milk, eggs, bread, and fruits.",
    },
    {
      title: "Gym Session",
      note: "Cardio for 30 mins, then weight training.",
    },
    {
      title: "Book Club",
      note: "Read pages 50-100 of 'The Great Gatsby'.",
    },
    {
      title: "Project Deadline",
      note: "Complete the first draft by Friday.",
    },
  ]);
  const [showModel, setShowModel] = useState(false);
  const handelOk = () => {
    setShowModel(false);
  };

  const handelCancel = () => {
    setShowModel(false);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">Personal Notes</p>
        <button
          className="py-2 px-3 bg-green-800 rounded-md hover:bg-green-900 duration-300 ease-in-out text-white"
          onClick={() => {
            setShowModel(true);
          }}
        >
          Add Note
        </button>

        <PopUpModel
          showModel={showModel}
          setShowModel={setShowModel}
          onOkFunction={handelOk}
          onCancelFunction={handelCancel}
          okBtnText={"Add Note"}
          hideCancel={false}
          hideOk={true}
          Content={<AddNoteForm setNotes={setNotes} />}
        />
      </div>

      <div className="grid grid-cols-3 gap-2 mt-6">
        {notes.map((note) => (
          <NoteCard note={note} setShowModel={setShowModel} />
        ))}
      </div>
    </>
  );
}

export default PersonalNotes;
