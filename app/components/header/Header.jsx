import Image from "next/image";
import React from "react";
import headerStyle from "./Header.module.css";
import Link from "next/link";
import { Shippori_Mincho } from "next/font/google";

const shipporiMincho = Shippori_Mincho({
    weight: "700",
    subsets: ["latin"],
});

const Header = () => {
    return (
        <div className={headerStyle.header}>
            <nav>
                <ul>
                    <li>
                        <Link href="/" className={headerStyle.navList}>
                            メニュー
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className={headerStyle.navList}>
                            お知らせ
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Image
                                src="/image/logo-removebg.png"
                                width={120}
                                height={50}
                                alt="logo"
                                href=""
                            ></Image>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className={headerStyle.navList}>
                            コミュニティ
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className={headerStyle.navList}>
                            店舗情報
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
