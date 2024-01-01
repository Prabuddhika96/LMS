import { useRef, useState } from "react";
import upload_logo from "../../assets/images/uploadFile.svg";
import LargeText from "../Text/LargeText";
import BlueSubText from "../Text/BlueSubText";
import React from "react";

function AntDUpload({
  setFileDetails,
  uploadText,
  uploadSubText,
  formHeight,
  maxSize,
  rounded,
}) {
  const [file, setFile] = useState("");
  const upload = useRef(null);

  const handleClickUpload = () => {
    // setLoadingSpin(true);
    upload.current?.click();
  };

  const handleFileChange = (event) => {
    // setLoadingSpin(true);
    const fileObj = event.target.files && event.target.files[0];
    // console.log(fileObj);
    // setLoadingSpin(true);
    if (!fileObj) {
      return;
    } else {
      if (fileObj.type.startsWith("")) {
        if (fileObj?.size / 1024 < maxSize) {
          // Set the uploaded image URL
          setFileDetails(fileObj);
          setFile(URL.createObjectURL(fileObj));
        } else {
          console.log(
            "Sorry, Please choose an image that is smaller than 8MB."
          );
        }
      } else {
        // setLoadingSpin(false);
        console.log("Please select a valid image file.");
      }
    }
    // reset file input
    event.target.value = null;
  };

  return (
    <div
      className={`flex items-center justify-center ${
        file ? `p-0` : `p-5`
      } overflow-hidden border-2 border-white border-dashed rounded-lg cursor-pointer h-fit`}
      style={{ height: formHeight }}
      onClick={handleClickUpload}
    >
      <div className="overflow-hidden text-center">
        {/* image */}
        <div className="flex justify-center">
          <img
            src={file ? file : upload_logo}
            alt="profile"
            className={`${file ? `w-full h-full` : `w-[100px] h-[100px] `} ${
              rounded ? `rounded-full` : `rounded-lg`
            } bg-img white-text object-cover`}
          />
        </div>
        <input
          style={{ display: "none" }}
          ref={upload}
          type="file"
          onChange={handleFileChange}
          name="attachment"
        />
        <LargeText text={uploadText} className={`${file && `hidden`}`} />
        <BlueSubText text={uploadSubText} className={`${file && `hidden`}`} />
      </div>
    </div>
  );
}

export default AntDUpload;
