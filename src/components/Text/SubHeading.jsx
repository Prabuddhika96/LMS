import React from "react";

function SubHeading({ text, className }) {
  return (
    <div className={`text-xl text-gray-500 ${className && className}`}>
      {text}
    </div>
  );
}

export default SubHeading;
