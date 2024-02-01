// Importing React library and necessary components and styles
import React from "react";
import { CloseOutlinedIcon } from "../utils/Icons";
import "../../assets/css/Priority.css";

// Priority component functional definition
const Priority = (props) => {
  // Destructuring props to extract required values
  const { text, close, color, onClose } = props;

  return (
    // Container for the Priority component with inline style for background color
    <div className="priority" style={{ backgroundColor: color }}>
      {/* Displaying the text content of the priority */}
      {text}
      {/* Conditional rendering of the close icon based on the 'close' prop */}
      {close && (
        // Close icon, triggers onClose function on click if provided
        <CloseOutlinedIcon onClick={() => (onClose ? onClose() : "")} />
      )}
    </div>
  );
};

export default Priority;
