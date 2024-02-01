// Importing React library and styles for the Modal component
import React from "react";
import "../../assets/css/Modal.css";

// Modal component functional definition
const Modal = (props) => {
  return (
    // Outer container for the modal, triggers onClose function on click if provided
    <div
      className="modal"
      onClick={() => (props.onClose ? props.onClose() : "")}
    >
      {/* Inner container for modal content, stops propagation of click events */}
      <div
        className="modal_content custom-scroll"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Render children components passed to the Modal component */}
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
