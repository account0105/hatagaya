import React from "react";
import styles from "./MenuSlider.module.css";
import Image from "next/image";


import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/free-mode';
import Link from "next/link";

const images = [
  { imgUrl: "/image/menuslide/menu_slide01.jpg", path: "single", name: "単品" },
  {
    imgUrl: "/image/menuslide/menu_slide02.jpg",
    path: "Course",
    name: "コース",
  },
  {
    imgUrl: "/image/menuslide/menu_slide03.jpg",
    path: "lunch",
    name: "ランチ",
  },
  {
    imgUrl: "/image/menuslide/menu_slide04.png",
    path: "drink",
    name: "ドリンク",
  },
  {
    imgUrl: "/image/menuslide/menu_slide05.jpg",
    path: "takeOut",
    name: "テイクアウト",
  },
];

export default function MenuSlider() {
  // ブレイクポイントに基づいて1つのスライドに表示するスライドの数を指定
  const slideSettings = {
    0: {
      slidesPerView: 3.2,
      spaceBetween: 10
    },
    780:{
      spaceBetween:15
    },
    1024: {
      slidesPerView: 4.2,
      spaceBetween: 22,
    },
  };

  return (
    <div>
      <div className={styles.MenuSlideWrapper}>
        <h4 className={styles.caption}>メニュー</h4>
        <Swiper
          modules={[Navigation, Pagination,FreeMode]}
          breakpoints={slideSettings}
          slidesPerView={"auto"} 
          centeredSlides={true} 
          loop={false}
          freeMode={true}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          centeredSlidesBounds={true}
          className={styles.slideWrapper}
        >
          {images.map((src, index) => (

            <SwiperSlide key={index}>
              <Link href={src.path}>
                <Image
                  src={src.imgUrl}
                  width={1920}
                  height={900}
                  alt="Slider Image"
                  className={styles.slideImage}
                />
              </Link>
              <div className={styles.menu_title}>
                <Link href={src.path} className={styles.menu_title_link}>
                  {src.name}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
