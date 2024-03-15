"use client";
import Header from "./components/header/desktopHeader/Header";
import { Shippori_Mincho } from "next/font/google";
import BasicSlider from "./components/commitment/SlideShow";
import MenuSlider from "./components/menu_slider/MenuSlider";
import Section from "./components/section/Section.jsx"

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <BasicSlider />
        <MenuSlider />
        <Section/>
      </div>
    </>
  );
}
