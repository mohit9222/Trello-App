import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../Card";

const mockCard = {
  id: "1",
  title: "Test Card",
  labels: [
    { text: "Label 1", color: "#FF5733" },
    { text: "Label 2", color: "#33FF57" },
  ],
  date: "2024-02-01",
  tasks: [
    { id: "1", text: "Task 1", completed: false },
    { id: "2", text: "Task 2", completed: true },
  ],
};

//test case that renders Card component with title and labels
test("renders Card component with title and labels", () => {
  render(<Card card={mockCard} />);
  const cardTitleElement = screen.getByText("Test Card");
  expect(cardTitleElement).toBeInTheDocument();

  const label1Element = screen.getByText("Label 1");
  expect(label1Element).toBeInTheDocument();

  const label2Element = screen.getByText("Label 2");
  expect(label2Element).toBeInTheDocument();
});

//test case that renders Card component with date
test("renders Card component with date", () => {
  render(<Card card={mockCard} />);
  const dateElement = screen.getByText("2024-02-01");
  expect(dateElement).toBeInTheDocument();
});

// test case that renders Card component with task completion information
test("renders Card component with task completion information", () => {
  render(<Card card={mockCard} />);
  const taskInfoElement = screen.getByText("1/2");
  expect(taskInfoElement).toBeInTheDocument();
});

// test case that triggers onClick event to show CardInfo modal
test("triggers onClick event to show CardInfo modal", () => {
  const mockHandleDragEnd = jest.fn();
  const mockHandleDragEnter = jest.fn();
  const mockRemoveCard = jest.fn();

  render(
    <Card
      card={mockCard}
      handleDragEnd={mockHandleDragEnd}
      handleDragEnter={mockHandleDragEnter}
      removeCard={mockRemoveCard}
    />
  );

  fireEvent.click(screen.getByText("Test Card"));
});
