// Importing React and necessary styles for the AddCard component
import { useState } from "react";
import { CloseOutlinedIcon } from "../utils/Icons";
import "../../assets/css/Card.css";

// AddCard component functional definition
const AddCard = (props) => {
  // Destructuring props to get required values
  const { buttonText, placeholder, text, onSubmit, displayClass, editClass } =
    props;

  // State variables for managing the visibility and input value of the card
  const [showCard, setShowCard] = useState(false);
  const [inputValue, setInputValue] = useState(props.default || "");

  return (
    // Container for the AddCard component
    <div className="add_card">
      {/* Conditional rendering based on showCard state */}
      {showCard ? (
        // Form for editing with conditional class and onSubmit function
        <form
          className={`editable_edit ${editClass || ""}`}
          onSubmit={(event) => {
            event.preventDefault();
            // Call onSubmit function with input value and reset state
            if (onSubmit) onSubmit(inputValue);
            setShowCard(false);
            setInputValue("");
          }}
        >
          {/* Input field for adding/editing item */}
          <input
            data-testid="add-card-input"
            autoFocus
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholder || "Enter item"}
          />
          {/* Footer with submit button and close icon */}
          <div className="edit_footer">
            <button type="submit">{buttonText || "Add"}</button>
            <CloseOutlinedIcon onClick={() => setShowCard(false)} />
          </div>
        </form>
      ) : (
        // Display mode with onClick to toggle showCard state
        <p
          className={`edit_display ${displayClass || ""}`}
          onClick={() => setShowCard(true)}
        >
          {text || "Add item"}
        </p>
      )}
    </div>
  );
};

export default AddCard;
