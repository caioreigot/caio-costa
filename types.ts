export interface PostJson {
  keyword: string;
  title: string;
  date: string;
  description: string;
  backgroundImageUrl: string;
  content: string[];
}

export interface Post {
  slug: string,
  json: PostJson
}