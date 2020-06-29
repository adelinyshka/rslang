import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IntervalCard from './IntervalCard';

const IntervalInfo = () => (
  <>
    <IntervalCard>
      <h5>Реализация метода в тренировках</h5>
      <Container fluid>
        <Row className="interval_row">
          <Col className="interval_text" md={12}>
            Метод интервальных повторений реализован в тренировке
            &apos;Карточки&apos;.
            На экране появляется слово на английском и вы определяете для
            себя
            насколько хорошо его знаете нажав одну из четырех подобных
            кнопок:
          </Col>
        </Row>
      </Container>

      <div className="styled">
        <button className="repeat" type="submit">Повтор</button>
        <button className="easy" type="submit">Легко</button>
        <button className="mid" type="submit">Средне</button>
        <button className="hard" type="submit">Сложно</button>
      </div>

      <Container fluid>
        <Row className="interval_row">
          <Col className="interval_text" md={12}>
            Слово будет появляться в тренировках в зависимости от указанной
            для вас сложности.
            <br />
            <br />
            Если, ответив верно, вы оцениваете слово как &apos;Легко&apos;, то
            в следующий раз программа его предложит не скоро, если же вы
            допустили ошибку или не вспомнили ответ, программа предложит это
            слово снова несколько раз, пока вы не справитесь.
            <br />
            Так же и с кнопками &apos;Средне&apos; и &apos;Сложно&apos;, вы
            можете сами выбрать в настройках как часто хотите повторять
            тренировки.
            <br />
            <br />
            По такому принципу построены одни из самых эффективных методик
            обучения. В основе их создания лежат исследования немецкого
            ученого Германа Эббингауза, который представил “Кривую
            забывания”, отражающую способности мозга к запоминанию.

          </Col>
        </Row>
      </Container>
    </IntervalCard>
  </>
);

export default IntervalInfo;
