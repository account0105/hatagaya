import Image from "next/image";
import React from "react";
import headerStyle from "./Header.module.css";
import Link from "next/link";

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
                src="/image/icon.png"
                width={120}
                height={60}
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
