import React from "react";
import { Modal, Button } from "antd";

function PopUpModel({
  showModel,
  setShowModel,
  onOkFunction,
  onCancelFunction,
  okBtnText,
  Content,
  hideCancel = false,
  hideOk = false,
}) {
  return (
    <Modal
      title=""
      centered
      visible={showModel} // Changed prop name from 'open' to 'visible'
      onCancel={() => setShowModel(false)}
      footer={[
        // <Button key="cancel" onClick={() => setShowModel(false)}>
        //   Cancel
        // </Button>,
        <>
          {hideCancel && (
            <button
              className="px-4 py-1 mt-3 mx-1 border-blue-600 border-[1px] border-solid text-blue-600 rounded-md duration-200 ease-in-out"
              type="submit"
              key="ok"
              onClick={
                onCancelFunction ? onCancelFunction : () => setShowModel(false)
              }
            >
              Cancel
            </button>
          )}
        </>,

        <>
          {!hideOk && (
            <button
              className="px-4 mx-1 py-1 mt-3 border-blue-600 border-[1px] border-solid bg-blue-600 text-white rounded-md hover:bg-blue-500 duration-200 ease-in-out"
              type="submit"
              key="ok"
              onClick={onOkFunction}
            >
              {okBtnText ? okBtnText : `Add Event`}
            </button>
          )}
        </>,
        // <Button key="ok" type="primary" onClick={onOkFunction}>
        //   OK
        // </Button>,
      ]}
    >
      {Content}
    </Modal>
  );
}

export default PopUpModel;
