"use client";
import Image from "next/image";
// オプションをインポートする
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./SlideShow.module.css";
// publicフォルダの画像
const images = [
    "/image/slide_show/slide1.jpg",
    "/image/slide_show/slide2.jpg",
    "/image/slide_show/slide3.jpg",
    "/image/slide_show/slide4.jpg",
    "/image/slide_show/slide5.jpg",
];

export default function SlideShow() {
    // ブレイクポイントに基づいて1つのスライドに表示するスライドの数を指定
    const slideSettings = {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    };

    return (
        <div className={styles.slideWraper}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                breakpoints={slideSettings} // slidesPerViewを指定
                slidesPerView={"auto"} // ハイドレーションエラー対策
                centeredSlides={true} // スライドを中央に配置
                loop={true} // スライドをループさせる
                speed={1000} // スライドが切り替わる時の速度
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }} // スライド表示時間
                navigation={false} // ナビゲーション（左右の矢印）
                pagination={false} // ページネーション, クリックで対象のスライドに切り替わる
                className={styles.slideWrapper}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={src}
                            width={1000}
                            height={900}
                            alt="Slider Image"
                            className={styles.slideImage}
                            quality={100}
                            loading="eager"
                        />
                        <Image
                            src="/image/logo-removebg.png"
                            width={1000}
                            height={55}
                            alt="logo"
                            href=""
                            className={styles.logo}
                            quality={100}
                            loading="eager"
                        ></Image>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
