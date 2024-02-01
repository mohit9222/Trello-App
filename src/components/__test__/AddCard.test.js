// Importing React and testing utilities from testing-library
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddCard from "../AddCard";

// Test case: renders AddCard component in display mode
test("renders AddCard component in display mode", () => {
  render(<AddCard />);
  const addCardElement = screen.getByText("Add item");
  expect(addCardElement).toBeInTheDocument();
});

// Test case: renders AddCard component in display mode with custom text
test("renders AddCard component in display mode with custom text", () => {
  render(<AddCard text="Custom Add Text" />);
  const addCardElement = screen.getByText("Custom Add Text");
  expect(addCardElement).toBeInTheDocument();
});
