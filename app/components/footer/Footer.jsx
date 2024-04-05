import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerBox}>
                <div className={styles.imageBox}>
                    <Link href="/">
                        <Image
                            src="/image/logo-removebg.png"
                            alt="footer-image"
                            width={100}
                            height={100}
                            className={styles.image}
                        />
                    </Link>
                </div>
                <div>
                    <p className={styles.text}>〒151 - 0072</p>
                    <p className={styles.text}>
                        東京都渋谷区幡ヶ谷 １-２-８
                        スカイマンション幡ヶ谷林ビル １F
                    </p>
                    <p className={styles.text}>TEL 03 - 5333 - 2410</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
