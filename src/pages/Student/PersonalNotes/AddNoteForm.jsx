import React from "react";
import { Form } from "antd";
import AntDInputField from "../../../components/inputs/AntDInputField";
import AntDTextArea from "../../../components/inputs/AntDTextArea";

function AddNoteForm({ setNotes, setShowModel }) {
  const onFinish = (values) => {
    setNotes((prev) => [...prev, values]);
    setShowModel(false);
  };

  return (
    <div>
      <Form onFinish={onFinish}>
        <AntDInputField
          label={"Title"}
          name="title"
          rules={[
            {
              required: true,
              message: "Please enter your title!",
            },
          ]}
          placeholder={"Title"}
        />

        <AntDTextArea
          label={"Note"}
          name="note"
          rules={[
            {
              required: true,
              message: "Please enter your note!",
            },
          ]}
          placeholder={"note"}
        />

        <Form.Item>
          <button
            className="px-4 py-2 mt-3 bg-blue-600 w-full text-white rounded-md hover:bg-blue-500 duration-200 ease-in-out"
            type="submit"
          >
            Add Note
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddNoteForm;
