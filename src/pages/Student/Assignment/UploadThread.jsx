import { Form } from "antd";
import React, { useState } from "react";
import AntDUpload from "../../../components/inputs/AntDUpload";
import AntDDragUpload from "../../../components/inputs/AntDDragUpload";

function UploadThread() {
  const [fileDetails, setFileDetails] = useState([]);
  const onFinish = (values) => {
    const finalObj = {
      ...values,
      fileDetails: fileDetails,
    };
    console.log(finalObj);
    // Handle form submission logic here (e.g., sending data to the server)
  };
  return (
    <>
      <Form onFinish={onFinish}>
        <AntDDragUpload
          setFileDetails={setFileDetails}
          text={"Upload File"}
          subText={
            "Click the image area to select a video file and upload it here"
          }
          maxSize={8096}
          fileDetails={fileDetails}
        />
        <Form.Item>
          <button
            className="px-4 py-2 mt-3 bg-blue-600 w-full text-white rounded-md hover:bg-blue-500 duration-200 ease-in-out"
            type="submit"
          >
            Submit
          </button>
        </Form.Item>
      </Form>
    </>
  );
}

export default UploadThread;
