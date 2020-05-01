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
    white: '#FFFFFE',
    blue: '#00DDEB',
    yellow: '#FFDF6F',
    text: '#00214D',
    saturday: '#23BCDD',
  },
};

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const token = store.getState().login.token;
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ...ctx, token });
    }
    return { token, pageProps };
  }

  render() {
    const { Component, pageProps, token } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} token={token} />
        </ThemeProvider>
      </Provider>
    );
  }
}
