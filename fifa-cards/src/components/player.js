// src/components/Player.js
import React from 'react';
import { Card } from 'react-bootstrap';

export default Player;
const cardStyle = {
  width: '19rem',
  margin: '20px',
  boxShadow: '0 0 10px rgba(105, 75, 75, 0.1)',
  backgroundColor: '#f8f9fa',
  padding: '20px',
  border: '1px solid #dee2e6',
  borderRadius: '20px',
};

const imgStyle = {
  height: '300px',
  objectFit: 'cover'
};

function Player({
  name = "Unknown Player",
  team = "No Team",
  nationality = "N/A",
  jerseyNumber = 0,
  age = 0,
  imageUrl = "https://via.placeholder.com/250x250.png?text=Player"
}) {
  return (
    <Card  className='card' style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={name} style={imgStyle} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


