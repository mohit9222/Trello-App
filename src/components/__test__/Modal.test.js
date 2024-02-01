import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "../Modal";

// Test case: Check if the modal content renders correctly
test("renders modal content", () => {
  render(
    <Modal>
      <div>Modal Content</div>
    </Modal>
  );
  const modalContentElement = screen.getByText("Modal Content");
  expect(modalContentElement).toBeInTheDocument();
});

// Test case: Check if clicking on the modal content does not trigger onClose function
test("does not call onClose function on modal content click", () => {
  const onCloseMock = jest.fn();
  render(
    <Modal onClose={onCloseMock}>
      <div>Modal Content</div>
    </Modal>
  );
  const modalContentElement = screen.getByText("Modal Content");
  fireEvent.click(modalContentElement);
  expect(onCloseMock).not.toHaveBeenCalled();
});
