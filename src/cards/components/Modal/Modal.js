import React, { useCallback, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchJSON } from '../../../common/utils';
import { userIdSelector, tokenSelector } from '../../../auth/redux/selectors';

import {
  passedCardsSelector, rightAnswersSelector,
  newWordsSelector, longestStreakSelector,
} from '../../redux/selectors';
import {
  clearCards,
} from '../../redux';
import StyleRules from './style.Modal';

const date = new Date(Date.now());
const dateString = date.toLocaleDateString('en-US');

const Modal = () => {
  const dispatch = useDispatch();
  const passedCards = useSelector(passedCardsSelector);
  const rightAnswers = useSelector(rightAnswersSelector);
  const newWords = useSelector(newWordsSelector);
  const longestStreak = useSelector(longestStreakSelector);

  const token = useSelector(tokenSelector);
  const userId = useSelector(userIdSelector);

  const rightPercentage = useMemo(
    () => Math.floor(rightAnswers * 100 / passedCards),
    [passedCards, rightAnswers],
  );

  const updateStatistics = useCallback(() => {
    const statisticsEndpoint = `users/${userId}/statistics`;
    const getFetchOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };
    fetchJSON(statisticsEndpoint, getFetchOptions)
      .then(({ id, ...data }) => {
        const stats = { ...data };
        const { learnedWords } = stats;
        stats.learnedWords = learnedWords ? learnedWords + newWords : newWords;
        // статистика по карточкам
        const cardsStats = stats.optional.cards;
        // сегодняшняя статистика по карточкам
        const todayStats = cardsStats ? cardsStats[dateString] : null;
        // если статистики по карточкам нет - создаем объект
        if (!cardsStats) {
          stats.optional.cards = {};
        }
        // если сегодняшней статистики нет -
        // передаем в (созданный\сущестовавший) объект сегоднящние данные
        if (!todayStats) {
          stats.optional.cards[dateString] = {
            passedCards,
            rightAnswers,
            newWords,
            longestStreak,
          };
        }
        // если сегодня данные по статистики есть - обновляем их
        if (todayStats) {
          stats.optional.cards[dateString] = {
            passedCards: todayStats.passedCards + passedCards,
            rightAnswers: todayStats.rightAnswers + rightAnswers,
            newWords: todayStats.newWords + newWords,
            longestStreak: longestStreak > todayStats.longestStreak
              ? longestStreak
              : todayStats.longestStreak,
          };
        }

        const putFetchOptions = {
          ...getFetchOptions,
          method: 'PUT',
          body: JSON.stringify(stats),
        };
        fetchJSON(statisticsEndpoint, putFetchOptions)
          .catch((er) => console.log(er));
      })
      .catch(() => {
        const stats = {
          learnedWords: newWords,
          optional: {
            cards: {},
          },
        };
        stats.optional.cards[dateString] = {
          passedCards,
          rightAnswers,
          newWords,
          longestStreak,
        };
        const putFetchOptions = {
          ...getFetchOptions,
          method: 'PUT',
          body: JSON.stringify(stats),
        };
        fetchJSON(statisticsEndpoint, putFetchOptions);
      });
    dispatch(clearCards());
  }, [longestStreak, newWords, passedCards,
    rightAnswers, token, userId, dispatch]);

  return (
    <StyleRules>
      <div className="pop-up">
        <Link to="/main" onClick={() => { updateStatistics(); }}>
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
                  <Col className="text-vio" xs={1}>{rightPercentage}</Col>
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
                  <Col xs={1} className="text-green">{longestStreak}</Col>
                </Row>
              </Container>
            </section>

          </div>
          <div className="bottom">
            <div className="congrats-text">
          Поздравляем!
            </div>

          </div>
        </Link>
      </div>
    </StyleRules>
  );
};

export default Modal;
