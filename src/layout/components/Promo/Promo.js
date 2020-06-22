import React from 'react';
import Header from './Header';
import { ThemeProvider } from 'styled-components';
import * as theme from './config/theme';

export default function Promo () {
  return (
    <ThemeProvider theme = {theme}>
      <div>
        <Header/>
      </div>
    </ThemeProvider>
  );
}