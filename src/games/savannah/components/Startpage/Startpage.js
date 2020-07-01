import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import css from './Startpage.module.css';

const StartPageWrapper = styled.div`
  background-color: #f6f6f6;
  font-family: 'Exo',sans-serif;
  position: relative;
  height: 100vh;
  
  @media (max-width: 768px) {
    height: calc(100vh - 50px);
  }
`;

const Cross = styled.img`
  position: absolute;
  z-index: 2;
  top: 9px;
  right: 17px;
  transform: scale(0.5);
  width: 50px;
  height: 50px;
  
  &:hover {
  cursor: pointer;
  }
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 22px;
  text-align: center;
  color: #6979f8;
  
  @media(max-width: 767px) {
    padding-top: 0;
  }
`;

const GameDescription = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: #000000;
  padding: 50px 0 30px;
  width: 60%;
  margin: 0 auto;
`;

const ImgDecoration = styled.img`
  position: absolute;
  height: 300px;
  weight: 300px;
  bottom: 16px;
  right: 16px
`;

const CenterAlignment = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center; 
  justify-content: center; 
`;

export default function Startpage() {
  return (
    <StartPageWrapper>
      <Cross
        src="./assets/images/savannah/x.svg"
        alt="close"
      />
      <CenterAlignment>
        <Title>Саванна</Title>
        <GameDescription>
          Тренировка Саванна развивает словарный запас. Выберите правильный
          перевод слова.
        </GameDescription>
        <Form className={css.form_start}>
          <Link to="/games/savannah">
            <Button
              className={css.start_btn}
              variant="outline-success"
            >
              Start
            </Button>
          </Link>
        </Form>
      </CenterAlignment>
      <ImgDecoration
        src="./assets/images/savannah/2_trees.svg"
        alt="two trees"
      />
    </StartPageWrapper>
  );
}
