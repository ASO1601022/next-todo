import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../stores/';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import restCSS from 'ress';

const GlobalStyle = createGlobalStyle`
  ${restCSS}
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap');
`;

const theme = {
  colors: {
    borderline: '#DADADA',
    main: '#FF5470',
    gray: '#888888',
    lime: '#00EBC7',
    primary: '#0070f3',
    blue: '#00DDEB',
    yellow: '#FFDF6F',
    text: '#00214D',
    saturday: '#23BCDD',
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}
