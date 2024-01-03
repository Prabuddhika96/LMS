import React from "react";
import NoticeCard from "./NoticeCard";

function Notices() {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">Notices</p>
      </div>

      <div className="mt-5">
        {notices?.map((notice) => (
          <NoticeCard notice={notice} />
        ))}
      </div>
    </>
  );
}

export default Notices;

const notices = [
  {
    title: "Important Meeting",
    posted_date: "2023-12-10",
    posted_time: "09:00 AM",
    notice:
      "There will be a crucial meeting discussing the upcoming projects in the conference room.",
  },
  {
    title: "Holiday Schedule",
    posted_date: "2023-12-20",
    posted_time: "02:30 PM",
    notice:
      "Please note the revised holiday schedule for the end of the year. Check your email for details.",
  },
  {
    title: "Office Closure",
    posted_date: "2024-01-02",
    posted_time: "05:45 PM",
    notice:
      "Due to unforeseen circumstances, the office will be closed tomorrow. Stay tuned for updates.",
  },
  {
    title: "New Project Launch",
    posted_date: "2024-01-10",
    posted_time: "10:15 AM",
    notice:
      "We are excited to announce the launch of our new project next week. Stay prepared!",
  },
  {
    title: "Training Session",
    posted_date: "2024-01-15",
    posted_time: "11:30 AM",
    notice:
      "There will be a training session for all employees on the new software updates.",
  },
  {
    title: "Team Building Event",
    posted_date: "2024-01-25",
    posted_time: "03:00 PM",
    notice:
      "Join us for a team-building event this Friday at the company picnic area.",
  },
];
