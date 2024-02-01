// Importing necessary dependencies for testing React components
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Priority from "../Priority";

// Test case: Check if the Priority component renders text correctly
test("renders Priority with Text", () => {
  render(<Priority text="High Priority" />);
  expect(screen.getByText("High Priority")).toBeInTheDocument();
});

// Test case: Check if the Priority component renders with a custom background color
test("renders Priority with Custom Background Color", () => {
  render(<Priority text="Low Priority" color="#ffc107" />);
  const priorityElement = screen.getByText("Low Priority");
  expect(priorityElement).toHaveStyle("background-color: #ffc107");
});

// Test case: Check if the Close Icon triggers the onClick event without an onClose handler
test("handles Close Icon Click Without onClose Handler", () => {
  render(<Priority text="Test" close={true} />);
  const closeIcon = screen.getByTestId("CloseOutlinedIcon");
  fireEvent.click(closeIcon);
});
