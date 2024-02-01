import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Header";

// Test to check if the app title is rendered
test("renders app title", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const appTitleElement = screen.getByText("Trello");
  expect(appTitleElement).toBeInTheDocument();
});

// Test to check if Home and About links are rendered
test("renders Home and About links", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const homeLink = screen.getByText("Home");
  const aboutLink = screen.getByText("About");

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});

// Test to check if navigation works on link click
test("navigates to Home and About pages on link click", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const homeLink = screen.getByText("Home");
  const aboutLink = screen.getByText("About");

  // Verify the href attributes for Home and About links
  expect(homeLink.getAttribute("href")).toBe("/");
  expect(aboutLink.getAttribute("href")).toBe("/about");
});
