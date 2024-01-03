import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import CoursesTab from "./CoursesTab";
import EnrolledCourses from "./EnrolledCourses";

function Courses() {
  const [courses, setCourses] = useState(allCourses);
  const [enrolledCourses, setEnrolledCourses] = useState([
    {
      courseId: 1,
      courseName: "Introduction to Programming",
      instructor: "John Smith",
      description:
        "A beginner-friendly course covering programming fundamentals using popular languages.",
      duration: "8 weeks",
      credit: 2,
    },
    {
      courseId: 2,
      courseName: "Data Science Fundamentals",
      instructor: "Emily Johnson",
      description:
        "Learn the basics of data science, including data analysis and visualization.",
      duration: "10 weeks",
      credit: 3,
    },
  ]);

  useEffect(() => {
    const filteredCourses = allCourses.filter(
      (course) =>
        !enrolledCourses.some(
          (enrolledCourse) => enrolledCourse.courseId === course.courseId
        )
    );
    // console.log(filteredCourses);
    setCourses(filteredCourses);
  }, [enrolledCourses]);

  const items = [
    {
      key: "1",
      label: "Courses",
      children: (
        <CoursesTab courses={courses} setEnrolledCourses={setEnrolledCourses} />
      ),
    },
    {
      key: "2",
      label: "Enrolled Courses",
      children: <EnrolledCourses enrolledCourses={enrolledCourses} />,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">Courses</p>
      </div>

      <div className="mt-5">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          className="bg-white rounded-md shadow-md p-5"
        />
      </div>
    </>
  );
}

export default Courses;

const allCourses = [
  {
    courseId: 1,
    courseName: "Introduction to Programming",
    instructor: "John Smith",
    description:
      "A beginner-friendly course covering programming fundamentals using popular languages.",
    duration: "8 weeks",
    credit: 2,
  },
  {
    courseId: 2,
    courseName: "Data Science Fundamentals",
    instructor: "Emily Johnson",
    description:
      "Learn the basics of data science, including data analysis and visualization.",
    duration: "10 weeks",
    credit: 3,
  },
  {
    courseId: 3,
    courseName: "Advanced Web Development",
    instructor: "Michael Brown",
    description:
      "Explore advanced concepts in web development, including frameworks and best practices.",
    duration: "12 weeks",
    credit: 1,
  },
  {
    courseId: 4,
    courseName: "Machine Learning Masterclass",
    instructor: "Sophia Lee",
    description:
      "Dive deep into machine learning algorithms and their applications.",
    duration: "15 weeks",
    credit: 3,
  },
  {
    courseId: 5,
    courseName: "Business Finance Essentials",
    instructor: "David Garcia",
    description:
      "Understand key financial concepts and principles for business decision-making.",
    duration: "6 weeks",
    credit: 2,
  },
];
