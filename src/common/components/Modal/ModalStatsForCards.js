import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import StyleRules from './style.ModalStatsForCards';

const ModalStatsForCards = ({
  allWords, rightPercent, newWords, rightSet,
}) => (
  <StyleRules>
    <div className="pop-up">
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
              <Col className="text-dark0vio" xs={3}>{allWords}</Col>
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
              <Col className="text-vio" xs={3}>{rightPercent}</Col>
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
              <Col xs={2} className="text-green">{rightSet}</Col>
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

ModalStatsForCards.propTypes = {
  allWords: PropTypes.string.isRequired,
  rightPercent: PropTypes.func.isRequired,
  newWords: PropTypes.string.isRequired,
  rightSet: PropTypes.string.isRequired,
};

export default ModalStatsForCards;
