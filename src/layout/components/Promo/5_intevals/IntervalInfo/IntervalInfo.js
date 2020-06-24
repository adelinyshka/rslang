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
  text-align: left;
  padding: 44px;
  
  @media (max-width: 570px) {
    font-size: 22px;
    padding: 20px 5px;
    text-align: center;
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
        <IntervalH5>Подробнее о технике</IntervalH5>
        <DivStyled>
          <RepeatBtn>Повтор</RepeatBtn>
          <EasyBtn>Легко</EasyBtn>
          <MidBtn>Средне</MidBtn>
          <HardBtn>Сложно</HardBtn>
        </DivStyled>

        <Container>
          <Row className={css.interval_row}>
            <Col className={css.interval_text} md={12} lg={4}>
              Каждый раз, изучая интересующий нас материал, мы сталкиваемся с
              необходимостью в его повторении, что требуется для лучшего
              усвоения и запоминания.
              <br/>
              Бывает, что спустя определенное время, в нашей памяти не остается
              и следа от нужной информации. После таких ситуаций встает вопрос
              о способе, который позволит работать с большими объемами данных,
              сохраняя их на длительный срок.
              <br/>
              К счастью, существует множество различных методик, способных
              повысить эффективность обучения. Среди них можно выделить
              интервальные повторения.
            </Col>

            <Col className={css.interval_text} md={12} lg={4}>
              Суть заключается в том, что информацию, которую мы запоминаем,
              необходимо со временем повторять ни каждый день, ни через год, а
              через определенные, увеличивающиеся со временем интервалы. Они
              рассчитываются индивидуально и напрямую зависят от
              функционирования мозга.
              <br/>
              Предположим, вы выучили новое иностранное слово. Повторите его
              спустя несколько минут после того, как услышали его, затем –
              через пару дней, затем – через 2 дня, затем
              – через 5 дней, затем – через 10 дней, 3 недели, 6 недель, 3
              месяца, 8 месяцев и т.д. Через некоторое время оно накрепко
              засядет в вашей голове – нужно будет лишь изредка его повторять.

            </Col>

            <Col className={css.interval_text} md={12} lg={4}>
              Наше программное обеспечение на основе метода интервального
              повторения все сделает за вас. Вам лишь необходимо добавить
              интервалы
              повторения удобные для вас. И регулярно тренироваться.
              <br/>
              Если, ответив верно, вы оцениваете слово как "Легко", то в
              следующий раз программа его предложит не скоро, если же вы
              допустили ошибку или не вспомнили ответ, программа предложит это
              слово снова несколько раз, пока вы не справитесь.
              <br/>
              Так же и с кнопками "Средне" и "Сложно", вы можете сами выбрать в
              настройках как часто хотите повторять тренировки.
              <br/>
              По такому принципу построены одни из самых эффективных методик
              обучения. В основе их создания лежат исследования немецкого
              ученого Германа Эббингауза, который представил “Кривую
              забывания”, отражающую способности мозга к запоминанию.
            </Col>

            <Col className={css.interval_text}>
              Выбирая интервалы повторений, отталкивайтесь от сроков и объема
              информации, целей ее запоминания.
              <br/>
              С одной стороны, можно повторять информацию каждый день. Однако
              этот подход не такой эффективный, потому что вы затрачиваете
              много времени.
              <br/>
              Или вы можете подобрать интервалы лично для себя.
              Ниже приведены среднестатистические данные об эффективных
              интервалах повторения:
              <br/>
              - сразу же после запоминания;<br/>
              - далее, в течение дня;<br/>
              - потом на следующий день;<br/>
              - затем в течение 3 дней;<br/>
              - в течение 5-7 дней;<br/>
              - 10-14 дней;<br/>
              - 3-4 недель;<br/>
              - 2-3 месяцев;<br/>
              - каждые 6-12 месяцев.<br/>


            </Col>
          </Row>
        </Container>
      </IntervalCard>
    </div>
  );
};

export default IntervalInfo;
