import React from "react";

function EventDetail({ selectedEvent }) {
  return (
    <div>
      <p className="text-xl font-bold">{selectedEvent?.title}</p>
      <p>{selectedEvent?.start && `Start : ${selectedEvent.start}`}</p>
      <p>{selectedEvent?.end && `Start : ${selectedEvent.end}`}</p>
    </div>
  );
}

export default EventDetail;
