// Importing React, useState hook, and other components/icons
import React, { useState } from "react";
import Priority from "./Priority";
import CardInfo from "./CardInfo";
import { AccessTimeOutlinedIcon } from "../utils/Icons";
import { AssignmentTurnedInOutlinedIcon } from "../utils/Icons";
import { DeleteOutlineOutlinedIcon } from "../utils/Icons";
import "../../assets/css/Card.css";

// Card component functional definition
const Card = (props) => {
  // State variable to manage the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Conditional rendering of CardInfo component based on showModal state */}
      {showModal && (
        <CardInfo
          updateCard={props.updateCard}
          boardId={props.boardId}
          onClose={() => setShowModal(false)}
          card={props.card}
        />
      )}

      {/* Container for the Card component */}
      <div
        className="card"
        draggable
        onDragEnd={() => props.handleDragEnd(props.card?.id, props.boardId)}
        onDragEnter={() => props.handleDragEnter(props.card?.id, props.boardId)}
        onClick={() => setShowModal(true)}
      >
        {/* Top section of the card with labels and more options */}
        <div className="card_top">
          <div className="card_top_labels">
            {/* Mapping through card labels and rendering Priority component */}
            {props?.card?.labels?.map((item, index) => (
              <Priority key={index} text={item.text} color={item.color} />
            ))}
          </div>
          {/* Delete a card with delete icon */}
          <div className="card_top_more">
            <DeleteOutlineOutlinedIcon
              onClick={() => props.removeCard(props.card?.id, props.boardId)}
            />
          </div>
        </div>

        {/* Title section of the card */}
        <div className="card_title">{props.card?.title}</div>

        {/* Footer section of the card with date and task information */}
        <div className="card_footer">
          {/* Display date if available */}
          {props.card?.date && (
            <p>
              <AccessTimeOutlinedIcon />
              {props.card?.date}
            </p>
          )}

          {/* Display task completion information */}
          {props.card?.tasks?.length > 0 && (
            <p>
              <AssignmentTurnedInOutlinedIcon />
              {props.card?.tasks?.filter((item) => item.completed).length}/
              {props.card?.tasks?.length}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
