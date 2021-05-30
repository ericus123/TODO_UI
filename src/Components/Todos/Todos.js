import React, { useState, useEffect } from "react";
import {
  PlusCircleFill,
  EyeFill,
  PencilSquare,
  TrashFill,
} from "react-bootstrap-icons";
import { Card, Button } from "react-bootstrap";
import "./styles.scss";

const Todos = () => {
  const [tab, setTab] = useState("active");
  return (
    <div className="todos">
      <div className="todos-title">My Todos</div>
      <div className="todos-wrapper">
        {[1, 2, 3, 4].map(() => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Play soccer</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="todos-icons">
                  <EyeFill />
                  <PencilSquare color="#17a2b8" />
                  <TrashFill color="#dc3545" />
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <br />
      <span
        className="add-todo"
        style={{ fontWeight: "bold", cursor: "pointer" }}
      >
        <PlusCircleFill size="40" style={{ color: "#f50057" }} /> Add Todo
      </span>
    </div>
  );
};

export default Todos;
