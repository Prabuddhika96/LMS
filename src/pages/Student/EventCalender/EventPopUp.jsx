import React from "react";
import EventDetail from "./EventDetail";
import AddEvent from "./AddEvent";

function EventPopUp({ selectedEvent }) {
  return (
    <>
      {selectedEvent ? (
        <EventDetail selectedEvent={selectedEvent} />
      ) : (
        <AddEvent />
      )}
    </>
  );
}

export default EventPopUp;
