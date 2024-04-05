import React from "react";
import Image from "next/image";
import styles from "./Section.module.css";
import Link from "next/link";

const Section = () => {
    return (
        <div className={styles.sectionWrap}>
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
                <p className={styles.resvTitle}>ご予約はこちらから</p>
                <div className={styles.link}>
                    <Link href="https://tabelog.com/tokyo/A1318/A131807/13213734/">
                        食べログ
                    </Link>
                    <span className={styles.span}> </span>
                    <Link href="https://www.hotpepper.jp/strJ001193236/">
                        ホットペッパーグルメ
                    </Link>
                    <span className={styles.span}> </span>
                    <Link href="https://restaurant.ikyu.com/123506">一休</Link>
                </div>
            </div>
        </div>
    );
};

export default Section;
