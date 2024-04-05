import React from "react";
import Image from "next/image";
import styles from "./Section.module.css";
import Link from "next/link";
import { Box, Divider } from "@mui/material";

const Section = () => {
    return (
        <div className={styles.sectionWrap}>
            <div className={styles.sectionInnerWrap}></div>
            <section className={styles.sectionBox}>
                <Image
                    src="/image/section/section1.jpg"
                    width={100}
                    height={33}
                    alt="logo"
                    className={styles.image}
                ></Image>
                <div className={styles.textBox}>
                    <h2 className={styles.title}>団体様でのご利用</h2>
                    <p className={styles.text}>
                        広々としたお席もございますので、団体のお客様もごゆっくりおくつろぎいただけます
                    </p>
                </div>
            </section>
            <section className={styles.sectionBox}>
                <Image
                    src="/image/section/section2.jpg"
                    width={100}
                    height={33}
                    alt="logo"
                    className={styles.image}
                ></Image>
                <div className={styles.textBox}>
                    <h2 className={styles.title}>半個室</h2>
                    <p className={styles.text}>
                        半個室のご予約でプライベートなお席もご利用いただけます
                    </p>
                </div>
            </section>
            <section className={styles.sectionBox}>
                <Image
                    src="/image/section/section3.jpg"
                    width={100}
                    height={33}
                    alt="logo"
                    className={styles.image}
                ></Image>
                <div className={styles.textBox}>
                    <h2 className={styles.title}>お子様向けメニュー</h2>
                    <p className={styles.text}>
                        お子様ランチ（ディナーもあり）や、お子様用サイズのドリンクもご用意しております。
                    </p>
                </div>
            </section>

            <div className={styles.reservation}>
                <div className={styles.resvWrap}>
                    <p className={styles.resvTitle}>ご予約はこちらから</p>
                    <div className={styles.link}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                borderRadius: 2,
                                bgcolor: "#1d1d1d",
                                color: "white",
                                "& a": {
                                    mx: 2,
                                    my: 1,
                                },
                            }}
                        >
                            <Link href="https://tabelog.com/tokyo/A1318/A131807/13213734/">
                                食べログ
                            </Link>
                            <Divider
                                orientation="vertical"
                                variant="middle"
                                flexItem
                                color="white"
                            />
                            <Link href="https://www.hotpepper.jp/strJ001193236/">
                                ホットペッパーグルメ
                            </Link>
                            <Divider
                                orientation="vertical"
                                variant="middle"
                                flexItem
                                color="white"
                            />

                            <Link href="https://restaurant.ikyu.com/123506">
                                一休
                            </Link>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
