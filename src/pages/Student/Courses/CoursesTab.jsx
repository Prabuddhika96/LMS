import React from "react";
import { Card } from "antd";
import CourseCard from "./CourseCard";

function CoursesTab({ courses, setEnrolledCourses }) {
  return (
    <>
      {courses &&
        courses.map((course) => (
          <>
            <CourseCard
              course={course}
              showButton={true}
              setEnrolledCourses={setEnrolledCourses}
            />
          </>
        ))}
    </>
  );
}

export default CoursesTab;
