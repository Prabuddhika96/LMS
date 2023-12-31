import React, { useState } from "react";
import LargeText from "../../../components/Text/LargeText";
import Loading from "../../../components/Loading";
import { MdOutlineAssignment } from "react-icons/md";
import BlueSubText from "../../../components/Text/BlueSubText";
import SubHeading from "../../../components/Text/SubHeading";

function AssignmentThread() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <div className="sm:flex max-sm:block justify-between items-center w-full gap-3">
          <div className="sm:w-8/12 max-sm:w-ful bg-white p-5 rounded-md shadow-lg">
            <div className="flex justify-start gap-2 items-center">
              <MdOutlineAssignment className="text-white text-4xl rounded-full p-2 bg-[var(--main-blue)] max-sm:hidden" />
              <LargeText text={"Assignment 1"} />
            </div>

            <div className="sm:pl-[45px]">
              <SubHeading text={"lecture name"} />
              <BlueSubText text={"Due: 20 Jan 2024 : 12.00 PM"} />
            </div>
            <div className="border-t-2 border-solid border-[var(--main-blue)] my-2 py-2 sm:pl-[45px]">
              <p className="text-justify">
                description : Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="sm:w-4/12 max-sm:w-full bg-white p-5 rounded-md shadow-lg max-sm:mt-3">
            AssignmentThread
          </div>
        </div>
      )}
    </>
  );
}

export default AssignmentThread;
