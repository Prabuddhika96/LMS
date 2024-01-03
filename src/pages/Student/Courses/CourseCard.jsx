import React, { useState } from "react";
import { Card } from "antd";
import LoadingSpin from "../../../components/LoadingSpin";

function CourseCard({ course, showButton = false, setEnrolledCourses }) {
  const [isLoading, setIsLoading] = useState(false);
  const handleEnroll = () => {
    setIsLoading(true);
    setTimeout(() => {
      setEnrolledCourses((prev) => [...prev, course]);
      setIsLoading(false);
    }, 1000);
  };
  return (
    <Card
      type="inner"
      title={course?.courseName}
      extra={
        showButton && (
          <button
            className="bg-green-700 min-w-[80px] min-h-[35px] px-2 py-1 text-white font-semibold rounded-md hover:scale-[1.05] ease-in-out"
            onClick={handleEnroll}
          >
            {isLoading ? (
              <>
                <LoadingSpin color={"white"} />
              </>
            ) : (
              ` Enroll`
            )}
          </button>
        )
      }
      className="my-3 hover:shadow-lg duration-200 ease-in-out"
    >
      <div className="flex flex-col">
        <p>
          <strong>Instructor:</strong> {course?.instructor}
        </p>
        <p>
          <strong>Duration:</strong> {course?.duration}
        </p>
        <p>
          <strong>Credit:</strong> {course?.credit}
        </p>
        <p>
          <strong>Description:</strong> {course?.description}
        </p>
      </div>
    </Card>
  );
}

export default CourseCard;
