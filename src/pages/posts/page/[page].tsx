import Head from "next/head";
import { getNumberOfPages, getPostsByPage } from "lib/notionAPI";
import SinglePost from "components/Post/SinglePost";
import { GetStaticPaths, GetStaticProps } from "next";
import Pagination from "components/Pagination";

// ページごとのパスを生成するためのgetStaticPaths関数
export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPage = await getNumberOfPages();

  // 各ページに対するパスを生成
  let params = [];
  for (let i = 1; i <= numberOfPage; i++) {
    params.push({ params: { page: i.toString() } });
  }
  return {
    paths: params,
    fallback: "blocking",
  };
};

// ページコンポーネントの静的プロパティを取得するためのgetStaticProps関数
export const getStaticProps: GetStaticProps = async (context) => {
  // 現在のページ番号を取得（デフォルトは1）
  const currentPage = context.params?.page?.toString() ?? "1";
  // 現在のページに対応する投稿を取得
  const postsByPage = await getPostsByPage(
    parseInt(currentPage.toString(), 10)
  );
  // 総ページ数を取得
  const numberOfPage = await getNumberOfPages();
  return {
    props: {
      postsByPage,
      numberOfPage,
    },
    revalidate: 60,
  };
};

// ブログページリストを表示するコンポーネント
const BlogPageList = ({ postsByPage, numberOfPage }: any) => {
  // console.log(allPosts);
  return (
    <div>
      <Head>
        <title>Atsushi-blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="style.css" href="/style.css/" />
      </Head>
      <main className="">
        <h1 className="title">ブログタイトル</h1>
        <div className="posts-grid">
          {postsByPage.map((post: any) => (
            <SinglePost
              key={post.id}
              icon={post.icon}
              title={post.title}
              description={post.description}
              date={post.date}
              tags={post.tags}
              slug={post.slug}
            />
          ))}
        </div>
        {/* ページネーションの表示 */}
        <Pagination numberOfPage={numberOfPage} />
      </main>
    </div>
  );
};

export default BlogPageList;