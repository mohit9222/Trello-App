import React from "react";
import Container from "@mui/material/Container";

const About = () => {
  return (
    <div className="about">
      <Container maxWidth="sm">
        <h1>About</h1>
        <p>
          Trello is a web-based, kanban-style, list-making application and is
          developed by Trello Enterprise, a subsidiary of Atlassian. Created in
          2011 by Fog Creek Software, it was spun out to form the basis of a
          separate company in New York City in 2014 and sold to Atlassian in
          January 2017.
        </p>
      </Container>
    </div>
  );
};

export default About;
