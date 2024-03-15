import Image from "next/image";
import React from "react";
import headerStyle from "./Header.module.css";
import Link from "next/link";
import { useMedia } from "use-media";

const Header = () => {
  const isWide = useMedia("(min-width: 530px)");

  return (
    <div className={headerStyle.header}>
      {isWide ? (
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
                  height={55}
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
      ) : (
        <div>
          <Image
            src="/image/mobile-logo-removebg.png"
            width={36}
            height={36}
            alt="logo"
            href=""
          ></Image>
          <MobileNav></MobileNav>
        </div>
      )}
    </div>
  );
};

export default Header;
