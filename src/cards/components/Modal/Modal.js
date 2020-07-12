import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import {
  passedCardsSelector, rightAnswersSelector,
  newWordsSelector,
} from '../../redux/selectors';
import {
  setGameEnded,
} from '../../redux';
import StyleRules from './style.Modal';

const ModalStatsForCards = () => {
  const dispatch = useDispatch();
  const passedCards = useSelector(passedCardsSelector);
  const rightAnswers = useSelector(rightAnswersSelector);
  const newWords = useSelector(newWordsSelector);
  return (
    <StyleRules>
      <div className="pop-up" onClick={() => dispatch(setGameEnded(false))}>
        <div className="top stats">
          <div>
            <img
              className="icon"
              src="/assets/images/common/yes.svg"
              alt="question in round"
            />
          </div>
          <section className="content">
            <Container fuild>
              <Row>
                <Col xs={1}>
                  <img
                    className="round"
                    src="/assets/images/common/dark_vio.svg"
                    alt=""
                  />
                </Col>
                <Col
                  xs={9}
                  className="text-stats"
                >
                Количество пройденных слов
                </Col>
                <Col className="text-dark-vio" xs={1}>{passedCards}</Col>
              </Row>
              <Row>
                <Col xs={1}>
                  <img
                    className="round"
                    src="/assets/images/common/vio.svg"
                    alt=""
                  />
                </Col>
                <Col xs={9} className="text-stats">% верных ответов</Col>
                <Col className="text-vio" xs={1}>{rightAnswers}</Col>
              </Row>
              <Row>
                <Col xs={1}>
                  <img
                    className="round"
                    src="/assets/images/common/pink.svg"
                    alt=""
                  />
                </Col>
                <Col xs={9} className="text-stats">Количество новых слов</Col>
                <Col xs={1} className="text-pink">{newWords}</Col>
              </Row>
              <Row>
                <Col xs={1}>
                  <img
                    className="round"
                    src="/assets/images/common/green.svg"
                    alt=""
                  />
                </Col>
                <Col
                  xs={9}
                  className="text-stats"
                >
              Самая длинная серия верных ответов
                </Col>
                <Col xs={1} className="text-green">5</Col>
              </Row>
            </Container>
          </section>

        </div>
        <div className="bottom">
          <div className="congrats-text">
          Поздравляем!
          </div>

        </div>
      </div>
    </StyleRules>
  );
};

export default ModalStatsForCards;
