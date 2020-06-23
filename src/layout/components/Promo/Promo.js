import React from 'react';
import Header from './Header';
import { ThemeProvider } from 'styled-components';
import * as theme from './config/theme';
import css from './assets/css/Promo.module.css'

export default function Promo () {
  return (
    <ThemeProvider theme = {theme}>
      <div className={css.promo_bg}>
        <Header/>
      </div>
    </ThemeProvider>
  );
}
