import React, { useState } from "react";
import Link from "next/link";
import styles from "../../src/styles/Home.module.css";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="メイン画像"
              width={80} // 画像の幅
              height={80} // 画像の高さ
              className={styles.logoimg}
            />
            <p className={styles.logotext}>atushi-blog</p>
          </Link>
        </div>
        {/* ハンバーガーメニューアイコン */}
        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* ナビゲーションリンク */}
        <ul className={isOpen ? styles.navListOpen : styles.navList}>
          <li className={isOpen ? styles.navListOpen : styles.navList}>
            <a
              href="https://oreojinyuu34.github.io/LP-NOTION/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notionで作ったブログのLP
            </a>
          </li>
          <li className={isOpen ? styles.navListOpen : styles.navList}>
            <Link href="/">リンクページ2</Link>
          </li>
          <li className={isOpen ? styles.navListOpen : styles.navList}>
            <Link href="/">リンクページ3</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
