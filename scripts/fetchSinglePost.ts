import { Post } from '@prisma/client';
import { prisma } from '../prisma/prismaClient';

export default async function fetchSinglePost(postSlug: string): Promise<Post | null> {
  const post = await prisma.post.findUnique({
    where: {
      slug: postSlug
    }
  });

  // Formatando o json armazenado no banco para um PostJson
  const postParsedToJson: Post | null = post 
    ? { slug: post.slug, json: JSON.parse(post.json) } as Post
    : null;

  return postParsedToJson;
}