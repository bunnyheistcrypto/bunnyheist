import { Modal } from "antd";
import React from "react";

export const LoginModal = ({isVisible, setIsVisible, handleOk}) => {
    return (
        <Modal title="Login" visible={isVisible} onCancel={() => setIsVisible(false)} onOk={handleOk}>
            <p>Some contents...</p>
        </Modal>
    );
};
