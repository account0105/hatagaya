"use client";
import React, { useState } from "react";
import styles from "./MenuSlider.module.css";
import Image from "next/image";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Link from "next/link";

const images = [
    {
        imgUrl: "/image/menuslide/menu_slide01.jpg",
        name: "単品",
    },
    {
        imgUrl: "/image/menuslide/menu_slide02.jpg",
        name: "コース",
    },
    {
        imgUrl: "/image/menuslide/menu_slide03.jpg",
        name: "ランチ",
    },
    {
        imgUrl: "/image/menuslide/menu_slide04.png",
        name: "ドリンク",
    },
    {
        imgUrl: "/image/menuslide/menu_slide05.jpg",
        name: "テイクアウト",
    },
];

export default function MenuSlider() {
    const slideSettings = {
        0: {
            slidesPerView: 1.6,
            spaceBetween: 12,
        },
        600: {
            slidesPerView: 3.2,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 3.4,
            spaceBetween: 22,
        },
    };

    return (
        <div className={styles.MenuSliderParent}>
            <div className={styles.MenuSlideWrapper}>
                <h1 className={styles.caption}>メニュー</h1>
                <Swiper
                    modules={[Navigation, Pagination, FreeMode]}
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
                    {images.map((src, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                style={{
                                    boxShadow:
                                        "0px 0px 10px 0px rgba(0, 0, 0, 0.47)",
                                    borderRadius:"3px"
                                }}
                            >
                                <Link
                                    href={{
                                        pathname: `/menu`,
                                        query: { name: src.name },
                                    }}
                                >
                                    <Image
                                        src={src.imgUrl}
                                        width={500}
                                        height={280}
                                        alt="Slider Image"
                                        className={styles.slideImage}
                                    />
                                </Link>
                                <div className={styles.menu_title}>
                                    <Link
                                        href={{
                                            pathname: `/menu`,
                                        }}
                                        className={styles.menu_title_link}
                                    >
                                        {src.name}
                                    </Link>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}
