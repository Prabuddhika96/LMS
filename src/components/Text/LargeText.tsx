import React from "react";

function LargeText({ text, className }: any) {
  return (
    <div className={`text-3xl text-white ${className && className}`}>
      {text}
    </div>
  );
}

export default LargeText;
