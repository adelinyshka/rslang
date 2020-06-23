import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './1_main/Header';
import * as theme from './config/theme';
import css from './Promo.module.css';
import HugeTitle from './1_main/HugeTitle';
import big_main_img from './assets/images/main_page_big.png';
import ImgMainPageStyled from './1_main/ImgMainPageStyled'
import Video from './2_video/Video';
import TitleH2 from './custom_components/Title_h2';

export default function Promo () {
  return (
    <ThemeProvider theme={theme}>
      <div className={css.promo_bg}>

        <Header/>
        <div className={css.promo_alignment}>
          <HugeTitle text='Выучить английский - легко'/>
          <ImgMainPageStyled src={big_main_img} alt={'big colored pic'} />
        </div>

        <TitleH2 text='Что внутри?'/>
        <Video/>

        <TitleH2 text='Особенности'/>

      </div>
    </ThemeProvider>
  );
}
