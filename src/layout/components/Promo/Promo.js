import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import css from './Promo.module.css';

import FeatureCard from './3_feature/FeatureCard';
import Footer from './5_intevals/Footer';
import GameCard from './4_game/GameCard/GameCard';
import Header from './1_main/Header';
import IntervalInfo from './5_intevals/IntervalInfo';
import ImgFullWidth from './custom_components/ImgFullWidth';
import MainPageImg from './1_main/MainPageImg';
import MainPageText from './1_main/MainPageText';
import Study from './5_intevals/Study/Study';
import TitleHuge from './1_main/TitleHuge';
import TitleH2 from './custom_components/Title_h2';
import TextAfterTitle from './custom_components/Text_after_title';
import VideoBlock from './2_video';

export default function Promo () {
  return (
    <div className={css.promo_body}>

      <div className={css.promo_bg}>

        <Header/>
        <div className={css.promo_alignment}>
          <div>
            <TitleHuge text='Выучить английский - легко'/>
            <MainPageText
              text='Уникальное приложение для изучения английского. Увлекательные игры для тренировки слов и метод интервального повторения для запоминания слов навсегда.'/>
          </div>
          <MainPageImg src={'./assets/images/promo/img_main_page.svg'} alt={'big colored pic'}/>
        </div>

        <VideoBlock/>
        <div id='features'/>
        <TitleH2 text='Особенности'/>
        <TextAfterTitle text={'Что полезного вы найдете в нашем' +
        ' приложении для себя и своей семьи'}/>
        <Container fluid>
          <Row>
            <Col xs={12} md={6}>
              <FeatureCard title={'Игры'}
                           text={'Изучать новое интереснее во время игры.' +
                           ' Поэтому мы подготовили 6 увлекательных' +
                           ' красочных игр, чтобы учить английский было' +
                           ' веселее.'}
                           src={'./assets/images/promo/feature1.svg'}/>
            </Col>
            <Col xs={12} md={6}>
              <FeatureCard className={'top_pad'}
                           title={'Онлайн доступ'}
                           text={'В отличии от оффлайн курсов наши игры' +
                           ' и тренировки доступны всегда. Занимайтесь' +
                           ' когда вам удобно, ни от чего не завися.'}
                           src={'./assets/images/promo/feature2.svg'}/>
            </Col>
            <Col xs={12} md={6}>
              <FeatureCard title={'Статистика прогресса'}
                           text={'Вне зависимости от того, играете ли вы' +
                           ' или тренируете слова - статистика по' +
                           ' изученным' +
                           ' словам обновляется и всегда доступна в' +
                           ' настройках.'}
                           src={'./assets/images/promo/feature3.svg'}/>
            </Col>
            <Col xs={12} md={6}>
              <FeatureCard title={'Интервальные повторения'}
                           text={'В тренировке "Карточки" используется' +
                           ' метод интервальных повторений, который' +
                           ' признан одним из самых эффективных в' +
                           ' изучении новых языков.'}
                           src={'./assets/images/promo/feature4.svg'}/>
            </Col>
          </Row>
        </Container>

        <div id='games'/>
        <TitleH2 text='Игры'/>
        <TextAfterTitle text={'Английский можно учить интересно и ' +
        'по-настоящему наслаждаться процессом'}/>

        <div className={css.wrapper_game}>

          <GameCard src={'./assets/images/promo/game_1.svg'} title={'English Puzzle'}
                    text={'Формирует навыки обратного перевода и написания английских слов.'}/>
          <GameCard src={'./assets/images/promo/game_2.svg'} title={'SpeakIt'}
                    text={'Помогает комплексно тренировать навык письма' +
                    ' конструируя фразы.'}/>
          <GameCard src={'./assets/images/promo/game_5.svg'} title={'Аудиовызов'}
                    text={'Улучшает восприятие английской речи на слух. '}/>
        </div>
        <ImgFullWidth src={'./assets/images/promo/full_width.svg'} alt={'man on the table working with' +
        ' notebook'}/>
        <div className={css.wrapper_game}>
          <GameCard src={'./assets/images/promo/game_4.svg'} title={'Спринт'}
                    text={'Учит быстро переводить с английского на ваш родной язык. Для этой тренировки используются слова из вашего словаря.'}/>

          <GameCard src={'./assets/images/promo/game_3.svg'} title={'Саванна'}
                    text={'Оттачивает понимание английской речи и быстрого перевода слов, помогает не забыть выученные слова. '}/>

          <GameCard src={'./assets/images/promo/game_6.svg'} title={'Мемори'}
                    text={'Помогает выучить значение слов и учит лучше выражать свои мысли на английском.'}/>
        </div>

        <div id='method'/>
        <TitleH2 text='Метод интервальных повторений'/>
        <TextAfterTitle text={' Метод интервальных повторений поможет' +
        ' надолго запомнить новый ' +
        'материал. Особенность метода заключается в том, что информацию, ' +
        ' которую мы запоминаем, необходимо со временем повторять, но ни' +
        ' каждый день, ни через год, а через определенные,' +
        ' увеличивающиеся со временем интервалы.'}/>

        <ImgFullWidth src={'./assets/images/promo/graph.svg'} alt={'green graph waved'}/>

        <TextAfterTitle
          text={' Наше программное' +
          ' обеспечение на основе метода интервального повторения все' +
          ' сделает за вас. Вам лишь необходимо регулярно тренироваться.' +
          ' При необходимости длительность интервалов можно изменить в настройках.'}/>

        <IntervalInfo/>

        <Study/>

      </div>

      <Footer/>

    </div>
  );
}


