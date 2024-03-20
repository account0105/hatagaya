import "./globals.css";
import Head from 'next/head';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Shippori_Mincho } from "next/font/google";

const ShipporiMincho = Shippori_Mincho({weight:"400",subsets:["latin"]})
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// const theme = createTheme({
//   // カスタムテーマ設定をここに追加
// });


export default function RootLayout({ children }) {
  return (
    <html lang="ja">
        <Head>
        <style>
        </style>
      </Head>
      <body>{children}</body>
    </html>
  );
}

// export default function Layout({ children }) {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       {children}
//     </ThemeProvider>
//   );
// }テーマプロバイダつかう。
