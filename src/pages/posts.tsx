import { useEffect } from 'react';
import { PostCard } from '../components';
import { Icon } from '@iconify/react';
import { Post } from '../types';
import setupOnScrollAnimations from '../scripts/utils/setupOnScrollAnimations';
import fetchAllPosts from '../scripts/fetchAllPosts';
import Link from 'next/link';

export async function getStaticProps() {
  const posts: Post[] = await fetchAllPosts();

  return {
    props: { posts },
  };
}

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {

  useEffect(() => {
    setupOnScrollAnimations();
  }, []);

  return (
    <div className="h-full">
      <div className="w-full">
        <Link href="/" className="flex flex-row w-fit items-center justify-start m-5 text-orange-3 select-none hover:cursor-pointer">
          <Icon icon="line-md:arrow-left-circle" width="24" height="24" />
          <p className="instant-enter-animation ml-2">
            Voltar
          </p>
        </Link>
      </div>

      <div className="flex flex-col items-center pb-16">
        <h1 className="mt-16 mb-10 w-posts-clamp max-w-screen-md text-orange-3 text-2xl md:text-2xl text-center">
          Conhecimento é o segredo de um futuro brilhante.
        </h1>
        <div className="sm:px-16 tc:px-0 w-posts-clamp flex flex-col tc:flex-row tc:justify-center flex-wrap">
          {
            posts.map((post: any) => {
              return (
                <Link href={`/post/${post.slug}`} key={post.slug}>
                  <PostCard keyword={post.json.keyword} title={post.json.title} className="instant-enter-animation mb-4 tc:m-2 tc:w-[380px]">
                    {post.json.description}
                  </PostCard>
                </Link>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}