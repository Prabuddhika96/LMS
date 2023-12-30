import React from "react";

function SubHeading({ text, className }: any) {
  return (
    <div className={`text-2xl text-white ${className && className}`}>
      {text}
    </div>
  );
}

export default SubHeading;
