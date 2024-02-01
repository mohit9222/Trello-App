// Importing React and testing utilities from testing-library
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// Importing the Board component to be tested
import Board from "../Board";

// Mock data for testing
const mockBoard = {
  id: 1,
  title: "Test Board",
  cards: [
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
  ],
};

// Mock functions for testing
const mockRemoveBoard = jest.fn();
const mockRemoveCard = jest.fn();
const mockHandleDragEnd = jest.fn();
const mockHandleDragEnter = jest.fn();
const mockUpdateCard = jest.fn();
const mockAddCard = jest.fn();

// Test case: renders Board component with title and delete icon
test("renders Board component with title and delete icon", () => {
  render(<Board board={mockBoard} removeBoard={mockRemoveBoard} />);
  const boardTitleElement = screen.getByText("Test Board 2");
  expect(boardTitleElement).toBeInTheDocument();
});

// Test case: renders Board component with cards and AddCard section
test("renders Board component with cards and AddCard section", () => {
  render(
    <Board
      board={mockBoard}
      removeBoard={mockRemoveBoard}
      removeCard={mockRemoveCard}
      handleDragEnd={mockHandleDragEnd}
      handleDragEnter={mockHandleDragEnter}
      updateCard={mockUpdateCard}
      addCard={mockAddCard}
    />
  );

  // Checking if each card in mockBoard is present in the document
  mockBoard.cards.forEach((card) => {
    const cardElement = screen.getByText(card.title);
    expect(cardElement).toBeInTheDocument();
  });

  // Checking if the AddCard section is present in the document
  const addCardElement = screen.getByText("Add Card");
  expect(addCardElement).toBeInTheDocument();
});
