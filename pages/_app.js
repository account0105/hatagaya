import * as React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import App from 'next/app';

const theme = createTheme({
  // カスタムテーマ設定をここに追加
});

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}