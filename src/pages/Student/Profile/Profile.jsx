import { Form } from "antd";
import React, { useState } from "react";
import AntDInputField from "../../../components/inputs/AntDInputField";
import avatar from "../../../assets/images/avatar.png";

function Profile() {
  const [loading, setLoading] = useState(false);
  const [profileImageDetails, setProfileImageDetails] = useState("");
  const [profileImge, setProfileImage] = useState("");

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) return;

    if (fileObj.type.startsWith("image/")) {
      if (fileObj.size / 1024 < 8096) {
        setProfileImageDetails(fileObj); // Update file details
        setProfileImage(URL.createObjectURL(fileObj)); // Update image URL
      } else {
        console.error("Please choose an image smaller than 8MB.");
      }
    } else {
      console.error("Please select a valid image file.");
    }

    event.target.value = null; // Reset file input
  };

  const onFinish = (values) => {
    const finalObj = {
      profileImageDetails: profileImageDetails,
      cpassword: values.cpassword,
      npassword: values.npassword,
    };
    console.log(finalObj);
  };
  return (
    <div className={`min-h-[90vh] w-full flex justify-center items-center`}>
      <Form
        onFinish={onFinish}
        className="p-6 bg-white rounded-md shadow-md w-6/12"
      >
        <p className="text-center text-2xl uppercase font-bold">Profile</p>

        {/* image */}
        <div className="relative h-[160px] flex justify-center items-center">
          <div className="absolute">
            <img
              src={profileImge ? profileImge : avatar}
              alt="profile"
              className="w-[150px] z-20 rounded-full h-[150px] bg-img white-text object-cover border-4 border-primaryRed"
            />
          </div>
          <input
            className="z-50 opacity-0"
            style={{ display: "", zIndex: 50 }}
            // ref={upload}
            type="file"
            onChange={handleFileChange}
            name="attachment"
          />
        </div>
        <AntDInputField
          label={"User Name"}
          value={"Jhon"}
          disabled={true}
          rules={[
            {
              // required: true,
              // message: "Please enter your user name!",
            },
          ]}
          placeholder={"Jhon"}
        />

        <AntDInputField
          label={"Current Password"}
          name="cpassword"
          type={"password"}
          rules={[
            {
              // required: true,
              // message: "Please enter your current password!",
            },
          ]}
          placeholder={"Current Password"}
        />

        <AntDInputField
          label={"Password"}
          name="npassword"
          type={"password"}
          rules={[
            {
              // required: true,
              // message: "Please enter your password!",
            },
          ]}
          placeholder={"New Password"}
        />

        <Form.Item>
          <button
            className="px-4 py-2 mt-3 bg-blue-600 w-full text-white rounded-md hover:bg-blue-500 duration-200 ease-in-out"
            type="submit"
            disabled={loading}
          >
            Update Profile
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Profile;
