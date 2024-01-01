import React, { useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import PopUpModel from "../../../components/PopUpModel/PopUpModel";
import AddEvent from "./AddEvent";
import EventPopUp from "./EventPopUp";

function EventCalender() {
  const [events, setEvents] = useState([
    {
      groupId: "testGroupId",
      title: "Event 1",
      start: "2024-01-01T10:00:00", // start time (ISO 8601 date string)
      end: "2024-01-01T12:00:00", // end time (ISO 8601 date string)
    },
    {
      title: "Event 2",
      start: "2024-01-05",
      display: "background",
      description: "Description for Event 2",
    },
    // Add more events as needed

    {
      groupId: "testGroupId",
      title: "Event 3",
      start: "2024-01-10",
      end: "2024-01-15",
      display: "background",
      backgroundColor: "yellow",
      //   display: "inverse-background",
    },
  ]);
  const [showModel, setShowModel] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handelOk = () => {
    alert();
    setShowModel(false);
    setSelectedEvent(null);
  };

  const handelCancel = () => {
    setShowModel(false);
    setSelectedEvent(null);
  };

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setShowModel(true);
    console.log(clickInfo.event);
  };

  return (
    <div
    //   onClick={() => {
    //     setShowModel(!showModel);
    //   }}
    >
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        av
        height={"90vh"}
        events={events}
        eventClick={handleEventClick}
      />

      <PopUpModel
        showModel={showModel}
        setShowModel={setShowModel}
        onOkFunction={handelOk}
        onCancelFunction={handelCancel}
        okBtnText={selectedEvent && "OK"}
        hideCancel={!selectedEvent && true}
        Content={<EventPopUp selectedEvent={selectedEvent} />}
      />
    </div>
  );
}

export default EventCalender;
