import { HomePost } from "@/components/HomePost";

import { Heading, PostsWrapper, Btn } from "./styles";

type Post = {
  id: string;
  slug: string;
  title: string;
};

interface LatestPostsProps {
  posts: Post[];
}

export function LatestPosts({ posts }: LatestPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <>
      <Heading>Latest posts</Heading>

      <PostsWrapper>
        {posts.map(({ id, slug, title }) => (
          <HomePost key={id} link={`/blog/${slug}`} title={title} />
        ))}

        <Btn href="/blog">See more</Btn>
      </PostsWrapper>
    </>
  );
}
