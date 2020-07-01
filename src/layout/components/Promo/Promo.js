import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import FeatureCard from './FeatureCard/FeatureCard';
import Footer from './Footer/Footer';
import GameCard from './GameCard/GameCard';
import Header from './Header/Header';
import IntervalInfo from './IntervalInfo/IntervalInfo';
import PromoWrapper from './PromoWrapper';
import Study from './Study/Study';
import VideoBlock from './VideoBlock/VideoBlock';

export default function Promo() {
  return (
    <PromoWrapper>
      <div className="promo_bg">
        <Header />
        <div className="promo_alignment">
          <div>
            <div className="huge_title">
              Выучить английский - легко
            </div>
            <div className="main_page_text">
              Уникальное приложение для изучения английского.
              Увлекательные игры для тренировки слов и метод интервального
              повторения для запоминания слов навсегда.
            </div>
          </div>
          <img
            className="main_page_img"
            src="./assets/images/promo/img_main_page.svg"
            alt="big colored pic"
          />
        </div>
        <h2 className="promo_title_mid">Что внутри?</h2>
        <VideoBlock />
        <div id="features" />
        <h2 className="promo_title_mid">Особенности</h2>
        <div className="text_after_title">
          Что полезного вы найдете в нашем приложении для себя и своей семьи
        </div>
        <Container fluid>
          <Row>
            <Col xs={12} md={6}>
              <FeatureCard
                title="Игры"
                text={'Изучать новое интереснее во время игры.'
                + ' Поэтому мы подготовили 6 увлекательных'
                + ' красочных игр, чтобы учить английский было'
                + ' веселее.'}
                src="./assets/images/promo/feature1.svg"
              />
            </Col>
            <Col xs={12} md={6}>
              <FeatureCard
                className="top_pad"
                title="Онлайн доступ"
                text={'В отличии от оффлайн курсов наши игры'
                + ' и тренировки доступны всегда. Занимайтесь'
                + ' когда вам удобно, ни от чего не завися.'}
                src="./assets/images/promo/feature2.svg"
              />
            </Col>
            <Col xs={12} md={6}>
              <FeatureCard
                title="Статистика прогресса"
                text={'Вне зависимости от того, играете ли вы'
                + ' или тренируете слова - статистика по'
                + ' изученным'
                + ' словам обновляется и всегда доступна в'
                + ' настройках.'}
                src="./assets/images/promo/feature3.svg"
              />
            </Col>

            <Col xs={12} md={6}>
              <FeatureCard
                title="Интервальные повторения"
                text={'В тренировке "Карточки" используется'
                + ' метод интервальных повторений, который'
                + ' признан одним из самых эффективных в'
                + ' изучении новых языков.'}
                src="./assets/images/promo/feature4.svg"
              />
            </Col>
          </Row>
        </Container>
        <div id="games" />
        <h2 className="promo_title_mid">Игры</h2>
        <div className="text_after_title">
          Английский можно учить интересно и по-настоящему наслаждаться
          процессом
        </div>
        <div className="wrapper_game">
          <GameCard
            src="./assets/images/promo/game_1.svg"
            title="English Puzzle"
            text={'Формирует навыки обратного перевода и написания '
            + 'английских слов.'}
          />
          <GameCard
            src="./assets/images/promo/game_2.svg"
            title="SpeakIt"
            text={'Помогает комплексно тренировать навык письма'
            + ' конструируя фразы.'}
          />
          <GameCard
            src="./assets/images/promo/game_5.svg"
            title="Аудиовызов"
            text="Улучшает восприятие английской речи на слух. "
          />
        </div>
        <img
          className="full_width"
          src="./assets/images/promo/full_width.svg"
          alt={'man on the table working with'
          + ' notebook'}
        />
        <div className="wrapper_game">
          <GameCard
            src="./assets/images/promo/game_4.svg"
            title="Спринт"
            text={'Учит быстро переводить с английского на ваш '
            + 'родной язык. Для этой тренировки используются слова из'
            + ' вашего словаря.'}
          />

          <GameCard
            src="./assets/images/promo/game_3.svg"
            title="Саванна"
            text={'Оттачивает понимание английской речи и быстрого '
            + 'перевода слов, помогает не забыть выученные слова. '}
          />

          <GameCard
            src="./assets/images/promo/game_6.svg"
            title="Мемори"
            text={'Помогает выучить значение слов и учит лучше '
            + 'выражать свои мысли на английском.'}
          />
        </div>
        <div id="method" />
        <h2 className="promo_title_mid">Метод интервальных повторений</h2>
        <div className="text_after_title">
          Метод интервальных повторений поможет надолго запомнить новый
          материал. Особенность метода заключается в том, что информацию,
          которую мы запоминаем, необходимо со временем повторять, но ни
          каждый день, ни через год, а через определенные, увеличивающиеся со
          временем интервалы.
        </div>
        <img
          className="full_width"
          src="./assets/images/promo/graph.svg"
          alt="green graph waved"
        />
        <div className="text_after_title">
          Наше программное обеспечение на основе метода интервального
          повторения все сделает за вас. Вам лишь необходимо регулярно
          тренироваться. При необходимости длительность интервалов можно
          изменить в настройках.
        </div>
        <IntervalInfo />
        <Study />
      </div>
      <Footer />
    </PromoWrapper>
  );
}
