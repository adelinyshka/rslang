import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeProvider } from 'styled-components';
import * as theme from './config/theme';
import css from './Promo.module.css';

import FeatureCard from './3_feature/FeatureCard';
import Footer from './5_intevals/Footer/Footer';
import GameCard from './4_game/GameCard/GameCard';
import Header from './1_main/Header';
import IntervalInfo from './5_intevals/IntervalInfo/IntervalInfo';
import ImgFullWidth from './custom_components/ImgFullWidth';
import MainPageImg from './1_main/MainPageImg';
import MainPageText from './1_main/MainPageText';
import Study from './5_intevals/Study/Study';
import TitleHuge from './1_main/TitleHuge';
import TitleH2 from './custom_components/Title_h2';
import TextAfterTitle from './custom_components/Text_after_title';
import VideoBlock from './2_video';

import full_width from './assets/images/full_width.svg';
import graph from './assets/images/graph.svg';
import img_main_page from './assets/images/img_main_page.svg';
import feature1 from './assets/images/feature1.svg';
import feature2 from './assets/images/feature2.svg';
import feature3 from './assets/images/feature3.svg';
import feature4 from './assets/images/feature4.svg';
import game1 from './assets/images/game_1.svg';
import game2 from './assets/images/game_2.svg';
import game5 from './assets/images/game_3.svg';
import game4 from './assets/images/game_4.svg';
import game3 from './assets/images/game_5.svg';
import game6 from './assets/images/game_6.svg';

export default function Promo () {
  return (
    <ThemeProvider theme={theme}>
      <div className={css.promo_body}>

        <div className={css.promo_bg}>

          <Header/>
          <div className={css.promo_alignment}>
            <div>
              <TitleHuge text='Выучить английский - легко'/>
              <MainPageText
                text='Уникальное приложение для изучения английского. Увлекательные игры для тренировки слов и метод интервального повторения для запоминания слов навсегда.'/>
            </div>
            <MainPageImg src={img_main_page} alt={'big colored pic'}/>
          </div>

          <VideoBlock/>

          <TitleH2 text='Особенности'/>
          <TextAfterTitle text={'Что полезного вы найдете в нашем' +
          ' приложении для себя и своей семьи'}/>
          <Container fluid>
            <Row>
              <Col xs={12} md={6}>
                <FeatureCard title={'Игры'}
                             text={'Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.'}
                             src={feature1}/>
              </Col>
              <Col xs={12} md={6}>
                <FeatureCard className={'top_pad'}
                             title={'Онлайн доступ'}
                             text={'Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.'}
                             src={feature2}/>
              </Col>
              <Col xs={12} md={6}>
                <FeatureCard title={'Статистика прогресса'}
                             text={'Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.'}
                             src={feature3}/>
              </Col>
              <Col xs={12} md={6}>
                <FeatureCard title={'Интервальное повторение'}
                             text={'Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.'}
                             src={feature4}/>
              </Col>
            </Row>
          </Container>


          <TitleH2 text='Игры'/>
          <TextAfterTitle text={'Английский можно учить интересно и ' +
          'по-настоящему наслаждаться процессом'}/>

          <div className={css.wrapper_game}>

            <GameCard src={game1} title={'English Puzzle'}
                      text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}/>
            <GameCard src={game2} title={'SpeakIt'} text={'Lorem ipsum' +
            ' dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}/>
            <GameCard src={game3} title={'Аудиовызов'} text={'Lorem ipsum' +
            ' dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}/>
          </div>
          <ImgFullWidth src={full_width} alt={'man on the table working with' +
          ' notebook'}/>
          <div className={css.wrapper_game}>
            <GameCard src={game4} title={'Спринт'} text={'Lorem ipsum' +
            ' dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}/>

            <GameCard src={game5} title={'Саванна'} text={'Lorem ipsum' +
            ' dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}/>

            <GameCard src={game6} title={'Мемори'} text={'Lorem ipsum' +
            ' dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}/>
          </div>


          <TitleH2 text='Метод интервальных повторений'/>
          <TextAfterTitle text={' Метод интервальных повторений поможет' +
          ' надолго запомнить новый ' +
          'материал. Особенность метода заключается в том, что информацию, ' +
          ' которую мы запоминаем, необходимо со временем повторять, но ни' +
          ' каждый день, ни через год, а через определенные,' +
          ' увеличивающиеся со временем интервалы.'}/>

          <ImgFullWidth src={graph} alt={'green graph waved'}/>

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
    </ThemeProvider>
  );
}


