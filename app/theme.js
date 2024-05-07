"use client";
import { createTheme } from "@mui/material/styles";
import { Shippori_Mincho } from "next/font/google";

// Shippori Mincho フォントの設定
const shipporiMincho = Shippori_Mincho({
    family: "Shippori Mincho",
    weight: ["400", "700"], // 必要なフォントウェイトを指定
    subsets: ["latin"],
    display: "swap",
});

// MUI テーマの作成
const theme = createTheme({
    typography: {
        fontFamily: "Shippori Mincho, serif",
        fontWeightLight: 100,
        h1: {
            fontSize: "26px",
            "@media (min-width:600px)": {
                fontSize: "28px",
            },
        },
        h2: {
          fontSize: "22px",
          "@media (min-width:600px)": {
              fontSize: "24px",
          },
      },
        h3: {
            fontSize: "18px",
            "@media (min-width:600px)": {
                fontSize: "20px",
            },
        },
        p: {
            fontSize: "14px",
            "@media (min-width:600px)": {
                fontSize: "16px",
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default theme;
