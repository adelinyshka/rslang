import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import css from './IntervalInfo.module.css';

const IntervalCard = styled.div`
  margin: 48px;
  border-radius: 50px;
  background: white;
  
  @media (max-width: 570px) {
    margin: 0;
  }
`;

const IntervalH5 = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 130%;
  color: #212353;
  text-align: center;
  padding: 44px;
  font-family: 'Exo', sans-serif;
  
  @media (max-width: 570px) {
    font-size: 22px;
    padding: 20px 5px;
    
  }
`;

const IntervalBtn = styled.button`
  width: 94px;
  height: 48px;
  border-radius: 16px;
  color: white;
  border-color: transparent;
  cursor: unset!important;
  margin: 10px;
`;

const DivStyled = styled.div`
  width: 70%;
  margin: 0 auto;
  display:flex;
  justify-content: space-around;
  
  @media (max-width: 690px) {
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

const RepeatBtn = styled(IntervalBtn)`
  background: #6979F8;
`;

const EasyBtn = styled(IntervalBtn)`
  background: #DB7CF5;
`;

const MidBtn = styled(IntervalBtn)`
  background: #AA5DDB;
`;

const HardBtn = styled(IntervalBtn)`
  background: #7348BF;
`;

const IntervalInfo = () => {
  return (
    <div>
      <IntervalCard>
        <IntervalH5>Реализация метода в тренировках</IntervalH5>

        <Container fluid>
          <Row className={css.interval_row}>
            <Col className={css.interval_text} md={12}>
              Метод интервальных повторений реализован в тренировке
              "Карточки".
              На экране появляется слово на английском и вы определяете для
              себя
              насколько хорошо его знаете нажав одну из четырех подобных
              кнопок:
            </Col>
          </Row>
        </Container>

        <DivStyled>
          <RepeatBtn>Повтор</RepeatBtn>
          <EasyBtn>Легко</EasyBtn>
          <MidBtn>Средне</MidBtn>
          <HardBtn>Сложно</HardBtn>
        </DivStyled>

        <Container fluid>
          <Row className={css.interval_row}>
            <Col className={css.interval_text} md={12}>

              Слово будет появляться в тренировках в зависимости от указанной
              для вас сложности.
              <br/>
              <br/>
              Если, ответив верно, вы оцениваете слово как "Легко", то в
              следующий раз программа его предложит не скоро, если же вы
              допустили ошибку или не вспомнили ответ, программа предложит это
              слово снова несколько раз, пока вы не справитесь.
              <br/>
              Так же и с кнопками "Средне" и "Сложно", вы можете сами выбрать в
              настройках как часто хотите повторять тренировки.
              <br/>
              <br/>
              По такому принципу построены одни из самых эффективных методик
              обучения. В основе их создания лежат исследования немецкого
              ученого Германа Эббингауза, который представил “Кривую
              забывания”, отражающую способности мозга к запоминанию.

            </Col>
          </Row>
        </Container>
      </IntervalCard>
    </div>
  );
};

export default IntervalInfo;
