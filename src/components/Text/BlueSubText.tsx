import React from "react";

function BlueSubText({ text, className }: any) {
  return (
    <div className="flex items-center justify-start">
      <h1 className={`text-[#7b9db4] ${className && className}`}>{text}</h1>
    </div>
  );
}

export default BlueSubText;
