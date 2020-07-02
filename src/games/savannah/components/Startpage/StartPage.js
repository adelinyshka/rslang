import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StartPageWrapper from './StartPageWrapper';

export default function StartPage() {
  return (
    <StartPageWrapper>
      {/* временно на главную чтобы видно было переход */}
      <Link to="main">
        <img
          className="cross"
          src="./assets/images/savannah/x.svg"
          alt="close"
        />
      </Link>
      <div className="center_alignment">
        <h2 className="title_h2">Саванна</h2>
        <div className="game_description">
          Тренировка Саванна развивает словарный запас. Выберите правильный
          перевод слова.
        </div>
        <Form>
          <Link to="/games/savannah">
            <Button
              className="start_btn"
            >
              Start
            </Button>
          </Link>
        </Form>
      </div>
      <img
        className="decoration"
        src="./assets/images/savannah/2_trees.svg"
        alt="two trees"
      />
    </StartPageWrapper>
  );
}
