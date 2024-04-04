import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerBox}>
                <div className={styles.imageBox}>
                    <Image
                        src="/image/logo-removebg.png"
                        alt="footer-image"
                        width={100}
                        height={100}
                        className={styles.image}
                    />
                </div>
                <div>
                    <p className={styles.text}>〒151-0072</p>
                    <p className={styles.text}>
                        東京都渋谷区幡ヶ谷1丁目2-8
                        スカイマンション幡ヶ谷林ビル1F
                    </p>
                    <p className={styles.text}>TEL 050-5594-7310</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
