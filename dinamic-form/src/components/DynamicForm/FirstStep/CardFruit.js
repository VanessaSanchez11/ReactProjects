import React from "react";
import { Card, Col } from "react-bootstrap";

const CardFruit = ({ fruit, clickCard, selectedCard }) => {
  const { id, description, icon, name } = fruit;

  return (
    <Col
      className={`card-fruit mt-2 ${
        selectedCard === fruit.id ? "selected-card" : ""
      }`}
      onClick={() => clickCard(fruit)}
      key={id}
    >
      <Card>
        <Card.Body>
          <Card.Title>{icon}</Card.Title>
          <Card.Subtitle>{name}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardFruit;
