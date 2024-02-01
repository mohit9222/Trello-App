import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";

test("renders Body component with boards and adds a new board", async () => {
  render(<Body />);

  // Verify that the "Add Board" text is present
  expect(screen.getByText("Add Board")).toBeInTheDocument();

  // Add a new board
  const newBoardTitle = "New Board";
  fireEvent.change(screen.getByPlaceholderText("Enter Board title"), {
    target: { value: newBoardTitle },
  });
  fireEvent.click(screen.getByText("Add Board"));

  // Wait for state changes to be reflected in the DOM
  await waitFor(() => {
    expect(screen.getByText(newBoardTitle)).toBeInTheDocument();
  });
});
