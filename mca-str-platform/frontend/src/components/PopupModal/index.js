import React from "react";
import { Modal } from "antd";
import { CustomModalContent } from "styles/components/PopupModal";

const DefaultPopupModal = ({ open, onCancel, content, icon }) => {
  return (
    <div>
      <div>
        <Modal open={open} onCancel={onCancel} footer={null}>
          <CustomModalContent>
            <img src={icon}></img>
            {content}
          </CustomModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default DefaultPopupModal;
