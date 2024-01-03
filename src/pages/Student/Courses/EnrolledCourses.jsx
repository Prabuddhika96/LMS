import { Card } from "antd";
import React from "react";
import CourseCard from "./CourseCard";

function EnrolledCourses({ enrolledCourses }) {
  return (
    <>
      {enrolledCourses &&
        enrolledCourses.map((course) => (
          <>
            <CourseCard course={course} />
          </>
        ))}
    </>
  );
}

export default EnrolledCourses;
