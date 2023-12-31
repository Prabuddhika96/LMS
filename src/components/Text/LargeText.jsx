import React from "react";

function LargeText({ text, className }) {
  return (
    <div
      className={`text-3xl text-[var(--main-blue)] ${className && className}`}
    >
      {text}
    </div>
  );
}

export default LargeText;
