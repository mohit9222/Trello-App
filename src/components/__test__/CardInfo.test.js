import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardInfo from "../CardInfo";

const mockCard = {
  id: "1",
  title: "Test Card",
  desc: "Test Description",
  date: "2024-02-01",
  labels: [
    { text: "Label 1", color: "#FF5733" },
    { text: "Label 2", color: "#33FF57" },
  ],
  tasks: [
    { id: "1", text: "Task 1", completed: false },
    { id: "2", text: "Task 2", completed: true },
  ],
};

const mockProps = {
  card: mockCard,
  boardId: "board1",
  onClose: jest.fn(),
  updateCard: jest.fn(),
};

// test case that renders CardInfo component with card details
test("renders CardInfo component with card details", () => {
  render(<CardInfo {...mockProps} />);
  const titleElement = screen.getByText("Title");
  const descriptionElement = screen.getByText("Description");
  const deadlineElement = screen.getByText("Deadline");
  const labelsElement = screen.getByText("Labels");
  const tasksElement = screen.getByText("Tasks");

  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(deadlineElement).toBeInTheDocument();
  expect(labelsElement).toBeInTheDocument();
  expect(tasksElement).toBeInTheDocument();
});
