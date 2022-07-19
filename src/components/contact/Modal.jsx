import React from "react";
import "./modal.css";

const Modal = (props) => {
  const { modalTitle, modalPara, openModal, setOpenModal } = props;
  return (
    <div className="modalBackground">
      <div className="container modalContainer">
        <h2>{modalTitle}</h2>
        <p>{modalPara}</p>
        <button
          className="button"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
