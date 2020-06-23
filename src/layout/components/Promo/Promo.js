import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from './config/theme';
import css from './Promo.module.css';
import Header from './1_main/Header';
import HugeTitle from './1_main/HugeTitle';
import ImgFullWidth from './custom_components/ImgFullWidth';
import ImgMainPageStyled from './1_main/ImgMainPageStyled'
import TitleH2 from './custom_components/Title_h2';
import TextAfterTitle from './custom_components/Text_after_title';
import TextMainPage from './1_main/TextMainPage';
import Video from './2_video/Video';

import full_width from './assets/images/full_width.svg';
import graph from './assets/images/graph.svg';
import img_main_page from './assets/images/img_main_page.svg';

export default function Promo () {
  return (
    <ThemeProvider theme={theme}>
      <div className={css.promo_bg}>

        <Header/>
        <div className={css.promo_alignment}>
          <div>
            <HugeTitle text='Выучить английский - легко'/>
            <TextMainPage text='Уникальное приложение для изучения английского. 
            Интересные игры для тренировки слов и метод интервального
            повторения для запоминания слов навсегда' />
          </div>
          <ImgMainPageStyled src={img_main_page} alt={'big colored pic'} />
        </div>

        <TitleH2 text='Что внутри?'/>
        <Video/>

        <TitleH2 text='Особенности'/>
        <TextAfterTitle text = {'Что полезного вы найдете в нашем' +
        ' приложении для себя и своей семьи'} />

        <TitleH2 text='Игры'/>
        <TextAfterTitle text = {'Английский можно учить интересно и ' +
        'по-настоящему наслаждаться процессом'} />
        <ImgFullWidth src={full_width} alt={'man on the table working with' +
        ' notebook'}/>

        <TitleH2 text='Техника интервального повторения'/>
        <TextAfterTitle text = {'Известно, что человек со временем забывает ' +
        'усвоенный материал, только если он не перемещен в долговременную' +
        ' память. Техника интервальных повторений поможет надолго запомнить новый ' +
        'материал'} />
        <ImgFullWidth src={graph} alt={'green graph waved'}/>



      </div>
    </ThemeProvider>
  );
}
