import React from "react";
import { Upload } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import BlueSubText from "../Text/BlueSubText";
import { convertBytes } from "../../utils/functions";

const { Dragger } = Upload;

function AntDDragUpload({ text, subText, setFileDetails, fileDetails }) {
  const props = {
    name: "file",
    multiple: true,
    showUploadList: true,
    accept: "", // Allow all file types
    beforeUpload: (file) => {
      const formattedSize = convertBytes(file.size);
      const newFile = {
        name: file.name,
        size: formattedSize,
        type: file.type,
        lastModified: file.lastModified,
      };
      setFileDetails([...fileDetails, newFile]);
      return false; // Return false to prevent default uploading behavior
    },
  };

  return (
    <Dragger {...props}>
      <div className="flex items-center justify-center gap-2">
        <AiOutlinePlus className="text-xl text-[#7b9db4]" />
        <p className="text-xl text-[#7b9db4]">{text}</p>
      </div>
      <BlueSubText text={subText} className="text-center w-full" />
    </Dragger>
  );
}

export default AntDDragUpload;
