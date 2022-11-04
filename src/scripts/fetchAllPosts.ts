import { Post as PrismaPost } from '@prisma/client';
import { Post as FormattedPost, PostJson } from '../types';
import { prisma } from '../../prisma/prismaClient';

export default async function fetchAllPosts(): Promise<FormattedPost[]> {
  const posts = await prisma.post.findMany();

  const postsFormattedResponse: FormattedPost[] = posts.map((post: PrismaPost) => {
    // Formatando o json armazenado no banco para um PostJson
    const postParsedToJson: PostJson = JSON.parse(post.json);

    return {
      slug: post.slug,
      json: postParsedToJson
    };
  });

  return postsFormattedResponse;
}