import React, { useState, useEffect } from "react";
import Header from "./Header";
import Board from "./Board";
import AddCard from "./AddCard";
import Button from "@mui/material/Button";

const Body = () => {
  // Load initial boards from localStorage or an empty array
  const initialBoards = JSON.parse(localStorage.getItem("kanban_boards")) || [];
  const [boards, setBoards] = useState(initialBoards);

  // State to track the drag and drop target
  const [target, setTarget] = useState({
    cid: "",
    bid: "",
  });

  // Update localStorage whenever the boards state changes
  useEffect(() => {
    localStorage.setItem("kanban_boards", JSON.stringify(boards));
  }, [boards]);

  // Add a card to a specific board
  const addCard = (title, bid) => {
    // Create a new card object
    const card = {
      id: Date.now() + Math.random(),
      title,
      labels: [],
      tasks: [],
      date: "",
      desc: "",
    };

    // Find the index of the target board
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    // Update boards with the new card
    const tempBoards = [...boards];
    tempBoards[index].cards.push(card);
    setBoards(tempBoards);
  };

  // Remove a card from a specific board
  const removeCard = (cid, bid) => {
    // Find the index of the target board
    const bIndex = boards.findIndex((item) => item.id === bid);
    if (bIndex < 0) return;

    // Find the index of the card in the target board
    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    if (cIndex < 0) return;

    // Update boards by removing the card
    const tempBoards = [...boards];
    tempBoards[bIndex].cards.splice(cIndex, 1);
    setBoards(tempBoards);
  };

  // Add a new board
  const addBoard = (title) => {
    // Create a new board object
    setBoards([
      ...boards,
      {
        id: Date.now() + Math.random(),
        title,
        cards: [],
      },
    ]);
  };

  // Remove a board
  const removeBoard = (bid) => {
    // Update boards by removing the target board
    const tempBoards = boards.filter((item) => item.id !== bid);
    setBoards(tempBoards);
  };

  // Handle drag enter event
  const handleDragEnter = (cid, bid) => {
    setTarget({
      cid,
      bid,
    });
  };

  // Handle drag end event
  const handleDragEnd = (cid, bid) => {
    let s_bIndex, s_cIndex, t_bIndex, t_cIndex;

    // Find source board and card index
    s_bIndex = boards.findIndex((item) => item.id === bid);
    if (s_bIndex < 0) return;
    s_cIndex = boards[s_bIndex].cards?.findIndex((item) => item.id === cid);
    if (s_cIndex < 0) return;

    // Find target board and card index
    t_bIndex = boards.findIndex((item) => item.id === target.bid);
    if (t_bIndex < 0) return;
    t_cIndex = boards[t_bIndex].cards?.findIndex(
      (item) => item.id === target.cid
    );
    if (t_cIndex < 0) return;

    // Update boards with the new card position
    const tempBoards = [...boards];
    const tempCard = tempBoards[s_bIndex].cards[s_cIndex];

    tempBoards[s_bIndex].cards.splice(s_cIndex, 1);
    tempBoards[t_bIndex].cards.splice(t_cIndex, 0, tempCard);

    setBoards(tempBoards);
  };

  // Update card details
  const updateCard = (cid, bid, card) => {
    // Find board and card index
    const bIndex = boards.findIndex((item) => item.id === bid);
    if (bIndex < 0) return;
    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    if (cIndex < 0) return;

    // Update boards with the modified card
    const tempBoards = [...boards];
    tempBoards[bIndex].cards[cIndex] = card;
    setBoards(tempBoards);
  };

  return (
    <div className="app">
      {/* Header component (if you want to include it) */}
      <div className="app_outer">
        <div className="app_boards">
          {/* Map through boards and render Board components */}
          {boards.map((item) => (
            <Board
              key={item.id}
              board={item}
              removeBoard={removeBoard}
              addCard={addCard}
              removeCard={removeCard}
              handleDragEnd={handleDragEnd}
              handleDragEnter={handleDragEnter}
              updateCard={updateCard}
            />
          ))}
          {/* AddCard component to add a new board */}
          <div className="app_boards_boards">
            <AddCard
              displayClass="app_boards_board_add"
              text="Add Board"
              placeholder="Enter Board title"
              onSubmit={(value) => addBoard(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
