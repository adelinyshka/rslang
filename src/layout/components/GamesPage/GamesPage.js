import React from 'react';
import { Link } from 'react-router-dom';
import GamePageWrapper from './GamePageWrapper';

export default function GamePage() {
  return (
    <GamePageWrapper>
      <h1 className="game-title">Выберите игру</h1>
      <section className="grid-container">
        <Link className="audiocall" to="games/audiocall">
          <div className="game-name">Audiocall</div>
        </Link>
        <Link className="memory" to="games/memory">
          <div className="game-name ">Memory</div>
        </Link>
        <Link className="savannah" to="games/savannah">
          <div className="game-name ">Savannah</div>
        </Link>
        <Link className="speakit" to="games/speakit">
          <div className="game-name ">Speakit</div>
        </Link>
        <Link className="sprint" to="games/sprint">
          <div className="game-name ">Sprint</div>
        </Link>
        <Link className="puzzle" to="games/puzzle">
          <div className="game-name ">Puzzle</div>
        </Link>
        <div className="center" />
      </section>
    </GamePageWrapper>
  );
}
