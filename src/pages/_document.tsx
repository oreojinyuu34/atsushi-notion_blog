// Next.jsの特別なコンポーネントをインポートします
import { Html, Head, Main, NextScript } from "next/document";

// Documentコンポーネントをエクスポートします
export default function Document() {
  return (
    // HTMLドキュメント全体を定義
    <Html lang="ja">
      {/* 言語を日本語に設定 */}
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />{" "}
        //IE8以下にも対応したい場合
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />{" "}
        //Windows8/10のスタート画面のピン留め画像に対応したい場合
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        {/* <Main />はアプリケーションのメインコンテンツがレンダリングされる場所 */}
        <Main />

        {/* <NextScript />はNext.jsが動作するために必要なスクリプトを含みます */}
        <NextScript />
      </body>
    </Html>
  );
}
