import React from "react";

const Views = ({ views }: any) => {
  return (
    <div className="flex flex-col justify-start">
      <p className="text-[10px] text-gray-500 ">Views</p>
      <p className="text-[20px] text-white">{views}</p>
    </div>
  );
};

export default Views;
