// src/components/PlayersList.js
import React from 'react';
import Player from './player';
import players from '../players';
import { Container, Row, Col } from 'react-bootstrap';

function PlayersList() {
  return (
    <Container>
      <h2 className="text-center mt-4">FIFA Player Cards</h2>
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PlayersList;
