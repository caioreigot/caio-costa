import { Fragment, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Post } from '../../types';
import Link from 'next/link';
import Head from 'next/head';
import getKeywordColors from '../../scripts/utils/getKeywordColors';
import setupOnScrollAnimations from '../../scripts/utils/setupOnScrollAnimations';
import renderPostContent from '../../scripts/renderPostContent';
import renderSummary from '../../scripts/renderSummary';
import fetchAllPosts from '../../scripts/fetchAllPosts';
import fetchSinglePost from '../../scripts/fetchSinglePost';

export async function getStaticPaths() {
  const posts = await fetchAllPosts();

  const paths = posts.map((post) => ({
    params: { id: post.slug },
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }: any) {
  const post = await fetchSinglePost(params.id);

  return {
    props: { post }
  };
}

interface PostProps {
  post: Post
}

export default function PostView({ post }: PostProps) {
  const [borderTopColor, textColor, backgroundColor] = getKeywordColors(post?.json.keyword);

  const trackScrollPercentage = (element: HTMLElement) => {
    window.onscroll = () => {
      const body = document.body;
      const documentElement = document.documentElement;

      const bodyHeight = Math.max(
        body.scrollHeight, documentElement.scrollHeight,
        body.offsetHeight, documentElement.offsetHeight,
        body.clientHeight, documentElement.clientHeight
      );

      const windowHeight = window.innerHeight || (documentElement || body).clientHeight;
      const trackLength = bodyHeight - windowHeight;
      const scrolledPercentage = Math.floor(window.scrollY / trackLength * 100);

      element.style.width = `${scrolledPercentage}%`;
    };
  };

  const setBackgroundImage = (e: HTMLElement) => {
    e.style.backgroundImage = `url('${post.json.backgroundImageUrl}')`;
  };

  useEffect(() => {
    setupOnScrollAnimations();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>{post.json.title}</title>
        <meta name="description" content={post.json.description} />
        <meta property="og:title" content={post.json.title} />
        <meta property="og:description" content={post.json.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://caio-costa.vercel.app/post/${post.slug}`} />
      </Head>

      {/* Barra superior que indica o quanto o usuário desceu a página */}
      <div ref={el => el && trackScrollPercentage(el)} className="sticky top-0 w-0 h-2 z-50 lg:h-1 bg-gradient-to-r from-orange-2 to-orange-3"></div>

      <div className="w-full">
        <Link href="/posts" className="flex flex-row w-fit items-center justify-start m-5 mb-6 text-orange-3 select-none hover:cursor-pointer">
          <Icon icon="line-md:arrow-left-circle" width="24" height="24" />
          <p className="instant-enter-animation ml-2">
            Voltar
          </p>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center">
        <main className="instant-enter-animation instant-anim w-full sm:w-post-view-clamp p-2 md:p-0 flex flex-row">
          {/* Bloco da esquerda (a postagem em si) */}
          <main className={`p-6 mb-4 w-full md:w-3/4 border border-blue-1 border-t-2 ${borderTopColor}`}>
            <h2 className={`mt-4 mb-12 ${textColor} text-xl tracking-widest`}>
              {post.json.keyword}
            </h2>
            <p className="mb-2 text-lg text-white brightness-95">
              {post.json.date}
            </p>
            <h1 className="mb-14 text-4xl sm:text-5xl font-bold tracking-tight text-white">
              {post.json.title}
            </h1>
            <div ref={e => e && setBackgroundImage(e)} className="mb-14 md:mb-0 w-full h-80 bg-center bg-cover bg-no-repeat"></div>
            <div className="md:hidden">
              <h3 className="mb-2 text-xl text-white font-semibold">
                Sumário:
              </h3>
              {renderSummary(post.json.content, textColor, 'text-lg')}
              <div className={`my-6 w-full ${backgroundColor} h-px`}></div>
            </div>
            {renderPostContent(post.json.content, textColor)}
          </main>

          {/* Bloco da direita (sumário) */}
          <div className="hidden md:block w-1/4 ml-5">
            <div className="sticky top-6">
              <p className="mb-4 md:text-2xl text-white font-semibold">
                Sumário:
              </p>
              {renderSummary(post.json.content, textColor, 'text-base')}
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}