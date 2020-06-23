import React from 'react';
import Header from './Header';
import { ThemeProvider } from 'styled-components';
import * as theme from './config/theme';
import css from './Promo.module.css';
import HugeTitle from './HugeTitle';

export default function Promo () {
  return (
    <ThemeProvider theme={theme}>
      <div className={css.promo_bg}>
        <Header/>
        <HugeTitle/>
      </div>
    </ThemeProvider>
  );
}
