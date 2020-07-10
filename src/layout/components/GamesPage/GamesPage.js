import React from 'react';
import { Link } from 'react-router-dom';
import GamePageWrapper from './GamePageWrapper';

export default function GamePage() {
  return (
    <GamePageWrapper>
      <h1 className="game-title">Выберите игру</h1>
      <section className="grid-container">
        <Link className="audiocall" to="audiocall">
          <div className="game-name">Audiocall</div>
        </Link>
        <Link className="memory" to="memory">
          <div className="game-name ">Memory</div>
        </Link>
        <Link className="savannah" to="savannah">
          <div className="game-name ">Savannah</div>
        </Link>
        <Link className="speakit" to="speakit">
          <div className="game-name ">Speakit</div>
        </Link>
        <Link className="sprint" to="sprint">
          <div className="game-name ">Sprint</div>
        </Link>
        <Link className="puzzle" to="puzzle">
          <div className="game-name ">Puzzle</div>
        </Link>
        <div className="center" />
      </section>
    </GamePageWrapper>
  );
}
