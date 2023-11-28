import Link from "next/link";
import React from "react";
import styles from "../../src/styles/Home.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerlogo}>
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
        <div className={styles.footerNav}>
          <Link href="/">(仮)作成者情報ページ</Link>
          <Link href="/">(仮)お問い合わせページ</Link>
          <Link href="/">(仮)プライバシーポリシーページ</Link>
        </div>
        <div className={styles.footerSocial}>
          <a href="/" target="_blank" rel="noopener noreferrer">
            SNSリンク予定（別サイトへ）
          </a>
        </div>
      </div>
      <div className={styles.footerCopy}>&copy;atsushi</div>
    </footer>
  );
};

export default Footer;
