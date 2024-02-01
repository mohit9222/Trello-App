// Importing necessary dependencies and components
import React from "react";
import Card from "./Card";
import AddCard from "./AddCard";
import { DeleteOutlineOutlinedIcon } from "../utils/Icons";
import "../../assets/css/Board.css";

// Board component functional definition
const Board = (props) => {
  return (
    // Main container for the Board component
    <div className="board">
      {/* Top section of the board, displaying title and delete icon */}
      <div className="board_top">
        {/* Title of the board and the count of cards */}
        <div className="board_top_title">
          <span>
            {props.board?.title} {`${props.board?.cards?.length}`}
          </span>
          {/* More options (currently only delete icon) */}
          <div className="card_top_more">
            {/* Delete icon, triggers removeBoard function on click */}
            <DeleteOutlineOutlinedIcon
              onClick={() => props.removeBoard(props.board?.id)}
            />
          </div>
        </div>
      </div>
      {/* Container for displaying cards with custom scrolling */}
      <div className="board_cards custom-scroll">
        {/* Mapping over each card in the board and rendering Card component */}
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            removeCard={props.removeCard}
            boardId={props.board?.id}
            handleDragEnd={props.handleDragEnd}
            handleDragEnter={props.handleDragEnter}
            updateCard={props.updateCard}
          />
        ))}
        {/* AddCard component for adding new cards */}
        <AddCard
          displayClass="board_cards_add"
          text="Add Card"
          placeholder="Enter Card Title"
          onSubmit={(value) => props.addCard(value, props.board?.id)}
        />
      </div>
    </div>
  );
};

// Exporting the Board component
export default Board;
